import React from 'react';
import Navbar from '../layout/Navbar';
import DatePicker from "react-datepicker";
import { useState, useEffect } from 'react'
import styled from 'styled-components'

import "react-datepicker/dist/react-datepicker.css";



function Appointment() {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Navbar />
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Book Your Appointmnet</b>
              </h4>
            </div>
            <form>
              <div className="input-field col s12">
                <input id="description" type="text" required/>
                <label htmlFor="description">Description</label>
                {/* <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span> */}
              </div>
              <div className="input-field col s12">
                {/* <input id="date" type="text" required/>
                <label htmlFor="date">Date</label> */}
                <DatePicker selected={startDate} required onChange={(date) => setStartDate(date)} isClearable
                  placeholderText="I have been cleared!" closeOnScroll={true}      popperPlacement="bottom-end" 
                  />
              </div>



              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable green accent-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default Appointment;

const Frame = styled(DatePicker)` 
  .react-datepicker-popper {
    /* z-index: 2; */
  }


`