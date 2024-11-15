import prisma from "@/prisma";
import { AirPolutionData } from "@prisma/client";

export const createAirPolutionService = async (body: AirPolutionData) => {
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
