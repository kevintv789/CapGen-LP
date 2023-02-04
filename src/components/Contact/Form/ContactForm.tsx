import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import SendIcon from "../../../assets/send-icon.png";
import emailjs from "@emailjs/browser";

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
  const [name, setName] = useState<string | undefined>("");
  const [email, setEmail] = useState<string | undefined>("");
  const [message, setMessage] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isNameError, setNameError] = useState<boolean | undefined>();
  const [isEmailError, setEmailError] = useState<boolean | undefined>();
  const [isMessageError, setMessageError] = useState<boolean | undefined>();

  useEffect(() => {
    // Only send if there are no errors
    if (isSubmitted) {
      setNameError(name?.trim() === "");
      setMessageError(message?.trim() === "");
      setEmailError(() => {
        let re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email != null && re.test(email)) {
          return false;
        }

        return true;
      });
    }
  }, [name, message, email, isSubmitted]);

  const onSubmit = async () => {
    // reset entered texts
    setIsSubmitted(true);
    setIsLoading(true);

    if (
      name !== "" &&
      !isNameError &&
      email !== "" &&
      !isEmailError &&
      message !== "" &&
      !isMessageError
    ) {
      await sendEmail();
      setIsSubmitted(false);
    }

    setIsLoading(false);
  };

  const sendEmail = async () => {
    var templateParams = {
      from_name: name,
      message,
      from_email: email,
    };

    try {
      const response = await emailjs.send(
        "service_d47igkv",
        "template_tz8th1i",
        templateParams,
        "fbrYJAVzV3GnY3pDP"
      );

      if (response.status == 200) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (e) {
      console.log("Failed to send email!", e);
    }
  };

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
        error={isNameError}
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
        error={isEmailError}
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
        error={isMessageError}
      />

      <CustomButton
        variant="contained"
        endIcon={<img src={SendIcon} width={20} height={20} />}
        onClick={onSubmit}
        disabled={isLoading}
      >
        Send message
      </CustomButton>
    </div>
  );
};

export default ContactForm;
