import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import WelcomeBanner from "../../components/ui/WelcomeBanner";

function Home() {
  const [currentUser] = useState({
    name: "Guest User",
    project: "Inventory Management System",
  });

  return (
    <section>
      <PageTitle
        title="Inventory Management System"
        subtitle="Welcome to the inventory management system for managing products, stock, suppliers, and purchase orders."
      />

      <WelcomeBanner userName={currentUser.name} projectName={currentUser.project} />

      <Card title="Get Started" description="Log in to access your dashboard.">
        <Button onClick={() => alert("Navigate to Login")}>Login</Button>
      </Card>
    </section>
  );
}

export default Home;