import React from 'react'
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import users from '../dummydata.json'

const Noofcountry = () => {

  const [counts, setCounts] = useState({});
  
  for (let i = 0; i < users.length; i++) {
    const country = users[i].country;
    setCounts(counts => ({ ...counts, [country]: (counts[country] || 0) + 1 }));
  }
  
  return (
    <BarChart width={600} height={300} data={Object.entries(counts)}>
      <Bar dataKey="1" fill="#8884d8" />
      <XAxis dataKey="0" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
    </BarChart>
  )
}

export default Noofcountry