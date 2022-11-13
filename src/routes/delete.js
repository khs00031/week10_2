import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

//기존의 입력값 불러오기
router.get('/', async (req, res) => {
    const department = await selectSql.getDepartment();

    res.render('delete',{
        title: "삭제기능",
        department
    })
});


//삭제 버튼을 눌렀을 경우 update query를 실행하여 조회 페이지로이동
router.post('/', async(req,res) => {
    console.log('delete router:', req.body.delBtn);

    const data = {
        Dnumber: req.body.delBtn,
    };

    await deleteSql.deleteDepartment(data);

    res.redirect('/delete');
});

module.exports = router;