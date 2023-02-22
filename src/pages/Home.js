import React from 'react'
import "./home.css"
import { useState } from 'react';

const word = [{name:"whale", anlam:"balina"},
{name:"squid",anlam:"kalamar"} ,
{name:"turtle",anlam:"kaplumbağa"},
{name:"coral",anlam:"mercan"},
{name:"love ( iyi düşün)",anlam:"berk"},
{name:"starfish",anlam:"deniz yıldızı"}];

const Home = () => {
  
  const [number,setNumber] = useState(0)
  const [wordState, setWordState] = useState("")


  console.log(number)
  console.log(wordState)

  const generateNumber = () => {
    const x = (Math.floor(Math.random()*word.length))
    setNumber(x);
  }

  const ChangeValue =(event) => {
    event.preventDefault();
    setWordState(event.target.value.toLowerCase())
    console.log(setWordState)
  }

  const compare = () => {
    console.log(wordState)
    console.log(word[number].anlam)
    if ( wordState === word[number].anlam) {
      return <p className='text-center font-bold bg-red-200 p-8 border-red-200'> AFFERİMM BEBEĞİME !</p>
    }
  }

  return (
    <div className='py-52 px-16 h-[calc(100vh-60px)] grid grid-rows-3 gap-4 bg-purple-200'>
         <div className=' rounded-3xl  bg-cyan-200'>
         <button className='w-full h-full rounded-3xl  bg-cyan-200' onClick={generateNumber}>Berkcim bir kelime alabilir miyim?</button> <br></br>
         </div>
         <div>
          asd
         </div>
         
      <span className='flex rounded-3xl  text-center bg-red-400 font-bold'>
        <div className='m-auto rounded-3xl  text-center bg-red-100 font-bold'>
     Kelimen {word[number].name} sevgilim :)
        </div>
      </span>
    <div className=' rounded-3xl content-center bg-sky-300'>

     <input onChange={ChangeValue} className='text-center w-full h-[100%] rounded-3xl content-center bg-sky-300'/>
    </div>
{/*     <div id='hideMe'>hideme</div> */}
    
    
       {/*  {word[number].anlam}  <br></br> */}
   {/*    <button onClick={compare}>öğren</button> */}
{compare()}
      {/* <p>{wordState}</p> */}
    {/*   <p>{word[number].anlam}</p> */}
    </div>
  )
}

export default Home