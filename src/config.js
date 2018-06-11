// TODO: add media to response mobile
const media = [];

// data : { 'C': 123 ..}
export default function(username, data) {
  const languages = Object.keys(data);
  const seriesData = languages.map(item => ({ name: item, value: data[item] }));

  return {
    title: {
      text: 'GitHub 公共仓库代码语言分布图',
      subtext: `@${username}`,
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // legend: {
    //   // orient: 'vertical',
    //   left: 'center',
    //   bottom: 0,
    //   data: languages
    // },
    series: [
      {
        name: 'GitHub',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: seriesData,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
    // media
  };
}
