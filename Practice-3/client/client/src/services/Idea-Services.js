import { API_URL } from "../config/config";

export const TopIdeas = async (token) => {
    // change to API call here instead of json file
    const response = await fetch(`${API_URL}/dashboard`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
    });
    const jsonData = await response.json();

    if (!response.ok) {
        console.log("API error");
        return;
    }
    return jsonData.data;
};

export const CreateIdea = async (token, payload) => {
    const response = await fetch(`${API_URL}/idea`, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const jsonData = await response.json();
    console.log('jsonData', jsonData)
    if (!response.ok) {
        console.log("API error");
        return;
    }
    return jsonData;
};

export const GetCategories = async (token) => {
    const response = await fetch(`${API_URL}/category/records`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
    });
    const jsonData = await response.json();
    if (!response.ok) {
        console.log("API error");
        return;
    }
    return jsonData;
};

export const GetLocations = async (token) => {
    // change to API call here instead of json file
    const response = await fetch(`${API_URL}/location/records`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
    });
    const jsonData = await response.json();

    if (!response.ok) {
        console.log("API error");
        return;
    }
    return jsonData;
};

export const GetSkills = async (token) => {
    const response = await fetch(`${API_URL}/idea/skills`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
    });
    const jsonData = await response.json();

    if (!response.ok) {
        console.log("API error");
        return;
    }
    return jsonData;
};

export const GetTags = async (token) => {
    const response = await fetch(`${API_URL}/idea/tags`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
    });
    const jsonData = await response.json();

    if (!response.ok) {
        console.log("API error");
        return;
    }
    return jsonData;
};

export const UploadAttachments = async (token, payload) => {
    // change to API call here instead of json file
    const response = await fetch(`${API_URL}/attachment`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
        body: payload
    });
    const jsonData = await response.json();

    if (!response.ok) {
        console.log("API error");
        return;
    }
    return jsonData;
};

export const CloseTheIdea = async (token, ideaId, inputObj) => {
    const response = await fetch(`${API_URL}/idea/${ideaId}`,
        {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': "application/json",
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