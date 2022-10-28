import React, { Fragment, useState } from "react";
import "./Home.scss";
import axios from "axios";

import useInterval from "use-interval";

import ArrowUp from "@mui/icons-material/ArrowUpwardOutlined";
import Person from "@mui/icons-material/PersonOutlineOutlined";
import Eye from "@mui/icons-material/VisibilityOutlined";
import Sales from "@mui/icons-material/AttachMoneyOutlined";

//
import Header from "../../shared/Header/Header";
import SubHeader from "../../shared/SubHeader/SubHeader";
import Dashboard from "../Dashboard";
import Footer from "../../shared/Footer/Footer";
import Loading from "../../shared/Loading/Loading";

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useInterval(() => {
    setIsLoading(true);
  }, 1000);

  return (
    <Fragment>
      {!isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <SubHeader />
          <Dashboard />
          <Footer />
        </>
      )}
    </Fragment>
  );
}
export default Home;

