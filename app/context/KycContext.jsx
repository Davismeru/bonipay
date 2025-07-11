import React, { createContext, useContext, useState } from "react";

const KycContext = createContext();

export default function ContextProvider({ children }) {
  const [formData, setFormData] = useState({
    fullName: "",
    DOB: "",
    nationality: "",
    gender: "",
    identityProof: "",
    idData: "",
    selfieData: "",
  });

  return (
    <KycContext.Provider value={{ formData, setFormData }}>
      {children}
    </KycContext.Provider>
  );
}

export function useContextProvider() {
  return useContext(KycContext);
}
