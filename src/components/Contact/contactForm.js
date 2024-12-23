import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Router from "next/router";

const initValues = {
  name: "",
  email: "",
  number: "",
  message: "",
};

const initState = { isLoading: false, error: "", values: initValues };

export default function Home() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const [isMessageSent, setIsMessageSent] = useState(false);

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value, // Corrected value assignment
      },
    }));

  const onSubmit = async () => {
    // Validate form fields
    const hasEmptyFields = Object.values(values).some(value => !value);
    if (hasEmptyFields) {
      setState((prev) => ({
        ...prev,
        error: "Please fill in all required fields.",
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      const res = await fetch("/api/resend-contact", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Failed to send message");

      setTouched({});
      setState(initState);
      setIsMessageSent(true);
      
      setTimeout(() => {
        Router.push("/thank-you");
      }, 1000);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  useEffect(() => {
    if (isMessageSent) {
      setTimeout(() => {
        setIsMessageSent(false);
      }, 2000);
    }
  }, [isMessageSent]);

  return (
    <Container style={{ paddingLeft: "3vw" }} mt={12}>
      {error && (
        <Text color="red" my={4} fontSize="xl" style={{ marginBottom: "2vw" }}>
          {error}
        </Text>
      )}

      <FormControl
        isRequired
        isInvalid={touched.name && !values.name}
        mb={5}
        className="form-box"
      >
        <Input
          type="text"
          name="name"
          errorBorderColor="red"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="Name*"
          className="form-control"
        />
        <FormErrorMessage>Name is Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        mb={5}
        isInvalid={touched.email && !values.email}
        className="form-box"
      >
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="Email*"
          className="form-control"
        />
        <FormErrorMessage>Email is Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired 
        mb={5}
        isInvalid={touched.number && !values.number}
        className="form-box"
      >
        <Input
          type="text"
          name="number"
          value={values.number}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="Phone Number*"
          className="form-control"
        />
        <FormErrorMessage>Phone Number is Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        mb={5}
        isInvalid={touched.message && !values.message}
        className="form-box"
      >
        <Textarea
          type="text"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="Message*"
          className="form-control"
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <div className="submit-btn-box">
        <Button
          variant="outline"
          colorScheme="blue"
          disabled={
            !values.name || !values.email || !values.number || !values.message // Corrected validation check
          }
          onClick={onSubmit}
          isLoading={isLoading}
          className="submit-button mr-1 contact-form-submit-btn"
          data-cursor-text="Sent!"
          data-cursor-size="80px"
          data-cursor-color="#000"
        >
          Submit
        </Button>
        {isMessageSent && (
          <div className={`alert ${isMessageSent ? "" : "hide"}`}>
            <p>
              Message has been sent <br /> successfully.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
}

