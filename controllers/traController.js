const express = require('express');
const Tra = require('../models/tra.js');

const tra = {
    readAll: async (req, res) => {
        const tras = await Tra.findAll();
        try {
            if (!tras.length)
                return res.status(404).send({
                    err: 'Tra not found'
                });
            res.send(tras);
        } catch (err) {
            res.status(500).send(err)
        }
    },
    // todo 모듈 중 read 비동기 함수
    read: async (req, res) => {
        // 파라미터로 받은 todoId를 변수에 담는다. (localhost:3000/todolist/5e6e4743ea803ad69a8f82b8) 
        const traId = req.params.traId;
        // Todo(models/todolist.js) 모듈의 find()함수에 todoId를 인자로 넣어 실행한다.
        const tra = await Tra.find(traId);
        try {
            // 만약, 결과값이 존재하지 않는다면 존재하지 않는 글을 보려 시도한 것.
            if (!tra.length)
                return res.status(404).send({
                    err: 'Tra not found'
                });
            // 존재한다면 find successfully와 함께 성공한 객체 출력
            res.send(`find successfully: ${tra}`);
        } catch (err) {
            // 서버 오류 발생시 500 status 반환
            res.status(500).send(err)
        }
    },
    write: async (req, res) => {
        try {
            const result = await Tra.create(req.body)
            res.send(result);
        } catch (err) {
            res.status(500).send(err)
        }
    },
    delete: async (req, res) => {
        try {
            const traId = req.params.traId;
            const result = await Tra.delete(traId)
            res.sendStatus(200)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}

module.exports = tra;