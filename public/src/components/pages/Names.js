import React from 'react';


const Names = ({ImageNames, height, width}) => {
    return (
        <div className = "imageTwo">
            <img src = {ImageNames} alt="names of married couple" height={height} width = {width}>
            </img>
        </div>
    )
}

export default Names;