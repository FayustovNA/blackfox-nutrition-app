import React from 'react';
import ReactApexChart from 'react-apexcharts';

function MarkersChart() {

    const data: any = {

        series: [
            {
                name: 'Факт',
                data: [
                    {
                        x: 'Клетчатка',
                        y: 12,
                        goals: [
                            {
                                name: 'Expected',
                                value: 14,
                                strokeWidth: 3,
                                strokeHeight: 10,
                                strokeColor: '#DEDEDE'
                            }
                        ]
                    },
                    {
                        x: 'Холестерин',
                        y: 44,
                        goals: [
                            {
                                name: 'Expected',
                                value: 54,
                                strokeWidth: 3,
                                strokeHeight: 10,
                                strokeColor: '#DEDEDE'
                            }
                        ]
                    },
                    {
                        x: 'Кальций',
                        y: 54,
                        goals: [
                            {
                                name: 'Expected',
                                value: 52,
                                strokeWidth: 3,
                                strokeHeight: 10,
                                strokeColor: '#DEDEDE'
                            }
                        ]
                    },
                    {
                        x: 'Витамин Д',
                        y: 66,
                        goals: [
                            {
                                name: 'Expected',
                                value: 61,
                                strokeWidth: 3,
                                strokeHeight: 10,
                                strokeColor: '#DEDEDE'
                            }
                        ]
                    },
                    {
                        x: 'Железо',
                        y: 100,
                        goals: [
                            {
                                name: 'Expected',
                                value: 66,
                                strokeWidth: 3,
                                strokeHeight: 10,
                                strokeColor: '#DEDEDE'
                            }
                        ]
                    },
                    {
                        x: 'Натрий',
                        y: 99,
                        goals: [
                            {
                                name: 'Expected',
                                value: 100,
                                strokeWidth: 3,
                                strokeHeight: 10,
                                strokeColor: '#DEDEDE'
                            }
                        ]
                    },
                    {
                        x: 'Калий',
                        y: 33,
                        goals: [
                            {
                                name: 'Expected',
                                value: 70,
                                strokeWidth: 3,
                                strokeHeight: 10,
                                strokeColor: '#DEDEDE'
                            }
                        ]
                    }
                ]
            }
        ],

        options: {
            chart: {
                type: 'bar',
                toolbar: {
                    show: false,
                    tools: {
                        download: false
                    }
                }
            },

            plotOptions: {
                bar: {
                    horizontal: true,
                    borderRadius: 5,
                    colors: {
                        ranges: [{
                            from: 0,
                            to: 30,
                            color: '#C94655',
                        }, {
                            from: 30,
                            to: 60,
                            color: '#C5AD60',
                        },
                        {
                            from: 60,
                            to: 100,
                            color: '#51A290',
                        }],
                    },
                    dataLabels: {
                        position: 'bottom',
                        maxItems: 100,
                        hideOverflowingLabels: true,
                        total: {
                            enabled: false,
                            formatter: undefined,
                            offsetX: 0,
                            offsetY: 0,
                        }
                    }
                }
            },
            colors: ['#DEDEDE'],

            dataLabels: {
                enabled: true,
                textAnchor: 'top',
                distributed: false,
                offsetX: 0,
                offsetY: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'BlenderPro',
                    fontWeight: 'bold',
                    color: undefined
                },
                formatter: function (val: any, opt: any) {
                    const goals =
                        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                            .goals

                    if (goals && goals.length) {
                        // return `${val} / ${goals[0].value}`
                        return `${val}`
                    }
                    return val
                }
            },

            legend: {
                show: false,
                showForSingleSeries: true,
                customLegendItems: ['Actual', 'Expected'],
                markers: {
                    fillColors: ['#00E396', '#775DD0']
                }
            },

            yaxis: {
                labels: {
                    show: true,
                    align: 'right',
                    minWidth: 0,
                    style: {
                        colors: '#8A8A8C',
                        fontSize: '12px',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },

                },
            },
            xaxis: {
                labels: {
                    show: true,
                    align: 'right',
                    minWidth: 0,
                    style: {
                        colors: '#8A8A8C',
                        fontSize: '12px',
                        fontFamily: 'Montserrat',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },

                },
                axisBorder: {
                    show: false,
                    color: '#78909C',
                    height: 1,
                    width: '100%',
                    offsetX: 0,
                    offsetY: 0
                }
            },
        },


    };
    return (

        <div id="chart" >
            <ReactApexChart options={data.options} series={data.series} type="bar" height={330} width={560} />
        </div >


    );
}

export default MarkersChart;
