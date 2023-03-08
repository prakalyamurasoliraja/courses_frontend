import React, { useState } from "react";
import productService from "../service/product.service";

const AddProduct = () =>
 {
  const [product, setProduct] = useState({
    course: "",
    subject: "",
    fees: "",
    university: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();

    productService
      .saveProduct(product)
      .then((res) => {
        console.log("Course Details Added Successfully");
        setMsg("Course Details Added Successfully");
        setProduct({
          course: "",
          subject: "",
          fees: "",
          university: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return(
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center text-secondary">ONLINE COURSES<br/></div>
              {msg && <p className="fs-4 text-center text-primary">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div className="mb-4">
                    <label>Enter Course Details</label>
                    <input
                      type="text"
                      name="course"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.course}
                    />
                  </div>

                  <div className="mb-4">
                    <label>Enter Subject Details</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.subject}
                    />
                  </div>
                  <div className="mb-4">
                    <label>Enter Fee Details</label>
                    <input
                      type="text"
                      name="fees"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.fees}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter University Details</label>
                    <input
                      type="text"
                      name="university"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.university}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddProduct;
