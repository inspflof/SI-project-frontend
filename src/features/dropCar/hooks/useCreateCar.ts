import { useState } from "react"
import carApi from "../api/car"
import type { VehicleType } from "../../../types/vehicle.type"

type useCreateCarReturn = {
    createCar: (immatriculation: string) => Promise<VehicleType>
    car: VehicleType | null;
    error: string | null;
    loading: boolean
}

export default function useCreateCar(): useCreateCarReturn {
    const [car, setCar] = useState<VehicleType | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    async function createCar(immatriculation: string) {
        setLoading(true)
        try {
            const data = await carApi.create(immatriculation)
            setCar(data)
            setError(null)

            return data
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error")
            throw err
        } finally {
            setLoading(false)
        }
    }

    return { createCar, car, error, loading }
}