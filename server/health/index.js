const express = require('express');
const router = express.Router();
const BaseResponse = require('../models/BaseResponse.js');

router.get('/', (req, res) => {
  res.send(new BaseResponse(true, "OK"));
});

router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  res.send(new BaseResponse(true, `ID param: ${id}`));
});

router.post('/add', (req, res) => {
  const body = req.body;
  res.send(new BaseResponse(true, { body }));
});

module.exports = router;