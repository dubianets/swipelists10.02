import React, {useState} from "react";

function Header (props) {

    const [inputSize, setInputSize] = useState('')

    const setInputHandler = () => {
        props.setCountSize(inputSize);
        setInputSize('');
    }

    return(

        <div>

            <input
                placeholder="ToDo Size"
                value={inputSize}
                onChange={(e) => setInputSize(+e.target.value)}
            />
            <button onClick={setInputHandler}>create</button>

        </div>

    )
}

export default Header;