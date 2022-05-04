DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    user_id     INTEGER     PRIMARY KEY,
    username    TEXT        UNIQUE          NOT NULL,
    pass        TEXT        NOT NULL
);

DROP TABLE IF EXISTS Posts;

CREATE TABLE Posts (
    post_id         INTEGER     PRIMARY KEY,
    author_id       INTEGER,
    created         TIMESTAMP   NOT NULL        DEFAULT     CURRENT_TIMESTAMP,
    title           TEXT        NOT NULL,
    description     TEXT        NOT NULL,
    FOREIGN KEY (author_id)
    REFERENCES Users (user_id)
        ON UPDATE CASCADE ON DELETE CASCADE
);
