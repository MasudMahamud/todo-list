
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const addBtn = document.querySelector('#btn');
const bookList = document.querySelector('#book-list');


btn.addEventListener('click', function(e) {
    e.preventDefault();

    if (title.value == '' && author.value == '' && year.value == '') {
        alert('add something')
    }
    else{
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);
    }
})