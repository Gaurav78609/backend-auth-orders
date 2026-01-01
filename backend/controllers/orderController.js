import Order from "../models/Order.js";

/*  CREATE ORDER  */
export const createOrder = async (req, res) => {
  try {
    const { product_name, quantity } = req.body;

    if (!product_name || !quantity) {
      return res.status(400).json({ message: "All fields required" });
    }

    const order = await Order.create({
      user: req.user._id,
      product_name,
      quantity
    });

    res.status(201).json({
      message: "Order created successfully",
      order
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

/* GET USER ORDERS */
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });

    res.status(200).json({
      message: "Orders fetched successfully",
      orders
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
