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

function App() {
  return (
    <AuthProvider>
      <>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/create" element={<CreatePet />} />
            <Route path="/edit/petId" element={<EditPet />} />
            <Route path="/details" element={<DetailsPet />} />
            <Route path="/404" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
