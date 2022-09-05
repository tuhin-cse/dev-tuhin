import {TypeAnimation} from "react-type-animation";
import Social from "../common/social";

const Hero = () => {
    return (
        <>
            <div>
                <div className="container text-center min-h-[75vh] py-12 flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center h-52 mb-8">
                        <div className="outer-ring"></div>
                        <div className="inner-ring"></div>
                    </div>
                    <h1 className="text-3xl font-semibold mb-3">Hi I am <TypeAnimation
                        // Same String at the start will only be typed once, initially
                        sequence={[
                            'Md. A. Razzak (Tuhin)',
                            2000,
                            'Fullstack Developer',
                            2000,
                            'Blockchain Developer',
                            2000,
                            'Competitive Programmer',
                            2000,
                        ]}
                        className="text-primary"
                        speed={50}
                        wrapper="span"
                        repeat={Infinity}
                    /> <span className="text-primary"></span></h1>
                    <p className="max-w-xl inline-block mb-4 text-gray-400">I am a fullstack web developer. I have expertise in
                        building webapps using React.js, Next.js, Express.js and Mongodb. I am also available for building NFT/Dapps Sites.
                        And I am still learning.
                    </p>
                    <Social/>
                </div>

            </div>
        </>
    )
}
export default Hero