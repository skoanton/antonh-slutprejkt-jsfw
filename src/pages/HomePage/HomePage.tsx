import SearchBar from "@/components/SearchBar";

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return (
    <main className="h-[calc(100vh-10rem)]">
      <SearchBar />
    </main>
  );
};

export default HomePage;
