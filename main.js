const selectButton = document.querySelector('.header__item_select');
const selectList = document.querySelector('.select_list');
const selectItems = document.querySelectorAll('.select_item');
selectButton.onclick = () => {
    selectList.classList.toggle('select_list_show');
}

selectItems.forEach(element => {
    element.onclick = () => {
        selectButton.innerHTML = element.textContent;
        selectList.classList.remove('select_list_show');
    }
});

const reviewTextaria = document.querySelector('.review_textaria');
const reviewName = document.querySelector('.review_name');
const reviewSubmit = document.querySelector('.review_submit');
const commentsList = document.querySelector('.comments_list');
const popapThanks = document.querySelector('.thanks');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


reviewSubmit.onclick = (event) => {
    event.preventDefault();
    if (reviewName.value == "" || reviewTextaria.value == "") {
        console.log('пустые строки');
    } else {
        let index = getRandomIntInclusive(1, 8);

        let newComments = document.createElement('li');
        commentsList.appendChild(newComments);
        newComments.classList.add('comments_item');

        let newAva = document.createElement('img');
        newComments.appendChild(newAva);
        newAva.classList.add('comments_ava');
        newAva.style.backgroundImage = `url("img/ava${index}.jpg")`;

        let divComments = document.createElement('div');
        newComments.appendChild(divComments);

        let newName = document.createElement('p');
        divComments.appendChild(newName);
        newName.classList.add('comments_name');
        newName.innerHTML = reviewName.value;

        let newText = document.createElement('p');
        divComments.appendChild(newText);
        newText.classList.add('comments_text');
        newText.innerHTML = reviewTextaria.value;

        popapThanks.classList.remove('thanks_show');
        popapThanks.innerHTML = `${reviewName.value},<br>Спасибо за ваш отзыв!`

        setTimeout(() => {
            popapThanks.classList.add('thanks_show');



            console.log('hello');
            reviewName.value = "";
            reviewTextaria.value = "";
        }, "4000");
    }
}

const contactsButton = document.querySelector('.header__item_href');
const popupContacts = document.querySelector('.contacts');
const modalBackground = document.querySelector('.modal_background');

contactsButton.onclick = () => {
    popupContacts.classList.toggle('contacts_none');
    modalBackground.classList.add('modal_background-black');
}
modalBackground.onclick = () => {
    modalBackground.classList.remove('modal_background-black');
    popupContacts.classList.add('contacts_none');
}