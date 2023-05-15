// import React from 'react'

// export const Alert = (props) => {
//     const capitalize = (word)=>{
//         const lower = word.toLowerCase()
//         return lower.charAt(0).toUpperCase() + lower.slice(1)
//     }
//     return (
//         <div style={{height: '50px'}}>

//         {props.alert &&
//         <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role= "alart"}
//            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
//            </div>
//         </div>
//     )
// }

import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertCompo = (props) => {
 
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <>
          {props.alert && (
            <Alert severity={props.alert.type}>
              <strong>{props.alert.msg}</strong>
            </Alert>
          )}
        </>
      </Stack>
    </>
  );
};

export default AlertCompo;

