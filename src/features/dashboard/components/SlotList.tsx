import type { SlotType } from "../../../types/slot.type.ts";
import Slot from "./Slot.tsx";

import styles from "./SlotList.module.css"

type Props = {
    slots: SlotType[] | undefined;
    loading: boolean;
    error: string | null;
}

export default function SlotList({ slots, loading, error }: Props) {
    if(loading) return <p>loading...</p>

    if(error) return <p>Error : {error}</p>

    if(!slots) return <p>No slots...</p>


    return (
        <div
            className={styles.slotList}
        >
            {slots.map((slot) => (
                <Slot 
                    key={slot.id}
                    slot={slot}
                />
            ))}
        </div>
    )
}