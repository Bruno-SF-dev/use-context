import { createContext, useState } from "react";

const initialState = {
  name: "Nome no State",
  last_name: "Sobrenome no State",
  age: "Idade no State",
  country: "País no State",
  city: "Cidade no State",
  occupation: "Profissão no State",
  level: "Nível no State",
};

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [formState, setFormState] = useState(initialState);

  return (
    <FormContext.Provider value={{ formState, setFormState }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
