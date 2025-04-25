import { useState, useEffect } from "react";

export default function useVanPhotos() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const response = await fetch(
          "https://pc66cvxape.execute-api.us-east-1.amazonaws.com/photos"
        );
        const data = await response.json();
        setPhotos(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.messag || "Failed to fetch photos");
      }
    };
    loadPhotos();
  }, []);

  return { photos, isLoading, error };
};

