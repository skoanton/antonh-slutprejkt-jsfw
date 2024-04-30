export type SearchResult = {
    numFound:      number;
    start:         number;
    numFoundExact: boolean;
    docs:          Doc[];
    num_found:     number;
    q:             string;
    offset:        null;
}

export type Doc = {
    author_key:             string[];
    author_name:            string[];
    ebook_access:           string;
    ebook_count_i:          number;
    edition_count:          number;
    edition_key:            string[];
    first_publish_year:     number;
    has_fulltext:           boolean;
    isbn:                   string[];
    key:                    string;
    language:               string[];
    last_modified_i:        number;
    lcc:                    string[];
    lccn:                   string[];
    number_of_pages_median: number;
    oclc:                   string[];
    public_scan_b:          boolean;
    publish_date:           string[];
    publish_place:          string[];
    publish_year:           number[];
    publisher:              string[];
    seed:                   string[];
    title:                  string;
    title_suggest:          string;
    title_sort:             string;
    type:                   string;
    publisher_facet:        string[];
    _version_:              number;
    lcc_sort:               string;
    author_facet:           string[];
}