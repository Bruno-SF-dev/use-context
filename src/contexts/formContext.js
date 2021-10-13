import { createContext, useState } from "react";

const initialState = {
  name: "",
  last_name: "",
  age: "",
  country: "",
  city: "",
  occupation: "",
  level: "",
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
