import type { VehicleType } from "./vehicle.type";

export type SlotType = {
    id: number;
    x: number;
    y: number;
    is_occupied: boolean;
    vehicle_id: string | null;
    last_update: string;
    vehicle: VehicleType | null;
}