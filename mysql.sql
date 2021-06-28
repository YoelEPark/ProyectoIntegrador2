CREATE SCHEMA libros;

USE libros;

CREATE TABLE users(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    birthday VARCHAR(50),
    createdAt DATE,
    updatedAt DATE
);

CREATE TABLE products(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(255) NOT NULL,
    productName VARCHAR(100) NOT NULL,
    productDescription VARCHAR(300) NOT NULL,
    createdAt DATE,
    updatedAt DATE,
    userId INT UNSIGNED NOT NULL,
	FOREIGN KEY (userId) REFERENCES users (id)
    
);

CREATE TABLE comments(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    comment VARCHAR(255),
	createdAt DATE,
	updatedAt DATE,
    productId INT UNSIGNED NOT NULL,
    userId INT UNSIGNED NOT NULL,
	FOREIGN KEY (productId) REFERENCES products (id),
	FOREIGN KEY (userId) REFERENCES users (id)
    
);


INSERT INTO users
VALUES
(DEFAULT, "Yoel Park", "Yoel@gmail.com","juancito123","17-09-2001", DEFAUlt, DEFAULT),
(DEFAULT, "Maca Armijo", "Macaar@gmail.com","macaa67","10-09-2001", DEFAULT, DEFAULT),
(DEFAULT, "Ale Vivone", "alev@gmail.com","program3445","18-05-1990", DEFAULT, DEFAULT),
(DEFAULT, "Lucas Lee", "ll@gmail.com","elrobot","01-07-1996", DEFAULT, DEFAULT),
(DEFAULT, "Camila Escontrela", "camii@gmail.com", "123","11-6-01", DEFAULT, DEFAULT);

INSERT INTO products
VALUES
(DEFAULT, "programacion1.jpg", "La tia cosima","¿Puede el amor regalar una segunda oportunidad? Cósima es una mujer en la plenitud de la vida",DEFAULT , DEFAULT ,1),
(DEFAULT, "programacion2.jpg", "Los siete mardiso de Evelyn Hugo","Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar", DEFAULT, DEFAULT ,2),
(DEFAULT, "programacion3.jpg", "Harry potter y la piedra filosofal","Firenze, un centauro le explica a Harry que la sangre de unicornio le puede dar más vida",DEFAULT, DEFAULT , 3),
(DEFAULT, "programacion4.jpg", "Mi camino","La gente nos demanda más humildad, nos demanda un proyecto en serio",DEFAULT, DEFAULT ,4 ),
(DEFAULT, "programacion5.jpg", "El duelo","El Duelo es un territorio oscuro, misterioso, casi inaccesible. Una conmoción", DEFAULT, DEFAULT ,5),
(DEFAULT, "programacion6.jpg", "Soltar para ser feliz","Soltar es una palabra que está de moda. Con frecuencia escuchamos frases como: “Hay que soltar el enojo",DEFAULT, DEFAULT , 1),
(DEFAULT, "programacion7.jpg", "Asesino de Brujas","Unidos como uno para amarse, para honrarse o para arder. Dos años atrás, Louise le Blanc huyó", DEFAULT, DEFAULT ,2),
(DEFAULT, "programacion8.jpg", "En el limbo","on Ágilmente Estanislao Bachrach puso de moda la neurociencia. Con En el limbo -luego de años de investigación-", DEFAULT, DEFAULT ,3),
(DEFAULT, "programacion9.jpg", "Magnetizado","En un libro oscuro e inquietante, Carlos Busqued se adentra en la mente de un peculiar homicida. Cuatro asesinatos idénticos tuvieron en jaque a la policía de Buenos Aires en 1982",DEFAULT, DEFAULT ,4),
(DEFAULT, "programacion10.jpg", "Las primas","Historia de iniciación ambientada en unos equívocos años 40 que despliega el mundo tortuoso de una familia disfuncional de clase media baja de la ciudad de La Plata: una casa sin hombres y llena de mujeres, todas minusválidas, con alguna deformidad física, mental o imaginaria.", DEFAULT, DEFAULT ,5);

INSERT INTO comments
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