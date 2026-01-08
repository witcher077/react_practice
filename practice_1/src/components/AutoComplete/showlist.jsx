import React from 'react'

const Showlist = (props) => {
    console.log(props.suggestions)
    return (
        <div>
            <ul>
                {
                   props.suggestions && props.suggestions.map((ele) =><li>{ele.name}</li> )
                }
            </ul>
        </div>
    )
}

export default Showlist