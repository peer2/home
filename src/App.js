import React from 'react';
import { LineChart, Line, linearGradient, defs, AreaChart, Area } from 'recharts'

import './App.css';

function App() {

  const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

  return (
    <div className="App">
      <br />
      <br />
      <div className="title">peer2</div>
      <hr className="bar"/>
      <hr className="bar"/>
      <br />
      <br />
      <div>
        <p>* invest in ecommerce businesses, not whitepapers</p>
        <p>* decentralized private financials, public markets</p>
        <p>* built with ethereum, dat, & enigma</p>
      </div>

      <div className="row divide10">
        <div className="column">
          payment widget
          <br/>
          <br/>
          <br/>
          <br/>
          <button type="button" className="payment-widget">peer2 pay</button>
        </div>
        <div className="column">
          coinmarket-style markets
          <br />
          <br />
          <br />
          {/*ecc447*/}
          <AreaChart
            width={250}
            height={70}
            data={data}

          > 
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="yellow" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ecc447" stopOpacity={0}/>
              </linearGradient>
            </defs>
             <Area type="monotone" dataKey="pv" stroke="#ecc447" fillOpacity={1} fill="url(#colorUv)" />
            {/*<Area dataKey="temperature" stroke="#ecc447" fill="#8884d8" />*/}
          </AreaChart>

{/*          <LineChart width={250} height={70} data={data}>
            <Line type="monotone" dataKey="pv" stroke="#ecc447" strokeWidth={1} />
          </LineChart>
          */}
        </div>
        <div className="column">
          uncensorable email campaigns
          <br />
          <br />
          <br />
          <br />
          <input type="text" className="email-input" placeholder="satoshi@protonmail.com" />
        </div>
      </div>

      <div className="footer">
        <a  href="mailto:name@email.com">
          contact
        </a>
         &nbsp; | &nbsp;
        <a  href="http://github.com/peer2">
          github
        </a>
      </div>

    </div>
  );
}

export default App;
