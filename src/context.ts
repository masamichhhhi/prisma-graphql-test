import { PrismaClient } from "@prisma/client";
import { Request } from "express";

export interface Context {
  prisma: PrismaClient;
  request: Request;
}

export const prisma = new PrismaClient();
