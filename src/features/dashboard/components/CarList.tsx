import type { VehicleType } from "../../../types/vehicle.type"
import Car from "./Car";

type Props = {
    carList: VehicleType[] | null;
    error: string | null;
    loading: boolean;
}

export default function CarList({ carList, error, loading }: Props) {
    if(loading) {
        return (
            <div>Loading...</div>
        )
    }

    if(error) {
        return (
            <div>{error}</div>
        )
    }

    if(!carList) {
        return (
            <div>No car...</div>
        )
    }

    return (
        <table>
            <tr>
                <th>Immatriculation</th>
                <th>Status</th>
            </tr>
            {carList.map((car) => (
                <Car 
                    car={car}
                    key={car.id}
                />
            ))}
        </table>
    )
}