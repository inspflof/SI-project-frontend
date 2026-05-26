import { useState } from "react"
import commandApi from "../api/command"
import type { CommandType } from "../../../types/commandApi.type"

type useCreateCommandReturn = {
    createCommand: (vehicleId: string, type: string) => Promise<CommandType>;
    command: CommandType | null;
    error: string | null;
    loading: boolean
}

export default function useCreateCommand(): useCreateCommandReturn {
    const [command, setCommand] = useState<CommandType | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    async function createCommand(vehicleId: string, type: string) {
        setLoading(true)
        try {
            const data = await commandApi.create(type, vehicleId)
            setCommand(data)
            setError(null)
            return data
        } catch (err) {
            const message = err instanceof Error ? err.message : "Unknown error"
            setError(message)
            throw new Error(message)
        } finally {
            setLoading(false)
        }
    }

    return { createCommand, command, error, loading }
}