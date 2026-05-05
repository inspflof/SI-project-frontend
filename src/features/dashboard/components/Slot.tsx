import type { SlotType } from "../types.ts/slotApi.types.ts";

type Props = {
    slot: SlotType;
}

export default function Slot({ slot }: Props) {
    return (
        <div>
            <p>
                {slot.is_occupied ? "Occupied" : "Empty"}
            </p>
            <p>
                {slot.last_update}
            </p>
        </div>
    )
}