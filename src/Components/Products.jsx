import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Product() {
  const [data, setData] = useState({
    Product: "",
    Price: "",
    Gst: "",
  });

  const [newData, setNewData] = useState([]);

  const [id, setId] = useState(undefined);

  function handelChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handelSubmit(e) {
    e.preventDefault();
    // console.log(data);

    loadData();
    if (id === undefined) {
      axios
        .post("https://658a9837ba789a9622375f36.mockapi.io/products", data)
        .then((res) => {
          console.log(res.data);
          loadData();
        });
      setData({
        Product: "",
        Price: "",
        Gst: "",
      });
    } else {
      axios
        .put("https://658a9837ba789a9622375f36.mockapi.io/products/" + id, data)
        .then((res) => {
          console.log(res.data);
          loadData();
        });
      setData({
        Product: "",
        Price: "",
        Gst: "",
      });
    }
  }

  function loadData() {
    axios
      .get("https://658a9837ba789a9622375f36.mockapi.io/products")
      .then((res) => {
        console.log(res.data);
        setNewData(res.data);
      });
  }
  useEffect(() => {
    loadData();
  }, []);

  function handleDelete(e, id) {
    e.preventDefault();
    axios
      .delete("https://658a9837ba789a9622375f36.mockapi.io/products/" + id)
      .then((res) => {
        console.log(res.data);
        loadData();
      });
  }

  function handleUpdate(e, id) {
    e.preventDefault();
    setId(id);
    axios
      .get("https://658a9837ba789a9622375f36.mockapi.io/products/" + id)
      .then((res) => {
        console.log(res.data);

        setData({
          Product: res.data.Product,
          Price: res.data.Price,
          Gst: res.data.Gst,
        });
      });
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
           
          </div>

          <div className="col-lg-9 mt-3">
            <div className="d-flex justify-content-between mt-2">
              <div>
                <h1 className="mt-4">Product Form</h1>
              </div>
              
             
              <button
                type="button"
                className="btn btn-primary mt-5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Products
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Product Form
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <input
                        name="Product"
                        value={data.Product}
                        onChange={handelChange}
                        className="form-control"
                        type="text"
                        placeholder="Product"
                      />
                      <br />
                      <input
                        name="Price"
                        value={data.Price}
                        onChange={handelChange}
                        className="form-control"
                        type="text"
                        placeholder="Price"
                      />
                      <br />
                      
                      <select
                        name="Gst"
                        onChange={handelChange}
                        placeholder="GST"
                        class="form-select"
                        aria-label="Default select example"
                        value={data.Gst}
                      >
                        <option selected>Select Gst Percentage</option>

                        <option>5</option>
                        <option>12</option>
                        <option>18</option>
                        <option>28</option>
                      </select>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        onClick={(e) => handelSubmit(e)}
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Add Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <table className="table m-3">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Gst</th>
                  <th scope="col">Axtion</th>
                </tr>
              </thead>
              <tbody>
                {newData.map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{eachData.Product}</td>
                      <td>{eachData.Price}</td>
                      <td>{eachData.Gst}</td>
                      <td>
                        <button
                          className="btn btn-success me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={(e) => handleUpdate(e, eachData.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={(e) => handleDelete(e, eachData.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}