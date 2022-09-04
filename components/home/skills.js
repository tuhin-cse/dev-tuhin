import {Circle, Line} from "rc-progress";

const Skills = () => {
    return (
        <div id="skills">
            <div className="container text-center py-12">
                <h4 className="section-title">My Skills</h4>
                <div className="flex flex-wrap -mx-2.5 mb-5">
                    <div className="w-1/2 md:w-1/4 px-2.5 mb-5">
                        <Card label="Frontend Development" percentage={96}/>
                    </div>
                    <div className="w-1/2 md:w-1/4 px-2.5 mb-5">
                        <Card label="Backend Development" percentage={96}/>
                    </div>
                    <div className="w-1/2 md:w-1/4 px-2.5 mb-5">
                        <Card label="NFT/Dapps Development" percentage={80}/>
                    </div>
                    <div className="w-1/2 md:w-1/4 px-2.5 mb-5">
                        <Card label="Android Development" percentage={70}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2.5">
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="Javascript" percentage={90}/>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="Node.js" percentage={85}/>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="React" percentage={85}/>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="Express.js" percentage={80}/>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="Next.js" percentage={95}/>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="Mongoose" percentage={85}/>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="Webpack" percentage={75}/>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="Mongodb Aggression" percentage={95}/>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="Babel" percentage={75}/>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="Apollo Graphql" percentage={90}/>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="Solidity" percentage={60}/>
                    </div>
                    <div className="w-full md:w-1/2 px-2.5 mb-5">
                        <Card2 label="Flutter" percentage={70}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills

const Card = ({label, percentage}) => {
    return (
        <>
            <div className="bg-white bg-opacity-10 w-full rounded p-6 text-center">
                <div className="inline-block mb-2">
                    <Circle percent={percentage} strokeWidth={6} trailWidth={6} strokeColor={'#FE6A50'} trailColor={'#FE6A5033'} style={{height: 150}}  />
                </div>

                <p className="font-semibold">{label}</p>
            </div>
        </>
    )
}


const Card2 = ({label, percentage}) => {
    return (
        <>
            <div>
                <p className="font-semibold text-left mb-2.5">{label} - <span className="text-primary">({percentage}%)</span></p>
                <Line percent={percentage} strokeWidth={2} trailWidth={2} strokeColor={'#FE6A50'} trailColor={'#FE6A5033'}  />
            </div>
        </>
    )
}