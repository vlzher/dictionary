import React from 'react';
import Word from "./Word";
import {useSelector} from "react-redux";
import "../styles/word-zone.scss"
const WordZone = ({searchTerm}) => {

    const words = useSelector(state => state.words)
    // eslint-disable-next-line
    const filteredWords = words.filter((word) =>{
        if(searchTerm === "") return word
        else if(word.word.toLowerCase().includes(searchTerm.toLowerCase())) return word
    })
    return (
        <div className="word-zone">
            <div className="word-zone-inner">

                {
                    filteredWords.length ?
                    filteredWords.map((word, id) =>
                        <Word
                        word={word.word}
                        key={id}
                        description1={word.description1}
                        description2={word.description2}/>)
                        :
                        words.length
                        ?
                        <div className="no-words">YOUR SEARCH DID NOT MATCH ANY WORD</div> : <div></div>

                }
                <div style={{width:"100vw", height:20, display:"flex"}}>‎</div>
            </div>

        </div>
    );
};

export default WordZone;