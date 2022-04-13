import {useEffect, useState} from 'react'
import axios from 'axios'
import AgeChart from './ageChart';
import CountryChart from './countryChart';
import DateChart from './dateChart';
import GenderChart from './genderChart';



function Challenge03() {
  const [data, setData] = useState([])
  const [chartsData, setChartsData] = useState({})
  
  useEffect(() => {
    axios.get('https://randomuser.me/api/?seed=dexi-interview&results=100')
    .then(({data}) => setData(data.results))
  }, [])
  
  const distribute = (arr) => {
    const holder = {
      gender: {},
      age: {},
      country: {},
      registerdDate: {}
      
    } 
    arr.forEach(ele => {
      holder.gender[ele.gender] = (holder.gender[ele.gender] || 0) + 1
      holder.age[ele.dob.age] = (holder.age[ele.dob.age] || 0) + 1
      holder.country[ele.location.country] = (holder.country[ele.location.country] || 0) + 1
      holder.registerdDate[ele.registered.date] = (holder.registerdDate[ele.registered.date] || 0) + 1
    })
    setChartsData(holder)
  } 
  
  useEffect(() => {
    distribute(data)
  }, [data])

  return (
    <div className='container'>
      <h1>Challenge03</h1>
      {chartsData.age &&
        <div className='chartHolder'>
          <GenderChart genderData={chartsData.gender}/>
          <CountryChart countryData={chartsData.country}/>
          <AgeChart ageData={chartsData.age} />
          <DateChart registerdDate={chartsData.registerdDate} />
        </div> 
      }
    </div>
  )
}

export default Challenge03
