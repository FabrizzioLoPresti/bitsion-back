-- CreateTable
CREATE TABLE "Clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombrecompleto" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "estado" BOOLEAN NOT NULL,
    "maneja" BOOLEAN,
    "lentes" BOOLEAN,
    "diabetico" BOOLEAN,
    "enfermedad" TEXT
);
