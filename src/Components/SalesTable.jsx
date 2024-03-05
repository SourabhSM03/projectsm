import axios from "axios";
import React, { useEffect, useState } from "react";


export default function Salestable() {
const [receivedata,setReceivedata] = useState([])


function Loaddata() {
   axios.get("https://658a9837ba789a9622375f36.mockapi.io/sell")
   .then((res)=>{
     console.log(res.data);
     setReceivedata(res.data)
   })

}
function handleDelete(e,id){
  e.preventDefault()
  // alert(id)
  axios.delete("https://658a9837ba789a9622375f36.mockapi.io/sell/"+id)
.then((res)=>{
  console.log(res.data);
  Loaddata()
})
}

useEffect(()=>{
  Loaddata();
},[])



  return (
    <>
      <div className="container">
        <div className="col-lg-12 mt-5" style={{ marginTop: "20px" }}>
          <h4>-----SalesTable-----</h4>
          <br/>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Date</th>
                <th scope="col">GST</th>
                <th scope="col">Total Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                receivedata.map((eachData,i)=>{
                  return(
                    <tr key={i}>
                    <th scope="row">{i+1}</th>
                    <td>{eachData.total.customer}</td>
                    <td>{eachData.total.mobileno}</td>
                    <td>{eachData.total.date}</td>
                    <td>{eachData.totalgst}</td>
                    <td>{eachData.totalprice}</td>
                    <td><button className="btn btn-danger btn-sm" onClick={(e)=> handleDelete(e,eachData.id)}>Remove</button></td>
                  </tr>
                  )
                })
              }

              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
