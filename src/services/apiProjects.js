const API_URL = "https://portfolio-2dyy.onrender.com";

export async function getProjects() {
  const response = await fetch(`${API_URL}/projects`);

  if (!response.ok) {
    const error = new Error();
    error.code = error.statusCode;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  return data;
}

export async function getProject(id) {
  const response = await fetch(`${API_URL}/projects/?id=${id}`);

  if (!response.ok) {
    const error = new Error();
    error.code = error.statusCode;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  return data;
}
