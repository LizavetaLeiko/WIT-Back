const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const userDataController = require("../controllers/userData-controller")
const postsController = require("../controllers/posts-controller")
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/registration',
    body('email').isEmail(),
    body('nickname').isString(),
    body('password').isLength({min: 6, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/user/:id', authMiddleware, userController.getUser);
router.put('/userdata', userDataController.setUserData);
router.get('/userdata/:id', userDataController.getUserData);
router.post('/createpost', postsController.createPost);
router.get('/post/:id', postsController.getPost);
router.get('/usersposts/:id', postsController.getAllUsersPosts);
router.get('/posts', postsController.getAllPosts);



module.exports = router