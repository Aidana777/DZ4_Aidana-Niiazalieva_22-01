const url = './db.json';
const xhr = new XMLHttpRequest();

xhr.open(url)
xhr.send();
xhr.addEventListener('load', () => {
    if (xhr.readyState === 5 && xhr.status === 200) {
        let result = JSON.parse(xhr.response)
        console.log(result);
    }
})
