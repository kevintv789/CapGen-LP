import { Button, TextField } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";
import { MuiStyledOptions } from "@mui/system";
import React, { useState } from "react";
import SendIcon from "../../../assets/send-icon.png";

import "./ContactForm.css";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#8C88C9",
    fontSize: "24px",
    fontFamily: "Graphik-Medium",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#8C88C9",
  },
  "& label": {
    color: "#AEAFC3",
    fontFamily: "Graphik-Medium",
  },
});

const CustomButton = styled(Button)(
  ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-weight: bold;
    font-size: 0.875rem;
    background-color: #655ED2;
    padding: 12px 24px;
    border-radius: 16px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    box-shadow: 2px 4px 5px 2px rgba(0, 0, 0, 0.25);
    float: left;
    margin-top: 20px;

    &:hover {
        background-color: #8C88C9;
      }
    `
);

const ContactForm = () => {
  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();

  return (
    <div>
      <CustomTextField
        id="name"
        label="Your name"
        variant="standard"
        required
        fullWidth
        margin="normal"
        onChange={({ target }) => setName(target.value)}
        value={name}
      />

      <CustomTextField
        id="email"
        label="Email"
        variant="standard"
        required
        fullWidth
        margin="normal"
        onChange={({ target }) => setEmail(target.value)}
        value={email}
      />

      <CustomTextField
        id="message"
        label="Your message"
        variant="standard"
        required
        fullWidth
        margin="normal"
        maxRows={6}
        minRows={6}
        multiline
        onChange={({ target }) => setMessage(target.value)}
        value={message}
      />

      <CustomButton
        variant="contained"
        endIcon={<img src={SendIcon} width={20} height={20} />}
        onClick={() => console.log("submit")}
      >
        Send message
      </CustomButton>
    </div>
  );
};

export default ContactForm;
