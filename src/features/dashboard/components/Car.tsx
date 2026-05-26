import clsx from "clsx";
import type { VehicleType } from "../../../types/vehicle.type"
import type { CommandType } from "../../../types/commandApi.type";

import styles from "./Car.module.css"
import { ArrowUpFromLine, Loader } from "lucide-react";

type Props = {
    car: VehicleType;
    handleRecover: (vehicleId: string) => Promise<CommandType>;
    recoverLoading: boolean;
    recoverError: string | null;
}

export default function Car({ car, handleRecover, recoverLoading }:Props) {
    const command = car.command?.[0]
    return (
        <tr>
            <td>{car.immatriculation}</td>
            <td
               className={clsx(
                    command?.status === "PROCESSING" && styles.processing, 
                    command?.status === "DONE" && styles.done,
                    command?.status === "ERROR" && styles.error,
               )} 
            >{command?.status ?? "No command"}</td>
            <td>
                {(command?.status === "DONE" && car.command[0].type === "PARK") && (
                    <ArrowUpFromLine
                        onClick={() => handleRecover(car.id)}
                    />
                )}
                {(command?.status === "DONE" && car.command[0].type === "PARK" && recoverLoading) && (
                    <Loader />
                )}
            </td>
        </tr>
    )
}