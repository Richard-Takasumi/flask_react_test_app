import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, TooltipProps } from 'recharts';
  const ratingToNumber = {
    'C': 1,
    'Ca': 2,
    'Caa3': 3,
    'Caa2': 4,
    'Caa1': 5,
    'B3': 6,
    'B2': 7,
    'B1': 8,
    'Ba3': 9,
    'Ba2': 10,
    'Ba1': 11,
    'Baa3': 12,
    'Baa2': 13,
    'Baa1': 14,
    'A3': 15,
    'A2': 16,
    'A1': 17,
    'Aa3': 18,
    'Aa2': 19,
    'Aa1': 20,
    'Aaa': 21
  };
  
  
  const data = [
    { date: '2020-01-01', yield: 3.2, rating: 'Aa2', treasuryYield: 2.1 },
    { date: '2020-02-01', yield: 2.8, rating: 'Aa2', treasuryYield: 2.2 },
    { date: '2020-03-01', yield: 2.5, rating: 'Aa2', treasuryYield: 2.3 },
    { date: '2020-04-01', yield: 2.3, rating: 'Baa1', treasuryYield: 2.4 },
    { date: '2020-05-01', yield: 2.4, rating: 'Baa1', treasuryYield: 2.5 },
    { date: '2020-06-01', yield: 2.6, rating: 'Baa1', treasuryYield: 2.6 },
    { date: '2020-07-01', yield: 2.7, rating: 'Baa1', treasuryYield: 2.7 },
    { date: '2020-08-01', yield: 2.9, rating: 'Baa1', treasuryYield: 2.8 },
    { date: '2020-09-01', yield: 3.0, rating: 'B1', treasuryYield: 2.9 },
    { date: '2020-10-01', yield: 3.1, rating: 'B1', treasuryYield: 3.0 },
    { date: '2020-11-01', yield: 3.3, rating: 'B1', treasuryYield: 3.1 },
    { date: '2020-12-01', yield: 3.5, rating: 'B1', treasuryYield: 3.2 },
  ].map(item => ({
    ...item,
    ratingNumber: ratingToNumber[item.rating]
  }));

  const numberToRating = Object.entries(ratingToNumber).reduce((obj, [key, value]) => {
    obj[value] = key;
    return obj;
  }, {});
  
  const CustomYAxisTick = ({ x, y, payload }: {x: number, y: number, payload: any}) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#7D8FA9">{numberToRating[payload.value]}</text>
      </g>
    );
  };
  
  const CustomTooltip = ({ active, payload }: TooltipProps<any, any>) => {
    if (active && payload && payload.length) {
      const date = payload[0].payload.date;
      const yieldValue = payload[0].value;
      const treasuryYield = payload[1].value;
      const ratingNumber = payload[2].value;
      const rating = numberToRating[ratingNumber];
      return (
        <div className="custom-tooltip">
          <p className="label">{`Date : ${date}`}</p>
          <p className="intro">{`Yield : ${yieldValue}`}</p>
          <p className="desc">{`Treasury Yield : ${treasuryYield}`}</p>
          <p className="desc">{`Rating : ${rating}`}</p>
        </div>
      );
    }
  
    return null;
  };
  
  
  export default function MyLineChart() {
    return (
        <ResponsiveContainer width="90%" height="85%">
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="1 0" vertical={false} />
            <XAxis strokeWidth={2.5} dataKey="date" stroke="#7D8FA9" interval={1} />
            <YAxis strokeWidth={2.5} yAxisId="left" orientation="left" stroke="#B142F5" />
            <YAxis strokeWidth={2.5} yAxisId="right" orientation="left" stroke="#42AAF5" domain={[1, 21]} tick={CustomYAxisTick} />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top"  align="right" height={36}/> 
            <Line strokeWidth={2.5} yAxisId="left" type="monotone" dataKey="yield" name="Bond Yield" stroke="#B142F5" /> {/* yield line color */}
            <Line strokeWidth={2.5} yAxisId="left" type="monotone" dataKey="treasuryYield" name="Treasury Yield" stroke="#82ca9d" /> {/* treasuryYield line color */}
            <Line strokeWidth={2.5} yAxisId="right" type="step" dataKey="ratingNumber" name="Moodys Rating" stroke="#42AAF5" /> {/* ratingNumber line color */}
            </LineChart>
        </ResponsiveContainer>
    );
  }