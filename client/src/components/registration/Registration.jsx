import React, { useState } from "react";
import "./registration.css";
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="registration">
      <div className="registration__header">Registration</div>
      <Input
        type="text"
        placeholder="email"
        value={email}
        setValue={setEmail}
      />
      <Input
        type="password"
        placeholder="password"
        value={password}
        setValue={setPassword}
      />
      <button className="registration__btn" onClick={()=>registration(email,password)}>Register</button>
    </div>
  );
};

export default Registration;
