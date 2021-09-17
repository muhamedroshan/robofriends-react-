import React from 'react'

function Scroll(props) {
    return (
        // <h1>fuck</h1>
        <div style={{overflowY: 'scroll',border:'1px solid black',height:'500px'}}>
            {props.children};
        </div>
    )
}

export default Scroll
