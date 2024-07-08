import React,{useState} from "react";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';


export default function ShowHidePassword({ name }) {
    const [isVisible, setVisible] = useState(false);
  
    const toggle = () => {
      setVisible(!isVisible);
    };
  
    return (
      <div className="form-group">
        <input
        label="Password: "
        name={name}
        type={!isVisible ? "password" : "text"}
        placeholder="Enter your password"
        {...register("password", { //"password ek key h jo har input k liye unique rakhni h"
            required: true,
        })} 
        required />
        <span className="icon" onClick={toggle}>
          {isVisible ? <eyeOff /> : <eye />}
        </span>
      </div>
    );
  }