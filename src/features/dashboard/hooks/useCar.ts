import { useEffect, useState } from "react";
import type { VehicleType } from "../../../types/vehicle.type";

import carApi from "../api/car";

type useAllCarReturn = {
    data: VehicleType[] | null;
    error: string | null;
    loading: boolean;
}

export default function useAllCar(): useAllCarReturn {
    const [data, setData] = useState<VehicleType[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function getAllCar() {
            setLoading(true)
            try {
                const res = await carApi.getAll()
                setData(res)
                setError(null)
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error")
            } finally {
                setLoading(false)
            }
        }
        getAllCar()
    }, [])

    return { data, error, loading }
}