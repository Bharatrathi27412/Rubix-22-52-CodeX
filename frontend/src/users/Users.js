import React from 'react';

function Users() {
  return (
    <div className="container">
    <div style={{ marginTop: "4rem" }} className="row">
      <div className="col s8 offset-s2">
        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
          <h4>
            <b>User Info</b>
          </h4>
        </div>
          <div className="input-field col s12">
            <input id="docname" type="text" value={docName} readOnly/>
            <label htmlFor="docname"></label>
          </div>
        </div>
    </div>
    </div>
    
        


  );
}

export default Users;
