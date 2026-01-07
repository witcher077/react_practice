import { API_URL } from "../config/config";

const headerConfig = (token) => {
  let headerObj = {
    'Authorization': `Bearer ${token}`,
    'Accept': "application/json",
    'Content-Type': "application/json",
  };

  return headerObj;
};

export const GetNotifications = async (token) => {
  const response = await fetch(`${API_URL}/notification`, {
    method: "GET",
    headers: headerConfig(token),
  });
  const jsonData = await response.json();

  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData.data;
};

export const ReadNotification = async (token,payload) => {
    const response = await fetch(`${API_URL}/notification/read`, {
        method: 'POST',
        headers: headerConfig(token),
        body: JSON.stringify(payload)
    });
    const jsonData = await response.json();
    if (!response.ok) {
        console.log("API error");
        return;
    }
    return jsonData;
};

