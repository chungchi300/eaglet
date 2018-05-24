const Router = require('koa-router')
import indexCtrl from 'controller/indexCtrl'
// import RestCtrl from "controller/RestCtrl";
// const RestCtrl = smartRequire("controller/RestCtrl");

// const passport = smartRequire('service/Passport/auth')
import successCtrl from 'controller/successCtrl'
import exceptionCtrl from 'controller/exceptionCtrl'

// const MembershipCtrl = smartRequire('controller/MembershipCtrl')
const router = Router()

// let restCtrl = new RestCtrl()
router.get('/', indexCtrl)

// function resource (router, resourceName, ctrl) {
//   router
//     .get(`/${resourceName}`, ctrl.list)
//     .get(`/${resourceName}/:id`, ctrl.show)
//     .post(`/${resourceName}`, ctrl.create)
//     .put(`/${resourceName}/:id`, ctrl.update)
//     .delete(`/${resourceName}/:id`, ctrl.delete)
// }

router.get('/success', successCtrl)
// let membershipCtrl = new MembershipCtrl()
// router.post('/membership/register', membershipCtrl.register)
// router.post('/membership/login', membershipCtrl.login)
// router.post('/membership/resetPassword', membershipCtrl.resetPassword)
// router.post('/membership/otp', membershipCtrl.otp)
router.get('/testError', exceptionCtrl)

// router.get(
//   '/membership/me',
//   passport.authenticate('bearer', { session: false }),
//   ctx => {
//     ctx.body = ctx.req.user
//   }
// )

// // need auth route middle
// resource(router, 'feedback', restCtrl)

module.exports = router
