let installPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    installPrompt = e;
});

document.getElementById('downloadBtn').addEventListener('click', async () => {
    if (installPrompt) {
        installPrompt.prompt();
        const result = await installPrompt.userChoice;
        if (result.outcome === 'accepted') {
            installPrompt = null;
        }
    } else {
        window.open('https://meloflix.vercel.app', '_blank');
    }
});