DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;
USE exampledb;

CREATE TABLE posts(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100),
    category VARCHAR(100),
    quantity INTEGER(11),
    boxId INTEGER(11),
    PRIMARY KEY (id)
);

CREATE TABLE boxes(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	userId VARCHAR(100),
	PRIMARY KEY (id)
);


INSERT INTO posts (product_name, category, quantity, boxId)
VALUES ("Patagonia Jacket", "Clothing", 1, 1),
("Nalgene Bottle", "Outdoors", 1, 1),
("14er", "Outdoors", 1, 1),
("Local Bumper Stickers", "Accessories", 5, 1),
("Fixie Bike", "category5", 1, 1),
("Beanie", "category6", 1, 1),
("Hiking Leash For Dogs", "Clothing", 1, 1),
("Collapsible Water Bowl For Dogs", "Outdoors",1, 1),
("Golden Retriever Puppy", "Outdoors", 2, 1),
("Subaru Outback", "Accessories", 1, 1),
("Broncos Gear", "category5", 1, 1),
("Camelpak", "category6", 1, 1),
("Gold Nugget", "Outdoors", 10, 1),
("Pair of Skis", "Outdoors", 2, 1),
("Edible", "Accessories", 15, 1),
("Meal Voucher for Case Bonita", "category5", 1, 1),
("A Tow", "category6", 1, 1),
("Sun Screen Dispenser", "Outdoors", 1, 1),
("Donation to the Wild Life Foundation", "Accessories", 1, 1),
("Coors Memorabilia", "category5", 1, 1),

("Patagonia Jacket", "Clothing", 1, 2),
("Nalgene Bottle", "Outdoors", 1, 2),
("14er", "Outdoors", 1, 2),
("Local Bumper Stickers", "Accessories", 5, 2),
("Fixie Bike", "category5", 1, 2),
("Beanie", "category6", 1, 2),
("Hiking Leash For Dogs", "Clothing", 1, 2),
("Collapsible Water Bowl For Dogs", "Outdoors",1, 2),
("Golden Retriever Puppy", "Outdoors", 2, 2),
("Subaru Outback", "Accessories", 1, 2),
("Broncos Gear", "category5", 1, 2),
("Camelpak", "category6", 1, 2),
("Gold Nugget", "Outdoors", 10, 2),
("Pair of Skis", "Outdoors", 2, 2),
("Edible", "Accessories", 15, 2),
("Meal Voucher for Case Bonita", "category5", 1, 2),
("A Tow", "category6", 1, 2),
("Sun Screen Dispenser", "Outdoors", 1, 2),
("Donation to the Wild Life Foundation", "Accessories", 1, 2),
("Coors Memorabilia", "category5", 1, 2);


INSERT INTO boxes (userId)
VALUES("md5uJhelS8RR0ZtwTq7yXcQRsOD3"),
("BurpvHByXeSu35zrW0Q0OgSqUAB2"),
("fNUrX83CTVcBYSNQFafnWNGhETS2");

SELECT * FROM posts;
SELECT * FROM boxes;

