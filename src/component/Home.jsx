import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Course Details Deleted Successfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-2 text-center">
                ONLINE COURSES LIST
                <br/>
                {msg && <p className="fs-3 text-center text-primary">{msg}</p>}
              </div>

              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">ONLINE COURSES</th>
                      <th scope="col">SUBJECTS</th>
                      <th scope="col">FEES</th>
                      <th scope="col">UNIVERSITIES</th>
                      <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{p.course}</td>
                        <td>{p.subject}</td>
                        <td>{p.fees}</td>
                        <td>{p.university}</td>
                        <td>
                          <Link to={'editProduct/'+p.id} className="btn btn-sm btn-primary">
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-sm btn-danger ms-1">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;