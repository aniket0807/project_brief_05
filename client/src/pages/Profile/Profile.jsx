import PageTitle from "../../components/ui/PageTitle";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

function Profile() {
  return (
    <section>
      <PageTitle
        title="My Profile"
        subtitle="View and manage your personal information, account details, and user role."
      />
      <Card title="Account Details" description="Coming soon">
        <Button>Edit Profile</Button>
      </Card>
    </section>
  );
}

export default Profile;