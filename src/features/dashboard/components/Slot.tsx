import clsx from "clsx";

import type { SlotType } from "../../../types/slot.type";

import styles from "./Slot.module.css"

type Props = {
    slot: SlotType;
}

export default function Slot({ slot }: Props) {
    return (
        <div className={clsx(
            styles.slot,
            slot.is_occupied ? styles.occupied : styles.notOccupied
        )
        }>
            <div>
                X : {slot.x}
            </div>
            <div>
                Y : {slot.y}
            </div>
        </div>
    )
}