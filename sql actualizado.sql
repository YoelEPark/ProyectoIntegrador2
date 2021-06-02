CREATE SCHEMA libros;

USE libros;

CREATE TABLE usuarios(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(45) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdAt DATE,
    updatedAt DATE
);

CREATE TABLE productos(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(255) NOT NULL,
    nombreProducto VARCHAR(50) NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    usuarioId INT UNSIGNED NOT NULL,
	FOREIGN KEY (usuarioId) REFERENCES usuarios (id)
    
);

CREATE TABLE comentarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    comentario TEXT,
	createdAt DATE,
	updatedAt DATE,
    productoId INT UNSIGNED NOT NULL,
    usuarioId INT UNSIGNED NOT NULL,
	FOREIGN KEY (productoId) REFERENCES productos (id),
	FOREIGN KEY (usuarioId) REFERENCES usuarios (id)
    
);


INSERT INTO usuarios
VALUES
(DEFAULT, "Yoel", "Park", "Yoel@gmail.com","juancito123", DEFAULT, DEFAULT),
(DEFAULT, "Maca", "Armijo", "Macaar@gmail.com","macaa67", DEFAULT, DEFAULT),
(DEFAULT, "Ale", "Vivone", "alev@gmail.com","program3445", DEFAULT, DEFAULT),
(DEFAULT, "Lucas", "Lee", "ll@gmail.com","elrobot", DEFAULT, DEFAULT),
(DEFAULT, "Camila", "Escontrela", "camii@gmail.com", DEFAULT, DEFAULT);

INSERT INTO Productos
VALUES
(DEFAULT, "imagen", "La tia cosima", DEFAULT , DEFAULT ,1),
(DEFAULT, "imagen", "Los siete mardiso de Evelyn Hugo", DEFAULT, DEFAULT ,2),
(DEFAULT, "imagen", "Harry potter y la piedra filosofal",DEFAULT, DEFAULT , 3),
(DEFAULT, "imagen", "Mi camino",DEFAULT, DEFAULT ,4 ),
(DEFAULT, "imagen", "El duelo", DEFAULT, DEFAULT ,5),
(DEFAULT, "imagen", "Soltar para ser feliz",DEFAULT, DEFAULT , 1),
(DEFAULT, "imagen", "Asesino de Brujas", DEFAULT, DEFAULT ,2),
(DEFAULT, "imagen", "En el limbo", DEFAULT, DEFAULT ,3),
(DEFAULT, "imagen", "Magnetizado",DEFAULT, DEFAULT ,4),
(DEFAULT, "imagen", "Las primas", DEFAULT, DEFAULT ,5);

INSERT INTO comentarios
VALUES
(DEFAULT, "muy buen libro", DEFAULT, DEFAULT,1,1),
(DEFAULT, "no me gusto", DEFAULT, DEFAULT,1,1),
(DEFAULT, "aburrido", DEFAULT, DEFAULT,1,1),
(DEFAULT, "no me gusto mucho", DEFAULT, DEFAULT,1,1),
(DEFAULT, "la trama no me atrapa", DEFAULT, DEFAULT,2,1),
(DEFAULT, "no me gusto el final", DEFAULT, DEFAULT,2,1),
(DEFAULT, "la trama no me atrapa", DEFAULT, DEFAULT,2,1),
(DEFAULT, "no me gusto el final", DEFAULT, DEFAULT,2,1),
(DEFAULT, "la trama es muy interesante", DEFAULT, DEFAULT,3,1),
(DEFAULT, "una locura", DEFAULT, DEFAULT,3,1),
(DEFAULT, "me gustaria que sea mas largo",DEFAULT, DEFAULT,3,2),
(DEFAULT, "no tiene correlación", DEFAULT, DEFAULT,3,2),
(DEFAULT, "muy repetitivo", DEFAULT, DEFAULT,4,2),
(DEFAULT, "fantastico", DEFAULT, DEFAULT,4,2),
(DEFAULT, "el mejor libro que mis ojos leyeron", DEFAULT, DEFAULT,4,2),
(DEFAULT, "lo tiene todo", DEFAULT, DEFAULT,4,2),
(DEFAULT, "la trama no es de mi estilo",DEFAULT, DEFAULT, 5,2),
(DEFAULT, "una buena idea mal ejecutada",DEFAULT, DEFAULT,5,2),
(DEFAULT, "mque aburrido!!", DEFAULT, DEFAULT,5,2),
(DEFAULT, "un gasto de tiempo",DEFAULT, DEFAULT,5,2),
(DEFAULT, "la trama es muy interesante y atrapante", DEFAULT, DEFAULT,6,3),
(DEFAULT, "muy bueno todo", DEFAULT, DEFAULT,6,3),
(DEFAULT, "malisimo", DEFAULT, DEFAULT,6,3),
(DEFAULT, "malo", DEFAULT, DEFAULT,6,3),
(DEFAULT, "es muy buenoo", DEFAULT, DEFAULT,7,3),
(DEFAULT, "todo perfecto", DEFAULT, DEFAULT,7,3),
(DEFAULT, "de lo mejor", DEFAULT, DEFAULT,7,3),
(DEFAULT, "me encantaron los personajes", DEFAULT, DEFAULT,7,3),
(DEFAULT, "que buen libro", DEFAULT, DEFAULT,8,3),
(DEFAULT, "wow es muy atrapante", DEFAULT, DEFAULT,8,4),
(DEFAULT, "me lo termine en 2 dias", DEFAULT, DEFAULT,8,4),
(DEFAULT, "muy recomendable", DEFAULT, DEFAULT,8,4),
(DEFAULT, "la trama no me atrapa pero no del todo", DEFAULT, DEFAULT,9,4),
(DEFAULT, "es buenisimo", DEFAULT, DEFAULT,9,5),
(DEFAULT, "mas de lo mismo", DEFAULT, DEFAULT,9,5),
(DEFAULT, "mal redactado", DEFAULT, DEFAULT,9,5),
(DEFAULT, "lo mejor que he visto", DEFAULT, DEFAULT,10,5),
(DEFAULT, "un gran libro, un clásico", DEFAULT, DEFAULT,10,5),
(DEFAULT, "tremendo libro", DEFAULT, DEFAULT,10,5),
(DEFAULT, "una locura", DEFAULT, DEFAULT,10,5);