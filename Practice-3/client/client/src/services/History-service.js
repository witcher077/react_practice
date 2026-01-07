import { API_URL } from "../config/config";

export const getHistory = async (authCtx,ideaId,pagination)=>{
    const response  = await fetch(`${API_URL}/idea/history`,
    {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${authCtx.token}`,
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "ideaId":ideaId,
        "pageNo":pagination,
        "pagePerRecord":20
    })
    })
    const jsonData  = await response.json();
    if (!response.ok) {
      console.log("API error");
      return;
    }
    return jsonData;
}

export const getUserHistory = async (authCtx,email,pagination)=>{
  const response  = await fetch(`${API_URL}/user/history`,
  {
  method: 'POST',
  headers: {
    "Authorization": `Bearer ${authCtx.token}`,
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
      "email":email,
      "pageNo":pagination,
      "pagePerRecord":20
  })
  })
  const jsonData  = await response.json();
  if (!response.ok) {
    console.log("API error");
    return;
  }
  return jsonData;
}