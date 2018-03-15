const First = {template: '<div><h2>我是第 1 个子页面</h2></div>'}
import secondcomponent from './component/secondcomponent';
import home from './component/home';
import main from './component/main';
import login from './component/login';
import notfound from './component/404';

/*let routes = [{
    path: '/',
    component: demo
  },{
    path: '/demo',
    component: demo
  },{
    path: '/login',
    component: login
  },{
    path: '/home',
    component: main
  },{
    path: '/first',
    component: First
  },{
    path: '/second',
    component: secondcomponent
  }];*/
let routes = [{
  path: '/login',
  component: login
},{
  path: '/',
  component: login
}, {
  path: '',
  component: main,
  children: [
    {path: '/home', component: home},
    {path: '/demo', component: notfound},
    {path: '/first', component: First},
    {path: '/second', component: secondcomponent},
    {path: '*', component: notfound}
  ]
}];


export default routes;
