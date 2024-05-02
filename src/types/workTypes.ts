export type Work = {
    description:        string;

    title:              string;
    covers:             number[];
    subject_places:     string[];
    first_publish_date: string;
    subject_people:     string[];
    key:                string;
    authors:            Author[];

    subjects:           string[];
    type:               Type;
    subject_times:      string[];
    latest_revision:    number;
    revision:           number;


}

export type Author = {
    author: Type;
    type:   Type;
}

export type Type = {
    key: string;
}
