const addCard = document.getElementById('add-new')
const cardContaienr = document.getElementById('card-container-3')

/* This is the window elements */
const cardWindow = document.getElementById('modal-container')
const escapeWindow = document.getElementById('exit-1')
const cardTitle = document.getElementById('title-1')
const cardPriority = document.getElementById('priority-select')
const cardDesc = document.getElementById('description-1')
const cardSubmit = document.getElementById('submit-1')

addCard.onclick = function (){
    cardWindow.showModal()
}
escapeWindow.onclick = function(){
    cardWindow.close()
}

/* This function only applies if it is a element that doesn't need a class to be created*/
function addElement(container, tag, text){
    const child = document.createElement(tag)
    text = text.charAt(0).toUpperCase() + text.slice(1)
    child.textContent = text
    container.appendChild(child)
}
//Creates cards
function createCard(title, priority, desc, container){
    const card = document.createElement('div')
    card.classList.add('card')
    addElement(card, "h1", title)
    addElement(card, "h2", priority)
    addElement(card, "p", desc)
    container.appendChild(card)
}
cardSubmit.addEventListener('click', () => {
    let titleValue = cardTitle.value
    let priorityValue = cardPriority.value
    let descValue = cardDesc.value
    createCard(titleValue, priorityValue, descValue, cardContaienr)
    cardWindow.close()
})