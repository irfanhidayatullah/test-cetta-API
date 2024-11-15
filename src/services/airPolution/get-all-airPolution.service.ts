import { Prisma } from "@prisma/client";
import prisma from "../../prisma";

interface getAirPolutionsService {
  page: number;
  take: number;
  sortBy: string;
  sortOrder: string;
  search?: string;
}

export const getAllAirPolutionsService = async (
  query: getAirPolutionsService
) => {
  try {
    const { take, page, sortBy, sortOrder, search } = query;

    const whereClause: Prisma.AirPolutionDataWhereInput = {};

    if (search) {
      whereClause.city = { contains: search };
    }

    const airPolutions = await prisma.airPolutionData.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder },
    });

    if (!airPolutions) {
      throw new Error("Air Polutions not found");
    }

    const count = await prisma.airPolutionData.count({
      where: whereClause,
    });

    return {
      data: airPolutions,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
