export const play = document.querySelector('.btn')

play.addEventListener('click', toggleMode)

export function toggleMode(event){
    event.preventDefault()

    play.classList.toggle('.running')

}