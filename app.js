document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const progressBar = document.querySelector('.progress');
    const mainContent = document.querySelector('.main-content');

    // Loading simulation
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            splashScreen.style.opacity = '0';
            setTimeout(() => {
                splashScreen.remove();
                mainContent.style.opacity = '1';
            }, 500);
        } else {
            width += 1;
            progressBar.style.width = width + '%';
        }
    }, 30);

    // Countdown timer
    const launchDate = new Date('2024-12-25T00:00:00').getTime();
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = launchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown').innerHTML = '<h3>🚀 Launch Successful!</h3>';
        }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});