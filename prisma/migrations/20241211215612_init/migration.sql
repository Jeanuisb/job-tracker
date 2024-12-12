-- CreateTable
CREATE TABLE "JobApplication" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateApplied" DATETIME NOT NULL,
    "company" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "interview" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
