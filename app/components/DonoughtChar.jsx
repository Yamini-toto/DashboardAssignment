"use client";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { FaBullseye } from "react-icons/fa";

const DonutChart = ({ formData, total }) => {
  const correct = Number(formData?.score || 10);
  const incorrect = total - correct;
  const data = [
    { name: "Correct", value:  correct },
    { name: "Incorrect", value: incorrect },
   
  
  ];

  const COLORS = ["#3B82F6", "#E5E7EB"];
  console.log("DonutChart", formData, total, data[0].value, data[1].value);

  return (
    <div className="relative flex items-center justify-center mt-4">
      <PieChart width={150} height={150} key={formData?.score}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={65}
          startAngle={90}
          endAngle={-270}
          paddingAngle={3}
          dataKey="value"
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute text-red-500 text-xl">
        <FaBullseye />
      </div>
    </div>
  );
};

export default DonutChart;