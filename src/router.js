const Router = require('koa-router');
const indexCtrl = smartRequire('controller/indexCtrl');
const RestCtrl = smartRequire('controller/RestCtrl');
const testCtrl = smartRequire('controller/testCtrl');

const passport = smartRequire('service/Passport/auth');
const successCtrl = smartRequire('controller/successCtrl');
const exceptionCtrl = smartRequire('controller/exceptionCtrl');

const MembershipCtrl = smartRequire('controller/MembershipCtrl');
const router = Router();

let restCtrl = new RestCtrl();
router.get('/', indexCtrl);
router.get('/test', testCtrl);
function resource(router, resourceName, ctrl) {
  router
    .get(`/${resourceName}`, ctrl.list)
    .get(`/${resourceName}/:id`, ctrl.show)
    .post(`/${resourceName}`, ctrl.create)
    .put(`/${resourceName}/:id`, ctrl.update)
    .delete(`/${resourceName}/:id`, ctrl.delete);
}

router.get('/success', successCtrl);
let membershipCtrl = new MembershipCtrl();
router.post('/membership/register', membershipCtrl.register);
router.post('/membership/login', membershipCtrl.login);
router.post('/membership/resetPassword', membershipCtrl.resetPassword);
router.post('/membership/otp', membershipCtrl.otp);
router.get('/testError', exceptionCtrl);

router.get(
  '/membership/me',
  passport.authenticate('bearer', { session: false }),
  ctx => {
    ctx.body = ctx.req.user;
  }
);

//need auth route middle
resource(router, 'feedback', restCtrl);

module.exports = router;
