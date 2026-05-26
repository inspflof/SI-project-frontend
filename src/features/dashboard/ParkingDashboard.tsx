import useParkingDashboard from "./hooks/useParkingDashboard.ts";
import SlotList from "./components/SlotList.tsx";
import useAllCar from "./hooks/useCar.ts";
import CarList from "./components/CarList.tsx";
import useRecoverCar from "./hooks/useRecoverCar.ts";

export default function ParkingDashboard() {
    const { slots, loading: slotLoading, error: slotError } = useParkingDashboard()
    const { data: cars, loading: carLoading, error: carError } = useAllCar()
    const { error: recoverCarError, loading: recoverCarLoading, recoverCar } = useRecoverCar()

    const carsFiltered = cars?.filter((car) => car.command?.[0].status !== "DONE" || car.command?.[0].type !== "RETRIEVE")

    return (
        <div>
            <SlotList 
                error={slotError}
                loading={slotLoading}
                slots={slots}
            />
            <CarList 
                error={carError}
                loading={carLoading}
                carList={carsFiltered}
                handleRecover={recoverCar}
                recoverError={recoverCarError}
                recoverLoading={recoverCarLoading}
            />
        </div>
    )
}