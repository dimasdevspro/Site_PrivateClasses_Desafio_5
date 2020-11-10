// exportação de funções para routes.js
const { age, date } = require('../../lib/utils')

const Teacher = require('../models/Teacher')

module.exports = {
    index(req, res) {
       
        Teacher.all(function(teachers){
            return res.render('teachers/index', {teachers})
        })
        

    },
    create(req, res) {


    },
    post(req, res) {
        const keys = Object.keys(req.body)
    
        for(key of keys) {
           if (req.body[key] == "")
           return res.send('Please, fill all fields!')
        }

        Teacher.create(req.body, function(teacher){
            return res.redirect(`/teachers/${teacher.id}`)
        })
    },
    show(req, res) {

   Teacher.find(req.params.id, function(teacher){
       if (!teacher) return res.send("Teacher not found!")
   
        teacher.age = age(teacher.birth)
        teacher.subjects = teacher.subjects.split(",")

        teacher.created_at = date(teacher.created_at).format

        return res.render("teachers/show", {teacher})
    })

    },
    edit(req, res) {

    return 

    },
    put(req, res) {
        const keys = Object.keys(req.body)
    
        for(key of keys) {
           if (req.body[key] == "")
           return res.send('Please, fill all fields!')
        }

    return 
    },
    delete(req, res) {
        
    return 

    },
}

