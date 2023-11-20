function NavList({
  // setCurrentProduct,s
  category,
  setShowProductCards,
  handleNavItemClick,
}) {
  return (
    <li
      className="nav-item"
      style={{ minWidth: "max-content" }}
      data-categoryid={category._id}
    >
      <a
        className="nav-link"
        href="/#"
        data-filter="all"
        onClick={(e) => {
          e.preventDefault();
          handleNavItemClick(category._id);
          setShowProductCards(true);
        }}
      >
        <div className="card">
          <div className="card-body">{category.name}</div>
        </div>
      </a>
    </li>
  );
}

export default NavList;
