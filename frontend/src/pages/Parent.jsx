import React from 'react'
import Child from '../components/Child'

const Parent = () => {
  return (
    <div>
      <Child name="Rakshana" age={25}
      marks={[99,98,100,99,98]}
      person={{name:"Rakshu",dept:["AIDS"]}}
      />
    </div>
  )
}

export default Parent
