/** State with Class  */
// import { Component } from "react";
// export default class Counter extends Component{
//      constructor(props){
//         super(props);
//         this.state= { counter : 0 ,
//         date : undefined 
//     }
//     }

import { useState } from "react";

//     render ( )
//      {
//         return  <>
//         Il y a {this.props.state} seconds
//         </>
//      }
// }
export default function Counter({init,steap}){
    const [counter , setCounter ] = useState(init)
    const handelClick = ( ) => { 
        setCounter(counter+ steap)
    }
    const handelReset = ( ) => { 
        setCounter(init)
    }
    

    return <> <button onClick={handelClick}> Click To Increment </button>
    Il y a {counter} secondes 
    <button onClick={handelReset}> Reset !! </button>
     </>
    
   
       
        
}