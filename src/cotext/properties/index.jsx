import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const PropertiesContext = createContext();

const PropertiesProvider = ({ children }) => {
  const { steate, dispach } = useReducer(() => reducer, []);
  return (
    <PropertiesContext.Provider value={{ steate, dispach }}>
      {children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
