function Header({ title }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1>{title}</h1>
        <p>Student Information Management System</p>
      </div>
    </header>
  );
}

export default Header;