import type { VehicleType } from "../../../types/vehicle.type"

type Props = {
    car: VehicleType;
}

export default function Car({ car }:Props) {
    return (
        <tr>
            <td>{car.immatriculation}</td>
            <td>{car.command?.[0]?.status ?? "No command"}</td>
        </tr>
    )
}