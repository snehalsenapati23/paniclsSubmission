import { BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts';
import {React,useState} from 'react';
import users from '../dummydata.json'
import '../styles/charts.css';
import { Tooltip,Legend } from 'chart.js';
import Piechart from '../components/piechart';
import { useNavigate } from 'react-router-dom';
import Noofcountry from '../components/Noofcountry';





function Chartdata() {
const navigate=useNavigate()
  
    const filteredUsers = users.filter(user => {
        const dob = new Date(user.dob);
        const ageInMilliseconds = Date.now() - dob.getTime();
        const age = new Date(ageInMilliseconds).getFullYear() - 1971;
        return age > 30;
      });
const groupedData = filteredUsers.reduce((acc, user) => {
  if (!acc[user.gender]) {
    acc[user.gender] = 0;
  }
  acc[user.gender]++;
  return acc;
}, {});

const data1 = Object.keys(groupedData).map(gender => ({ gender, count: groupedData[gender] }));

const counts = {};


for (let i = 0; i < users.length; i++) {
  const country = users[i].country;
  counts[country] = counts[country] ? counts[country] + 1 : 1;
}

console.log(counts);



const items = Object.entries(counts).map(([country, count]) => (
  <li key={country}>
    {country}: {count}
  </li>
));


  return (
    <>
         <div><button style={{width:'170px', height:'50px' , background:"blue", color:"white"}} type='button' onClick={()=>navigate('/table')}>Table  Page</button></div>
    <h1 className='charts-head'>Charts</h1>
  <Piechart />
    <BarChart width={600} height={400} data={data1} style={{width:'30%', height:'30%',alignItems:'center',marginLeft:'30%'}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="gender" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
<div><div>
      <h2>Counts by Country</h2>
      <ul>{items}</ul>
    </div></div>
   
 
    </>
  );
}
export default Chartdata;