use Inventory

db.products.find()

db.users.find()

db.orders.find()

db.products.aggregate([
    {
        $group: {
            _id: "$category",
            count: { $sum: 1 }
        }
    }
])

db.products.aggregate([
    {
        $group: {
            _id: "$category",
            maxPrice: { $max: "$price" }
        }
    }
])


db.users.aggregate([
  {
    $match: {
         "name": "ahmed"
         }
  },
  {
    $lookup: {
      from: "orders",
      localField: "ordersIds",
      foreignField: "_id",
      as: "orders"
    }
  },
  {
    $unwind: "$orders"
  },
  {
    $lookup: {
      from: "products",
      localField: "orders.productsIds",
      foreignField: "_id",
      as: "orders.products"
    }
  },
  {
    $project: {
      _id: 0,
      userName: "$name",
      orderDetails: "$orders"
    }
  }
])

db.users.aggregate([
  {
    $match: {
         "name": "ahmed" 
        }
  },
  {
    $lookup: {
      from: "orders",
      localField: "ordersIds",
      foreignField: "_id",
      as: "orders"
    }
  },
  {
    $unwind: "$orders"
  },
  {
    $lookup: {
      from: "products",
      localField: "orders.productsIds",
      foreignField: "_id",
      as: "orders.products"
    }
  },
  {
    $unwind: "$orders.products"
  },
  {
    $group: {
      _id: "$_id",
      highestOrderPrice: { $max: "$orders.products.price" }
    }
  }
])