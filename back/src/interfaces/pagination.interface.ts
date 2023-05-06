import { iAdvertisementRes } from "./advertisements.interface";

type iPaginatedResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  advertisements: iAdvertisementRes[];
};

export default iPaginatedResponse;
