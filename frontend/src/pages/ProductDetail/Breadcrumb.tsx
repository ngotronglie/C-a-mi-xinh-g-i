const Breadcrumb = () => {
  return (
    <div className="section">
      {/* Breadcrumb Area Start */}
      <div className="breadcrumb-area bg-light">
        <div className="container-fluid">
          <div className="breadcrumb-content text-center">
            <h1 className="title">Product A</h1>
            <ul>
              <li>
                <a href="index.html">Home </a>
              </li>
              <li className="active">Product A</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}
    </div>
  );
};

export default Breadcrumb;
