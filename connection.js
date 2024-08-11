const mongoose = require('mongoose');
const url="mongodb+srv://shadain044714:2100100507msd@cluster0.fygy4ko.mongodb.net/mssddb?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then((result) => {
    console.log("data base is connected");
    
    
}).catch((err) => {
    console.log(err);
    
    
});
module.exports=mongoose;