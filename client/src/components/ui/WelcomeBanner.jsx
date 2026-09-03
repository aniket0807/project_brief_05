function WelcomeBanner({ userName, projectName }) {
  return (
    <div className="card">
      <h3>Welcome, {userName} 👋</h3>
      <p>You are viewing the {projectName} dashboard.</p>
    </div>
  );
}

export default WelcomeBanner;