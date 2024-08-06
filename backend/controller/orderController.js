// const orderModel = require("../models/orderModel");


// exports.createOrder = async (req, res) => {
//     try {
//         const { items, total, status } = req.body; // Include status in the request body
//         const newOrder = new orderModel({
//             user: req.user._id,
//             items,
//             total,
//             status: status || 'pending' // Set default status if not provided
//         });
//         const savedOrder = await newOrder.save();
//         res.status(201).json(savedOrder);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };


// // //get all user order
// // exports.getOrders = async (req, res) => {
// //     try {
// //         const orders = await orderModel.find().populate('user');
// //         res.status(200).json(orders);
// //     } catch (err) {
// //         res.status(500).json({ message: err.message });
// //     }
// // };






// // Get all user orders
// exports.getOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find().populate('user', 'name'); // Populate user name
//         res.status(200).json(orders);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// // Update order status
// exports.updateOrderStatus = async (req, res) => {
//     const { orderId, status } = req.body;
//     try {
//         const order = await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
//         if (!order) {
//             return res.status(404).json({ message: 'Order not found' });
//         }
//         res.status(200).json({ message: 'Order status updated', order });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };
























// const orderModel = require("../models/orderModel");

// exports.createOrder = async (req, res) => {
//     try {
//         const { items, total, status } = req.body;
//         const newOrder = new orderModel({
//             user: req.user._id,
//             items,
//             total,
//             status: status || 'pending'
//         });
//         const savedOrder = await newOrder.save();
//         res.status(201).json(savedOrder);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// exports.getOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find().populate('user', 'name');
//         res.status(200).json(orders);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// exports.updateOrderStatus = async (req, res) => {
//     const { orderId, status } = req.body;
//     try {
//         const order = await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
//         if (!order) {
//             return res.status(404).json({ message: 'Order not found' });
//         }
//         res.status(200).json({ message: 'Order status updated', order });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };

// exports.getYourOrders = async (req, res) => {
//     try {
//         const userId = req.user._id;
//         const orderInfo = await orderModel.find({ user: userId }).populate({ path: 'user', select: '-password' });
//         res.status(200).json({ success: true, message: 'Order information retrieved successfully', orderInfo });
//     } catch (error) {
//         res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// };







const orderModel = require("../models/orderModel");

exports.createOrder = async (req, res) => {
    try {
        const { items, total, status } = req.body;
        const newOrder = new orderModel({
            user: req.user._id,
            items,
            total,
            status: status || 'pending'
        });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await orderModel.find().populate('user', 'name');
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    const { orderId, status } = req.body;
    try {
        const order = await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ message: 'Order status updated', order });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getYourOrders = async (req, res) => {
    try {
        const userId = req.user._id;
        const orderInfo = await orderModel.find({ user: userId }).populate({ path: 'user', select: '-password' });
        res.status(200).json({ success: true, message: 'Order information retrieved successfully', orderInfo });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
