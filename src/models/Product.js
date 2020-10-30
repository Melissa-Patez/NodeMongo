const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,  
        required: true, // obrigadorio true
    },
    description:{
        type: String, 
        required: true, // obrigadorio
    },
    url: {
        type: String, 
        required: true, // obrigadorio
    },
    createdAt:{
        type: Date,
        default: Date.now, //vai registradar a data de criação de cada produto
    },
});

ProductSchema.plugin(mongoosePaginate);

//toda aplicação vai saber que tem o model com essas caractristica
mongoose.model('Product', ProductSchema);