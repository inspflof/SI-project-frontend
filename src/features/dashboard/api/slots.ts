const slot = {
    async getAll() {
        const res: Response = await fetch("/api/slot", {
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