import React, { useState } from "react";
import "./authorization.css";
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="authorization">
      <div className="authorization__header">Registration</div>
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
      <button className="authorization__btn" onClick={()=>registration(email,password)}>Register</button>
    </div>
  );
};

export default Registration;
