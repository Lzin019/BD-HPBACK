/*
  Warnings:

  - You are about to drop the column `creatdAt` on the `bruxos` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `bruxos` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `bruxos` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `bruxos` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `bruxos` table. All the data in the column will be lost.
  - Added the required column `anoMatricula` to the `bruxos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `casa` to the `bruxos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `bruxos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `varinha` to the `bruxos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bruxos" DROP COLUMN "creatdAt",
DROP COLUMN "descricao",
DROP COLUMN "preco",
DROP COLUMN "tipo",
DROP COLUMN "updateAt",
ADD COLUMN     "anoMatricula" INTEGER NOT NULL,
ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "casa" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "patrono" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "varinha" TEXT NOT NULL;
