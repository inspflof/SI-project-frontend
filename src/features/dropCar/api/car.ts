const API_URL = import.meta.env.VITE_API_URL

const car = {
    async getAll() {
        const res: Response = await fetch(`${API_URL}/api/vehicle`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const resJson = await res.json()
        if(!res.ok) {
            throw new Error(resJson.message || "Connexion error")
        }
        return resJson
    },

    async create(immatriculation: string) {
        const res: Response = await fetch("/api/vehicle", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ immatriculation })
        })
        const resJson = await res.json()
        if(!res.ok) {
            throw new Error(resJson.message || "Connexion error")
        }
        return resJson
    }
}

export default car