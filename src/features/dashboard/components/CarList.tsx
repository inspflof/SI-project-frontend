import type { VehicleType } from "../../../types/vehicle.type"
import Car from "./Car";

import styles from "./CarList.module.css"

import type { CommandType } from "../../../types/commandApi.type";

type Props = {
    carList: VehicleType[] | null;
    error: string | null;
    loading: boolean;
    handleRecover: (vehicleId: string) => Promise<CommandType>;
    recoverLoading: boolean;
    recoverError: string | null;
}

export default function CarList({ carList, error, loading, handleRecover, recoverError, recoverLoading }: Props) {
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
        <table className={styles.table}>
            <tr>
                <th>Immatriculation</th>
                <th>Status</th>
            </tr>
            {carList.map((car) => (
                <Car 
                    car={car}
                    key={car.id}
                    handleRecover={handleRecover}
                    recoverError={recoverError}
                    recoverLoading={recoverLoading}
                />
            ))}
        </table>
    )
}