'use client'
import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { percentile: 10, students: 2 },
  { percentile: 30, students: 5 },
  { percentile: 50, students: 20 },
  { percentile: 70, students: 90 },
  { percentile: 90, students: 40 },
  { percentile: 100, students: 10 },
];

const ScoreGraph = () => {
  return (
    <div className='flex flex-col gap-3'>
      <p className='text-black text-xs md:text-sm font-medium '>You scored 30% percentile which is lower than the average percentile 72% of all the engineers who took this assessment.</p>
      <div>
      <ResponsiveContainer width="100%" height={250}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="percentile" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="students" stroke="#6366F1" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>

      </div>
    </div>
    
  )
}

export default ScoreGraph