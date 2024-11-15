import prisma from "@/prisma";

export const getAirPolutionService = async (id: number) => {
  try {
    const airPolution = await prisma.airPolutionData.findUnique({
      where: { id },
    });

    if (!airPolution) {
      throw new Error("Invalid air polution id");
    }

    return airPolution;
  } catch (error) {
    throw error;
  }
};
