document.getElementById('loanForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const amount = Number(document.getElementById('amount').value);
  const term = Number(document.getElementById('term').value);
  const resultsDiv = document.getElementById('results');

  // Ejemplo simple de préstamos disponibles (puedes ampliarlo)
  const loans = [
    { name: 'Préstamo Banco A', rate: 5.5 },
    { name: 'Préstamo Banco B', rate: 4.9 },
    { name: 'Préstamo Banco C', rate: 6.1 },
  ];

  // Calcular cuota mensual simple (sin seguros ni comisiones)
  function calcularCuota(capital, meses, tasaAnual) {
    const tasaMensual = tasaAnual / 100 / 12;
    return (capital * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -meses));
  }

  let html = '<h2>Resultados:</h2><ul>';

  loans.forEach(loan => {
    const cuota = calcularCuota(amount, term, loan.rate);
    html += `<li><strong>${loan.name}</strong>: Cuota mensual de <strong>${cuota.toFixed(2)} €</strong> a un interés del ${loan.rate}% anual.</li>`;
  });

  html += '</ul>';
  resultsDiv.innerHTML = html;
});
