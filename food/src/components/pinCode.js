import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";

export const Pincode = props => {
    const recoganizedAreas = {
        'hsr':'560102',
        'bypanahalli':'676667',
        'marathalli':'667776',
        'hosurRoad':'321236',
        'teachersColony':'560101'
      };

  useEffect(() => {
    if(props.values.address){
        const foundArea = Object.keys(recoganizedAreas).find(key => key === (props.values.address))

        const foundPinCode = recoganizedAreas[foundArea];
        
        props.setFieldValue("pincode", foundPinCode);
    }else{
        props.setFieldValue("pincode", "Not found");
    }
    
  }, [props.values.address]);

  return (
    <TextField
      name="pincode"
      value={props.values.pincode}
    />
  );
};
