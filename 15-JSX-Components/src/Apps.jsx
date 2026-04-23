import Welcome from "./components/Welcome";
import UserCard from "./components/UserCard";

function Apps() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Rendering our static welcome message */}
      <Welcome />

      <hr style={{ margin: '30px 0' }} />

      <h3 style={{ textAlign: 'center' }}>Team Members</h3>
      
      {/* Reusing UserCard with different prop values */}
      <UserCard name="Dharam" email="dharam@gmail.com" />
      <UserCard name="Rahul" email="rahul@gmail.com" />
      <UserCard name="Arvin" email="arvin@example.com" />
    </div>
  );
}

export default App;