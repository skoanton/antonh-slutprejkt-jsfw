import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

const searchSchema = z.object({
  searchString: z.string().min(1, "Please type a word first"),
});

const SearchBar = () => {
  const navigate = useNavigate();
  const [isSearchTitle, setIsSearchTitle] = useState(true);
  const searchForm = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    mode: "onSubmit",
    values: {
      searchString: "",
    },
  });

  const handleSearch = (data: z.infer<typeof searchSchema>) => {
    navigate(`/search/${data.searchString}`);
  };

  return (
    <main className="h-[calc(100vh-10rem)] flex items-center">
      <section className="w-full">
        <section className="flex items-center justify-center gap-4">
          <label className="text-primary-foreground" htmlFor="searchType">
            Title
          </label>
          <input type="radio" name="searchType" checked={isSearchTitle} />
          <label className="text-primary-foreground">Author</label>
          <input type="radio" name="searchType" checked={!isSearchTitle} />
        </section>
        <Form {...searchForm}>
          <form
            onSubmit={searchForm.handleSubmit(handleSearch)}
            className="w-full flex flex-col items-center gap-2"
          >
            <FormField
              control={searchForm.control}
              name="searchString"
              render={({ field }) => (
                <FormItem className="w-3/4">
                  <FormControl>
                    <Input
                      className="text-primary bg-secondary"
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />
            <Button type="submit" variant="secondary" className="w-2/4">
              Search
            </Button>
          </form>
        </Form>
      </section>
    </main>
  );
};

export default SearchBar;
