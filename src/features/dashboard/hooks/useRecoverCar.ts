import { useState } from "react";
import commandApi from "../../dropCar/api/command";

import type { CommandType } from "../../../types/commandApi.type";

type useRecoverCarReturn = {
    command: CommandType | null;
    error: string | null;
    loading: boolean
    recoverCar: (vehicleId: string) => Promise<CommandType>
}

export default function useRecoverCar(): useRecoverCarReturn {
    const [command, setCommand] = useState<CommandType | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    async function recoverCar(vehicleId: string) {
        setLoading(true)
        setError(null)
        
        try {
            const data = await commandApi.create("RETRIEVE", vehicleId)
            setCommand(data)

            return data
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error")

            throw err
        } finally {
            setLoading(false)
        }
    }

    return { recoverCar, command, error, loading}
}