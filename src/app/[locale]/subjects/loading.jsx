import Logo from "@/atoms/logo/Logo";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Logo />
    </div>
  );
};

export default Loading;
