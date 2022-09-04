import {FaFacebook} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="border-t border-gray-700">
            <div className="container text-center py-4 flex justify-between items-center">
                <div>
                    <FaFacebook/>
                </div>
                <p className="text-[10px] sm:text-sm">
                    © 2022, All right reserved &nbsp;<span className="text-primary">DEV TUHIN</span>
                </p>
            </div>
        </div>
    )
}
export default Footer