import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;


const api = axios.create({
  baseURL, // e.g., http://localhost:8080
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


// Optional: response interceptor that unwraps data and normalizes errors
api.interceptors.response.use(
  (response) => response, // keep full response (status, headers, data)
  (error) => {
    // Normalize the error so UI can show meaningful message
    if (error.response) {
      // Server responded with 4xx/5xx
      const { status, data } = error.response;
      const message =
        (data && (data.message || data.error || data.detail)) ||
        `Request failed with status ${status}`;
      return Promise.reject({ status, message, raw: error.response });
    } else if (error.request) {
      // No response (network error / CORS / timeout)
      return Promise.reject({
        status: 0,
        message: "No response from server. Check API URL or network.",
        raw: error.request,
      });
    } else {
      // Something else
      return Promise.reject({
        status: 0,
        message: error.message || "Unknown client error",
        raw: error,
      });
    }
  }
);

// Base path for celestial objects
const ROOT = "/api/celestialobjects";

// CRUD methods
export const CelestialObjectsApi = {
  getAll() {
    return api.get(ROOT); // GET /api/celestialobjects
  },
  getById(id) {
    return api.get(`${ROOT}/${id}`); // GET /api/celestialobjects/{id}
  },
  create(payload) {
    return api.post(ROOT, payload); // POST /api/celestialobjects
  },
  update(id, payload) {
    return api.put(`${ROOT}/${id}`, payload); // PUT /api/celestialobjects/{id}
  },
  remove(id) {
    return api.delete(`${ROOT}/${id}`); // DELETE /api/celestialobjects/{id}
  },
  // (optional) If you later add server-side search:
  searchByName(name) {
    return api.get(`${ROOT}`, { params: { name } }); // GET /api/celestialobjects?name=...
  },
};


export default api;