import { useState } from "react"
import { getBreeds } from "../api"

export const useFetchBreeds = () => {
    const [breeds, setBreeds] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    async function fetchBreeds() {
        try {
            const result = await getBreeds()
            setBreeds(result)
            setLoading(false)
            setError(null)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    return {breeds, loading, error, fetchBreeds}
}