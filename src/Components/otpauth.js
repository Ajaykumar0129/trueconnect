import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../Components/header";
const OTPVerfify = () => {
  let history = useHistory();
  let location = useLocation();
  const [otp, setOTP] = useState(0);
  const [randomnum, setRandomNum] = useState(0);
  let random = Math.floor(100000 + Math.random() * 900000);

  if (location.state == undefined) {
    history.push("/");
  }

  useEffect(() => {
    setRandomNum(random);
    return toast.success(`Random Number ${random} is generated`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  const validate = () => {
    if (randomnum == otp) {
      toast.success("Data Stored", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      const userdetails = JSON.stringify(location.state.userdetails);
      const companydetails = JSON.stringify(location.state.CompanyDetails);
      let Data = [];
      let data = [];
      if (localStorage.getItem("SessionData")) {
        const data = localStorage.getItem("SessionData");
        const Data = [];
        Data.push([userdetails, companydetails, data]);
        localStorage.setItem("SessionData", Data);
      } else {
        Data.push(userdetails, companydetails);
        localStorage.setItem("SessionData", Data);
      }

      history.push("/");
    } else {
      return toast.error("Invalid OTP", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Navbar step={3} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120,
        }}
      >
        <h3>Enter OTP</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <OtpInput
          value={otp}
          inputStyle={{ fontSize: 40, borderRadius: 5, borderWidth: 1 }}
          onChange={(otp) => setOTP(otp)}
          numInputs={6}
          shouldAutoFocus={true}
          isInputNum={true}
          isInputSecure={true}
          separator={<span>-</span>}
        />
        <ToastContainer />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Button
          variant="success"
          style={{
            width: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
          onClick={() => validate()}
        >
          Validate
        </Button>
      </div>
    </>
  );
};
export default OTPVerfify;
