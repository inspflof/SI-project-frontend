import clsx from "clsx";
import type { VehicleType } from "../../../types/vehicle.type"

import styles from "./Car.module.css"

type Props = {
    car: VehicleType;
}

export default function Car({ car }:Props) {
    return (
        <tr>
            <td>{car.immatriculation}</td>
            <td
               className={clsx(
                    car.command?.[0]?.status === "PROCESSING" && styles.processing, 
                    car.command?.[0]?.status === "DONE" && styles.done,
                    car.command?.[0]?.status === "ERROR" && styles.error,
               )} 
            >{car.command?.[0]?.status ?? "No command"}</td>
        </tr>
    )
}