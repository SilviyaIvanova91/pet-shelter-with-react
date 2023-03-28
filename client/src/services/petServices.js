import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/pets";

export const petServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const res = await request.get(baseUrl);
    const pets = Object.values(res);

    return pets;
  };

  const create = async (petData) => {
    const result = await request.post(baseUrl, petData);

    console.log(result);

    return result;
  };

  return {
    getAll,
    create,
  };
};
