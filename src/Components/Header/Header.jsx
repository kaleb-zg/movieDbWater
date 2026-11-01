import { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import Styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  //for blur
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${Styles.header} ${isScrolled ? Styles.scrolled: ""}`}>
      <div className={Styles.container}>
        {/* Logo */}
        <img className={Styles.logo} src={logo} alt="Netflix-Logo" />

        {/* Navigation Links */}
        <nav className={Styles.nav}>
          <Link className={Styles.navLink} to="">
            Home
          </Link>
          <Link className={Styles.navLink} to="">
            Shows
          </Link>
          <Link className={Styles.navLink} to="">
            Movies
          </Link>
          <Link className={Styles.navLink} to="">
            New & Popular
          </Link>
          <Link className={Styles.navLink} to="">
            My List
          </Link>
          <Link className={Styles.navLink} to="">
            Browse By Languages
          </Link>
        </nav>

        {/* Right Side Section */}

        <div className={Styles.rightSection}>
          <div className={Styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={StyleSheet.seachButton}
            >
              {/* search button */}
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="search..."
                className={Styles.searchInput}
              />
            )}
          </div>
          <button className={Styles.iconButton}>
            {/* notification icon*/}
            <Bell />
            <span className={Styles.notificationBadge}>4</span>
          </button>

          {/* Profile */}
          <div className={Styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={Styles.profileButton}
            >
              {/* userr icon */}
              <div className={Styles.profileAvatar}>
                {" "}
                <User size={20} />{" "}
              </div>
              {/* dropdwon icon */}
              <ChevronDown size={20} />
            </button>
            {isProfileOpen && (
              <div className={Styles.profileMenu}>
                <Link className={Styles.profileMenuItem}>Account</Link>
                <Link className={Styles.profileMenuItem}>Help Center</Link>
                <hr className={Styles.profileMenuDivider} />
                <button className={Styles.profileMenuItem}>Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
