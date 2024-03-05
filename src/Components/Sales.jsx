import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Sales() {
  const [newData, setNewData] = useState([]);
  const [rows, setRows] = useState([{ quantity: 1 }]);
  let navigate = useNavigate();
  const [total, setTotal] = useState({

    date: "",
    customer: "",
    mobileno: "",
  });

  let totalPrice = 0; //for total price of product
  let totalGST = 0;

  function handlSubmit(e) {
    const postData = {
      row: rows,
      total : total,
      totalprice : totalPrice,
      totalgst : totalGST
    };

    axios
      .post("https://658a9837ba789a9622375f36.mockapi.io/sell", postData)
      .then((res) => {
        console.log(res.data);
        setTotal(res.data)
      });
      navigate("/home/SalesTable")
  }

  function handleChanges(e) {
    e.preventDefault()
    setTotal({ ...total, [e.target.name]: e.target.value });
  }

  function handleChange(id, index) {
    console.log(id);
    const dropdown = newData.find((e) => e.id === id);

    let copyRows = [...rows];
    console.log("rows", copyRows);
    copyRows[index].selectedproduct = dropdown;
    setRows(copyRows);

    // setData(dropdown)
    console.log(dropdown);
  }
  console.log(rows);

  const addrow = () => {
    let copyrows = [...rows];
    copyrows.push({ quantity: 1 });
    setRows(copyrows);

    console.log(rows);
  };

  function loadData() {
    axios
      .get("https://658a9837ba789a9622375f36.mockapi.io/products")
      .then((res) => {
        setNewData(res.data);
      });
  }

  const quantitychange = (value, i) => {
    // console.log(value);
    let copyRows = [...rows];
    copyRows[i].quantity = value;
    setRows(copyRows);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>

          <div className="col-lg-10">
            <h2 className="ms-1" style={{ marginTop: "100px" }}>
              Sales...
            </h2>

            <div className="card">
              <div class="card-body">
                <div className="d-flex">
                  <div className="ms-4 me-4">
                    <h5 className="card-title">--Select Date--</h5>
                    <input
                      type="date"
                      name="date"
                      value={total.date}
                      onChange={((e)=>handleChanges(e))}
                    />
                  </div>

                  <div className="ms-5 me-5">
                    <h5 className="card-title ">--Customer Name--</h5>
                    <input
                      type="text"
                      name="customer"
                      value={total.customer}
                      onChange={((e)=>handleChanges(e))}
                    />
                  </div>

                  <div className="ms-4 me-4">
                    <h5 className="card-title ">--Mobile Number--</h5>
                    <input
                      type="number"
                      name="mobileno"
                      value={total.mobileno}
                      onChange={((e)=>handleChanges(e))}s
                    />
                  </div>
                </div>
                <br />
              </div>
            </div>
            <br />
            <button className="btn btn-primary mt-2" onClick={addrow}>
              Add Row
            </button>
            <br />
            <br />

            <div className="card">
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col">GST % </th>
                      <th scope="col">GST Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, i) => {
                      if (row.selectedproduct) {
                        totalPrice +=
                          ((row.selectedproduct.Price *
                            row.selectedproduct.Gst) /
                            100) *
                            row.quantity +
                          row.selectedproduct.Price * row.quantity;
                          totalGST+= ((row.selectedproduct.Price *
                            row.selectedproduct.Gst) /
                            100) *
                          row.quantity
                      }
                      return (
                        <tr key={i}>
                          <th scope="row">{i + 1}</th>
                          <td>
                            <select
                              onChange={(e) => handleChange(e.target.value, i)}
                              className="form-control"
                            >
                              <option value="">--Select Product--</option>
                              {newData.map((eachData, i) => {
                                return (
                                  <option key={i} value={eachData.id}>
                                    {eachData.Product}
                                  </option>
                                );
                              })}
                            </select>
                          </td>
                          <td>
                            <input
                              className="form-control"
                              type="number"
                              value={row.quantity}
                              onChange={(e) =>
                                quantitychange(e.target.value, i)
                              }
                            />
                          </td>

                          <td>
                            <input
                              className="form-control"
                              type="number"
                              value={
                                row.selectedproduct
                                  ? row.selectedproduct.Price
                                  : ""
                              }
                            />
                          </td>

                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={
                                row.selectedproduct
                                  ? row.selectedproduct.Gst
                                  : ""
                              }
                            />
                          </td>

                          <td>
                            <input
                              type="text"
                              className="form-control"
                              value={
                                row.selectedproduct
                                  ? ((row.selectedproduct.Price *
                                      row.selectedproduct.Gst) /
                                      100) *
                                    row.quantity
                                  : ""
                              }
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handlSubmit(e.target.value)}
                  >
                    Submit
                  </button>

                  <span>
                    <b>TotalGST :- </b>
                    {totalGST}
                  </span>
                  <span>
                    <b>Total Price With GST :- </b>
                    {totalPrice}
                  </span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
