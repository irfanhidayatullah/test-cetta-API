import prisma from "@/prisma";
import { AirPolutionData } from "@prisma/client";

export const createAirPolutionService = async (
  body: AirPolutionData,
  userId: number
) => {
  try {
    const {
      aqiCategory,
      aqiValue,
      city,
      coAqiCategory,
      coAqiValue,
      country,
      no2AqiCategory,
      no2AqiValue,
      ozoneAqiCategory,
      ozoneAqiValue,
      pm25AqiCategory,
      pm25AqiValue,
    } = body;

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

    const existingAirPolution = await prisma.airPolutionData.findFirst({
      where: { city, country },
    });

    if (existingAirPolution) {
      throw new Error("Air Polution already exist");
    }
    const newAirPolution = await prisma.airPolutionData.create({
      data: {
        aqiCategory,
        aqiValue,
        city,
        coAqiCategory,
        coAqiValue,
        country,
        no2AqiCategory,
        no2AqiValue,
        ozoneAqiCategory,
        ozoneAqiValue,
        pm25AqiCategory,
        pm25AqiValue,
      },
    });
    return {
      message: "Create Air Polution Success",
      data: newAirPolution,
    };
  } catch (error) {
    throw error;
  }
};
