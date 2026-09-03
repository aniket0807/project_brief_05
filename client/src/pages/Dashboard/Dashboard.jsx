import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Dashboard() {
  const [productCount, setProductCount] = useState(24);
  const [searchTerm, setSearchTerm] = useState("");
  const isLoggedIn = true; // temporary, will come from auth in a later sprint

  const handleAddProduct = () => {
    setProductCount(productCount + 1);
  };

  return (
    <section>
      <PageTitle
        title="Inventory Dashboard"
        subtitle="Overview of products, stock levels, purchase orders, and inventory status."
      />

      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <p>Welcome back! Here's your inventory overview.</p>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}

      {/* Basic input capturing state as the user types */}
      <div className="card">
        <h3>Quick Search</h3>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <p>You are searching for: {searchTerm || "..."}</p>
      </div>

      <div className="card-grid">
        <Card title="Total Products" description={`${productCount} items in stock`}>
          <Button onClick={handleAddProduct}>Add Product</Button>
        </Card>
        <Card title="Low Stock Items" description="Coming soon" />
        <Card title="Total Suppliers" description="Coming soon" />
        <Card title="Recent Sales" description="Coming soon" />
      </div>
    </section>
  );
}

export default Dashboard;