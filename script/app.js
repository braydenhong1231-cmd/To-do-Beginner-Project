const addCard = document.getElementById('add-new')
const cardContainer = document.getElementById('card-container-3')

/* This is the window elements */
const cardWindow = document.getElementById('modal-container')
const escapeWindow = document.getElementById('exit-1')
const cardTitle = document.getElementById('title-1')
const cardPriority = document.getElementById('priority-select')
const cardDesc = document.getElementById('description-1')
const cardSubmit = document.getElementById('submit-1')
let edit = false

addCard.onclick = function (){
    cardWindow.showModal()
    cardTitle.value = ""
    cardPriority.value = ""
    cardDesc.value = ""
}
escapeWindow.onclick = function(){
    cardWindow.close()
    cardTitle.value = ""
    cardPriority.value = ""
    cardDesc.value = ""
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
function editCard(parent, title, priority, desc){
    const titleValue = parent.querySelector("h1")
    const priorityValue = parent.querySelector('h2')
    const descValue = parent.querySelector("p")
    titleValue.textContent = title.value
    priorityValue.textContent = priority.value
    descValue.textContent = desc.value
    console.log("hello")
}
cardSubmit.addEventListener('click', () => {
    if(!edit){
        let titleValue = cardTitle.value
        let priorityValue = cardPriority.value
        let descValue = cardDesc.value
        createCard(titleValue, priorityValue, descValue, cardContainer)
        cardWindow.close()
    }
    cardWindow.close()
})


const deletebutton = document.createElement('button')
deletebutton.classList.add('delete')

cardContainer.addEventListener('mouseover', (current) => {
    const card = current.target.closest('.card')
    if (card && !cardContainer.contains(current.relatedTarget && current.relatedTarget.closest('.card'))) {
        if(!card.contains(deletebutton)){
            card.appendChild(deletebutton)
        }
        deletebutton.style.visibility = 'visible'
        deletebutton.addEventListener('click', () =>{
            card.remove()
        })
    }
})

cardContainer.addEventListener('mouseout', (current) => {
    const card = current.target.closest('.card')
    if (card && !cardContainer.contains(current.relatedTarget && current.relatedTarget.closest('.card'))) {
        deletebutton.style.visibility = 'hidden'
    }
})

const editbutton = document.createElement('button')
editbutton.classList.add('edit')

cardContainer.addEventListener('mouseover', (current) => {
    const card = current.target.closest('.card')
    if (card && !cardContainer.contains(current.relatedTarget && current.relatedTarget.closest('.card'))) {
        if(!card.contains(editbutton)){
            card.appendChild(editbutton)
        }
        editbutton.style.visibility = 'visible'
        editbutton.addEventListener('click', () => {
            const title = card.querySelector('h1')
            const priority = card.querySelector('h2')
            const description = card.querySelector('p')

            cardWindow.showModal()
            cardTitle.value = title.textContent
            cardDesc.value = description.textContent
            cardPriority.value = priority.textContent
            edit = true
            
            if(edit){
                cardSubmit.addEventListener('click', () => {
                    editCard(card,cardTitle,cardPriority,cardDesc)
                    edit = false
                })
            }

        })
    }
})

cardContainer.addEventListener('mouseout', (current) => {
    const card = current.target.closest('.card')
    if (card && !cardContainer.contains(current.relatedTarget && current.relatedTarget.closest('.card'))) {
        editbutton.style.visibility = 'hidden'
    }
})