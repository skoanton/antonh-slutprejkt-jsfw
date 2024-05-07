import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";

type RootProps = {};

const Root = ({}: RootProps) => {
  return (
    <>
      <TopNav />
      <main className="h-screen">
        <Outlet />
      </main>
      <Navbar />
    </>
  );
};

export default Root;
