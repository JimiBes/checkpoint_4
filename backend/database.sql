CREATE TABLE
    IF NOT EXISTS stone (
        id INT AUTO_INCREMENT,
        name VARCHAR(255),
        description TEXT,
        color VARCHAR(255),
        origin VARCHAR(255),
        hardness VARCHAR(255),
        composition VARCHAR(255),
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
        composition,
        image_url
    )
VALUES (
        'Rubis',
        'Une précieuse gemme rouge qui est l''un des traditionnels "joyaux cardinaux".',
        'Rouge',
        'Myanmar',
        9,
        'Oxyde de chrome',
        'https://www.123ambre.com/wp-content/uploads/2021/05/rubis-pierre.jpg'
    ), (
        'Émeraude',
        'Une variété verte de béryl, une espèce minérale qui inclut également l''aigue-marine.',
        'Vert',
        'Colombie',
        7.5,
        'Chrome, Vanadium, Fer',
        'https://www.123ambre.com/wp-content/uploads/2021/06/emeraude.jpg'
    ), (
        'Diamant',
        'Le matériau naturel le plus dur connu et est souvent utilisé dans les outils industriels de coupe et de forage.',
        'Transparent',
        'Afrique du Sud',
        10,
        'Carbone pur',
        'https://www.123ambre.com/wp-content/uploads/2021/04/diamant-pierre.jpg'
    ), (
        'Saphir',
        'Typiquement bleu, mais les saphirs naturels fantaisie se présentent également en jaune, violet, orange et vert.',
        'Bleu',
        'Sri Lanka',
        9,
        'oxyde d''aluminium, titane, fer',
        'https://www.123ambre.com/wp-content/uploads/2021/05/saphir.jpg'
    ), (
        'Améthyste',
        'Une variété violette de quartz souvent utilisée en bijouterie.',
        'Violet',
        'Brésil',
        7,
        'Dioxyde de silicium',
        'https://www.123ambre.com/wp-content/uploads/2020/04/pierre-amethyste.jpg'
    ), (
        'Opale',
        'Caractérisée par son affichage unique de couleurs arc-en-ciel clignotantes appelé jeu de couleur.',
        'Multicolore',
        'Australie',
        5.5,
        'Dioxyde de silicium hydreux',
        'https://www.123ambre.com/wp-content/uploads/2020/10/opale.jpg'
    );
