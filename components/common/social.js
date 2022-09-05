import {FiFacebook, FiGithub, FiLinkedin} from "react-icons/fi";
import {FaHackerrank } from "react-icons/fa";
import {SiCodeforces} from "react-icons/si";

const Social = () => {

    const social = [
        {
            icon: <FiFacebook/>,
            href: 'https://www.facebook.com/tuhin.rahman.733'
        },
        {
            icon: <FiLinkedin/>,
            href: 'https://www.linkedin.com/in/artuhin'
        },
        {
            icon: <FiGithub/>,
            href: 'https://github.com/tuhin-cse?tab=repositories'
        },
        {
            icon: <FaHackerrank/>,
            href: 'https://www.hackerrank.com/tuhinabdurrazzak'
        } ,
        {
            icon: <SiCodeforces/>,
            href: 'https://codeforces.com/profile/tuhinku17'
        }
    ]

    return (
        <>
            <div className="flex -mx-2">
                {social?.map((d, index) => (
                    <a key={index} href={d.href} target="_blank" className="border p-2 border-gray-600 text-gray-400 rounded bg-gray-900 mx-2">
                        {d.icon}
                    </a>
                ))}

            </div>
        </>
    )
}
export default Social