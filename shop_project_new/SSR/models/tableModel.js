const mongoose = require(`mongoose`);

const tableSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    measurements: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    material: {
        type: String,
        require: true
    },
},
    { timeStamps: true }
);

const Table = mongoose.model(`Table`, tableSchema);
module.exports = Table;