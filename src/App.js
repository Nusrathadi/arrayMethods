
import { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';


function App() {
 const [result,setResult] = useState("")
 const [ans,setAns]=useState([])

  const handleChange=(e)=>{
    console.log(e.target.value)
    setResult(e.target.value)
  }

const handleDisplay=()=>{
 let arr= result.split(" ")
 setAns(arr)
 console.log(ans)
}

const handleSame=()=>{
  let arr=result.split(" ")
   let newArr=arr.map((i)=>{return i*i
    })
    console.log(newArr)
    setAns(newArr)
  
}

const handleReverse =()=>{
  let arr=result.split(" ").reverse()
  setAns(arr)
  console.log(arr)
}
const handlefilter=()=>{
  let arr=result.split(" ")
  let filterArr=arr.filter((i)=>{return i>5})
  console.log(filterArr)
  setAns(filterArr)
}

const handleSum=()=>{
  let arr=result.split(" ")
  let reduceArr=arr.reduce((sum,i)=>{
    return sum+parseInt(i)},0)
    console.log(reduceArr)
    setAns(reduceArr)
}

const handleMax=()=>{
  let arr=result.split(" ")
  arr.map(str=>parseInt(str))
  let fillArr=Math.max(...arr)
  console.log(fillArr)
  setAns(fillArr)
}

const handleMin=()=>{
  let arr=result.split(" ")
  arr.map(Number)
  let fillArr=Math.min(...arr)
  console.log(fillArr)
  setAns(fillArr)
}


  return (
    <div className="App">
      <div className='d-flex align-item-center justify-content-center'>
       <input  className="form-control w-25" name={ans} placeholder='Enter here...'  onChange={handleChange} ></input>
      </div>
       <div className='container flex-column mt-4 d-flex gap-4 justify-content-center'>
           <div className=' mt-3 d-flex gap-4 justify-content-center '>
          <Button variant="secondary" className="secondary" onClick={handleDisplay}>split string into Array</Button>
          <Button variant="secondary" onClick={handleSame}>Double element</Button>
          </div>
          <div className=' mt-1 d-flex gap-4 justify-content-center '>
          <Button variant="secondary" onClick={handleReverse}>reverse</Button>
          <Button variant="secondary" onClick={handlefilter}>filter >5</Button>
          <Button variant="secondary" onClick={handleSum}>sum</Button>
          
          </div>
          <div className=' mt-1 d-flex gap-4 justify-content-center '>
           <Button variant="secondary" onClick={handleMin}>Min value</Button>
          <Button variant="secondary" onClick={handleMax}>Max value</Button>
          
          </div>
     
       </div>
       <div>{JSON.stringify(ans)}</div>
    </div>
  );
}

export default App;

