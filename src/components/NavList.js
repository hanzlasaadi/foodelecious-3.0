function NavList({
  // setCurrentProduct,s
  category,
  setShowProductCards,
  handleNavItemClick,
}) {
  return (
    <li
      className="nav-item "
      style={{ 
        minWidth: "max-content" }}
      data-categoryid={category._id}
    >
      <a
      style={{ 
        fontWeight:'bold !important' ,fontSize:'0px !important' }}
        className="nav-link"
        href="/"
        data-filter="all"
        onClick={(e) => {
          e.preventDefault();
          handleNavItemClick(category._id);
          setShowProductCards(true);
          
        }}
      >
        <div class="card" >
          <div 
            style={{ 
               color:'black',
              fontSize:'50px !important' }}
           
          class="card-body ">{category.name}</div>
        </div>
      </a>
    </li>
  );
}

export default NavList;