// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import InputBar from "./InputBar";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function CustomForm() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isTextareaFocused, setIsTextareaFocused] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("name", name);
    console.log("surName", surName);
    console.log("number", number);
    console.log("email", email);
    console.log("message", message);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full  ">
      <div className="flex gap-8 max-md:flex-col">
        <InputBar
          handleChange={(e) => setName(e.target.value)}
          value={name}
          name={"name"}
          placeholder={"İsim"}
          type={"text"}
        />

        <InputBar
          handleChange={(e) => setSurName(e.target.value)}
          value={name}
          name={"surName"}
          placeholder={"Soyisim"}
          type={"text"}
        />
      </div>
      <div className="flex gap-8 max-md:flex-col">
        <InputBar
          handleChange={(e) => setEmail(e.target.value)}
          value={name}
          name={"email"}
          placeholder={"Email"}
          type={"email"}
        />
        <InputBar
          handleChange={(e) => setNumber(e.target.value)}
          value={number}
          name={"number"}
          placeholder={"Telefon Numarası"}
          type={"tel"}
        />
      </div>
      <div>
        <TextareaAutosize
          aria-label="minimum height"
          className=" w-[850px]  max-md:w-[300px] max-lg:w-[600px]"
          minRows={5}
          placeholder="Mesaj"
          style={{
            padding: 10,
            marginTop: 20,
            borderWidth: 1,
            borderColor: "#1C1E53",
            outline: isTextareaFocused ? "1px solid #5E3BEE" : "1px solid #fff",
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setIsTextareaFocused(true)}
          onBlur={() => setIsTextareaFocused(false)}
        />
      </div>
      <div className="max-md:w-auto">
        <CustomButton onClick={handleSubmit} title={"Gönder"} />
      </div>
    </div>
  );
}

export default CustomForm;
