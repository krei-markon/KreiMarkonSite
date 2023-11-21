export async function ApiService(url, params = {}) {
	const response = await fetch(`http://127.0.0.1:8000/api/${url}`, params)
	const data = await response.json()
	return data
}
