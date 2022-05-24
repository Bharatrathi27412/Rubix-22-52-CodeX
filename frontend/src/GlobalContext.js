import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {

  const [allDoctors, setAllDoctors] = useState([]);


  useEffect(() => {
    console.log(allDoctors);
  }, [allDoctors]);

  return (
    <GlobalContext.Provider
      value={{
        allDocs: [allDoctors, setAllDoctors],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
