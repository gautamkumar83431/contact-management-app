import express from 'express';
import Contact from '../models/Contact.js';
const router = express.Router();

router.post('/',async(req,res)=>{
  const data = await Contact.create(req.body);
  res.json(data);
});

router.get('/',async(req,res)=>{
  res.json(await Contact.find().sort({createdAt:-1}));
});

router.delete('/:id',async(req,res)=>{
  await Contact.findByIdAndDelete(req.params.id);
  res.json({success:true});
});

export default router;