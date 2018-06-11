import fetchData from './fetchData';
import configer from './config';
import './style.css';

const usernameInput = document.querySelector('#username');
const submitBtn = document.querySelector('#submit');
const loading = document.querySelector('.loading');

function init() {
  const username = usernameInput.value;

  if (!username || username == '') {
    alert('Please input your GitHub user name');
    return;
  }

  loading.classList.add('show');

  fetchData(username).then(data => {
    console.log(data);
    loading.classList.remove('show');

    if (!data) {
      alert('None data...');
      return;
    }

    var ctx = document.getElementById('code-chart');
    echarts.dispose(ctx);
    var option = configer(username, data);
    var codeChart = echarts.init(ctx);
    codeChart.setOption(option);
  });
}

function onEnter(ev) {
  if (ev.keyCode == 13) init();
}

function onSubmit() {
  init();
}

usernameInput.addEventListener('keypress', onEnter);
submitBtn.addEventListener('click', onSubmit);
