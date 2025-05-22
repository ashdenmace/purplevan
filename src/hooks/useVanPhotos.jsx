import { useState, useEffect } from "react";

// FOR DEPLOY MAKE SURE TO SET THIS UP IN SECRET ENVIRONMENT // 

export function useVanPhotos( route = "photos" ) {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const response = await fetch(
          `https://pc66cvxape.execute-api.us-east-1.amazonaws.com/${route}`
        );
        const data = await response.json();
        setPhotos(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch photos");
        setIsLoading(false);
      }
    };
    loadPhotos();
  }, [route]);

  return { photos, isLoading, error };
};

