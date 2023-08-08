CREATE TABLE IF NOT EXISTS consumable (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    reference VARCHAR(255),
    description VARCHAR(255),
    price VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    role VARCHAR(255),
    PRIMARY KEY(id)
);

INSERT INTO consumable (name, reference, description, price)
VALUES 
    ('Liquide de refroidissement jaune 4 saisons (fût)', 'EX25210', '(Excell -25)', '160'),
    ('Liquide de refroidissement jaune 4 saisons (bidon)', 'EX25005', '(Excell -25), pour 3 cartons minimum', '4'),
    ('Liquide de refroidissement rose (fût)', 'EX37210', '(Excell -37)', '180'),
    ('Liquide de refroidissement rose (bidon)', 'EX37005', '(Excell -37), pour 3 cartons minimum', '5'),
    ('Lave glace spécial été (fût)', 'LG00210', NULL, '83'),
    ('Lave glace spécial été (bidon)', 'LG00005', NULL, '2.5'),
    ('AD Blue (fût)', 'ADBL210', NULL, '130'),
    ('AD Blue (bidon)', 'ADBL010BV', NULL, '8'),
    ('Nettoyant freins (bouteille)', NULL, 'Par lot de 3 cartons (36)', '1.63');
