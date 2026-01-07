import { API_URL } from "../config/config";

export const searchDetails = async (token, payload) => {
      const response = await fetch(`${API_URL}/search`, {
            method: 'POST',
            headers: {
                  'Authorization': `Bearer ${token}`,
                  'Accept': "application/json",
                  'Content-Type': "application/json",
            },
            body: JSON.stringify(payload)
      });
      const jsonData = await response.json();

      if (!response.ok) {
            console.log("API error");
            return;
      }
      return jsonData;
}