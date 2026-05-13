import type { SlotType } from "../types.ts/slotApi.types.ts";

import styles from "./Slot.module.css"

type Props = {
    slot: SlotType;
}

export default function Slot({ slot }: Props) {
    return (
        <div className={styles.slot}>
            <div
                className={styles.occupied}
            >
                <div>
                    <div>
                        X : {slot.x}
                    </div>
                    <div>
                        Y : {slot.y}
                    </div>
                </div>
            </div>
        </div>
    )
}