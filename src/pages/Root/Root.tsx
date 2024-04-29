import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

type RootProps = {};

const Root = ({}: RootProps) => {
  return (
    <main className="h-screen">
      <Outlet />
      <Navbar />
    </main>
  );
};

export default Root;
