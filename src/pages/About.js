import React, {useState} from 'react';

import Counter from '../Counter'

const About = () => {
  const [name, setName] = useState("John")

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="container">
      <h4 className="center">About Page</h4>
      <Counter />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quidem praesentium hic nisi odio quasi harum sed. Vel deserunt nulla blanditiis cumque, 
        quidem praesentium voluptas exercitationem corrupti possimus maiores? Sit, tenetur!</p>
        
        {/* tanpa perlu pake this */}
        <input value={name} onChange={handleNameChange} />
        <h3>{name}</h3>
    </div>

    
  )
}

export default About;
