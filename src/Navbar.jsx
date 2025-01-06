import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8VQHayPZpk-WrIJxWrZYrA4bQO6-bJonColJHd3MD6pQ20yI0c_PP_U&s"></img>
      <h1 style={styles.logo}>My Website</h1>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="#" style={styles.link}>Home</a>
        </li>
        <li style={styles.navItem}>
          <a href="#about" style={styles.link}>About</a>
        </li>
        <li style={styles.navItem}>
          <a href="#services" style={styles.link}>Services</a>
        </li>
        <li style={styles.navItem}>
          <a href="#contact" style={styles.link}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyleType: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;
