document.getElementById('search-input').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const buttons = document.querySelectorAll('.report-button');

    buttons.forEach(function(button) {
        const text = button.textContent.toLowerCase();
        if (text.includes(filter)) {
            button.style.display = '';
        } else {
            button.style.display = 'none';
        }
    });
});