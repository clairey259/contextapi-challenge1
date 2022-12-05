import React from "react";
import Styles from "./BasicForm.module.scss"

const BasicForm = (props) => {
  const { inputOnePlaceholder, inputTwoPlaceholder, buttonText } = props;
  return (
    <>
      <label htmlFor="uname">
        <b>Username</b>
      </label>
      <input
        id="uname"
        role="textbox"
        type="text"
        placeholder={inputOnePlaceholder}
        name="uname"
        required
      />
      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input
        id="psw"
        role="textbox"
        type="password"
        placeholder={inputTwoPlaceholder}
        name="psw"
        required
      />
      <button type="submit">{buttonText}</button>
    </>
  );
};

export default BasicForm;
