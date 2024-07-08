const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
if (darkModeEnabled) {
    document.body.classList.add('dark');
    const backArrow = document.querySelectorAll('.backArrow');
    backArrow.forEach(allBackArrows => {
        allBackArrows.addEventListener('click', ()=> {
            allBackArrows.classList.add('hidden');
        })

        const whiteBackArrow = document.querySelector('.whiteBackArrow');
        whiteBackArrow.classList.add('hidden');
        const blackBackArrow = document.querySelector('.blackBackArrow');
        blackBackArrow.classList.remove('hidden');
    })
}

const darkModeBtn = document.querySelector('.darkModeBtn');
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        localStorage.setItem('darkModeEnabled', document.body.classList.contains('dark'));

      
    });
}