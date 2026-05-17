import type { CommandType } from "./commandApi.type";
import type { SlotType } from "./slot.type";

export type VehicleType = {
    id: string;
    immatriculation: string;
    command: CommandType[] | [];
    slot: SlotType | null
}