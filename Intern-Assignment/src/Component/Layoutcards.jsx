import React from "react";
import { Link } from "react-router-dom";
import "../Customecss/Layoutcard.css";
import Card from "./Card";
/**
 * Layoutcards Component
 * Renders a layout with multiple cards, each representing details of an office in a specific country.
 *
 * Props:
 * None
 *
 * Description:
 * - Includes a back button to navigate to the home page.
 * - Displays a title for the page.
 * - Uses a grid layout to arrange the cards.
 * - Cards include information such as the country's name, flag, office type, and address.
 *
 * Dependencies:
 * - `Link` from `react-router-dom` for navigation.
 * - `Card` component for rendering individual card details.
 *
 * @returns {JSX.Element} The Layoutcards component.
 */
const Layoutcards = () => {
  {
    /* Render the Layoutcards component  and not able to create a elipse gradient i did but i didn't get how to place it there so i make linear gradient */
  }
  return (
    <div className="layout-container">
      {/* Navigation Section */}
      <div className="back-button">
        {/* Link to navigate back to the home page */}
        <Link to="/">← Back</Link>
      </div>

      {/* Content Section */}
      <div className="layout-container-content">
        {/* Page Title */}
        <h1 className="title">Layout Cards</h1>

        {/* Card Layout */}
        <div className="cards">
          {/* Highlighted Card: Spans full width */}
          <div className="cards-top">
            <Card
              country="Singapore"
              flag="https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg"
              office="Head Office"
              address="XYZ Pvt. Ltd. Road to nowhere, 06-404, 500 Internal Error"
            />
          </div>

          {/* Grid of Secondary Cards */}
          <div className="cards-button">
            {/* Card for Hong Kong Office */}
            <Card
              country="Hong Kong"
              flag="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg"
              office="Branches"
              address="XYZ Pte. Ltd. The Infinite Loop Office, 404 Timeout Plaza"
            />

            {/* Card for USA Office */}
            <Card
              country="USA"
              flag="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              office="Branches"
              address="XYZ Inc. Nulltown, Buglandia, 500 0xDEADBEE"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layoutcards;
