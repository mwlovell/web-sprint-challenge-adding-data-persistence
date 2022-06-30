const db = require('../../data/dbConfig'); 

function getProjects(){
    return db('projects')
}

async function insert(project) {
    const [project_id] = await db('projects').insert(project);
    return db('projects').where({ project_id }).first();
}



module.exports = {
    getProjects, 
    insert
}