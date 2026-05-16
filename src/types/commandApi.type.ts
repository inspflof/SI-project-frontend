import type { SlotType } from "./slot.type";
import type { VehicleType } from "./vehicle.type";

export type CommandType = {
    id: number;
    type: string;
    status: string;
    vehicle_id: string;
    created_at: string;
    slot_id: number;
    slot: SlotType;
    vehicle: VehicleType | null;
}