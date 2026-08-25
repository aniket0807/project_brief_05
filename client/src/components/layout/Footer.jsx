function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Inventory Management System</p>
      <p>© {currentYear} All Rights Reserved</p>
    </footer>
  );
}

export default Footer;