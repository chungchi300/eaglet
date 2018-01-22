const Router = require('koa-router');
const indexCtrl = require('../controllers/indexCtrl');
const RestCtrl = require('../controllers/RestCtrl');
const testCtrl = require('../controllers/testCtrl');

const successCtrl = require('../controllers/successCtrl');
const exceptionCtrl = require('../controllers/exceptionCtrl');

const MembershipCtrl = require('../controllers/MembershipCtrl');
const router = Router();
let userCtrl = new RestCtrl();
let companyCtrl = new RestCtrl();
let feedback = new RestCtrl();
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
resource(router, 'employee', userCtrl);
resource(router, 'company', userCtrl);

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
resource(router, 'feedback', userCtrl);

module.exports = router;
