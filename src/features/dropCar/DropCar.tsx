import React, { useState } from "react";
import Form from "./components/Form";
import useCreateCar from "./hooks/useCreateCar";
import useCreateCommand from "./hooks/useCreateCommand";

export default function DropCar() {
    const { createCar, error: carError, loading: carLoading } = useCreateCar()
    const { createCommand, command, error: commandError, loading: commandLoading } = useCreateCommand()

    const [immatriculation, setImmatriculation] = useState<string>("")

    function handleChange(immatriculation: string) {
        setImmatriculation(immatriculation)
    }

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        if(immatriculation !== "") {
            const car = await createCar(immatriculation)
            await createCommand(car.id, "PARK")
        } else {
            throw new Error("empty field")
        }
    }

    return (
        <Form
            immatriculation={immatriculation}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={carLoading || commandLoading}
            error={carError || commandError}
        />
    )
}