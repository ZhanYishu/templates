
import App from '../app'
export const routes = [
  { path: '/',
    component: App
    // indexRoute: { component: Dashboard }
    // childRoutes: [
    //   { path: 'about', component: About },
    //   { path: 'inbox',
    //     component: Inbox,
    //     childRoutes: [
    //       { path: '/messages/:id', component: Message },
    //       { path: 'messages/:id',
    //         onEnter: function (nextState, replaceState) {
    //           replaceState(null, '/messages/' + nextState.params.id)
    //         }
    //       }
    //     ]
    //   }
    // ]
    // routes: [
    //   {
    //     path: '/tacos/bus',
    //     component: App
    //   },
    //   {
    //     path: '/tacos/cart',
    //     component: App
    //   }
    // ]
  }
]
