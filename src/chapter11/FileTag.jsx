import React from "react";

export default function FileTag() {
    const selectFile = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <input type="file" onChange={selectFile} style={ { width : "100%" } }/>
        </div>
    );
}