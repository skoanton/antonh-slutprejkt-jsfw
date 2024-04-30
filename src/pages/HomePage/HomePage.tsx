import SearchBar from "@/components/SearchBar";

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <h1 className="uppercase text-5xl text-primary-foreground text-center">
        Book library
      </h1>
      <SearchBar />
    </>
  );
};

export default HomePage;
