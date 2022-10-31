import React from 'react';
import CustomInput from "./CustomInput";
import "../styles/search-zone.scss"

const SearchZone = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search-zone">
            <CustomInput
            style={{width:"100%", height:"85%",borderRadius:0, outline: "5px solid gray", fontSize:"3rem"}}
            placeholder={"Search"}
            onChange={e => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            />
        </div>
    );
};

export default SearchZone;