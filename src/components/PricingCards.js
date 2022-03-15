import React from "react";
import { Link } from "react-router-dom";
import "./PricingCardsStyles.css";

const PricingCards = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>Economy</h3>
          <span className="bar"></span>
          <p className="price">£20</p>
          <p>1 hr</p>
          <p>Views</p>
          <p>Featured</p>
          <p>Meal plan included</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>

        <div className="card">
          <h3>Premier</h3>
          <span className="bar"></span>
          <p className="price">£30</p>
          <p>1 hr</p>
          <p>Access to private swimming pool</p>
          <p> Featured</p>
          <p>Private Quarters</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>

        <div className="card">
          <h3>Intense</h3>
          <span className="bar"></span>
          <p className="price">£40</p>
          <p>1 hr</p>
          <p>Access to private swimming pool</p>
          <p>MealSupreme lunch vouchers</p>
          <p>One-on-one personal coaching</p>
          <Link to="/contact" className="btn">
            Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
