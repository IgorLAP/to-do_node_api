import {Request, Response} from 'express';
import {Todo} from '../models/todo';

export const all = async (req: Request, res: Response) => {
    let list = await Todo.findAll({
        order: ['id']
    });
    res.json({list});
};

export const add = async (req: Request, res: Response) => {
    if(req.body.title){
        let newTodo = await Todo.create({
            title: req.body.title,
            done: req.body.done ? true : false
        })
        res.status(201).json({newTodo});
    } else {
        res.json({error: "Dados não foram enviados corretamente"})
    }
};

export const update = async (req: Request, res: Response) => {
    let {id} = req.params;
    let item = await Todo.findByPk(id);
    if(item){
        if(req.body.title) item.title = req.body.title;
        if(req.body.done) {
            switch(req.body.done.toLowerCase()){
                case 'true':
                case '1':
                    item.done = true;
                    break;
                case 'false':
                case '0':
                    item.done = false;
                    break;
            }
        }
        await item.save();
        res.json({item});
    } else {
        res.json({error: "Item não encontrado"});
    }
};

export const remove = async (req: Request, res: Response) => {
    let {id} = req.params;
    let item = await Todo.findByPk(id);
    if(item) item.destroy();
    res.json({});
};