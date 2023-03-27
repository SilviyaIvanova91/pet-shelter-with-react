import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/pets";

export const petServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const res = await request.get(baseUrl);
    const pets = Object.values(res);

    return pets;
  };

  return {
    getAll,
  };
};
