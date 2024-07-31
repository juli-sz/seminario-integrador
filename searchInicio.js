// script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const table = document.getElementById('data-table');
    const tableBody = table.querySelector('tbody');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const rows = tableBody.querySelectorAll('tr');

        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(query));
            row.style.display = match ? '' : 'none';
        });
    });
});
