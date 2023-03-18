import React from 'react';
import ReactApexChart from 'react-apexcharts';




function BasicWeightChart() {

    const data: any = {

        series: [
            {
                name: "Средний недельный вес",
                data: [77, 77.2, 76, 75.7, 74.7, 74, 74.4, 75, 74.9]
            },
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
                    colors: ['#A7A7A7'],
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
                colors: '#C5AD60',
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

                axisBorder: {
                    show: true,
                    color: '#A7A7A7',
                    height: 0.5,
                    width: '100%',
                    offsetX: 0,
                    offsetY: 0
                }
            },
        },





    };



    return (
        <ReactApexChart options={data.options} series={data.series} type="line" height={260} />
    );
}

export default BasicWeightChart;