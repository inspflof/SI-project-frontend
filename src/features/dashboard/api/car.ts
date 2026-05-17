import type { VehicleType } from "../../../types/vehicle.type"

const car = {
    async getAll(): Promise<VehicleType[]> {
        const res: Response = await fetch("/api/vehicle", {
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