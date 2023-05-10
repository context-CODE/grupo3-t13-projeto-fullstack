import { Request } from "express";
import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import { iAdvertisementEntity } from "../../interfaces/advertisements.interface";
import "dotenv/config";
import { PathAPI } from "../../server";
import iPaginatedResponse from "../../interfaces/pagination.interface";
import { advertisementListResSchema } from "../../schemas/advertisement.schema";

const listAdvertisementService = async (
  pagination: Request["pagination"]
): Promise<iPaginatedResponse> => {
  let previous = "";

  const advertisementRepository: iAdvertisementEntity =
    AppDataSource.getRepository(Advertisement);
  const [advertisements, count] = await advertisementRepository.findAndCount({
    skip: pagination.offset,
    take: pagination.limit,
    relations: {
      user: true,
      comments: {
        user: true,
      },
    },
    order: {
      comments: {
        created_at: {
          direction: "asc",
        },
      },
    },
  });

  if (pagination.offset == 0) {
    previous = "null";
  } else if (pagination.offset > 0 && pagination.offset < pagination.limit) {
    previous = `${PathAPI}}/advertisements/?limit=${pagination.limit}&offset=0`;
  } else {
    previous = `${PathAPI}}/advertisements/?limit=${pagination.limit}&offset=${
      pagination.offset - pagination.limit
    }`;
  }

  const next = `${PathAPI}/advertisements/?limit=${pagination.limit}&offset=${
    pagination.offset + pagination.limit
  }`;

  const resAdvertisement = advertisementListResSchema.parse(advertisements);

  return {
    count,
    next,
    previous,
    advertisements: resAdvertisement,
  } as iPaginatedResponse;
};

export default listAdvertisementService;
