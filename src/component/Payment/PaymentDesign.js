import React, { Fragment, useEffect } from "react";
import "./Payment.scss";

const PaymentDesign = () => {
  const optionsFirst = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: "200000", // =INR 1rs
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
  const optionsSecond = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: "500000", // =INR 1rs
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
  const optionsThird = {
    key: "rzp_test_HJG5Rtuy8Xh2NB",
    amount: "700000", // =INR 1rs
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

  const openPayModalFirst = (optionsFirst) => {
    var razarPay = new window.Razorpay(optionsFirst);
    razarPay.open();
  };
  const openPayModalSecond = (optionsSecond) => {
    var razarPay = new window.Razorpay(optionsSecond);
    razarPay.open();
  };
  const openPayModalThird = (optionsThird) => {
    var razarPay = new window.Razorpay(optionsThird);
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
      <div className="pricing__container">
        <div className="pricing__content">
          <div className="pro-content">
            <h2>Ready to get Started ?</h2>
            <p>choose a plan to tailored to your needs</p>
          </div>

          <div>
            <div className="product-card">
              <div className="card1">
                <div className="color-hover">
                  <div className="head">
                    <i class="bx bx-laptop"></i> Wonder POS 10
                  </div>
                </div>
                <div className="color-hover">
                  <div className="para">Perfect to get started</div>
                </div>
                <div className="color-hover">
                  <div className="amount">
                    <span> INR </span> 2000 <p> per month </p>
                  </div>
                </div>

                <button className="login1">Try 7 days for free</button>

                <div className="card__footer">
                  <div className="card__title">Lite Includes:</div>
                  <div className="p1">
                    <i class="bx bx-chevron-right"></i>
                    <p>CMS integration</p>
                  </div>
                  <div className="p1">
                    <i class="bx bx-chevron-right"></i>
                    <p>Email and SMS reminders</p>
                  </div>

                  <div className="p1">
                    <i class="bx bx-chevron-right"></i>
                    <p>Customer support</p>
                  </div>
                  <button
                    className="btn__seemore"
                    onClick={() => openPayModalFirst(optionsFirst)}
                  >
                    See all feature
                  </button>
                </div>
              </div>

              <div className="card1">
                <div className="head">
                  <i class="bx bx-laptop"></i> Wonder POS 10
                </div>
                <div className="para">Best for professionals</div>
                <div className="amount">
                  <span> INR </span> 5000 <p> per 3 month </p>
                </div>

                <button className="login1">Get started</button>

                <div className="card__footer">
                  <div className="card__title">Lite Includes:</div>
                  <div className="p1">
                    <i class="bx bx-chevron-right"></i>
                    <p>100+ integration</p>
                  </div>
                  <div className="p1">
                    <i class="bx bx-chevron-right"></i>
                    <p>chat widget</p>
                  </div>

                  <div className="p1">
                    <i class="bx bx-chevron-right"></i>
                    <p>Templates library</p>
                  </div>

                  <button
                    className="btn__seemore"
                    onClick={() => openPayModalSecond(optionsSecond)}
                  >
                    See all feature
                  </button>
                </div>
              </div>

              <div className="card1">
                <div className="head">
                  <i class="bx bx-laptop"></i> Wonder POS 10
                </div>
                <div className="para">Toolest for hard players</div>
                <div className="amount">
                  <span> INR </span> 7000 <p> Annualy </p>
                </div>

                <button className="login1">Get started</button>

                <div className="card__footer">
                  <div className="card__title">Lite Includes:</div>
                  <div className="p1">
                    <i class="bx bx-chevron-right"></i>
                    <p>Daily performance reports</p>
                  </div>

                  <div className="p1">
                    <i class="bx bx-chevron-right"></i>
                    <p>Artificial intelligence</p>
                  </div>

                  <div className="p1">
                    <i class="bx bx-chevron-right"></i>
                    <p>Marketing tools & automations</p>
                  </div>

                  <button
                    className="btn__seemore"
                    onClick={() => openPayModalThird(optionsThird)}
                  >
                    See all feature
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PaymentDesign;

