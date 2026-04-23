const DataList = ({ items }) => {
  return (
    <div style={{ display: 'grid', gap: '15px', padding: '20px' }}>
      {items.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
          <h3>{item.name}</h3>
          <p><strong>Username:</strong> {item.username}</p>
          <p><strong>Email:</strong> {item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default DataList;