import React from 'react';

export default function Repo({
  name,
  full_name,
  url
}) {
  return(
    <div>
        <h1>{ name }</h1>
        <h2>{ full_name } </h2>
        <p>{ url }</p>

      
    </div>
  )
}