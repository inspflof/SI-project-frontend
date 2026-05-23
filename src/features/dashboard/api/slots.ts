const API_URL = import.meta.env.VITE_API_URL

const slot = {
    async getAll() {
        const res: Response = await fetch(`${API_URL}/slot`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const resJson = await res.json()
        if(!res.ok) {
            throw new Error(resJson.message || "Connexion error")
        }
        return resJson
    }
}

export default slot