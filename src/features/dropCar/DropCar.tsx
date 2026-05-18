import React, { useState } from "react";
import Form from "./components/Form";
import useCreateCar from "./hooks/useCreateCar";
import useCreateCommand from "./hooks/useCreateCommand";
import { useNavigate } from "react-router";

export default function DropCar() {
    const { createCar, error: carError, loading: carLoading } = useCreateCar()
    const { createCommand, error: commandError, loading: commandLoading } = useCreateCommand()
    const navigate = useNavigate()

    const [immatriculation, setImmatriculation] = useState<string>("")

    function handleChange(immatriculation: string) {
        setImmatriculation(immatriculation)
    }

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        if(immatriculation !== "") {
            const car = await createCar(immatriculation)
            await createCommand(car.id, "PARK")
            navigate("/")
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