// Make it as a prop so that it can be more costumizable 

function Card (props) {
    return (
        <div className="p-2 flex flex-col">
            <img src={props.image} className="h-[200px] border border-gray-200 rounded-t-md"/>
            <div className="border-l border-r border-b border-gray-200 rounded-b-md flex flex-col text-center bg-white">
                <h2 className="text-lg font-semibold">{props.name}</h2>
                <h3>{props.tag}</h3>
                <a href={props.link} target="_blank" className="border-2 mx-10 my-2 border border-gray-300 rounded-xl bg-lime-100">View Course</a>
            </div>
        </div>
    )
}

export default Card