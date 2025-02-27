import React from "react";
/**
 * Logo Component
 * Renders a custom SVG logo with a circle-based design and text.
 *
 * Description:
 * - The logo includes two concentric circles and a decorative red arc.
 * - Displays the text "Logoipsum" in bold red next to the circles.
 * - Designed to be scalable and responsive using SVG.
 *
 * Props:
 * None
 *
 * Dependencies:
 * None
 *
 * @returns {JSX.Element} The Logo component.
 */

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg" // Defines the XML namespace for SVG
    viewBox="0 0 300 100" // Sets the viewbox for scaling
    width="202" // Specifies the width of the SVG
    height="40px" // Specifies the height of the SVG
    fill="none" // No default fill for the SVG container
  >
    {/* Outer Circle */}
    <circle
      cx="40" // X-coordinate of the circle's center
      cy="50" // Y-coordinate of the circle's center
      r="30" // Radius of the circle
      fill="red" // Fill color of the outer circle
    />

    {/* Inner Circle */}
    <circle
      cx="40" // X-coordinate of the circle's center
      cy="50" // Y-coordinate of the circle's center
      r="15" // Radius of the inner circle
      fill="white" // Fill color of the inner circle
    />

    {/* Decorative Arc */}
    <path
      d="M40 20 A30 30 0 0 1 70 50 L55 50 A15 15 0 0 0 40 35 Z" // Path definition for the arc
      fill="red" // Fill color for the arc
    />

    {/* Logo Text */}
    <text
      x="85" // X-coordinate for the text
      y="65" // Y-coordinate for the text
      font-family="Arial, sans-serif" // Font family for the text
      font-size="50" // Font size
      fill="red" // Fill color for the text
      font-weight="bold" // Bold font weight
    >
      Logoipsum
    </text>
  </svg>
);

export default Logo;
