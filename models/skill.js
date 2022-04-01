const skills = [

    {id: 1, skill: 'dance', done: true},
    {id: 10, skill: 'developer', done: true},
    {id: 9,  skill: 'doctor', done: true},
    {id: 120, skill: 'singer', done: true},


]

module.exports = {
    getAll, 
    getOne,
    create, 
    deleteOne
};

function getAll(){
    return skills;
};


function getOne(id){

    return skills.find(skill => skill.id === parseInt(id));
};


function create(skill){
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill)
}

function deleteOne(id){

    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1)
}