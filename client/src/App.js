import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./components/Home/Home";
import { Navigation } from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Catalog } from "./components/Catalog/Catalog";
import { CreatePet } from "./components/Create/Create";
import { EditPet } from "./components/Edit/Edit";
import { DetailsPet } from "./components/Details/Details";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { AuthProvider } from "./context/AuthContext";
import { PetProvider } from "./context/petContext";
import { Delete } from "./components/Delete/Delete";
import { RouteGuard } from "./components/common/RouteGuard";
import { MyProfile } from "./components/MyProfile/MyProfile";
import { PetOwner } from "./components/common/PetOwner";

function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
        <main>
          <PetProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create" element={<CreatePet />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:petId" element={<DetailsPet />} />
              <Route path="/404" element={<ErrorPage />} />
              <Route element={<RouteGuard />}>
                <Route path="/my-profile/:userId" element={<MyProfile />} />
                <Route
                  path="/catalog/:petId/edit"
                  element={
                    <PetOwner>
                      <EditPet />
                    </PetOwner>
                  }
                />
                <Route
                  path="/catalog/:petId/delete"
                  element={
                    <PetOwner>
                      <Delete />
                    </PetOwner>
                  }
                />
              </Route>
            </Routes>
          </PetProvider>
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
