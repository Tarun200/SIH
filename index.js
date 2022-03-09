const multer=require('multer');
const express=require('express');
const path=require('path');



var storage = multer.diskStorage(
    {
        destination: './uploads/',
        filename: function ( req, file, cb ) {
            //req.body is empty...
            //How could I get the new_file_name property sent from client here?
            cb( null, file.originalname);
        }
    }
);



var upload=multer({storage:storage});

const redirect=(req,res)=>{
	res.redirect('URL')   //Paste your Notebook URL here
}

const app=express();

// app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/uploadFile.html'));
})

app.post('/upload',upload.single('file'),redirect);

app.listen(3000);