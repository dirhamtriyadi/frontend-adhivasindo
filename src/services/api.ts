const API_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (name: string, email: string, password: string) => {
  const response = await fetch(`${API_URL}v1/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    throw new Error("Register gagal.");
  }

  return response.json();
};

export const loginUser = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}v1/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login gagal, periksa kembali kredensial Anda.");
  }

  return response.json();
};

export const logoutUser = async () => {
  const response = await fetch(`${API_URL}v1/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  if (!response.ok) {
    throw new Error("Logout gagal, periksa kembali kredensial Anda.");
  }

  return response.json();
};

export const getModul = async ( page: number = 1 ) => {
  const response = await fetch(`${API_URL}v1/contents?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  if (!response.ok) {
    throw new Error("Modul gagal, periksa kembali kredensial Anda.");
  }

  return response.json();
};