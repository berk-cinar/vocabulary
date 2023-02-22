import React from 'react'
import { useState } from 'react';




const word = [{name:"whale", anlam:"balina"},
{name:"squid",anlam:"kalamar"} ,
{name:"turtle",anlam:"kaplumbağa"},
{name:"coral",anlam:"mercan"},
{name:"starfish",anlam:"deniz yıldızı"}];




const translation = word.map(item => {
  const container = {};
  
  container.name = item.name;
  /*  container[item.name] = item.anlam; */
  container.cevirisi=item.anlam
  
  return container
})

console.log(translation)

const Learn = () => {
  const [wordState, setWordState] = useState("")
  const [anlam, setAnlam] = useState([])
  const [number, setNumber] = useState()

  // RANDOM ITEMS

/*   const numberFunction = () => {
     const x = Math.floor(Math.random()*word.length)
    console.log(x);
    <p>word[x]</p>
  }
 */
/*   function random_item(word)
{
  
return (
  setNumber(Math.floor(Math.random()*word.length)),
  word[number]
);
     
}
console.log(random_item(word));
console.log(number); */


// END OF RANDOM ITEMS

  const ChangeValue =(event) => {
    setWordState(event.target.value)
    setAnlam(event.target.anlam)
    console.log(wordState);
    console.log(anlam);
  }



  const numberFunction = () => {
    const x = Math.floor(Math.random()*word.length)
    setNumber(x);
    console.log(x)
  /*   console.log(number);
    <p>word[x]</p> */
  }

  return (
    <div>
      <h1>Learn</h1>
      <p>{word[number]}</p> 
      <button onClick={numberFunction}>Number</button>

      <div>

    <ul >{word.map(i => <li className='mt-2' key={i}>
      
         {i.name}- {i.id} : {/* {i.anlam}  */}
         

    <input onChange={ChangeValue} className='bg-red-200'/> 
    <button className='w-16 bg-sky-300'>
       ?
      </button> 
    </li>
    )}</ul>
  </div>
      <p>Do you remember the words Fıstık ?</p>



    </div>
  
  )
}



export default Learn