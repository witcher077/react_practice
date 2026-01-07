import { API_URL } from "../config/config";

export const getData = async (token) => {
    // change to API call here instead of json file
    const response = await fetch(
      `${API_URL}/dashboard/ideaCount`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    );
    const jsonData = await response.json();
    
    if (!response.ok) {
      console.log("API error");
      return;
    }
    return jsonData.data.count;
    
  };