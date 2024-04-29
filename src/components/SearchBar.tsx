import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { fetchApi } from "@/services/fetchApi";
import { Link } from "react-router-dom";
import { useState } from "react";

type SearchBarProps = {};

const SearchBar = ({}: SearchBarProps) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.search.value);
    fetchApi(e.currentTarget.search.value);
  };
  return (
    <section className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSearch}
        className="w-full p-4 flex flex-col justify-center items-center gap-4"
      >
        <Input className="bg-secondary" type="text" name="search" />
        <Button type="submit" variant="secondary" className="w-2/4">
          Search
        </Button>
      </form>
    </section>
  );
};

export default SearchBar;
