import React, { Fragment } from "react";
import HomePageBanner from "./HomePageBanner";
import HomePageSection from "./HomePageSection";
import HomePageNewRelease from "./HomePageNewRelease";
import useStore from "Store/StoreContext";

const HomePage = () => {
  const { user } = useStore();
  const { userRole } = user;

  if (userRole.toLowerCase() === "admin") {
    return (
      <h3 className="text-center"> You Are Not Authorized To See This Page</h3>
    );
  } else {
    return (
      <Fragment>
        <HomePageBanner />
        <HomePageSection />
        <HomePageNewRelease />
      </Fragment>
    );
  }
};

export default HomePage;
