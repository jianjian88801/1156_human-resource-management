import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import bumen from '@/views/modules/bumen/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gongzi from '@/views/modules/gongzi/list'
    import renshidiaopei from '@/views/modules/renshidiaopei/list'
    import yingpinjilu from '@/views/modules/yingpinjilu/list'
    import yuangong from '@/views/modules/yuangong/list'
    import zhaopinxinxi from '@/views/modules/zhaopinxinxi/list'
    import dictionaryHuiyuandengji from '@/views/modules/dictionaryHuiyuandengji/list'
    import dictionaryMianshi from '@/views/modules/dictionaryMianshi/list'
    import dictionaryMianshiJieguo from '@/views/modules/dictionaryMianshiJieguo/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryZhaopinxinxi from '@/views/modules/dictionaryZhaopinxinxi/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryHuiyuandengji',
        name: '会员等级类型',
        component: dictionaryHuiyuandengji
    }
    ,{
        path: '/dictionaryMianshi',
        name: '是否已面试',
        component: dictionaryMianshi
    }
    ,{
        path: '/dictionaryMianshiJieguo',
        name: '面试结果',
        component: dictionaryMianshiJieguo
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryZhaopinxinxi',
        name: '招聘类型',
        component: dictionaryZhaopinxinxi
    }


    ,{
        path: '/bumen',
        name: '部门',
        component: bumen
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gongzi',
        name: '工资',
        component: gongzi
      }
    ,{
        path: '/renshidiaopei',
        name: '人事调配',
        component: renshidiaopei
      }
    ,{
        path: '/yingpinjilu',
        name: '应聘记录',
        component: yingpinjilu
      }
    ,{
        path: '/yuangong',
        name: '员工',
        component: yuangong
      }
    ,{
        path: '/zhaopinxinxi',
        name: '招聘信息',
        component: zhaopinxinxi
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
