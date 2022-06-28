import { useEffect, useState } from 'react';

import * as echarts from 'echarts/core';
import { TitleComponent } from 'echarts/components';
import { GridComponent, GridComponentOption } from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;

const option: EChartsOption = {
  dataset: {
    // dimensions: ['time', 'value'],
    source: [
      ['time', 'value'],
      [89.3, 58212],
      [57.1, 78254],
      [74.4, 41032],
      [50.1, 12755],
      [89.7, 20145],
      [68.1, 79146],
      [19.6, 91852],
      [10.6, 101852],
      [32.7, 20112],
    ],
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      type: 'line',
      smooth: true,
    },
    // encode: {
    //     // 将 "amount" 列映射到 X 轴。
    //     x: 'amount',
    //     // 将 "product" 列映射到 Y 轴。
    //     y: 'product'
    // }
  ],
  grid: [
    {
      top: '10%',
      left: '5%',
      right: '5%',
      bottom: '10%',
    },
  ],
};

export default (props: any) => {
  let myChart: any;

  useEffect(() => {
    const chartDom = document.getElementById(props.id)!;
    myChart = echarts.init(chartDom);
    option.title = {
      show: true,
      text: props.title,
    };
    window.onresize = () => myChart.resize();
  }, []);

  useEffect(() => {
    option.option && myChart.setOption(option);
  }, [props.data]);

  return (
    <div
      id={props.id}
      style={{ width: props.width, height: props.height || 400 }}
    ></div>
  );
};
