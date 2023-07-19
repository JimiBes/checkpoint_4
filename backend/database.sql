CREATE TABLE
    IF NOT EXISTS stone (
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
    IF NOT EXISTS user (
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
        'https://www.123ambre.com/wp-content/uploads/2021/05/rubis-pierre.jpg'
    ), (
        'Emerald',
        'A green variety of beryl, a mineral species that also includes aquamarine.',
        'Green',
        'Colombia',
        7.5,
        'https://www.123ambre.com/wp-content/uploads/2021/06/emeraude.jpg'
    ), (
        'Diamond',
        'The hardest known natural material and is often used in industrial cutting and drilling tools.',
        'Clear',
        'South Africa',
        10,
        'https://www.123ambre.com/wp-content/uploads/2021/04/diamant-pierre.jpg'
    ), (
        'Sapphire',
        'Typically blue, but natural fancy sapphires also occur in yellow, purple, orange, and green colors.',
        'Blue',
        'Sri Lanka',
        9,
        'https://www.123ambre.com/wp-content/uploads/2021/05/saphir.jpg'
    ), (
        'Amethyst',
        'A violet variety of quartz often used in jewelry.',
        'Purple',
        'Brazil',
        7,
        'https://www.123ambre.com/wp-content/uploads/2020/04/pierre-amethyste.jpg'
    ), (
        'Opal',
        'Characterized by its unique display of flashing rainbow colors called play-of-color.',
        'Multicolor',
        'Australia',
        5.5,
        'https://www.123ambre.com/wp-content/uploads/2020/10/opale.jpg'
    );