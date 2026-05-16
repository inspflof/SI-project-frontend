import { useState } from "react"
import commandApi from "../api/command"
import type { CommandType } from "../../../types/commandApi.type"

export default function useCreateCommand() {
    const [command, setCommand] = useState<CommandType | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    async function createCommand(vehicleId: string, type: string) {
        setLoading(true)
        try {
            const data = await commandApi.create(type, vehicleId)
            setCommand(data)
            setError(null)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error")
        } finally {
            setLoading(false)
        }
    }

    return { createCommand, command, error, loading }
}