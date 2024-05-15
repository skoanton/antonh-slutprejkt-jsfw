import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import { Toaster } from "@/components/ui/toaster";

const Root = () => {
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
