const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
if (darkModeEnabled) {
    document.body.classList.add('dark');
    const backArrow = document.querySelectorAll('.backArrow');
    backArrow.forEach(allBackArrows => {
        allBackArrows.addEventListener('click', ()=> {
            allBackArrows.classList.add('hidden');
        })
    })
}

const darkModeBtn = document.querySelector('.darkModeBtn');
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        localStorage.setItem('darkModeEnabled', document.body.classList.contains('dark'));

      
    });
}