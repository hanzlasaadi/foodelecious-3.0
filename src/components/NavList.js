function NavList({ category, setShowProductCards, handleProductCardClick }) {
  return (
    <li class="nav-item" style={{ minWidth: "max-content" }} data-categoryId={category._id}>
      <a
        class="nav-link active"
        href
        data-filter="all"
        onClick={(e) => {
          e.preventDefault();
          handleProductCardClick(category._id);
          setShowProductCards(true);
        }}
      >
        <div class="card">
          <div class="card-body">{category.name}</div>
        </div>
      </a>
    </li>
  );
}

export default NavList;
