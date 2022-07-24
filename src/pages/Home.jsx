import React from "react";
import Footer from "../components/Footer/Footer";
import LeftSideBar from "../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../components/RighSidebar/RightSideBar";
import SeriesHome from "../Routes/SeriesHome/SeriesHome";
const Home = () => {
  return (
    <>
      <div className={styles.homeflex}>
        <LeftSideBar />
        <RightSideBar />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
