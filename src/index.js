import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './components/App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faClockRotateLeft, faAngleLeft, faPlus, faArrowsRotate, faXmark, faMap, faShuffle, faGear } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faClockRotateLeft, faAngleLeft, faPlus, faArrowsRotate, faXmark, faMap, faShuffle, faGear )

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.component('fa-icon', FontAwesomeIcon)
app.mount("#app")
