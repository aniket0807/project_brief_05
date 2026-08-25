import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";

function Dashboard() {
  return (
    <section>
      <PageTitle
        title="Inventory Dashboard"
        subtitle="Overview of products, stock levels, purchase orders, and inventory status."
      />
      <Card title="Total Products" description="Coming soon" />
      <Card title="Low Stock Items" description="Coming soon" />
    </section>
  );
}

export default Dashboard;