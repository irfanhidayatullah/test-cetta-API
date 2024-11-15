import prisma from "@/prisma";

export const deleteAirPolutionService = async (id: number) => {
  try {
    const airPolutionId = await prisma.airPolutionData.findFirst({
      where: { id },
    });

    if (!airPolutionId) {
      throw new Error("Air Polution id not found");
    }

    await prisma.airPolutionData.delete({
      where: { id },
    });
  } catch (error) {
    throw error;
  }
};
