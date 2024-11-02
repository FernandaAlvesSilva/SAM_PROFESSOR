document.querySelector('.plano__form').addEventListener('submit', function(event) {
    event.preventDefault();
    const report = document.getElementById('report').value;
    if (report.trim() === '') {
        alert('Por favor, preencha o relatório.');
        return;
    }
    alert('Relatório enviado com sucesso!');
    document.getElementById('report').value = '';
});