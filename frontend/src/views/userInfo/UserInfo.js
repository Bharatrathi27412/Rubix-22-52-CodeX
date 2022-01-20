import React from 'react';
import Navbar from '../layout/Navbar';
import { user_id, user_name} from "../layout/Navbar";
function UserInfo() {

    console.log(user_id);
  return (
    <>
        <Navbar />
        <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>User Profile
              </h4>
            </div>
            <form>
              <div className="input-field col s12">
                <input style= {{borderBottom: "1px solid #000"}}
                  id="username"
                  type="text" value={user_name} />
            </div>
            </form>
            </div>
            </div>
            </div>

    
    </>



  );
}

export default UserInfo;
