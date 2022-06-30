import { useEffect, useState } from 'react';

import * as echarts from 'echarts/core';
import { DatasetComponent, TitleComponent } from 'echarts/components';
import { GridComponent, GridComponentOption } from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  DatasetComponent,
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
    // dimensions: ['t', 'value'],
    source: [
      [12, 31],
      [13, 32],
      [14, 33],
      [15, 34],
      [16, 35],
      [17, 36],
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
      encode: {
        x: 0,
        y: 1,
      },
    },
  ],
  grid: [
    {
      top: '8%',
      left: '8%',
      right: '8%',
      bottom: '8%',
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
    option && myChart.setOption(option);
  }, [props.data]);

  return (
    <div
      id={props.id}
      style={{ width: props.width, height: props.height || 250 }}
    ></div>
  );
};
