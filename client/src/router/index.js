import Vue from 'vue';
import Router from 'vue-router';
import JobList from '../components/JobList';
import CreateJob from '../components/CreateJob';
import JobPost from '../components/JobPost';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JobList',
      component: JobList,
    },
    {
      path: '/create',
      name: 'CreateJob',
      component: CreateJob,
    },
    {
      path: '/jobpost',
      name: 'JobPost',
      component: JobPost,
    },
  ],
  // mode: 'history',
});
