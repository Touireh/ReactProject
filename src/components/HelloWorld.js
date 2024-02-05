import { Component } from "react";
/*Component Function Props and JSX */
/*Props without JSX*/ 
// export default function HelloWorld (props)  {
//     console.log(props)
//     return(<h1> Hello  {props.nom} </h1>);
// }
// export default function HelloWorld ({nom})  {
//    return(<h1> Hello  {nom} </h1>);

// const age = 18 
// let isAdult = false
// if(age>=18){
//     isAdult=true
// } 
// if(isAdult){
//     return  <h1>Hello {props.nom} Adult </h1>
// }else{
//     return <h1>Hello {props.nom} minor </h1>
// }
/*With JSX*/ 
// const age = 20 
// return  <h1> Hello {props.nom} {age >= 18 ? 'Adult' : 'Minor' }
// </h1>
//}

/*Component Class*/
export default class HelloWorld extends Component{
    
    age = 15
    render(){
        
            return  <h1>Hello {this.props.nom} {this.age >= 18 ? 'Adult' : 'Minor'} </h1>
        }
      

    }
