import { API_URL } from "../config/config";

export const getIdeasDashBoard = async (token, pagination, category) => {
  const response = await fetch(`${API_URL}/idea/list`,
    {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "status": category,
        "pageNo": pagination,
        "pagePerRecord": 20
      }),
    });
  const jsonData = await response.json();
  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
}

export const postNotifyUser = async (token, ideaId) => {
  const response = await fetch(`${API_URL}/idea/notify?ideaId=${ideaId}`,
    {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
  const jsonData = await response.json();
  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
}

export const postNominateUser = async (token, ideaId) => {
  const response = await fetch(`${API_URL}/idea/nominate?ideaId=${ideaId}`,
    {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
  const jsonData = await response.json();
  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
}

export const getUserLeaderboard = async (token, pagination) => {
  const response = await fetch(`${API_URL}/user/leaderBoard?skip=${pagination.skip}&limit=${pagination.limit}&sortBy=${pagination.sortBy}&order=${pagination.order === "asc" ? 1 : -1}`,
    {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    });
  const jsonData = await response.json();
  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
}

export const nominateUserRole = async (token, payload) => {
  const response = await fetch(`${API_URL}/idea/nominate`,
    {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
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
export const crateRole = async (token, payload, ideaId) => {
  const response = await fetch(`${API_URL}/role/create?ideaId=${ideaId}`,
    {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
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

export const assignRole = async (token, payload) => {
  const response = await fetch(`${API_URL}/role/unassign`,
    {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
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

export const unAssignRole = async (token, payload) => {
  const response = await fetch(`${API_URL}/role/unassign`,
    {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
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

export const deleteRole = async (token, roleId) => {
  const response = await fetch(`${API_URL}/role/deleteRole?roleId=${roleId}`,
    {
      method: 'PUT',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    });
  const jsonData = await response.json();
  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
}

export const getIdeasSorted = async (token, pagination, category,order) => {
  const response = await fetch(`${API_URL}/idea/list`,
    {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "status": category,
        "pageNo": pagination,
        "pagePerRecord": 20,
        "sortBy":"firstName",
        "order":order
      }),
    });
  const jsonData = await response.json();
  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
}