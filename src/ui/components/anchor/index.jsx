import { Link } from "react-router-dom";


export default function Links({path,content}) {
    return (
        <>
            <Link to={path} >
                {content}
            </Link>
        </>

    )
}