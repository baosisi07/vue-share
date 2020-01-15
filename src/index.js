import yohoImg from './image/yoho.jpg';
import './index.scss'
import {add} from './count'
import {addDiv} from './test'
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

let ele = document.getElementById('root')

let a = document.createElement('a')

a.text = '1234'
ele.appendChild(a)
a.onclick = function(e) {
    let newVal = add(e.target.innerText)
    a.innerHTML = newVal
}
let img = new Image()
img.onload= function(e) {
    console.log('img loaded',e)
    let img1 = document.getElementById('fimg');
    let canvas = document.getElementById('my-canvas');
    let context = canvas.getContext("2d")
    context.drawImage(img1, 0, 0, 140, 140, 0, 100, 140, 140)
}
img.id = 'fimg';
img.src = yohoImg;

ele.insertBefore(img,a)
addDiv()

// canvas操作
let canvas = document.getElementById('my-canvas');
if(canvas.getContext) {
    let context = canvas.getContext("2d")
   //绘制红色矩形
   context.fillStyle = "#ff0000";
   context.fillRect(10, 10, 50, 50);
   //绘制半透明的蓝色矩形
   context.fillStyle = "rgba(0,0,255,0.5)";
   context.fillRect(30, 30, 50, 50);
   context.clearRect(30, 30, 30, 30);

   
}
import(/*webpackChunkName: 'lodash'*/ 'lodash').then(({default:_}) => {
    console.log(_.join('a','b'))
})
if(module.hot) {
    module.hot.accept('./test',function() {
        addDiv()
    })
}
