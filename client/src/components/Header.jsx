import React from 'react';
import CustomButton from "./CustomButton";
import "../styles/header.scss"
import {useActions} from "../hooks/useActions";
const Header = ({username,funcButton}) => {
    const {removeWord} = useActions()

    function onDropHandle(e) {
        removeWord(e.dataTransfer.getData("word"))
        e.target.style.outline = "3px solid #21181c"

    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.outline = "3px solid red"

    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        e.target.style.outline = "3px solid #21181c"
    }

    function dragEndHandler(e) {
        e.preventDefault()
        e.target.style.outline = "3px solid #21181c"
    }

    return (
        <div>
            <div className="header">
                <div className="left-div">
                    <CustomButton style={{marginLeft: 20}} txt={"ADD WORD"} onClick={()=> funcButton()}/>
                    <div className="remove-word"
                         onDrop={(e) => onDropHandle(e)}
                         onDragOver={(e) => dragOverHandler(e)}
                         onDragLeave={(e) => dragLeaveHandler(e)}
                         onDragEnd={(e) => dragEndHandler(e)}
                    >DRAG TO REMOVE</div>
                </div>

                <div className="header-txt">DICTIONARY</div>
                <div className="right-div">
                    <div className="header-username">{username.toUpperCase()}</div>

                </div>
            </div>

        </div>
    );
};

export default Header;