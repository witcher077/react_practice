import { API_URL } from "../config/config";

const headerConfig = (token) => {
  let headerObj = {
    'Authorization': `Bearer ${token}`,
    'Accept': "application/json",
    'Content-Type': "application/json",
  };

  return headerObj;
};

export const GetProfileDetails = async (token, email) => {
  // change to API call here instead of json file
  const response = await fetch(`${API_URL}/user?email=${email}`, {
    headers: headerConfig(token),
  });
  const jsonData = await response.json();

  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData.data;
};

export const GetMyIdeas = async (token, inputObj) => {
  // change to API call here instead of json file
  const response = await fetch(`${API_URL}/user/ideas`, {
    method: "POST",
    headers: headerConfig(token),
    body: JSON.stringify(inputObj),
  });
  const jsonData = await response.json();
  console.log("jsonData.data", jsonData.data);

  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData.data;
};

export const GetMyNominatedIdeas = async (token, inputObj) => {
  // change to API call here instead of json file
  const response = await fetch(`${API_URL}/user/nominateideas`, {
    method: "POST",
    headers: headerConfig(token),
    body: JSON.stringify(inputObj),
  });
  const jsonData = await response.json();

  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData.data;
};

export const FollowUnfollowUser = async (token, inputObj) => {
  // change to API call here instead of json file
  const response = await fetch(`${API_URL}/user/follow`, {
    method: "POST",
    headers: headerConfig(token),
    body: JSON.stringify(inputObj),
  });
  const jsonData = await response.json();

  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData.data;
};

export const AllocatePoints = async (token, inputObj) => {
  // change to API call here instead of json file
  const response = await fetch(`${API_URL}/user/point`, {
    method: "PUT",
    headers: headerConfig(token),
    body: JSON.stringify(inputObj),
  });
  const jsonData = await response.json();

  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData.data;
};
