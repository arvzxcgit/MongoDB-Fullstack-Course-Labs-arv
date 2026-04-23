// This card takes name and email as props to stay reusable
function UserCard(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px auto',
      maxWidth: '300px',
      backgroundColor: '#f9f9f9',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#333', margin: '0 0 10px 0' }}>{props.name}</h2>
      <p style={{ color: '#666', margin: '0' }}>Email: {props.email}</p>
    </div>
  );
}

export default UserCard;