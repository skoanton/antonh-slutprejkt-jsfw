import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="h-screen flex flex-col gap-5 items-center justify-center">
      <p className="text-primary-foreground text-4xl text-center">
        {" "}
        Opps! You should not be here
      </p>
      <Link className="text-primary-foreground text-4xl underline" to="/">
        Go Back
      </Link>
    </main>
  );
};

export default ErrorPage;
