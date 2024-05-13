import { LoaderCircle } from "lucide-react";

type SpinnerProps = {};

const Spinner = ({}: SpinnerProps) => {
  return (
    <main className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <LoaderCircle className="text-secondary w-12 h-12 animate-spin " />
    </main>
  );
};

export default Spinner;
