const buttonSearch = document.querySelector('#page-home main a');
const sceneModal = document.querySelector('#modal');
const close = document.querySelector("#modal header a")

buttonSearch.addEventListener('click', (e) => {
    sceneModal.classList.remove('hidden');
})

close.addEventListener('click', () => {
    sceneModal.classList.add('hidden')
})