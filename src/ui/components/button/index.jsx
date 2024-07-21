



export default function Button({ Children ,button_css }) {

    

    return (
        <>
            <button className={`btn_primary ${button_css}`}>
                {
                    Children
                }
            </button>
        </>
    )

}