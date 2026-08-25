import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Login() {
  return (
    <section>
      <PageTitle
        title="Login"
        subtitle="Sign in to access the Inventory Management System based on your assigned user role."
      />
      <Card>
        <Button>Sign In</Button>
      </Card>
    </section>
  );
}

export default Login;