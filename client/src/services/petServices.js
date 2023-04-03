import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/pets";

export const petServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const res = await request.get(baseUrl);
    const pets = Object.values(res);

    return pets;
  };

  const getOne = async (petId) => {
    const result = await request.get(`${baseUrl}/${petId}`);

    return result;
  };

  const create = async (petData) => {
    const result = await request.post(baseUrl, petData);
    return result;
  };

  const edit = (petId, data) => request.put(`${baseUrl}/${petId}`, data);

  const deletePet = (petId) => request.delete(`${baseUrl}/${petId}`);

  const createComment = async (petId, commentValues) => {
    const pet = await request.get(`${baseUrl}/${petId}`);

    pet.comments.push(commentValues);
    const result = await request.put(`${baseUrl}/${petId}`, pet);

    return result;
  };

  return {
    getAll,
    create,
    getOne,
    edit,
    deletePet,
    createComment,
  };
};
