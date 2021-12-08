import React, { useState, createContext, useEffect, useMemo } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = () => {
    setLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        loading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
