import {useEffect, useState} from 'react'

function Challenge01() {
  const [arr2, setArr2] = useState([])
  const [minNum, setMinNum] = useState(0)

  function getMin(arr1, k) {
    let sortedArr = arr1.sort((a, b) => a - b)
    let arr2 = []
    let i = 0
    while (i < k) {
      arr2.push(sortedArr[i])
      i++
    }
    let min = Math.max(...arr2) - Math.min(...arr2)
    setArr2(arr2)
    setMinNum(min)
  } 
  
  useEffect(() => {
    getMin([30,100,300,200,1000,10,20], 3)
  },[])
  
  return (
    <main className='container challenge01'>
      <h1>Challenge01</h1>
      <p>arr2: {JSON.stringify(arr2)}</p>
      <p>num: {minNum}</p>
    </main>
  )
}

export default Challenge01