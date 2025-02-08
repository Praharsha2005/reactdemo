// import React from 'react';
// import './global.css'
// const FuctionalComponent = (props) => {
//     console.log(props)
//     return (
//         <div className='function'>
//             <h1>Hello, This is the FuctionalComponentnts</h1>
//             <h2>{props.college}</h2>
//             <h2>{props.city}</h2>
//             <h1></h1>
//         </div>
//     );
// };

// export default FuctionalComponents;

import React from 'react';

const FunctionalComponents = (props) => {
    let applyStyle = props.apply ? 'heading' : '';

    let inlineStyle = {
        color: 'red',
        fontSize: '100px'
    };

    return (
        <div>
           <h1 className={`${applyStyle} font-style`}>
               Welcome to REACT, {props.clg}, {props.city}
           </h1>
           <h2 style={inlineStyle}>Good Morning!</h2> 
        </div>
    );
};

export default FunctionalComponents;
