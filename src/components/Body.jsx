import React from 'react';
import Card from './Card';
import Data from './Data'

const Body = () => {
  const elements = Data.map(item => <Card key={item.id} item={item} />)
  return (
    <div className='body-content'>
      {elements}
    </div>
  )
}

export default Body