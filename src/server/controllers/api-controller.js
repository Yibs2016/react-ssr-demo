const express = require('express');
 
let router = express.Router();
 
router.get('/users', function (req, res) {
    res.send({
      data: [{
        id: 1,
        first_name: 'ye',
        last_name: 'sisi',
        email: 'yy.com',
      }]
    });
});
 
 
//导出该路由
module.exports = router;