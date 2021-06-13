CREATE SCHEMA libros;

USE libros;

CREATE TABLE usuarios(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    telefono VARCHAR (255) NOT NULL,
    fecha DATE
    
);

CREATE TABLE productos(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(255) NOT NULL,
    nombreProducto VARCHAR(50) NOT NULL,
	createdAt DATETIME,
    usuario_id INT UNSIGNED NOT NULL,
	FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
    
);

CREATE TABLE comentarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    comentario TEXT,
	createdAt DATETIME,
    producto_id INT UNSIGNED NOT NULL,
    usuario_id INT UNSIGNED NOT NULL,
	FOREIGN KEY (producto_id) REFERENCES productos (id),
	FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
    
);


INSERT INTO usuarios
VALUES
(DEFAULT, "Yoel", "Park", "Yoel@gmail.com","juancito123","1551726273", "2018-09-11"),
(DEFAULT, "Maca", "Armijo", "Macaar@gmail.com","macaa67","1553429263", "2019-01-12"),
(DEFAULT, "Ale", "Vivone", "alev@gmail.com","program3445","1559236684" ,"2020-04-15"),
(DEFAULT, "Lucas", "Lee", "ll@gmail.com","elrobot", "1554896256","2020-06-20"),
(DEFAULT, "Camila", "Escontrela", "camii@gmail.com","lalala222", "1554437221","2021-08-10");

INSERT INTO Productos
VALUES
(DEFAULT, "imagen", "La tia cosima", DEFAULT ,1),
(DEFAULT, "imagen", "Los siete mardiso de Evelyn Hugo", DEFAULT,2),
(DEFAULT, "imagen", "Harry potter y la piedra filosofal",DEFAULT, 3),
(DEFAULT, "imagen", "Mi camino",DEFAULT,4 ),
(DEFAULT, "imagen", "El duelo", DEFAULT,5),
(DEFAULT, "imagen", "Soltar para ser feliz",DEFAULT, 1),
(DEFAULT, "imagen", "Asesino de Brujas", DEFAULT,2),
(DEFAULT, "imagen", "En el limbo", DEFAULT,3),
(DEFAULT, "imagen", "Magnetizado",DEFAULT,4),
(DEFAULT, "imagen", "Las primas", DEFAULT,5);

INSERT INTO comentarios
VALUES
(DEFAULT, "muy buen libro", "2020-08-11",1,1),
(DEFAULT, "no me gusto", "2020-08-11",1,1),
(DEFAULT, "aburrido", "2020-08-11",1,1),
(DEFAULT, "no me gusto mucho", "2020-08-11",1,1),
(DEFAULT, "la trama no me atrapa", "2020-08-11",2,1),
(DEFAULT, "no me gusto el final", "2020-08-11",2,1),
(DEFAULT, "la trama no me atrapa", "2020-08-11",2,1),
(DEFAULT, "no me gusto el final","2020-08-11",2,1),
(DEFAULT, "la trama es muy interesante", "2020-08-11",3,1),
(DEFAULT, "una locura","2020-08-11",3,1),
(DEFAULT, "me gustaria que sea mas largo", "2020-08-11",3,2),
(DEFAULT, "no tiene correlación", "2020-08-11",3,2),
(DEFAULT, "muy repetitivo", "2020-08-11",4,2),
(DEFAULT, "fantastico", "2020-08-11",4,2),
(DEFAULT, "el mejor libro que mis ojos leyeron", "2020-08-11",4,2),
(DEFAULT, "lo tiene todo", "2020-08-11",4,2),
(DEFAULT, "la trama no es de mi estilo", "2020-08-11", 5,2),
(DEFAULT, "una buena idea mal ejecutada","2020-08-11",5,2),
(DEFAULT, "mque aburrido!!", "2020-08-11",5,2),
(DEFAULT, "un gasto de tiempo","2020-08-11",5,2),
(DEFAULT, "la trama es muy interesante y atrapante", "2020-08-11",6,3),
(DEFAULT, "muy bueno todo", "2020-08-11",6,3),
(DEFAULT, "malisimo", "2020-08-11",6,3),
(DEFAULT, "malo", "2020-08-11",6,3),
(DEFAULT, "es muy buenoo", "2020-08-11",7,3),
(DEFAULT, "todo perfecto", "2020-08-11",7,3),
(DEFAULT, "de lo mejor", "2020-08-11",7,3),
(DEFAULT, "me encantaron los personajes", "2020-08-11",7,3),
(DEFAULT, "que buen libro", "2020-08-11",8,3),
(DEFAULT, "wow es muy atrapante", "2020-08-11",8,4),
(DEFAULT, "me lo termine en 2 dias", "2020-08-11",8,4),
(DEFAULT, "muy recomendable", "2020-08-11",8,4),
(DEFAULT, "la trama no me atrapa pero no del todo", "2020-08-11",9,4),
(DEFAULT, "es buenisimo", "2020-08-11",9,5),
(DEFAULT, "mas de lo mismo", "2020-08-11",9,5),
(DEFAULT, "mal redactado", "2020-08-11",9,5),
(DEFAULT, "lo mejor que he visto", "2020-08-11",10,5),
(DEFAULT, "ngran libro, un clásico", "2020-08-11",10,5),
(DEFAULT, "tremendo libro", "2020-08-11",10,5),
(DEFAULT, "una locura", "2020-08-11",10,5);
