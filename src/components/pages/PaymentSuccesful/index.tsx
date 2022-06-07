import React from "react";
import Template from "../../templates/index";
import HorizontalHeader from "../../organisms/HeaderH/index";
import VerticalHeader from "../../organisms/HeaderV/index";
import Footer from "../../organisms/Footer/index";
import Success from "../../organisms/SuccessMolecule/index";

const index = () => {
  return (
    <Template
      HorizontalHeader={<HorizontalHeader />}
      VerticalHeader={<VerticalHeader />}
      Content={
        <Success
          text="Sell is completed, please check your
                balance in your Rupee coin"
          button1="SELL NOW"
          button2="GO TO USD COIN"
        />
      }
      Footer={<Footer />}
    />
  );
};

export default index;
