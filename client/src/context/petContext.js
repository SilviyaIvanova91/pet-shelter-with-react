import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { petServiceFactory } from "../services/petServices";

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const petService = petServiceFactory();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    petService.getAll().then((result) => {
      setPets(result);
    });
  }, []);

  const getPet = (petId) => {
    return pets.find((pet) => pet._id === petId);
  };

  const onCreatePetSubmit = async (data) => {
    const newPet = await petService.create(data);
    setPets((state) => [...state, newPet]);

    navigate("/catalog");
  };

  const onEditPetSubmit = async (pet) => {
    const result = await petService.edit(pet._id, pet);

    setPets((state) => state.map((x) => (x._id === pet._id ? result : x)));
    navigate(`/catalog/${pet._id}`);
  };

  const deletePet = (petId) => {
    setPets((state) => state.filter((pet) => pet._id !== petId));
  };

  const petContextValues = {
    pets,
    onCreatePetSubmit,
    getPet,
    onEditPetSubmit,
    deletePet,
  };

  return (
    <>
      <PetContext.Provider value={petContextValues}>
        {children}
      </PetContext.Provider>
    </>
  );
};

export const usePetContext = () => {
  const context = useContext(PetContext);

  return context;
};
