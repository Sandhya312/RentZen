import "./Filter.css";
const Filter = () => {
  return (

    <div className="Filter_container pt-3 pb-3">
      <div className="category_header" style={{
        marginBottom:'2rem'
      }}>
        <h1>
          {" "}
          <span>
            <i className="bx bx-package"></i>
          </span>{" "}
          Appliances on rent
        </h1>
        <p>Checkout our huge collection of appliances on rent</p>
      </div>

      <div className="filter_body d-flex justify-content-between">

        <div className="filter_1">
          <div className="dropdown">
            <small className="small_heading">Choose for Rental Tenure</small>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                background: "transparent",
                width: "15rem",
              }}
            ></button>

            <div className="dropdown-menu" id="range_menu">
              <input
                type="range"
                className="form-range"
                min="0"
                max="5"
                step="0.5"
                id="customRange3"
              />
            </div>
          </div>
        </div>

        <div className="filter_2">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort By Default
            </button>
            <ul className="dropdown-menu" id="price_sort">
              <li>
                <p className="dropdown-item" >
                  Most Recent First
                </p>
              </li>
              <li>
              <p className="dropdown-item "   >
                  Price: low to high
                </p>
              </li>
              <li>
              <p className="dropdown-item" >
                  Price: high to low
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="filter_3">
          <div className="dropdown">
            <small className="small_heading">Choose Product Type</small>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                background: "transparent",
                width: "15rem",
              }}
            ></button>

            <div className="dropdown-menu" id="choose_by_product">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Study & Work
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  Home Appliances
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Clothes
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  Electronics
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Occational Wear
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  Mens Wear
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox1">
                  Womens Wear
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineCheckbox2">
                  Kids Wear
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="filter_4">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Status
            </button>
          

             <div className="dropdown-menu" id="status">
             <div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Any" checked />
  <label className="form-check-label" htmlFor="exampleRadios1">
    Any
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Available" />
  <label className="form-check-label" htmlFor="exampleRadios2">
     Available
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="Out of Stock" />
  <label className="form-check-label" htmlFor="exampleRadios3">
  Out of Stock
  </label>
</div>
             </div>
          </div>
        </div>

        <div className="filter_5">
          <button className="btn border-1 d-flex align-items-lg-baseline w-100 text-white justify-content-center" style={{
            background:'#DB3327',
          }}><i className='bx bx-reset' ></i> <p>Reset</p></button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
