$(function () {


    // =====================================
    // Profit
    // =====================================
    var chart = {
      series: [
        { name: "Earnings this month:", data: [355, 390, 300, 350, 390, 180, 355, 390] },
        { name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280, 250] },
      ],
  
      chart: {
        type: "bar",
        height: 345,
        offsetX: -15,
        toolbar: { show: true },
        foreColor: "#adb0bb",
        fontFamily: 'inherit',
        sparkline: { enabled: false },
      },
  
  
      colors: ["#5D87FF", "#49BEFF"],
  
  
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          borderRadius: [6],
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all'
        },
      },
      markers: { size: 0 },
  
      dataLabels: {
        enabled: false,
      },
  
  
      legend: {
        show: false,
      },
  
  
      grid: {
        borderColor: "rgba(0,0,0,0.1)",
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
  
      xaxis: {
        type: "category",
        categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
        labels: {
          style: { cssClass: "grey--text lighten-2--text fill-color" },
        },
      },
  
  
      yaxis: {
        show: true,
        min: 0,
        max: 400,
        tickAmount: 4,
        labels: {
          style: {
            cssClass: "grey--text lighten-2--text fill-color",
          },
        },
      },
      stroke: {
        show: true,
        width: 3,
        lineCap: "butt",
        colors: ["transparent"],
      },
  
  
      tooltip: { theme: "light" },
  
      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 3,
              }
            },
          }
        }
      ]
  
  
    };
  
    var chart = new ApexCharts(document.querySelector("#chart"), chart);
    chart.render();
  
  
    // =====================================
    // Breakup
    // =====================================
    var breakup = {
      color: "#adb5bd",
      series: [38, 40, 25],
      labels: ["2022", "2021", "2020"],
      chart: {
        width: 180,
        type: "donut",
        fontFamily: "Plus Jakarta Sans', sans-serif",
        foreColor: "#adb0bb",
      },
      plotOptions: {
        pie: {
          startAngle: 0,
          endAngle: 360,
          donut: {
            size: '75%',
          },
        },
      },
      stroke: {
        show: false,
      },
  
      dataLabels: {
        enabled: false,
      },
  
      legend: {
        show: false,
      },
      colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],
  
      responsive: [
        {
          breakpoint: 991,
          options: {
            chart: {
              width: 150,
            },
          },
        },
      ],
      tooltip: {
        theme: "dark",
        fillSeriesColor: false,
      },
    };
  
    var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
    chart.render();
  
  
  
  
    // customervisit
   
    var customervisit = {
      chart: {
        id: "sparkline3",
        type: "area",
        height: 60,
        sparkline: {
          enabled: true,
        },
        group: "sparklines",
        fontFamily: "Plus Jakarta Sans', sans-serif",
        foreColor: "#adb0bb",
      },
      series: [
        {
          name: "customer count",
          color: "#F8A143",
          data: [25, 46, 20, 40, 12, 58, 20],
        },
      ],
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        colors: ["#f3feff"],
        type: "solid",
        opacity: 0.05,
      },
  
      markers: {
        size: 0,
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: true,
          position: "right",
        },
        x: {
          show: false,
        },
      },
    };

    var totalorders = {
        chart: {
          id: "sparkline3",
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          group: "sparklines",
          fontFamily: "Plus Jakarta Sans', sans-serif",
          foreColor: "#adb0bb",
        },
        series: [
          {
            name: "orders count",
            color: "#B394F1",
            data: [12, 46, 20, 40, 12, 58, 20],
          },
        ],
        stroke: {
          curve: "smooth",
          width: 2,
        },
        fill: {
          colors: ["#f3feff"],
          type: "solid",
          opacity: 0.05,
        },
    
        markers: {
          size: 0,
        },
        tooltip: {
          theme: "dark",
          fixed: {
            enabled: true,
            position: "right",
          },
          x: {
            show: false,
          },
        },
      };
      var totalpending = {
        chart: {
          id: "sparkline3",
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          group: "sparklines",
          fontFamily: "Plus Jakarta Sans', sans-serif",
          foreColor: "#adb0bb",
        },
        series: [
          {
            name: "pending count",
            color: "#67D3CA",
            data: [50, 46, 20, 40, 12, 58, 20],
          },
        ],
        stroke: {
          curve: "smooth",
          width: 2,
        },
        fill: {
          colors: ["#f3feff"],
          type: "solid",
          opacity: 0.05,
        },
    
        markers: {
          size: 0,
        },
        tooltip: {
          theme: "dark",
          fixed: {
            enabled: true,
            position: "right",
          },
          x: {
            show: false,
          },
        },
      };
      var totaldelivered = {
        chart: {
          id: "sparkline3",
          type: "area",
          height: 60,
          sparkline: {
            enabled: true,
          },
          group: "sparklines",
          fontFamily: "Plus Jakarta Sans', sans-serif",
          foreColor: "#adb0bb",
        },
        series: [
          {
            name: "delivered count",
            color: "#EC68A9",
            data: [70, 68, 20, 40, 12, 58, 20],
          },
        ],
        stroke: {
          curve: "smooth",
          width: 2,
        },
        fill: {
          colors: ["#f3feff"],
          type: "solid",
          opacity: 0.05,
        },
    
        markers: {
          size: 0,
        },
        tooltip: {
          theme: "dark",
          fixed: {
            enabled: true,
            position: "right",
          },
          x: {
            show: false,
          },
        },
      };
    new ApexCharts(document.querySelector("#customervisit"), customervisit).render();
    new ApexCharts(document.querySelector("#totalorders"), totalorders).render();
    new ApexCharts(document.querySelector("#totalpending"), totalpending).render();
    new ApexCharts(document.querySelector("#totaldelivered"), totaldelivered).render();
// totaltarget
var optionstarget = {
    series: [70],
    chart: {
    height: 200,
    width:200,
    type: 'radialBar',
  },
  
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Completed' , 'Incomplete'],
  };

  var chart = new ApexCharts(document.querySelector("#totaltarget"), optionstarget);
  chart.render();

  // profit chart
  var profitoptions = {
    series: [{
    name: '$256.48',
    width: 280,
    data: [44, 55, 57, 56, 61, 58, 63],
    colors:"#E96559"
  }, {
    name: '$187.39',
    data: [76, 85, 101, 98, 87, 105, 91]
  }, ],
    chart: {
    type: 'bar',
    height: 200
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['SUN' , 'MON' , 'TUE', 'WED' , 'THU' , 'FRI' , 'SAT'],
  },
  yaxis: {
    
    labels:{
      style:{
        colors: "#FF1654"
      }
    },
  },
  
  fill: {
    opacity: 1
  },
 
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#profitchart"), profitoptions);
  chart.render();
// polar chart
var options = {
    series: [44, 55, 13, 33],
    chart: {
    width: 280,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
  }
  };

  var chart = new ApexCharts(document.querySelector("#piechart"), options);
  chart.render();


  function appendData() {
  var arr = chart.w.globals.series.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  return arr;
}

function removeData() {
  var arr = chart.w.globals.series.slice()
  arr.pop()
  return arr;
}

function randomize() {
  return chart.w.globals.series.map(function() {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  })
}

function reset() {
  return options.series
}

document.querySelector("#randomize").addEventListener("click", function() {
  chart.updateSeries(randomize())
})

document.querySelector("#add").addEventListener("click", function() {
  chart.updateSeries(appendData())
})

document.querySelector("#remove").addEventListener("click", function() {
  chart.updateSeries(removeData())
})

document.querySelector("#reset").addEventListener("click", function() {
  chart.updateSeries(reset())
})




  })
