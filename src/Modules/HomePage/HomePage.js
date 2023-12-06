import React, { Fragment, useContext } from "react";
import HomePageBanner from "./HomePageBanner";
import HomePageSection from "./HomePageSection";
import HomePageNewRelease from "./HomePageNewRelease";
import useStore from "Store/StoreContext";
import AuthContext from "Store/AuthContext";

const HomePage = () => {
  const { userRole } = useContext(AuthContext);

  if (userRole?.toLowerCase() === "admin") {
    return (
      <h3 className="text-center"> You Are Not Authorized To See This Page</h3>
    );
  } else {
    return (
      <Fragment>
        <HomePageBanner />
        <HomePageSection />
      </Fragment>
    );
  }
};

export default HomePage;
