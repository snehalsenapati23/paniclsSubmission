import React from 'react';
import users from '../dummydata.json'
import { Pie } from 'react-chartjs-2';
import {Chart, Tooltip,Title,ArcElement,Legend } from 'chart.js';
Chart.register(
    Tooltip,Title,ArcElement,Legend
    );
    //1.piechart
    const data = {
      labels: ['Over 30', 'Under 30'],
      datasets: [
        {
          
          data: [
            users.filter(person => 2023 - new Date(person.dob).getFullYear() > 30).length,
            users.filter(person => 2023 - new Date(person.dob).getFullYear() <= 30).length
          ],
          backgroundColor: [
            '#FF6384',
            '#36A2EB'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB'
          ]
        }
      ]
    };
    function piechart(){

        return (
            <div className="pie" style={{width:'30%', height:'30%',alignItems:'center',marginLeft:'30%'}}>  <Pie data={data} /></div>
        )
    };
    export default piechart;