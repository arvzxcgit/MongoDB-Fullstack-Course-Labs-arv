const fetchBtn = document.getElementById('fetchBtn');
const dataContainer = document.getElementById('dataContainer');
const loadingIndicator = document.getElementById('loading');

fetchBtn.addEventListener('click', () => {
    // Show loading, clear previous data
    loadingIndicator.classList.remove('hidden');
    dataContainer.innerHTML = '';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            loadingIndicator.classList.add('hidden');
            displayUsers(data);
        })
        .catch(error => {
            loadingIndicator.classList.add('hidden');
            dataContainer.innerHTML = `<p style="color: #ef4444;">Error: ${error.message}</p>`;
        });
});

function displayUsers(users) {
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
        `;

        dataContainer.appendChild(card);
    });
}