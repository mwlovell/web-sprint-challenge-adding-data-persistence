const express = require('express'); 
const Projects = require('./model'); 

const router = require('express').Router()


router.post('/', (req, res, next) => {
    Projects.insert(req.body)
    .then(project => {
        if (project.project_completed ===0){
            project.project_completed = false;
            res.status(201).json(project);
        }else {
            project.project_completed = true;
            res.status(201).json(project);
        }
    })
    .catch(next);
});

router.get('/', async  (req,res,next) => {
    await Projects.getProjects()
    .then(projects => {
        projects.map(project => {
            if(project.project_completed === 0){
                project.project_description = false 
            } else {
                project.project_description = true
            }
        })
        res.status(200).json(projects)
    })
    .catch(next);
})




module.exports = router  
