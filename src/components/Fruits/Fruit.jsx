export default function Fruit({fruits}) {
    const displayFruits = () => fruits.map(function (fruit){
            return <li>{fruit} </li>
        })
   
    return<>
        <h1>Fruits :</h1>
        <ul>
        {displayFruits()}
        </ul>
        </>
      
}