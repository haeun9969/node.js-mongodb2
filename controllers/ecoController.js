const express = require('express');
const Eco = require('../models/eco');

const eco = {
    readAll: async (req, res) => {
        const ecos = await Eco.findAll();
        try {
            if (!ecos.length)
                return res.status(404).send({
                    err: 'Eco not found'
                });
            res.send(ecos);
        } catch (err) {
            res.status(500).send(err)
        }
    },
    // todo 모듈 중 read 비동기 함수
    read: async (req, res) => {
        // 파라미터로 받은 todoId를 변수에 담는다. (localhost:3000/todolist/5e6e4743ea803ad69a8f82b8) 
        const ecoId = req.params.ecoId;
        // Todo(models/todolist.js) 모듈의 find()함수에 todoId를 인자로 넣어 실행한다.
        const eco = await Eco.find(ecoId);
        try {
            // 만약, 결과값이 존재하지 않는다면 존재하지 않는 글을 보려 시도한 것.
            if (!eco.length)
                return res.status(404).send({
                    err: 'Eco not found'
                });
            // 존재한다면 find successfully와 함께 성공한 객체 출력
            res.send(`find successfully: ${eco}`);
        } catch (err) {
            // 서버 오류 발생시 500 status 반환
            res.status(500).send(err)
        }
    },
    write: async (req, res) => {
        try {
            const result = await Eco.create(req.body)
            res.send(result);
        } catch (err) {
            res.status(500).send(err)
        }
    },
    delete: async (req, res) => {
        try {
            const ecoId = req.params.ecoId;
            const result = await Eco.delete(ecoId)
            res.sendStatus(200)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}

module.exports = eco;