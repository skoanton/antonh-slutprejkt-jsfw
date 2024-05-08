import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";

type RootProps = {};

const Root = ({}: RootProps) => {
  return (
    <>
      <TopNav />
      <Outlet />
      <Navbar />
    </>
  );
};

export default Root;
