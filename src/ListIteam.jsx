import React, {useState} from "react";

export default function ListIteam(props){

   const [showChanger, setShowChanger] = useState(true)

    const moveDown = (id,value) => {
        props.moveElementToAnotherListDown(id, props.index, value)
        setShowChanger(!showChanger)
    }


    return(
        <div>

            {props.el.map(elem =>

            <li>
                {elem.user} --- {elem.gender}
                {showChanger && <button onClick={() => setShowChanger(!showChanger)}>Move element</button>}
                {!showChanger && <button onClick={() => moveDown(elem.id, -1)} disabled={props.index === 0}>up</button>}
                {!showChanger && <button onClick={() => moveDown(elem.id, 1)} disabled={props.index === props.list.length -1}>down</button>}
            </li>
            )}
            <hr/>

        </div>
    )
}