import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [activeToggle, setActiveToggle] = useState(null);

  const handleToggle = (id) => {
    setActiveToggle(activeToggle === id ? null : id);
  };

  return (
    <footer className="apple-footer">
      {/* Legal text – unchanged, full content kept */}
      <div className="footer-legal">
        <div className="legal-container">
          <p>
            1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device.
            Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in
            for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase,
            or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching
            the description provided when estimate was made. Sales tax may be assessed on full value of a new device
            purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this
            information). Offer may not be available in all stores and may vary between in‑store and online trade‑in.
            Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse,
            cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from
            Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
          </p>

          <p>
            To access and use all Apple Card features and products available only to Apple Card users, you must add
            Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS.
            Apple Card is subject to credit approval, available only for qualifying applicants in the United States,
            and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
          </p>

          <p>
            Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA
            for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
          </p>

          <p>
            If you reside in the U.S. territories, please call Goldman Sachs at 877‑255‑5923 with questions about Apple Card.
          </p>

          <p>
            Learn more about how Apple Card applications are evaluated at
            <a href="#">support.apple.com/kb/HT209218</a>.
          </p>

          <p>
            A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV.
          </p>

          <p>
            Features are subject to change. Some features, applications, and services may not be available in all regions
            or all languages.
          </p>
        </div>
      </div>

      {/* Navigation columns – all your original content preserved */}
      <div className="footer-nav">
        <div className="nav-container">
          {/* Column 1 */}
          <div className="footer-column">
            <h3 
              className={`footer-heading ${activeToggle === "shop" ? "active" : ""}`}
              onClick={() => handleToggle("shop")}
            >
              Shop and Learn
            </h3>
            <ul className={`footer-links-list ${activeToggle === "shop" ? "open" : ""}`}>
              <li><a href="#">Store</a></li>
              <li><a href="#">Mac</a></li>
              <li><a href="#">iPad</a></li>
              <li><a href="#">iPhone</a></li>
              <li><a href="#">Watch</a></li>
              <li><a href="#">Vision</a></li>
              <li><a href="#">AirPods</a></li>
              <li><a href="#">TV & Home</a></li>
              <li><a href="#">AirTag</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Gift Cards</a></li>
            </ul>

            <h3 
              className={`footer-heading ${activeToggle === "values" ? "active" : ""}`}
              onClick={() => handleToggle("values")}
            >
              Apple Values
            </h3>
            <ul className={`footer-links-list ${activeToggle === "values" ? "open" : ""}`}>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Environment</a></li>
              <li><a href="#">Inclusion and Diversity</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Racial Equity and Justice</a></li>
              <li><a href="#">Supply Chain Innovation</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3 
              className={`footer-heading ${activeToggle === "wallet" ? "active" : ""}`}
              onClick={() => handleToggle("wallet")}
            >
              Apple Wallet
            </h3>
            <ul className={`footer-links-list ${activeToggle === "wallet" ? "open" : ""}`}>
              <li><a href="#">Wallet</a></li>
              <li><a href="#">Apple Card</a></li>
              <li><a href="#">Apple Pay</a></li>
              <li><a href="#">Apple Cash</a></li>
            </ul>

            <h3 
              className={`footer-heading ${activeToggle === "account" ? "active" : ""}`}
              onClick={() => handleToggle("account")}
            >
              Account
            </h3>
            <ul className={`footer-links-list ${activeToggle === "account" ? "open" : ""}`}>
              <li><a href="#">Manage Your Apple Account</a></li>
              <li><a href="#">Apple Store Account</a></li>
              <li><a href="#">iCloud.com</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3 
              className={`footer-heading ${activeToggle === "entertainment" ? "active" : ""}`}
              onClick={() => handleToggle("entertainment")}
            >
              Entertainment
            </h3>
            <ul className={`footer-links-list ${activeToggle === "entertainment" ? "open" : ""}`}>
              <li><a href="#">Apple One</a></li>
              <li><a href="#">Apple TV+</a></li>
              <li><a href="#">Apple Music</a></li>
              <li><a href="#">Apple Arcade</a></li>
              <li><a href="#">Apple Fitness+</a></li>
              <li><a href="#">Apple News+</a></li>
              <li><a href="#">Apple Podcasts</a></li>
              <li><a href="#">Apple Books</a></li>
              <li><a href="#">App Store</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3 className="footer-heading">Apple Store</h3>
            <ul className="footer-links-list">
              <li><a href="#">Find a Store</a></li>
              <li><a href="#">Genius Bar</a></li>
              <li><a href="#">Today at Apple</a></li>
              <li><a href="#">Group Reservations</a></li>
              <li><a href="#">Apple Camp</a></li>
              <li><a href="#">Apple Store App</a></li>
              <li><a href="#">Certified Refurbished</a></li>
              <li><a href="#">Apple Trade In</a></li>
              <li><a href="#">Financing</a></li>
              <li><a href="#">Carrier Deals at Apple</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shopping Help</a></li>
            </ul>

            <h3 className="footer-heading">About Apple</h3>
            <ul className="footer-links-list">
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Apple Leadership</a></li>
              <li><a href="#">Career Opportunities</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Ethics & Compliance</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>

          {/* Column 5 – your original For Business / Education / Healthcare / Government */}
          <div className="footer-column">
            <h3 className="footer-heading">For Business</h3>
            <ul className="footer-links-list">
              <li><a href="#">Apple and Business</a></li>
              <li><a href="#">Shop for Business</a></li>
            </ul>

            <h3 className="footer-heading">For Education</h3>
            <ul className="footer-links-list">
              <li><a href="#">Apple and Education</a></li>
              <li><a href="#">Shop for K-12</a></li>
              <li><a href="#">Shop for College</a></li>
            </ul>

            <h3 className="footer-heading">For Healthcare</h3>
            <ul className="footer-links-list">
              <li><a href="#">Apple and Healthcare</a></li>
            </ul>

            <h3 className="footer-heading">For Government</h3>
            <ul className="footer-links-list">
              <li><a href="#">Apple and Government</a></li>
              <li><a href="#">Shop for Veterans and Military</a></li>
              <li><a href="#">Shop for State and Local Employees</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section – full original content kept */}
      <div className="footer-bottom">
        <div className="bottom-container">
          <p className="shop-note">
            More ways to shop: <a href="#">Find an Apple Store</a> or other retailer near you. Or call 1‑800‑MY‑APPLE (1‑800‑692‑7753).
          </p>

          <div className="bottom-links-wrapper">
            <p className="copyright">
              Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
            </p>

            <ul className="bottom-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Sales and Refunds</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Site Map</a></li>
              <li className="region">
                <a href="#">United States ▼</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;