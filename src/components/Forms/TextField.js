import { Component } from "react";
/*React fragment*/
// export default function TextField({inputName,labelName}){
//     return(

//         <>
//          <label > {labelName} </label>
//          <input name={inputName} type = 'text'/>
//          <div>Veuillez zntrer une valeur </div>

//         </>
//     );
// }
/*With Children */
export default function TextField(props){
    return(

        <>
         <label > {props.labelName}  </label>
         <input name={props.inputName} type = 'text'/>
         <div> {props.children} </div>

        </>
    );
}
/*With Children Class version*/
// export default class TextField extends Component{
//     render() { 
//         return
//             <>
//              <label > {this.props.labelName}  </label>
//              <input name={this.props.inputName} type = 'text'/>
//              <div> {this.children} </div>
    
//             </>
        

//     }
     
// }