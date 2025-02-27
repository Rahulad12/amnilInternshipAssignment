import React from "react";
import "../Customecss/Card.css";

/**
 * Card Component
 * This component displays a card with information about a country's office location.
 * Props:
 * - `country` (string): The name of the country.
 * - `flag` (string): The URL of the country's flag image.
 * - `office` (string): The office name or description.
 * - `address` (string): The office's address.
 *
 * Usage:
 * <Card
 *   country="Nepal"
 *   flag="https://linktoflagimage.com/nepal.png"
 *   office="Head Office"
 *   address="Kathmandu, Nepal"
 * />
 */

const Card = ({ country, flag, office, address }) => {
  return (
    <div className="card">
      {/* Display the country's flag */}
      <img src={flag} alt={`${country} Flag`} className="flag" />

      {/* Display the country's name */}
      <h2>{country}</h2>

      {/* Display the office name or description */}
      <p>{office}</p>

      {/* Display the office's address */}
      <p className="address">{address}</p>
    </div>
  );
};

export default Card;
