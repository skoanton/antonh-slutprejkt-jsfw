import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/ui/BookCard";

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <h1 className="uppercase text-5xl text-primary-foreground text-center">
        Book library
      </h1>
      <SearchBar />
      {/* <BookCard
        searchresult={{
          author_key: [],
          author_name: [],
          ebook_access: "",
          ebook_count_i: 0,
          edition_count: 0,
          edition_key: [],
          first_publish_year: 0,
          has_fulltext: false,
          isbn: [],
          key: "",
          language: [],
          last_modified_i: 0,
          lcc: [],
          lccn: [],
          number_of_pages_median: 0,
          oclc: [],
          public_scan_b: false,
          publish_date: [],
          publish_place: [],
          publish_year: [],
          publisher: [],
          seed: [],
          title: "",
          title_suggest: "",
          title_sort: "",
          type: "",
          publisher_facet: [],
          _version_: 0,
          lcc_sort: "",
          author_facet: [],
        }}
      /> */}
    </>
  );
};

export default HomePage;
