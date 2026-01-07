import { API_URL } from "../config/config";

const headerConfig = (token) => {
  let headerObj = {
    'Authorization': `Bearer ${token}`,
    'Accept': "application/json",
    'Content-Type': "application/json",
  };

  return headerObj;
};

export const GetLeaders = async (token) => {
  const response = await fetch(`${API_URL}/user/leaderBoard?skip=&limit=`, {
    method: "GET",
    headers: headerConfig(token),
  });
  const jsonData = await response.json();

  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
};

