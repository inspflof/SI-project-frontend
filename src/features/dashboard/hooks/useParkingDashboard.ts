import { useEffect, useState } from "react";
import slotApi from "../api/slots.ts";
import type { SlotType } from "../../../types/slot.type.ts";

export default function useParkingDashboard() {
    const [slots, setSlots] = useState<SlotType[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        async function getSlots() {
            setLoading(true)
            try {
                const data = await slotApi.getAll()
                setSlots(data)
                setError(null)
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error")
            } finally {
                setLoading(false)
            }
        }
        getSlots()
    },[])

    return { slots, error, loading }
}