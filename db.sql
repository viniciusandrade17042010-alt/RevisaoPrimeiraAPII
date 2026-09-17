CREATE DATABASE IF NOT EXISTS db_backend;

CREATE TABLE IF NOT EXISTS alunos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	curso VARCHAR(100) NOT NULL
);

INSERT INTO alunos (nome,curso)
VALUES
	("Bernardo","Desenvolvimento de sistemas"),
	("Camily","Banco de dados");	

SELECT id, nome, curso FROM alunos;