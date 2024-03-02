console.log("Mukund")
const modalButton = document.querySelector(".modal_btn")
const modalContainer = document.querySelector(".modal_container")
const modal = document.querySelector(".modal")

modalButton.addEventListener('click' , () => {
    toggleModal(true)
})

function toggleModal (toggle) {
    modalContainer.style.display = toggle ? 'flex' : 'none'
}

modalContainer.addEventListener('click', (e) => {
    if(e.target.className === "modal_container"){
        toggleModal(false)
    }
    
})