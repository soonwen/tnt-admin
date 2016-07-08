/**
 * Created by robertzzy on 07/07/16.
 */
import express from 'express';
/*eslint-disable new-cap*/
let router = express.Router();

router.use('/', (req, res, next)=>{
	res.render('./build/index');
});


export default router;