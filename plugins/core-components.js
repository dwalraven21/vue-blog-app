import Vue from 'vue'

// add components here that are being used on multiple pages
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
import PostList from '@/components/Posts/PostList'

Vue.component('AppControlInput', AppControlInput)
Vue.component('AppButton', AppButton)
Vue.component('PostList', PostList)
