import React from 'react';

export default function userNames({
  items
}) {
  return(
    <div>
      {
        items.map((item) => (
          <li>{ item }</li>
        ))
      } 
    </div>
  )
}