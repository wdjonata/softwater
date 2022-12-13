-- CreateTable
CREATE TABLE "owner" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flowmeter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "owner_Id" TEXT NOT NULL,
    "address_Id" TEXT NOT NULL,

    CONSTRAINT "flowmeter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "consumption" INTEGER NOT NULL,
    "flowmeter_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "owner_email_key" ON "owner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "flowmeter_address_Id_key" ON "flowmeter"("address_Id");

-- AddForeignKey
ALTER TABLE "flowmeter" ADD CONSTRAINT "flowmeter_owner_Id_fkey" FOREIGN KEY ("owner_Id") REFERENCES "owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flowmeter" ADD CONSTRAINT "flowmeter_address_Id_fkey" FOREIGN KEY ("address_Id") REFERENCES "address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_flowmeter_id_fkey" FOREIGN KEY ("flowmeter_id") REFERENCES "flowmeter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
