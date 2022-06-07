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
          text="Purchase is completed, please check your
                balance in your crypto wallet"
          button1="BUY NOW"
          button2="GOTO USD"
        />
      }
      Footer={<Footer />}
    />
  );
};

export default index;
