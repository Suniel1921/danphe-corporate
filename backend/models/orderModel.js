// // const mongoose = require('mongoose');

// // const OrderSchema = new mongoose.Schema({
// //     user: {
// //         type: mongoose.Schema.Types.ObjectId,
// //         ref: 'UserAuth',
// //         required: true
// //     },
// //     items: [
// //         {
// //             _id: String,
// //             heading: String,
// //             price: Number,
// //             quantity: Number,
// //             list: [String]
// //         }
// //     ],
// //     total: {
// //         type: Number,
// //         required: true
// //     },
    
// // },{timestamps: true});

// // module.exports = mongoose.model('Order', OrderSchema);





// const mongoose = require('mongoose');

// const OrderSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'UserAuth',
//         required: true
//     },
//     items: [
//         {
//             _id: String,
//             heading: String,
//             price: Number,
//             quantity: Number,
//             list: [String]
//         }
//     ],
//     total: {
//         type: Number,
//         required: true
//     },
//     status: {
//         type: String,
//         enum: ['pending', 'processing', 'verify'], // Specify the allowed status values
//         default: 'pending' // Set default status to 'pending'
//     }
// },{timestamps: true});

// module.exports = mongoose.model('Order', OrderSchema);





const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserAuth',
        required: true
    },
    items: [
        {
            _id: String,
            heading: String,
            price: Number,
            quantity: Number,
            list: [String]
        }
    ],
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'processing', 'verified'],
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
