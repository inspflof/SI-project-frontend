import useParkingDashboard from "./hooks/useParkingDashboard.ts";
import SlotList from "./components/SlotList.tsx";

export default function ParkingDashboard() {
    const { slots, loading, error } = useParkingDashboard()

    const orderedSlot = slots?.sort((a, b) => b.y - a.y || a.x - b.x)

    return (
        <div>
            <SlotList 
                error={error}
                loading={loading}
                slots={orderedSlot}
            />
        </div>
    )
}