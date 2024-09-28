function atualizarFavicon(){
    const favicon = document.getElementById('favicon');
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    favicon.href = isDarkMode ? './src/assets/Logofooter_11zon.webp' : './src/assets/Logoheader_11zon.webp';
}

window.addEventListener('load', atualizarFavicon);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', atualizarFavicon);