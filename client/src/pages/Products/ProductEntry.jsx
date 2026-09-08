import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function ProductEntry() {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    price: "",
    quantity: "",
    supplierName: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.productName.trim()) {
      newErrors.productName = "Product name is required.";
    } else if (formData.productName.trim().length < 3) {
      newErrors.productName = "Product name must be at least 3 characters.";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required.";
    }

    if (!formData.price) {
      newErrors.price = "Price is required.";
    } else if (Number(formData.price) <= 0) {
      newErrors.price = "Price must be a positive number.";
    }

    if (!formData.quantity) {
      newErrors.quantity = "Quantity is required.";
    } else if (Number(formData.quantity) <= 0) {
      newErrors.quantity = "Quantity must be a positive number.";
    }

    if (!formData.supplierName.trim()) {
      newErrors.supplierName = "Supplier name is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Product submitted:", formData);
      setSubmitted(true);
      handleReset();
    } else {
      setSubmitted(false);
    }
  };

  const handleReset = () => {
    setFormData({
      productName: "",
      category: "",
      price: "",
      quantity: "",
      supplierName: "",
    });
    setErrors({});
  };

  return (
    <section>
      <PageTitle
        title="Add New Product"
        subtitle="Enter product details to add them to the inventory."
      />

      {submitted && (
        <div className="card success-message">
          <p>Product added successfully!</p>
        </div>
      )}

      <div className="card">
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="productName">
              Product Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder="e.g., Wireless Mouse"
              value={formData.productName}
              onChange={handleChange}
            />
            {errors.productName && (
              <p className="error-text">{errors.productName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="category">
              Category <span className="required">*</span>
            </label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="e.g., Electronics"
              value={formData.category}
              onChange={handleChange}
            />
            {errors.category && <p className="error-text">{errors.category}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="price">
              Price (₹) <span className="required">*</span>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="e.g., 499"
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && <p className="error-text">{errors.price}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="quantity">
              Quantity <span className="required">*</span>
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              placeholder="e.g., 50"
              value={formData.quantity}
              onChange={handleChange}
            />
            {errors.quantity && <p className="error-text">{errors.quantity}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="supplierName">
              Supplier Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="supplierName"
              name="supplierName"
              placeholder="e.g., ABC Distributors"
              value={formData.supplierName}
              onChange={handleChange}
            />
            {errors.supplierName && (
              <p className="error-text">{errors.supplierName}</p>
            )}
          </div>

          <div className="form-actions">
            <Button type="submit">Add Product</Button>
            <button type="button" className="btn-secondary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ProductEntry;