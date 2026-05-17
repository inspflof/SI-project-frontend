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

export default function Car({ car, handleRecover, recoverError, recoverLoading }:Props) {
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
            <td>
                {(car.command[0].status === "DONE" && car.command[0].type === "PARK") && (
                    <ArrowUpFromLine
                        onClick={() => handleRecover(car.id)}
                    />
                )}
                {(car.command[0].status === "DONE" && car.command[0].type === "PARK" && recoverLoading) && (
                    <Loader />
                )}
            </td>
        </tr>
    )
}