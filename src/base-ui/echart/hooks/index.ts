import * as echart from 'echarts'

import chinaMapData from '../data/china.json'

echart.registerMap('china', chinaMapData)

export function registerEchart(el: HTMLElement) {
  const echartInstance = echart.init(el)

  const setOption = (option: echart.EChartsCoreOption) => {
    echartInstance.setOption(option)
  }

  const setResize = () => {
    echartInstance.resize()
  }

  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOption,
    setResize
  }
}
