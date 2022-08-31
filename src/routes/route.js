const express = require('express');
const router = express.Router();
const registation = require('../controllers/registationController')
const auth = require('../middlewares/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post('/users', registation.users)
router.post('/login', registation.login)
router.get('/users/:userId', auth.auth , registation.getUserData)
router.put("/users/:userId",auth.auth,  registation.updateUser)
router.delete("/users/:userId", auth.auth ,registation.deleteUser)



module.exports = router;