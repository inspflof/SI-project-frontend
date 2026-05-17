import useParkingDashboard from "./hooks/useParkingDashboard.ts";
import SlotList from "./components/SlotList.tsx";
import useAllCar from "./hooks/useCar.ts";
import CarList from "./components/CarList.tsx";

export default function ParkingDashboard() {
    const { slots, loading: slotLoading, error: slotError } = useParkingDashboard()
    const { data: cars, loading: carLoading, error: carError } = useAllCar()

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
                carList={cars}
            />
        </div>
    )
}