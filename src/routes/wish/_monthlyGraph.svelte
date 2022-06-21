<script>
  import Chart from 'chart.js';

  export let data = {};
  let chart;

  function createGraph() {
    if (Object.keys(data).length === 0 || chart === undefined) return;

    Chart.defaults.global.defaultFontColor = '#cbd5e0';
    Chart.defaults.global.defaultFontFamily = 'Poppins';

    const labels = [];
    const total = [];
    const legendary = [];
    const rare = [];

    const entries = Object.entries(data).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [time, value] of entries) {
      labels.push(time);
      total.push(value.total);
      legendary.push(value.legendary);
      rare.push(value.rare);
    }

    new Chart(chart, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: '5* pulls',
            data: legendary,
            backgroundColor: 'rgba(255, 177, 63, 0.7)',
            borderColor: '#FFB13F',
            borderWidth: 1,
          },
          {
            label: '4* pulls',
            data: rare,
            backgroundColor: 'rgba(210, 143, 214, 0.7)',
            borderColor: '#D28FD6',
            borderWidth: 1,
          },
          {
            label: 'Total pulls',
            data: total,
            backgroundColor: 'rgba(107, 161, 192, 0.7)',
            borderColor: '#6BA1C0',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        elements: {
          line: {
            tension: 0.2,
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                minRotation: 45,
                maxRotation: 70,
              },
            },
          ],
        },
      },
    });
  }

  $: data, createGraph();
</script>

<div class="flex flex-col bg-item rounded-xl p-4 w-full" style="height: 200px;">
  <canvas width="500" height="200" bind:this={chart} />
</div>
