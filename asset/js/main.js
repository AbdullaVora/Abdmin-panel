$(document).ready(function () {

  // loader js

    $("#loader").fadeOut(1000);


  // // bar set
  $('.bar').click(function () {
    if ($('aside').hasClass('hide')) {
      $('aside').toggleClass('w-278');
      $('.sidebar span').toggleClass('show');
      $('.right-arrow').toggleClass('show');
      $('.menu').toggleClass('icon-padding');
      $('.category').toggleClass('show');
      $('.user-info').toggleClass('show');
      $('aside').removeClass('aside-w');
      $('.h-logo').addClass('show');
    }
    else {
      $('header').toggleClass('h-m');
      $('aside').toggleClass('aside-w');
      $('.sidebar span').toggleClass('hide');
      $('.right-arrow').toggleClass('hide');
      $('.category').toggleClass('hide');
      $('.menu').toggleClass('icon-padding');
      $('.logo').toggleClass('hide');
      $('.logo-2').toggleClass('show');
      $('.logo-light').toggleClass('hide');
      $('.logo-3').toggleClass('show');
      $('.page-area').toggleClass('h-m');
      $('footer').toggleClass('h-m');
      $('.fa-bars-staggered').toggleClass('hide');
      $('.fa-x').toggleClass('show');
      $('aside').toggleClass('show');
      $('.user-info').toggleClass('hide');
      $('.user').toggleClass('w-50');
    }
  });


  // pointer js
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
    );
  });

  document.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });


  // light mode
  $('.light').click(function () {
    $('.light').hide();
    $('.dark').show();
    $(':root').css("--dark-theme", "#fff");
    $(':root').css("--dark-icon-color", "#031B4E");
    $(':root').css("--main-bg", "#ecf0fa");
    $(':root').css("--font-color", "#5B6E88");
    $(':root').css("--search-bg", "#ECF0FA");
    $(':root').css("--sub-title", "#7987A1");
    $(':root').css("--dark-font-color", "#242f48");
    $(':root').css("--table-bg", "#ecf0fa");
    $('tbody td').css("border", "1px solid #eae8f1");
    $('.box-11 .box-border').css("border", "2px solid #eae8f1");
    $('.box-11 .data').css("border-bottom", "2px solid #eae8f1");
    $(".box-1 span").css("color", "#fff");
    $(".box-2 span").css("color", "#fff");
    $(".box-3 span").css("color", "#fff");
    $(".box-4 span").css("color", "#fff");
    $('.shadow-show').addClass('shadow');
    $('header').addClass('h-shadow');
    $('aside').addClass('aside-shadow');
    $('.w-logo').addClass('show');
    $('.d-logo').addClass('hide');

  });


  // dark mode
  $('.dark').click(function () {
    $('.dark').hide();
    $('.light').show();
    $(':root').css("--dark-theme", "#1f2940");
    $(':root').css("--dark-icon-color", "#fff");
    $(':root').css("--main-bg", "#141b2d");
    $(':root').css("--font-color", "#DDE3EA");
    $(':root').css("--search-bg", "#29344e");
    $(':root').css("--sub-title", "rgba(255, 255, 255, 0.6)");
    $(':root').css("--dark-font-color", "#fff");
    $('.shadow-show').toggleClass('shadow');
    $('header').toggleClass('h-shadow');
    $('aside').toggleClass('aside-shadow');
    $(':root').css("--table-bg", "#192133");
    $('.box-11 .box-border').css("border", "2px solid rgba(255, 255, 255, 0.1)");
    $('.box-11 .data').css("border-bottom", "2px solid rgba(255, 255, 255, 0.1)");
    $('tbody td').css("border-right", "2px solid rgba(255, 255, 255, 0.1)");
    $('tbody td').css("border-top", "0");
    $('tbody td').css("border-left", "0");
    $('tbody td').css("border-bottom", "0");
    $('.d-logo').removeClass('hide');
    $('.w-logo').removeClass('show');
  });


  // drop-down
  $('.menu').click(function () {
    $('.sub-menu').slideUp(500);
    $(this).next('.sub-menu').slideToggle(500);
    $('.right-arrow').toggleClass('transform-arrow');
  });

  
  // mouse hover

  $('aside').hover(function () {
    if ($('aside').hasClass('aside-w')) {
      $('aside').toggleClass('w-278');
      $('.sidebar span').toggleClass('show');
      $('.right-arrow').toggleClass('show');
      $('.menu').toggleClass('icon-padding');
      $('.category').toggleClass('show');
      $('.user-info').toggleClass('show');
    }

  });


  // counter js
  $('.count-1')
    .animateNumber(
      {
        number: 5574.12,
        numberStep: function (now, tween) {
          // see http://stackoverflow.com/a/14428340
          var formatted = now.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
          $(tween.elem).text('$' + formatted);
        }
      },
      3500
    );

  $('.count-2')
    .animateNumber(
      {
        number: 1230.17,
        numberStep: function (now, tween) {
          // see http://stackoverflow.com/a/14428340
          var formatted = now.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
          $(tween.elem).text('$' + formatted);
        }
      },
      3500
    );

  $('.count-3')
    .animateNumber(
      {
        number: 7125.17,
        numberStep: function (now, tween) {
          // see http://stackoverflow.com/a/14428340
          var formatted = now.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
          $(tween.elem).text('$' + formatted);
        }
      },
      3500
    );

  $('.count-4')
    .animateNumber(
      {
        number: 4820.50,
        numberStep: function (now, tween) {
          // see http://stackoverflow.com/a/14428340
          var formatted = now.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
          $(tween.elem).text('$' + formatted);
        }
      },
      3500
    );



  // line-chart-1



  // var options = {
  //   series: [{
  //   name: 'XYZ MOTORS',
  //   data: dates
  // }],
  //   chart: {
  //   type: 'area',
  //   stacked: false,
  //   height: 350,
  //   zoom: {
  //     type: 'x',
  //     enabled: true,
  //     autoScaleYaxis: true
  //   },
  //   toolbar: {
  //     autoSelected: 'zoom'
  //   }
  // },
  // dataLabels: {
  //   enabled: false
  // },
  // markers: {
  //   size: 0,
  // },
  // title: {
  //   text: 'Stock Price Movement',
  //   align: 'left'
  // },
  // fill: {
  //   type: 'gradient',
  //   gradient: {
  //     shadeIntensity: 1,
  //     inverseColors: false,
  //     opacityFrom: 0.5,
  //     opacityTo: 0,
  //     stops: [0, 90, 100]
  //   },
  // },
  // yaxis: {
  //   labels: {
  //     formatter: function (val) {
  //       return (val / 1000000).toFixed(0);
  //     },
  //   },
  //   title: {
  //     text: 'Price'
  //   },
  // },
  // xaxis: {
  //   type: 'datetime',
  // },
  // tooltip: {
  //   shared: false,
  //   y: {
  //     formatter: function (val) {
  //       return (val / 1000000).toFixed(0)
  //     }
  //   }
  // }
  // };

  // var chart = new ApexCharts(document.querySelector("#line-chart"), options);
  // chart.render()

  // full screen btn
  $(document).on("click", ".full-screen", function toggleFullScreen() {
    $('html').addClass('fullscreen-button');
    if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      $('html').removeClass('fullscreen-button');
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  });


  // back to top
  var btn = $('#back-to-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });


  // chart js
  var options = {
    series: [{
      name: 'Net Profit',
      data: [74, 85, 57, 56, 76, 35, 61, 98, 36, 50, 48, 29]
    }, {
      name: 'Revenue',
      data: [48, 35, 101, 98, 45, 57, 91, 46, 94, 55, 34, 80]
    }, {
      name: 'Free Cash Flow',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 50, 80, 65]
    }],
    chart: {
      type: 'bar',
      height: 350
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
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['Feb', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        show: true,
        style: {
          colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: ['#ffffff'],
        },
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
    },
    colors: ["rgb(1, 98, 232)", "rgb(249, 58, 90)", "rgb(247, 165, 86)"]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();


  //line-chart js 

  var options = {
    series: [{
      data: [0, 5, 3, 4, 5, 8, 5, 3, 7, 5, 3, 2, 6, 2, 5, 3]
    }],
    chart: {
      height: 150,
      width: 200,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 3,
      colors: ['#0162e8'],
    },
    grid: {
      row: {
        colors: ['blue', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: false,
      show: false,
    },
    colors: ['blue'],
  };

  var chart = new ApexCharts(document.querySelector("#line-chart"), options);
  chart.render();


  // map js
  var root = am5.Root.new("chartdiv");

  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  // Create the map chart
  // https://www.amcharts.com/docs/v5/charts/map-chart/
  var chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "translateX",
    panY: "translateY",
    projection: am5map.geoMercator()
  }));

  // Create main polygon series for countries
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
  var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
  }));

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    toggleKey: "active",
    interactive: true
  });

  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: root.interfaceColors.get("primaryButtonHover")
  });

  polygonSeries.mapPolygons.template.states.create("active", {
    fill: root.interfaceColors.get("primaryButtonHover")
  });

  var previousPolygon;

  polygonSeries.mapPolygons.template.on("active", function (active, target) {
    if (previousPolygon && previousPolygon != target) {
      previousPolygon.set("active", false);
    }
    if (target.get("active")) {
      polygonSeries.zoomToDataItem(target.dataItem);
    }
    else {
      chart.goHome();
    }
    previousPolygon = target;
  });

  // Add zoom control
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
  chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

  // Set clicking on "water" to zoom out
  chart.chartContainer.get("background").events.on("click", function () {
    chart.goHome();
  })

  // Make stuff animate on load
  chart.appear(1000, 100);


  // Radial Bar


  var options = {
    series: [67],
    chart: {
      height: 210,
      type: 'radialBar',
      offsetY: -10
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 120,
            show: false
          },
          value: {
            offsetY: 10,
            fontSize: '24px',
            color: undefined,
            formatter: function (val) {
              return val + "%";
            }
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 98]
      },
    },
    stroke: {
      dashArray: 4
    },
    labels: ['Median Ratio'],
  };

  var chart = new ApexCharts(document.querySelector("#radial"), options);
  chart.render();

  // partical js

  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 25,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 10,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);


  //box-1 chart
  // var spark1 = {
  //   chart: {
  //     id: 'spark1',
  //     group: 'sparks',
  //     type: 'line',
  //     height: 38,
  //     responsive: 'true',
  //     sparkline: {
  //       enabled: true
  //     },
  //     dropShadow: {
  //       enabled: true,
  //       top: 1,
  //       left: 1,
  //       blur: 1,
  //       opacity: 0.1,
  //     }
  //   },
  //   series: [{
  //     data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
  //   }],
  //   stroke: {
  //     curve: 'smooth'
  //   },
  //   markers: {
  //     size: 0
  //   },
  //   grid: {
  //     padding: {
  //       top: 10,
  //       bottom: 10,
  //       left: 50
  //     }
  //   },
  //   colors: ['#0a9ae1'],
  //   stroke: {
  //     width: 2
  //   },
  //   tooltip: {
  //     x: {
  //       show: false,
  //       width: 1,
  //     },
  //     y: {
  //       title: {
  //         formatter: function formatter(val) {
  //           return '';
  //         }
  //       }
  //     }
  //   }
  // };

});
