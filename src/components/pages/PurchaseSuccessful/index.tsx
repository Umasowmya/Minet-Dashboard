import React from "react";
import Template from "../../templates/index";
import Navbar from "../../organisms/Navbar/index";
import Sidebar from "../../organisms/SideBar/index";
import Footer from "../../organisms/Footer/index";
import Success from "../../organisms/SuccessMolecule/index";

const index = () => {
  return (
    <Template
      Navbar={<Navbar />}
      Sidebar={<Sidebar />}
      Content={
        <Success
          text="Purchase is completed, please check your
                balance in your crypto wallet"
          button1="BUY NOW"
          button2="GOTO USD COIN"
        />
      }
      Footer={<Footer />}
    />
  );
};

export default index;
