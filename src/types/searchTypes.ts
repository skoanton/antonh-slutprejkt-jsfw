export type TitleSearchQueryResult = {
    numFound:      number;
    start:         number;
    numFoundExact: boolean;
    docs:          TitleSearchResult[];
    num_found:     number;
    q:             string;
    offset:        null;
}

export type TitleSearchResult = {
    author_key:                           string[];
    author_name:                          string[];
    cover_edition_key:                    string;
    cover_i:                              number;
    ddc:                                  string[];
    ebook_access:                         string;
    ebook_count_i:                        number;
    edition_count:                        number;
    edition_key:                          string[];
    first_publish_year:                   number;
    format:                               string[];
    has_fulltext:                         boolean;
    isbn:                                 string[];
    key:                                  string;
    language:                             string[];
    last_modified_i:                      number;
    lcc:                                  string[];
    lccn:                                 string[];
    lending_edition_s:                    string;
    lending_identifier_s:                 string;
    number_of_pages_median:               number;
    oclc:                                 string[];
    osp_count:                            number;
    printdisabled_s:                      string;
    seed:                                 string[];
    title:                                string;
    subject:                              string[];
    person:                               string[];
    ia_loaded_id:                         string[];
    ia_box_id:                            string[];
    ratings_average:                      number;
    ratings_sortable:                     number;
    ratings_count:                        number;
    ratings_count_1:                      number;
    ratings_count_2:                      number;
    ratings_count_3:                      number;
    ratings_count_4:                      number;
    ratings_count_5:                      number;
    readinglog_count:                     number;
    person_key:                           string[];
    subject_key:                          string[];
}
