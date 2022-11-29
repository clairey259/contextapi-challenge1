import React from "react";

const BasicForm = (props) => {
    const {inputOnePlaceholder, inputTwoPlaceholder, buttonText} = props
  return (
    <>
      <label for="uname">
        <b>Username</b>
      </label>
      <input type="text" placeholder={inputOnePlaceholder} name="uname" required />
      <label for="psw">
        <b>Password</b>
      </label>
      <input type="password" placeholder={inputTwoPlaceholder} name="psw" required />
      <button type="submit">{buttonText}</button>
    </>
  );
};

export default BasicForm;
