import React from 'react'

const Showlist = (props) => {
    console.log(props.suggetions)
    return (
        <div>
            <ul>
                {
                   props.suggetions.length>0 && props.suggetions.map((ele) =><li>{ele.name}</li> )
                }
            </ul>
        </div>
    )
}

export default Showlist