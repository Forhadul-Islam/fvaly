import React from "react"

const FallbackSceleton = () => {
    return (
        <>
            <div className=" col-span-3 mt-16 justify-center my-auto max-h-screen shadow-md rounded-md p-4 max-w-2xl w-full mx-auto">
                <div className="animate-pulse flex space-x-4">
                    <div className=" bg-gray-300 h-96 w-full"></div>
                    {/* <div className="flex-1 space-y-4 py-1"> */}
                        {/* <div className="h-4 bg-gray-300 rounded w-3/4"></div> */}
                        {/* <div className="space-y-2">
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded"></div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default FallbackSceleton
