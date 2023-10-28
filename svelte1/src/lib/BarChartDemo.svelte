<script>
  import * as d3 from "d3";

  // constants
  const width = 500;
  const height = 350;
  const margin = { top: 10, right: 10, bottom: 30, left: 10 };

  let data = [30, 50, 80, 90, 20];

  // define your scales
  $: xScale = d3
    .scaleBand()
    .domain(data.map((d, i) => i))
    .range([0, width - margin.left - margin.right])
    .padding(0.05);
  $: colourScale = d3
    .scaleOrdinal()
    .domain(data.map((d, i) => i))
    .range([
      "#f72585",
      "#b5179e",
      "#7209b7",
      "#560bad",
      "#480ca8",
      "#3f37c9",
      "#4895ef",
    ]);

  // function to pass to button on click to generate random data
  const getRandomData = () => {
    const dataLength = Math.floor(Math.random() * Math.floor(6)) + 3;
    return Array.from(
      { length: dataLength },
      () => Math.floor(Math.random() * 300) + 10
    );
  };

  // x Axis
  let xAxisRef;
  $: xAxis = (g) =>
    g
      .attr("transform", `translate(${0}, ${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .call((d) => d.select(".domain").remove());
  // select the ref to the axis g element and call axis in there
  $: if (xAxisRef) {
    d3.select(xAxisRef).call(xAxis);
  }
</script>

<div class="bar-chart-demo-wrapper" id="wrapper_bar-chart-demo">
  <svg {width} {height}>
    <g transform={`translate(${margin.left},${margin.top})`}>
      {#each data as d, i}
        <rect
          x={xScale(i)}
          y={height - margin.bottom - d}
          width={xScale.bandwidth()}
          height={d}
          fill={colourScale(i)}
        />
      {/each}
      <g bind:this={xAxisRef} />
    </g>
  </svg>
  <button
    on:click={() => (data = getRandomData())}
    class="bar-chart-random-btn"
  >
    {" "}
    random{" "}
  </button>
</div>
