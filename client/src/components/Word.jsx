import React, {useState} from 'react';
import "../styles/word.scss"
const Word = ({word, description1,description2}) => {
    const [isDescripted, setIsDescripted] = useState(false);
    function dragOverHandler(e) {
        e.preventDefault()

    }

    function dragLeaveHandler(e) {
    }

    function dragStartHandler(e) {
        e.dataTransfer.setData("word",word)
    }

    function dragEndHandler(e) {

    }

    function dropHandler(e) {
        e.preventDefault()

    }

    return (
        <div className={isDescripted ? "word description" : "word word"}
             onClick={() => setIsDescripted(!isDescripted)}
             draggable={true}
             onDragOver={(e) => dragOverHandler(e)}
             onDragLeave={(e) => dragLeaveHandler(e)}
             onDragStart={(e) => dragStartHandler(e)}
             onDragEnd={(e) => dragEndHandler(e)}
             onDrop={(e) => dropHandler(e)}
        >
            {isDescripted ? (description2 ? (description1 + " / " + description2) : description1) : word}
        </div>
    );
};

export default Word;