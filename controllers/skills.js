import { skills } from '../data/skills-data.js'

// index- returns all skills
function index(req, res) {
    res.render('skills/index', {
        skills: skills
    })
}

export {
    index
}