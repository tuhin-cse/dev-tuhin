import {FiChevronUp} from "react-icons/fi";
import {useEffect} from "react";

const GoTop = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="fixed right-8 bottom-8 p-4 rounded-full bg-primary cursor-pointer text-white ring-1 hidden" onClick={handleClick} id="go-top">
            <FiChevronUp />
        </div>
    )
}
export default GoTop