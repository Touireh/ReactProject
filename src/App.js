import HelloWorld from './components/HelloWorld';
import TextField from './components/Forms/TextField';
import Fruit from './components/Fruits/Fruit';
import './App.css';
import Event from './components/Events/Event';
import Counter from './components/Counter/Counter';

function App() {
  const fruitsArray =[
    'Lemon',
    'pomme',
    'Banane'
  ]
  return (
    <div className="App">
   
       
   <HelloWorld nom='Touireh Hiba'/>
   <TextField inputName='lastName' labelName='Last Name '> 
   Veuillez entrer votre Nom
   </TextField > 

   <TextField inputName='firstName' labelName='First Name' >
    Veuillez entrer votre Prenom 
   </TextField>
    <Fruit fruits={fruitsArray} />
    <Event/>
    <Counter init = {2} steap ={3} />
        
      
    </div>
  );
}

export default App;
