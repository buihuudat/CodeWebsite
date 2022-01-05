import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Form() {
  const [Inputs, setInputs] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const old = e.target.value;
    setInputs(values => ({...values, [name]: old}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Inputs);
    <h1>{Inputs}</h1>
  }

  return (
    <form action="" onSubmit = {handleSubmit}>
      <div className="formInput">
        <label htmlFor="name">Enter your name: </label>
        <input 
          type="text"
          name="userName"
          value={Inputs.userName}
          onChange={handleInput}
          />
      </div>
      <div className="formInput">
      <label htmlFor="name">Enter your old: </label>
      <input 
        type="number"
        name="old"
        value={Inputs.old}
        onChange={handleInput}
        />
      </div>
        <input type="submit"/>
        <button>
          <Link to='/select'>Select Page</Link>
        </button>
    </form>
  );
};

export default Form;
