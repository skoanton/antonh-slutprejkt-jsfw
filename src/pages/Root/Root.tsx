import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import { Toaster } from "@/components/ui/toaster";

type RootProps = {};

const Root = ({}: RootProps) => {
  return (
    <>
      <TopNav />
      <Toaster />
      <Outlet />
      <Navbar />
    </>
  );
};

export default Root;
