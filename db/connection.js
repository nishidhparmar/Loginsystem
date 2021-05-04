const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://NISHIDH:NISHIDH@test.6tgcn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connect");
});

module.exports = db