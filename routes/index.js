import { Router } from 'express'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  console.log("this func is working");
  res.render('index', { title: 'Express' })
})


export { 
  router
}
