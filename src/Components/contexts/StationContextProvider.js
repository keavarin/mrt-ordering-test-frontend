import { useState, createContext, useEffect } from "react";

export const StationContext = createContext();

function StationContextProvider({ children }) {
  const [addStation, setAddStation] = useState([]);
  const [money, setMoney] = useState(0);

  return (
    <StationContext.Provider
      value={{
        addStation,
        setAddStation,
        money,
        setMoney,
      }}
    >
      {children}
    </StationContext.Provider>
  );
}
export default StationContextProvider;
