import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com";

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      params: {
        limit: "30",
        related_keywords: "true",
      },
      headers: {
        "X-RapidAPI-Key": "767a067023msh684e075e32fa791p14a851jsn1c81b9269378",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    });

    const data = await res.json();

    // console.log(data);

    setResults(data);
    setLoading(false);
  };
  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
