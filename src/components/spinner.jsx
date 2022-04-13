import React from 'react'

const styles = {
  borderRadius: '50%',
  position: 'relative',
  left: '50%',
  top: '50%',
  border: '3px solid red',
  borderBottomColor: 'black',
  width: '3rem',
  height: '3rem',
}
function Spinner() {
  return (
    <div className='spinner'></div>
  )
}

export default Spinner