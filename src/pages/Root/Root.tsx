import { Outlet } from "react-router-dom";

type RootProps = {};

const Root = ({}: RootProps) => {
  return (
    <>
      <div>Root</div>
      <Outlet />
    </>
  );
};

export default Root;
