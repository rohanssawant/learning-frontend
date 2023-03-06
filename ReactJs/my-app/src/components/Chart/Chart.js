import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dpValues = props.dataPoints.map((dp) => dp.value);
  const maxValue = Math.max(...dpValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          label={dp.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};
export default Chart;
