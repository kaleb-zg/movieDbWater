import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  const footerColumns = [
    [
      "Audio Description",
      "Investor Relations",
      "Legal Notices",
    ],
    [
      "Help Centre",
      "Jobs",
      "Cookie Preferences",
    ],
    [
      "Gift Cards",
      "Terms of Use",
      "Corporate Information",
    ],
    [
      "Media Centre",
      "Privacy",
      "Contact Us",
    ],
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="#facebook" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#instagram" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#twitter" aria-label="Twitter">
            <FaTwitter />
          </a>

          <a href="#youtube" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Links */}
        <div className={styles.linksContainer}>
          {footerColumns.map((column, index) => (
            <div className={styles.column} key={index}>
              {column.map((link) => (
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  key={link}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>
          © 1997–2026 Netflix, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;