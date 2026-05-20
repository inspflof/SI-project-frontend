import type { VehicleType } from "../../../types/vehicle.type"

const API_URL = import.meta.env.VITE_API_URL

const car = {
    async getAll(): Promise<VehicleType[]> {
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
    }
}

export default car