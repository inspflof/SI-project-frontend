import clsx from "clsx";

import type { SlotType } from "../../../types/slot.type";

import styles from "./Slot.module.css"

import { House, Car } from "lucide-react";

type Props = {
    slot: SlotType;
}

export default function Slot({ slot }: Props) {
    return (
        <div className={clsx(
            styles.slot,
            slot.is_occupied ? styles.occupied : styles.notOccupied,
            slot.x === 0 && slot.y === 0 && styles.home
            )}>
            
            {slot.x === 0 && slot.y === 0 && (
                <div>
                    <House size={50}/>
                </div>
            )}
            {slot.is_occupied && 
            (slot.x !== 0 || slot.y !== 0) 
            && (
                <div className={styles.carContainer}>
                    <Car size={50}/>
                    {slot.vehicle?.immatriculation}
                </div>
            )}
        </div>
    )
}