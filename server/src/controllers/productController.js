// Temporary in-memory data (no database yet — added in later sprints)
let products = [
  { id: 1, name: "Wireless Mouse", price: 499, quantity: 50 },
  { id: 2, name: "Keyboard", price: 899, quantity: 30 },
];

// GET /api/products
export const getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    data: products,
  });
};

// GET /api/products/:id
export const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Product with id ${id} not found`,
    });
  }

  res.status(200).json({
    success: true,
    data: product,
  });
};

// POST /api/products
export const createProduct = (req, res) => {
  const { name, price, quantity } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    quantity,
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: newProduct,
  });
};

// PUT /api/products/:id
export const updateProduct = (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Product with id ${id} not found`,
    });
  }

  const { name, price, quantity } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;
  if (quantity) product.quantity = quantity;

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    data: product,
  });
};

// DELETE /api/products/:id
export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const exists = products.some((p) => p.id === Number(id));

  if (!exists) {
    return res.status(404).json({
      success: false,
      message: `Product with id ${id} not found`,
    });
  }

  products = products.filter((p) => p.id !== Number(id));

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
};