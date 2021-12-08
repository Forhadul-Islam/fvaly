import { useEffect, useState } from "react"

type StatusType = "idel" | "success" | "pending" | "error"

// interface IAsyncReturn<T> {
//     data: T | null;
//     error: string | null;
//     status: StatusType;
// }

const useAsync = <T>(asyncFunction: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [status, setStatu] = useState<StatusType>("idel")

    useEffect(() => {
        setStatu("pending")
        setError(null)
        setData(null)
        asyncFunction()
            .then((data) => {
                setData(data)
                setStatu("success")
                setError(null)
            })
            .catch((err) => {
                setStatu("error")
                setError(err)
                setData(null)
            })
    }, [asyncFunction])

    return {
        data,
        error,
        isSuccess: status === "success",
        isLoading: status === "pending",
        isError: status === "error",
    }
}

export default useAsync
