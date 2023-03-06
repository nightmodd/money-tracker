import "./Chart.css";

function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  const maximumValue = Math.max(...dataPointValues);


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Chart;
