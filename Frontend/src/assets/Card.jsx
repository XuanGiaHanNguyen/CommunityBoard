// Make it as a prop so that it can be more costumizable 

function Card (props) {
    return (
        <div className="p-2 flex flex-col">
            <img src="" alt="" />
            <div className="border-2 rounded-b-md">
                <h2>{props.name}</h2>
                <h3></h3>
                <a href=""></a>
            </div>
        </div>
    )
}

export default Card