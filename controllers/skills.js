// Import the model that we exported in the Todo.js model file
import { Skill } from '../models/skills.js'

// Inside the index controller, use the Todo model to query for ALL todos
function index(req, res) {
  console.log("this func is working");
  Skill.find({})
    .then(skills => {
      res.render('skills/index', {
        skills: skills,
      })
    })
    .catch(error => { // If there's an error, console.log it and redirect back home!
      console.log(error)
      res.redirect('/')
    })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.done = false
  Skill.create(req.body)
  .then(todo => {
		// Notice we are doing a redirect here!
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
}