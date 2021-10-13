import { createContext, useState } from "react";

export const ErrorsContext = createContext();

const ErrorsContextProvider = ({ children }) => {
  const [formErrors, setFormErrors] = useState([]);

  return (
    <ErrorsContext.Provider value={{ formErrors, setFormErrors }}>
      {children}
    </ErrorsContext.Provider>
  );
};

export default ErrorsContextProvider;
