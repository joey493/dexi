import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './spinner'
import BasicTable from './table'

function Challenge02() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [counter, setCounter] = useState(5)

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?seed=dexi-interview&results=${counter}`)
    .then(({data: {results}}) => {
      setUsers(results)
      setLoading(prev => !prev)
    })
  }, [counter])

  const handleClick = () => {
    setCounter(prev => prev + 5)
    setLoading(prev => !prev)
  }
  
  return (
    <main className='container'>
      <h1>Challenge02</h1>
      <button onClick={handleClick}>
        Load More
      </button>
      {loading 
        ? <Spinner/>
        : <BasicTable users={users}/>
      }
      
    </main>
  )
}


export default Challenge02