const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/productmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Success"))
.catch((err) => console.log("Error failed to connect", err));

