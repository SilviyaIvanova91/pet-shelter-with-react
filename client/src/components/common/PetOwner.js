import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { usePetContext } from "../../context/petContext";

export const PetOwner = ({ children }) => {
  const { petId } = useParams();
  const { getPet } = usePetContext();
  const { userId } = useAuthContext();

  const currentGame = getPet(petId);

  if (currentGame && currentGame._ownerId !== userId) {
    return <Navigate to={`/catalog/${petId}`} />;
  }

  return children ? children : <Outlet />;
};
