/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const DataPieChart = ({ cars, microbuses, trucks }) => {
    const data = [
        { name: 'Cars', value: cars?.length },
        { name: 'Microbuses', value: microbuses?.length },
        { name: 'Trucks', value: trucks?.length }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <PieChart width={300} height={300}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    );
};

export default DataPieChart;
