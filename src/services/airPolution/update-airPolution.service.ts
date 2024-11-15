import prisma from "@/prisma";
import { AirPolutionData } from "@prisma/client";

export const updateAirPolutionsService = async (
  id: number,
  body: Partial<AirPolutionData>
) => {
  try {
    const {
      aqiCategory,
      aqiValue,
      coAqiCategory,
      coAqiValue,
      no2AqiCategory,
      no2AqiValue,
      ozoneAqiCategory,
      ozoneAqiValue,
      pm25AqiCategory,
      pm25AqiValue,
    } = body;

    const existingAirPolutionId = await prisma.airPolutionData.findUnique({
      where: { id },
    });

    if (!existingAirPolutionId) {
      throw new Error("Air polution data id not found");
    }

    const updateAirPolutionData = await prisma.airPolutionData.update({
      where: { id },
      data: { ...body },
    });

    return {
      message: "Update air polution data success",
      data: updateAirPolutionData,
    };
  } catch (error) {
    throw error;
  }
};
