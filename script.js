const ctx = document.getElementById('socialChart').getContext('2d');

// Dados das redes sociais
const data = {
    labels: ['Facebook', 'YouTube', 'WhatsApp', 'Instagram', 'TikTok'],
    datasets: [{
        label: 'Bilhões de usuários ativos',
        data: [2900, 2500, 2000, 1500, 1000],
        backgroundColor: [
            '#7f00ff', // Roxo vibrante
            '#9f00ff', // Roxo mais claro
            '#bf00ff', // Roxo ainda mais claro
            '#df00ff', // Roxo brilhante
            '#ff00ff'  // Fúcsia
        ],
        borderColor: [
            '#7f00ff',
            '#9f00ff',
            '#bf00ff',
            '#df00ff',
            '#ff00ff'
        ],
        borderWidth: 2
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        onClick: (e, activeEls) => {
            if (activeEls.length > 0) {
                const chartIndex = activeEls[0].index;
                const urls = [
                    'https://facebook.com',
                    'https://youtube.com',
                    'https://whatsapp.com',
                    'https://instagram.com',
                    'https://tiktok.com'
                ];
                // Redireciona para a rede social correspondente
                window.open(urls[chartIndex], '_blank');
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const socialChart = new Chart(ctx, config);

// Simular atualização em tempo real
setInterval(() => {
    const newData = [2900 + Math.random() * 10, 2500 + Math.random() * 10, 2000 + Math.random() * 10, 1500 + Math.random() * 10, 1000 + Math.random() * 10];
    socialChart.data.datasets[0].data = newData;
    socialChart.update();
}, 5000);