import { API_URL } from "../config/config";

export const approveIdeaDetail = async (token, ideaId, inputObj) => {
  const response = await fetch(`${API_URL}/idea/${ideaId}`,
    {
      method: 'PUT',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        'Content-Type': "application/json",
      },
      body: JSON.stringify(inputObj),
    });
  const jsonData = await response.json();
  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
}