import prisma from "@/prisma";

export const deleteAirPolutionService = async (id: number, userId: number) => {
  try {
    if (!userId) {
      throw new Error(`User ${userId} not found`);
    }

    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.role !== "ADMIN") {
      throw new Error("User don't have access");
    }

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
