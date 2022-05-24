import React from 'react';
import Navbar from '../layout/Navbar';
import { user_id, user_name} from "../layout/Navbar";
import { useEffect, useState } from "react";

import axios from "axios"
function UserInfo() {

    console.log(user_id);

    const [userdata,setUserdata]= useState([]);
    useEffect(()=>{
        console.log("hiii");
        const getData = async () => {
            const response = await axios.post(
              "/api/users/getusers"
            ,{
                userId: user_id
            })
            console.log(response.data);
            setUserdata(response.data);
          }
          getData();
    
    },[])
    console.log(userdata);
  return (
    <>
        <Navbar />
        <div className='background'>
        <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>User Profile
              </h4>
            </div>
            <form>
              <div className="input-field col s12" style={{marginTop:"50px"}}> 
                <input style= {{borderBottom: "1px solid #000"}}
                  id="username"
                  type="text" value={userdata.name} />
            </div>
            <div className="input-field col s12">
                <input style= {{borderBottom: "1px solid #000"}}
                  id="email"
                  type="text" value={userdata.email} />
            </div>
            <div className="input-field col s12">
                <input style= {{borderBottom: "1px solid #000"}}
                  type="text" placeholder="Age" />
            </div>
            <div className="input-field col s12">
                <input style= {{borderBottom: "1px solid #000"}}
                  type="text" placeholder="Gender"/>
            </div>
            <div className="input-field col s12">
                <input style= {{borderBottom: "1px solid #000"}}
                  type="text" placeholder='Mobile No.' />
            </div>


            </form>
            </div>
            </div>
            </div>
            </div>

    
    </>



  );
}

export default UserInfo;
