"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useCallback, useState } from "react";

type HoverZoomSurfaceProps = HTMLMotionProps<"div"> & {
  zoomScale?: number;
};

/** Scales up smoothly when the pointer enters the surface. */
export function HoverZoomSurface({
  children,
  className,
  zoomScale = 1.04,
  ...props
}: HoverZoomSurfaceProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduceMotion ? undefined : { scale: zoomScale }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      style={{ transformOrigin: "center center" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type ClickZoomSurfaceProps = HTMLMotionProps<"div"> & {
  zoomScale?: number;
  /** Skip zoom when clicking interactive form controls */
  ignoreFormControls?: boolean;
};

export function ClickZoomSurface({
  children,
  className,
  zoomScale = 1.06,
  ignoreFormControls = false,
  onClick,
  ...props
}: ClickZoomSurfaceProps) {
  const [zoomed, setZoomed] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (ignoreFormControls) {
        const target = e.target as HTMLElement;
        if (target.closest("input, textarea, button, label, a")) {
          onClick?.(e);
          return;
        }
      }
      setZoomed((z) => !z);
      onClick?.(e);
    },
    [ignoreFormControls, onClick]
  );

  return (
    <motion.div
      className={className}
      animate={{ scale: zoomed ? zoomScale : 1 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      onClick={handleClick}
      style={{ transformOrigin: "center center", cursor: "pointer" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type ClickZoomButtonProps = HTMLMotionProps<"button"> & {
  zoomScale?: number;
};

export function ClickZoomButton({
  children,
  className,
  zoomScale = 1.08,
  onClick,
  ...props
}: ClickZoomButtonProps) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <motion.button
      type="button"
      className={className}
      animate={{ scale: zoomed ? zoomScale : 1 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      onClick={(e) => {
        setZoomed((z) => !z);
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
