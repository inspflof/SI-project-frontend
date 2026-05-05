import type { SlotType } from "../types.ts/slotApi.types.ts";
import Slot from "./Slot.tsx";

type Props = {
    slots: SlotType[] | null;
    loading: boolean;
    error: string | null;
}

export default function SlotList({ slots, loading, error }: Props) {
    if(loading) return <p>loading...</p>

    if(error) return <p>Error : {error}</p>

    if(!slots) return <p>No slots...</p>


    return (
        <div>
            {slots.map((slot) => (
                <Slot 
                    key={slot.id}
                    slot={slot}
                />
            ))}
        </div>
    )
}