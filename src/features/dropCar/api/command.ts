const command = {
    async getAll() {
        const res: Response = await fetch("/api/command", {
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

    async create(type: string, vehicleId: string) {
        const res: Response = await fetch("/api/command", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                type,
                vehicleId
            })
        })
        const resJson = await res.json()
        if(!res.ok) {
            throw new Error(resJson.message || "Connexion error")
        }
        return resJson
    },
}

export default command