import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const LiquidCursor = () => {
  const cursorRef = useRef(null);
  const rippleLayerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const rippleLayer = rippleLayerRef.current;

    if (!cursor || !rippleLayer) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    let previousX = 0;
    let previousY = 0;
    let lastRippleTime = 0;
    let hasMoved = false;
    let animationFrame = null;

    // Create a ripple at the pointer position.
    const createRipple = (x, y, isClick = false) => {
      const ripple = document.createElement("span");

      ripple.className = isClick
        ? "liquid-ripple liquid-ripple-click"
        : "liquid-ripple";

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      rippleLayer.appendChild(ripple);

      ripple.addEventListener(
        "animationend",
        () => ripple.remove(),
        { once: true }
      );

      // Safety cleanup.
      window.setTimeout(() => ripple.remove(), 1000);
    };

    // Follow the mouse and create green ripples.
    const moveCursor = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      const dx = x - previousX;
      const dy = y - previousY;
      const distance = Math.hypot(dx, dy);

      const stretch = Math.min(distance / 100, 0.45);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;

        cursor.style.transform = `
          translate(-50%, -50%)
          rotate(${angle}deg)
          scale(${1 + stretch}, ${1 - stretch * 0.5})
        `;

        cursor.classList.add("liquid-cursor-visible");
      });

      // Create ripples at most once every 120ms.
      const now = performance.now();

      if (distance > 3 && now - lastRippleTime >= 120) {
        createRipple(x, y);
        lastRippleTime = now;
      }

      previousX = x;
      previousY = y;
      hasMoved = true;
    };

    const hideCursor = () => {
      cursor.classList.remove("liquid-cursor-visible");
    };

    const showCursor = () => {
      if (hasMoved) {
        cursor.classList.add("liquid-cursor-visible");
      }
    };

    // Click: enlarge the cursor and create a yellow ripple.
    const pressCursor = (event) => {
      cursor.classList.add("liquid-cursor-pressed");
      createRipple(event.clientX, event.clientY, true);
    };

    const releaseCursor = () => {
      cursor.classList.remove("liquid-cursor-pressed");
    };

    window.addEventListener("mousemove", moveCursor, {
      passive: true,
    });
    window.addEventListener("mousedown", pressCursor);
    window.addEventListener("mouseup", releaseCursor);
    window.addEventListener("blur", hideCursor);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", pressCursor);
      window.removeEventListener("mouseup", releaseCursor);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      rippleLayer.replaceChildren();
    };
  }, []);

  return createPortal(
    <>
      <style>{`
        @media (pointer: fine) {
          html,
          body,
          #root,
          #root * {
            cursor: none !important;
          }

          .liquid-cursor {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 2147483647;

            width: 42px;
            height: 42px;
            box-sizing: border-box;

            border: 1.5px solid rgba(110, 231, 183, 0.95);
            border-radius: 50%;

            background:
              radial-gradient(
                circle at 28% 25%,
                rgba(255, 255, 255, 0.45),
                transparent 32%
              ),
              radial-gradient(
                circle at 70% 75%,
                rgba(250, 204, 21, 0.16),
                transparent 42%
              ),
              rgba(16, 185, 129, 0.16);

            box-shadow:
              0 0 12px rgba(52, 211, 153, 0.35),
              0 0 30px rgba(16, 185, 129, 0.2),
              inset 0 0 12px rgba(236, 253, 245, 0.2);

            backdrop-filter: blur(10px) saturate(180%);
            -webkit-backdrop-filter: blur(10px) saturate(180%);

            pointer-events: none;
            opacity: 0;
            visibility: hidden;
            will-change: left, top, transform;

            transition:
              opacity 0.18s ease,
              visibility 0.18s ease,
              width 0.22s ease,
              height 0.22s ease,
              border-radius 0.22s ease,
              background 0.22s ease,
              border-color 0.22s ease,
              box-shadow 0.22s ease;
          }

          .liquid-cursor-visible {
            opacity: 1;
            visibility: visible;
          }

          .liquid-cursor-pressed {
            width: 54px;
            height: 54px;
            border-radius: 42% 58% 55% 45%;

            border-color: rgba(253, 224, 71, 1);
            background: rgba(250, 204, 21, 0.22);

            box-shadow:
              0 0 16px rgba(250, 204, 21, 0.4),
              0 0 36px rgba(250, 204, 21, 0.22),
              inset 0 0 14px rgba(253, 224, 71, 0.2);
          }

          /* Ripple layer stays below the cursor. */
          .liquid-ripple-layer {
            position: fixed;
            inset: 0;
            z-index: 2147483646;
            overflow: hidden;
            pointer-events: none;
          }

          /* Green ripple while moving. */
          .liquid-ripple {
            position: fixed;
            width: 12px;
            height: 12px;
            box-sizing: border-box;
            margin: -6px 0 0 -6px;

            border: 1px solid rgba(110, 231, 183, 0.8);
            border-radius: 50%;
            pointer-events: none;

            animation: liquidWaterRipple 0.75s ease-out forwards;
          }

          /* Larger yellow ripple on click. */
          .liquid-ripple-click {
            width: 22px;
            height: 22px;
            margin: -11px 0 0 -11px;

            border: 1.5px solid rgba(253, 224, 71, 0.95);
            box-shadow: 0 0 12px rgba(250, 204, 21, 0.3);

            animation-duration: 0.9s;
          }

          @keyframes liquidWaterRipple {
            0% {
              opacity: 0.85;
              transform: scale(0.3);
            }

            60% {
              opacity: 0.45;
            }

            100% {
              opacity: 0;
              transform: scale(5);
            }
          }
        }

        @media (pointer: coarse) {
          .liquid-cursor,
          .liquid-ripple-layer {
            display: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .liquid-cursor {
            transition: none;
          }

          .liquid-ripple {
            animation-duration: 0.15s;
          }
        }
      `}</style>

      <div
        ref={rippleLayerRef}
        className="liquid-ripple-layer"
        aria-hidden="true"
      />

      <div
        ref={cursorRef}
        className="liquid-cursor"
        aria-hidden="true"
      />
    </>,
    document.body
  );
};

export default LiquidCursor;
