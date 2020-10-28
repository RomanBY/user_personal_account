import Vue from 'vue'

// @ts-ignore
import UIkit from 'uikit/dist/js/uikit-core'
// @ts-ignore
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)
UIkit.container = '#__nuxt'

Vue.prototype.$uikit = UIkit
