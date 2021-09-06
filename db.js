const mongoose = require('mongoose');
const { HOST, DB_NAME } = process.env;
const MONGODB_URI = `mongodb://${HOST}/${DB_NAME}`;

mongoose.connect(MONGODB_URI,
//     {
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// }
)
.then(()=> console.log(`DB ${DB_NAME} conectada`))
.catch((error)=>console.error(error));


module.exports = mongoose