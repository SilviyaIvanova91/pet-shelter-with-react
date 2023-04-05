import { createContext, useContext, useState } from "react";

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState({});

  const minLength = (e, bound, values) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values.length < bound,
    }));
  };

  const isPositive = (e) => {
    let number = Number(e.target.value);
    setErrors((state) => ({
      ...state,
      [e.target.name]: number < 0,
    }));
  };

  const isFormValid = !Object.values(errors).some((x) => x);

  const contextValues = {
    errors,
    minLength,
    isPositive,
    isFormValid,
  };

  return (
    <>
      <ErrorContext.Provider value={contextValues}>
        {children}
      </ErrorContext.Provider>
    </>
  );
};

export const useErrorContext = () => {
  const context = useContext(ErrorContext);
  return context;
};
