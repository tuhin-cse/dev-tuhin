import {TypeAnimation} from "react-type-animation";

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
                            'Md. A. Razzak',
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
                    <p className="max-w-2xl inline-block">I am a fullstack web developer. I can provide MERN stack
                        project. I also make website more & more interactive with web animations.</p>
                </div>
            </div>
        </>
    )
}
export default Hero