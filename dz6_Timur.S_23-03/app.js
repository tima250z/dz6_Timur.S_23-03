const block = document.querySelector('.block');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let count = 1;

btnNext.onclick = () => {
    count = Math.min(count + 1, 200);
    fetchData(count);
}

btnPrev.onclick = () => {
    count = Math.max(count - 1, 1);
    fetchData(count);
}

function fetchData(count) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            block.innerHTML = `
                <h2>${data.title}</h2>
                <span>${data.id}</span>
                <h3>${data.completed}</h3>
            `
        })
}


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));