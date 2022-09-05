import {FaEnvelope, FaPhone} from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact">
            <div className="container text-center py-12">
                <h4 className="section-title">Contact</h4>
                <div className="flex flex-wrap -mx-2.5">
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <div className="bg-white bg-opacity-10 w-full rounded p-6 text-center">
                            <div className="flex">
                                <div>
                                    <div className="bg-primary p-6 rounded-full">
                                        <FaPhone size={18}/>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <h2 className="font-semibold text-xl mb-1">Contact on Phone</h2>
                                    <a href="tel:+8801521416941" className="text-left block">+880 1521 416941</a>
                                    <a href="tel:+8801882964917" className="text-left block">+880 1882 964917</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <div className="bg-white bg-opacity-10 w-full rounded p-6 text-center">
                            <div className="flex">
                                <div>
                                    <div className="bg-primary p-6 rounded-full">
                                        <FaEnvelope size={18}/>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <h2 className="font-semibold text-xl mb-1 text-left">Contact on Email</h2>
                                    <a href="mailto:md.a.razzak.17@gmail.com" className="text-left block">md.a.razzak.17@gmail.com</a>
                                    <a href="mailto:tuhin1714@cseku.ac.bd" className="text-left block">tuhin1714@cseku.ac.bd</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact