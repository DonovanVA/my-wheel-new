import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../UI/CustomButton";
export default function Home() {
  const navigation = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        verticalAlign: "middle",
        textAlign: "center",
        justifyContent: "center",
        gap: 10,
        alignItems: "center",
        marginTop: 200,
      }}
    >
      <h1>Donny's drinking Games! 🍻</h1>
      <CustomButton
        onClick={() => navigation(`/wheel`)}
        text="wheel"
      ></CustomButton>
      <CustomButton
        onClick={() => navigation(`/quiz`)}
        text="quiz"
      ></CustomButton>
    </div>
  );
}
