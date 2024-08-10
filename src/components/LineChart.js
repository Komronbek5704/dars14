import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', expenses: 4000 },
  { month: 'Feb', expenses: 3000 },
  { month: 'Mar', expenses: 5000 },

];

function LineChartComponent() {
  return (
    <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="expenses" stroke="#0ea5e9" />
    </LineChart>
  );
}

export default LineChartComponent;
