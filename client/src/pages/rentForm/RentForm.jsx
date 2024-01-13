import "./rentForm.css";
import TextEditor from "../../components/textEditor/TextEditor";

const RentForm = () => {
  return (
    <div
      className="p-5 d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundColor: "#0f0f0f0f",
      }}
    >
      <h3>Fill the below form to rent your product.</h3>

      <div className="form_body p-4 mt-5 w-75"  
       style={{
        backgroundColor: "#F8F9FA",
       }}
      >

        <form className="row g-3">
          <div className="col-md-3">
            <label htmlFor="product_name" className="form-label">
              Name of Product
            </label>
            <input type="text" className="form-control" id="product_name" />
          </div>
          <div className="col-md-3">
            <label htmlFor="seller_name" className="form-label">
              Your name to display
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name or shop name"
              id="seller_name"
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="product_category" className="form-label">
              Category of Product
            </label>
            <input type="text" className="form-control" id="product_category" />
          </div>

          <div className="col-md-3 ">
            <label htmlFor="product_color" className="form-label">
              Color of Product
            </label>
            <input  type="color" className="form-control w-25" id="product_color" />
          </div>

           
           <h4>Set the tenure and price</h4>
          <div className="col-md-3">
            <label htmlFor="product_category" className="form-label">
             Select the time 
            </label>
            <select className="form-select" aria-label="Select the tenure time">
  <option defaultChecked>Choose the tenure time </option>
  <option value="1">per Hours</option>
  <option value="2">per Day</option>
  <option value="3">per Month</option>
</select>
          </div>

          <div className="col-md-3 ">
            <label htmlFor="minDuration" className="form-label">
              Min duration of rent
            </label>
            <input  type="number" name="minDuration" className="form-control " id="minDuration" />
          </div>

          <div className="col-md-3 ">
            <label htmlFor="maxDuration" className="form-label">
              Max duration of rent
            </label>
            <input  type="number" name="maxDuration" className="form-control " id="maxDuration" />
          </div>

          <div className="col-md-3 ">
            <label htmlFor="price" className="form-label">
              Price per tenure time
            </label>
            <input  type="number" name="price" className="form-control" id="price" />
          </div>

          <h3>Upload the images of product</h3>

          <div className="col-md-6 ">
            <label htmlFor="images" className="form-label">
              Images
            </label>
            <input multiple type="file" name="images" className="form-control" id="images" />
          </div>

          <div className="col-md-3 ">
            <label htmlFor="material" className="form-label">
              Material of product
            </label>
            <input  type="text" name="material" className="form-control" id="material" />
          </div>

          <div className="col-md-3 ">
            <label htmlFor="size" className="form-label">
              Size and dimension
            </label>
            <input  type="text" name="size" className="form-control" id="size" />
          </div>


          <div className="col-md-3 ">
            <label htmlFor="size" className="form-label">
            Features of product
            </label>
            <div
        style={{
          width: 700,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
        >
            <TextEditor />
          </div>

      
       
      </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address to pickup the product
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Enter the address to pickup the product"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option defaultValue>Choose...</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
          
          </div>
          <div className="col-12">
            <button type="submit" className="btn" style={{
                backgroundColor: "#DB3327",
                outline: "none",
                border: "none",
                width: "12rem",
                color:"white",
                height: "4rem",
            }}>
              😍Post the product
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default RentForm;
