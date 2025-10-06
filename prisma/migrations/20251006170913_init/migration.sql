-- CreateTable
CREATE TABLE "bruxos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "casa" TEXT NOT NULL,
    "patrono" TEXT,
    "anoMatricula" INTEGER NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "creatdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bruxos_pkey" PRIMARY KEY ("id")
);
