import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const mapLazy = document.querySelector('.form__and__map')
setTimeout(() => {

    const map = document.createElement('div')
    map.innerHTML = `
        <div style="position:relative;overflow:hidden; margin-top: 20px">
<a href="https://yandex.ru/maps/org/2d_fit/185489742296/?utm_medium=mapframe&utm_source=maps"
   style="color:#eee;font-size:12px;position:absolute;top:0px;">2D-Fit</a>
<a href="https://yandex.ru/maps/2/saint-petersburg/category/fitness_club/184107363/?utm_medium=mapframe&utm_source=maps"
   style="color:#eee;font-size:12px;position:absolute;top:14px;">Фитнес-клуб в Санкт‑Петербурге</a>
<a href="https://yandex.ru/maps/2/saint-petersburg/category/sports_hall_gym/41430094175/?utm_medium=mapframe&utm_source=maps"
   style="color:#eee;font-size:12px;position:absolute;top:28px;">Спортивный, тренажёрный зал в Санкт‑Петербурге</a>
<iframe src="https://yandex.ru/map-widget/v1/?ll=30.243352%2C60.034356&mode=search&oid=185489742296&ol=biz&z=14.51"
        width="100%" height="500" frameBorder="0" allowFullScreen="true" style="position:relative;"></iframe>
</div>
        `

    mapLazy.appendChild(map)
}, 100)
