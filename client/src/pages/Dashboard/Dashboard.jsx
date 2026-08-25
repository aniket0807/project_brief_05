import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";

function Dashboard() {
  return (
    <section>
      <PageTitle
        title="Inventory Dashboard"
        subtitle="Overview of products, stock levels, purchase orders, and inventory status."
      />
      <div className="card-grid">
        <Card title="Total Products" description="Coming soon" />
        <Card title="Low Stock Items" description="Coming soon" />
        <Card title="Total Suppliers" description="Coming soon" />
        <Card title="Recent Sales" description="Coming soon" />
      </div>
    </section>
  );
}

export default Dashboard;