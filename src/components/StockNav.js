function StockNav({ subCategory, setShowProductCards, setSubcatClicked }) {
  return (
    <li className="nav-item" style={{ minWidth: "max-content" }}>
      <a
        className="nav-link"
        href="/"
        data-filter="all"
        onClick={(e) => {
          e.preventDefault();
          setSubcatClicked(subCategory._id);
          setShowProductCards(true);
        }}
      >
        <div className="card">
          <div className="card-body">{subCategory.name}</div>
        </div>
      </a>
      
    </li>

    
  );
}

export default StockNav;
