const API_URL = "http://localhost:8080";

export const loginUser = async ({ email, password }) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const resJson = await res.json();
  localStorage.setItem("token", resJson.token);
  localStorage.setItem("user", resJson.user);
  return resJson;
};

export const verifyToken = async (token) => {
  const res = await fetch(`${API_URL}/api/auth/verify`, {
    method: "GET",
    headers: { Authorization: token },
  });
  return res.json();
};

export const registerUser = async ({ username, email, password }) => {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  if (res.ok) {
    const resJson = await res.json();
    localStorage.setItem("token", resJson.token);
    localStorage.setItem("user", resJson.user);

    return resJson;
  }
  return { error: true };
};

const token = localStorage.getItem("token");

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: token,
});

// --- Milestones ---

export const getMilestones = async () => {
  const res = await fetch(`${API_URL}/api/milestones`, {
    method: "GET",
    headers: getHeaders(),
  });
  return res.json();
};

export const addMilestone = async (title, date, note) => {
  console.log(title, date, note);
  const res = await fetch(`${API_URL}/api/milestones`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ title, date, note }),
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const updateMilestone = async (id, data) => {
  const res = await fetch(`${API_URL}/api/milestones/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteMilestone = async (id) => {
  const res = await fetch(`${API_URL}/api/milestones/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });
  return res.json();
};

// --- Tips ---

export const getTips = async (milestoneId) => {
  const res = await fetch(`${API_URL}/api/tips/${milestoneId}`, {
    method: "GET",
    headers: getHeaders(),
  });
  const data = await res.json();
  console.log(data);
  return data;
};

export const addTip = async (milestoneId, content) => {
  console.log(milestoneId, content);
  const res = await fetch(`${API_URL}/api/tips`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ milestoneId, content }),
  });
  const data = await res.json();
  return data;
};
