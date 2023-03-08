import React from 'react'

const Author = ({author,name}) => {
  return (
    <div className='content'>
        <div className='name'>{name}</div>
        {author.map((title,index)=>(
            <div key={index} className="text">{title.text}</div>
        ))}
        
    </div>
  )
}

export default Author