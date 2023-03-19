import React from 'react';
import ReactApexChart from 'react-apexcharts';




function BasicAnthropometryChart() {

    const data: any = {

        series: [
            {
                name: "Талия",
                data: [77, 75, 74, 70, 69]
            },
            {
                name: "Живот",
                data: [86, 83, 81, 80, 77]
            }
        ],

        options: {
            chart: {

                animations: {
                    enabled: false,
                },

                toolbar: {
                    show: false
                },

                height: '100%',
                width: '100%',
                type: 'line',
                background: 'none',
                fontFamily: 'Montserrat',
                foreColor: '#A7A7A7',
                zoom: {
                    enabled: false
                },
            },
            colors: ['#C5AD60', '#C2606B', '#A7A7A7'],

            dataLabels: {
                enabled: true,
                position: 'left',
                offsetX: 0,
                offsetY: -6,
                style: {
                    fontSize: '15px',
                    fontFamily: 'BlenderPro',
                    fontWeight: 'normal',
                    colors: undefined,
                },
                background: {
                    enabled: false,
                },
            },

            fill: {
                colors: undefined,
                opacity: 0.6,
                type: 'solid',
            },

            markers: {
                size: 5,
                colors: undefined,
                strokeColor: 'none',
            },

            stroke: {
                curve: 'smooth'
            },

            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
                floating: true,
                fontSize: '10px',
                offsetX: 0,
                offsetY: 0,
            },


            grid: {
                row: {
                    colors: ['#2D2C32', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.1
                },
            },

            xaxis: {
                categories: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6', 'Week7', 'Week8', 'Week9', 'Week10'],
                fill: {
                    type: 'solid',
                    color: '#A7A7A7'
                },
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: false,
                    hideOverlappingLabels: true,
                    showDuplicates: false,
                    trim: false,
                    minHeight: undefined,
                    maxHeight: 100,
                    style: {
                        colors: [],
                        fontSize: '10px',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        cssClass: 'apexcharts-xaxis-label',
                    }
                },

                axisBorder: {
                    show: true,
                    color: '#A7A7A7',
                    height: 0.5,
                    width: '100%',
                    offsetX: 0,
                    offsetY: 0
                }
            },

            yaxis: {
                labels: {
                    show: true,
                    align: 'right',
                    minWidth: 0,
                    maxWidth: 160,
                    style: {
                        colors: [],
                        fontSize: '10px',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    }
                }
            },
        },

    };



    return (
        <ReactApexChart options={data.options} series={data.series} type="line" height={260} />
    );
}

export default BasicAnthropometryChart;