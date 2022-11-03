import React, { Fragment, useEffect } from "react";
import { Button } from "react-bootstrap";

const Payment = () => {
  const options = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: "1000", // =INR 1rs
    name: "Selrom Soft",
    discription: "Selrom Soft",
    image: "http://selrom.com/images/logo.png",
    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: "Umar Farook",
      contact: "9876543210",
      email: "selrom@gmail.com",
    },
    notes: {
      address: "Bangalore",
    },
    theme: {
      color: "#F37254",
      hide_topbar: false,
    },
  };

  const openPayModal = (options) => {
    var razarPay = new window.Razorpay(options);
    razarPay.open();
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Fragment>
      <button className="btn-payment" onClick={() => openPayModal(options)}> Pay </button>
    </Fragment>
  );
};

export default Payment;
