import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const { dato, textColor, backColor } = useParams();
    console.log(textColor);
    console.log(backColor);

    return (
        <div>
            {isNaN(dato) ? <h2 style={{
                color: textColor,
                backgroundColor: backColor
            }}>The word is :{dato}</h2>
        : <h2>The number is: {dato}</h2>
        }
        </div>
    )
}

export default Params;