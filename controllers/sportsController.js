const express = require('express');
const Sports = require('../models/sports');

const sports = {
    readAll: async (req, res) => {
        const sportss = await Sports.findAll();
        try {
            if (!sportss.length)
                return res.status(404).send({
                    err: 'Sports not found'
                });
            res.send(sportss);
        } catch (err) {
            res.status(500).send(err)
        }
    },
    // todo 모듈 중 read 비동기 함수
    read: async (req, res) => {
        // 파라미터로 받은 todoId를 변수에 담는다. (localhost:3000/todolist/5e6e4743ea803ad69a8f82b8) 
        const sportsId = req.params.sportsId;
        // Todo(models/todolist.js) 모듈의 find()함수에 todoId를 인자로 넣어 실행한다.
        const sports = await Sports.find(sportsId);
        try {
            // 만약, 결과값이 존재하지 않는다면 존재하지 않는 글을 보려 시도한 것.
            if (!sports.length)
                return res.status(404).send({
                    err: 'Sports not found'
                });
            // 존재한다면 find successfully와 함께 성공한 객체 출력
            res.send(`find successfully: ${sports}`);
        } catch (err) {
            // 서버 오류 발생시 500 status 반환
            res.status(500).send(err)
        }
    },
    write: async (req, res) => {
        try {
            const result = await Sports.create(req.body)
            res.send(result);
        } catch (err) {
            res.status(500).send(err)
        }
    },
    delete: async (req, res) => {
        try {
            const sportsId = req.params.sportsId;
            const result = await Sports.delete(sportsId)
            res.sendStatus(200)
        } catch (err) {
            res.status(500).send(err)
        }
    }
}

module.exports = sports;