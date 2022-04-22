const category = require('../models/Category.model');
module.exports.categoryController = {
    addCategory: async(req, res)=>{
        try{
            const { title } = req.body
            const categoryy = await category.create({
                title
            }); res.json(categoryy)
        } catch(err){
            res.json({err: "не получилось добавить категорию"})
        }
},
// добавляет категорию
deleteCategory: async (req, res)=>{
    try{
        const categoryy = await category.findByIdAndDelete(req.params.id)
        res.json(categoryy)
    } catch(err){
        res.json({err: "не получилось удалить категорию"})
    }
},
// удаляет категорию
changeCategory: async(req, res)=>{
    try{
        const { title } = req.body
        const categoryy = await category.findByIdAndUpdate(req.params.id,{
            title
        }); res.json(categoryy)
    } catch(err){
        res.json({err: "не получилось изменить категорию"})
    }
},
// изменить категорию
getAllCategory: async(req,res)=>{
    try {
        const categoryy = await category.find()
        res.json(categoryy)
    } catch(err){
        res.json({err: "не удалось показать все категории"})
    }
},
// показать все категории
}
