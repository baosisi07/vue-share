import './css/index.scss'
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

addDiv()

import(/*webpackChunkName: 'lodash'*/ 'lodash').then(({default:_}) => {
    console.log(_.join('a','b'))
})
if(module.hot) {
    module.hot.accept('./test',function() {
        addDiv()
    })
}
