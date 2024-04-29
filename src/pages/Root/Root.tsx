import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

type RootProps = {};

const Root = ({}: RootProps) => {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
};

export default Root;
