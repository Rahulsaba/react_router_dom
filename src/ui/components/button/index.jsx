import { Children } from "react"




export default function Button({ Children }) {

    const buttonStyles = `py-2 px-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`

    return (
        <>
            <button className={buttonStyles}>
                {
                    Children
                }
            </button>
        </>
    )

}