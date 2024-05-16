document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('light-mode');  // Asegura que el modo claro se aplica inicialmente.

    document.getElementById('themeToggle').addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            this.textContent = 'Modo oscuro';
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            this.textContent = 'Modo claro';
        }

        document.querySelectorAll('.bg-light').forEach(element => {
            element.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.form-label').forEach(element => {
            element.classList.toggle('dark-mode');
        });
        document.querySelectorAll('.form-check-label').forEach(element => {
            element.classList.toggle('dark-mode');
        });

        this.classList.toggle('btn-dark-mode');
    });
});
