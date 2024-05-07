import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

import { useNavigate } from "react-router-dom";

type SearchBarProps = {};

const SearchBar = ({}: SearchBarProps) => {
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${e.currentTarget.search.value}`);
  };
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <section className="w-full">
        <form
          onSubmit={handleSearch}
          className="w-full p-4 flex flex-col items-center gap-4"
        >
          <Input className="bg-secondary" type="text" name="search" />
          <Button type="submit" variant="secondary" className="w-2/4">
            Search
          </Button>
        </form>
      </section>
    </main>
  );
};

export default SearchBar;
