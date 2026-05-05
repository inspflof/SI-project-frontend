import useParkingDashboard from "./hooks/useParkingDashboard.ts";
import SlotList from "./components/SlotList.tsx";

export default function ParkingDashboard() {
    const { slots, loading, error } = useParkingDashboard()

    return (
        <div>
            <SlotList 
                error={error}
                loading={loading}
                slots={slots}
            />
        </div>
    )
}