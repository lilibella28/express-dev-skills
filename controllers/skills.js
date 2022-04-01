
const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkills,
    create,
    delete: deleteSkill
}




function deleteSkill(req, res){

    Skill.deleteOne(req.params.id);

    res.redirect('/skills');
}

function create(req, res){
     
     Skill.create(req.body)

    res.redirect('/skills')
}


function index(req, res){
    res.render("skills/index", {
        skills: Skill.getAll()
    })
}


function show(req, res){

    res.render('skills/show', {
        skillNum: req.params.id,
        skill: Skill.getOne(req.params.id)
    })
}

function newSkills(req, res){
    res.render('skills/new')
}