import works from "../works/data";

const Works = () => {
    return (
        <div id="works">
            <div className="container text-center py-12">
                <h4 className="section-title">My Works</h4>
                <div className="flex flex-wrap -mx-2.5 mb-5">
                    {works?.map((work, index) => (
                        <div className="w-full md:w-1/2 px-2.5 mb-5" key={index}>
                            <Card work={work} label="Frontend Development" percentage={96}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Works

const Card = ({work}) => {
    return (
        <>
            <div className="bg-white bg-opacity-10 w-full rounded p-6 relative text-left">
                <img src={work.preview} className="w-full rounded mb-2" alt=""/>
                <p className="font-semibold text-left">{work.title}</p>
                <p className="text-left text-xs">{work.type}</p>
                <a className="lg:absolute right-4 bottom-4 text-sm text-primary" href={work.url} target="_blank">{work.url}</a>
            </div>
        </>
    )
}