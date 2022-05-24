import React from 'react';
import Navbar from '../layout/Navbar';
import DatePicker from "react-datepicker";
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import { user_id } from '../layout/Navbar';

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import  { Redirect }  from "react-router-dom"



function Book({match}) {

  const [startDate, setStartDate] = useState(new Date());
  const [description,setDescription]= useState("");
  const [file,setFile]= useState([]);

  // console.log(startDate);
  // console.log(description);

  const docname = match.params.docname;


  const sendData = async (e)=> {
    e.preventDefault();
    await axios.post("/api/users/bookappointment",{
      userId: user_id,
      docName: docname,
      date: startDate,
      desp: description

    })
    .then(res => alert("Appointment booked!!"))
    .catch(err =>console.log(err)
    );


    // .then(console.log("bhjahbjxbjankj"));

    }
  // try {
  //   // console.log("asncjnxaklncklm");
  //   console.log(startDate);    
  //   console.log(description);

  //   console.log(file.name);
  // }catch(e) {
  //   console.log(e);
  // }


  
  

  return (
    <>
      <Navbar />
      <form type="submit">
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Book Your Appointment</b>
              </h4>
            </div>
            <form>
            <div className="input-field col s12">
                <input id="docname" type="text" value={docname} readOnly/>
                <label htmlFor="docname"></label>
              </div>

              <div className="input-field col s12">
                <input id="description" type="text" value={description} required onChange={(e)=>setDescription(e.target.value)}/>
                <label htmlFor="description">Description</label>
              </div>
              <div className="input-field col s12">
                <DatePicker selected={startDate} required onChange={(date) => setStartDate(date)} isClearable
                  placeholderText="I have been cleared!" closeOnScroll={true}      popperPlacement="bottom-end" 
                  />
              </div>
              <div className="input-field col s12">
                <input id="records" type="file" required style={{borderBottom: "1px solid #9e9e9e", width: "100%", padding:"10px 0"}} required onChange={(e)=>setFile(e.target.files[0])}/>
              </div>







              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }} onClick={sendData} type="submit"
                  className="btn btn-large waves-effect waves-light hoverable green accent-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </form>

    </>
  );
}

export default Book;

const Frame = styled(DatePicker)` 
  .react-datepicker-popper {
    /* z-index: 2; */
  }


`