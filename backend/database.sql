CREATE TABLE
    IF NOT EXISTS Stone (
        id INT AUTO_INCREMENT,
        name VARCHAR(255),
        description TEXT,
        color VARCHAR(255),
        origin VARCHAR(255),
        hardness INT,
        image_url VARCHAR(255),
        PRIMARY KEY(id)
    );

CREATE TABLE
    IF NOT EXISTS User (
        id INT AUTO_INCREMENT,
        name VARCHAR(255),
        email VARCHAR(255),
        password_hash VARCHAR(255),
        role VARCHAR(255),
        PRIMARY KEY(id)
    );

INSERT INTO
    Stone (
        name,
        description,
        color,
        origin,
        hardness,
        image_url
    )
VALUES (
        'Ruby',
        'A red precious gemstone that is one of the traditional cardinal gems.',
        'Red',
        'Myanmar',
        9,
        'https://example.com/images/ruby.jpg'
    );