const API_URL = "http://localhost:8000/api/"; // Ganti dengan URL backend-mu

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
