import React from 'react';
import './App.css';


const listeStyle = {display: 'inline-block', textDecoration: 'none'}
function Liste(props) {
    
    return props.tabItems.map((item, i) => 
        <ul key={i} style={listeStyle}>
            <li key={i} style={listeStyle}>
                <a href='#' style={listeStyle}>{item}</a>
            </li>
        </ul>
        
    )
}

export default Liste;