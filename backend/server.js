const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

const mongoose = require("mongoose")
app.use(express.json())


const MONGODB_URL = "mongodb://localhost:27017/userss"

mongoose.connect(MONGODB_URL)
   .then(()=>{
    console.log(`${MONGODB_URL} connected`)
   })
   .catch((err)=>{
    console.error("error",err.message)
   })

   const UserController = require("./controllers/UserController")

   app.post("/user/insert",UserController.insert)
  
   app.use(require("./Router/UserRouter"))
   app.use(require("./Router/ProductRouter"))
   
   app.use ("/files", express.static(__dirname + "/public/upload"))

   const multer = require("multer")
   const path = require("path")
   
   const storage = multer.diskStorage({
      destination: function (req, file, cb){
         cb(null, './public/upload/')
   
      },
      filename: function(req, file, cb){
         cb(null, Date.now() + path.extname(file.originalname))
      }
   })
   
   const uploader = multer({storage: storage});
   
   app.post('/upload/single', uploader.single('upload_file'), function(req, res){
      console.log(req.file, req.body)
      res.status(200).send("file upload success....!")
   });
   
   app.post('/upload/multiple', uploader.array('upload_file',10), (req, res)=>{
      console.log(req.files)
      return res.send("multiple file upload success....!")
   });
 


app.listen(5000 , () => {
  console.log(`Server started on port 5000`);
});