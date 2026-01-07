import { API_URL } from "../config/config";

const headerConfig = (token) => {
  let headerObj = {
    'Authorization': `Bearer ${token}`,
    'Accept': "application/json",
    'Content-Type': "application/json",
  };

  return headerObj;
};

export const GetIdeaDetails = async (token, id) => {
  const response = await fetch(`${API_URL}/idea/${id}`, {
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

export const EditIdeaDetails = async (token, id, payload) => {
  const response = await fetch(`${API_URL}/idea/${id}`, {
    method: 'PUT',
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

export const AddComments = async (token, id, payload) => {
  const response = await fetch(`${API_URL}/comment?ideaId=${id}`, {
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

export const LikeComments = async (token, id, payload) => {
  const response = await fetch(`${API_URL}/comment/like?commentId=${id}`, {
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

export const ApproveIdeaDetail = async (token, ideaId, inputObj) => {
  const response = await fetch(`${API_URL}/idea/${ideaId}`,
    {
      method: 'POST',
      headers: headerConfig(token),
      body: JSON.stringify(inputObj)
    });
  const jsonData = await response.json();
  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
}

export const LikeIdea = async (token, ideaId, inputObj) => {
  const response = await fetch(`${API_URL}/idea/like?id=${ideaId}`,
    {
      method: 'POST',
      headers: headerConfig(token),
      body: JSON.stringify(inputObj)
    });
  const jsonData = await response.json();
  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
}

export const ShowInterestIdea = async (token, ideaId, inputObj) => {
  const response = await fetch(`${API_URL}/idea/interest?id=${ideaId}`,
    {
      method: 'POST',
      headers: headerConfig(token),
      body: JSON.stringify(inputObj)
    });
  const jsonData = await response.json();
  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
}

export const GetIdeaLikes = async (token, id) => {
  const response = await fetch(`${API_URL}/idea/likesList?id=${id}`, {
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

export const GetIdeaInterested = async (token, id) => {
  const response = await fetch(`${API_URL}/idea/interestedList?id=${id}`, {
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