const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  orderItems: [
    {
      name: String,
      model: String,
      price: Number,
      cartQuantity: Number,
      Image: String,
    },
  ],
  totalPrice: {
    type: Number,
    default: 0.0,
  },
  isDelivered: {
    type: String,
    default: 'pending',
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  deliveredAt: {
    type: Date,
  },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
