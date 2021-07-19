// Variables
const buttons = document.querySelectorAll(`button`);

console.log(buttons);

//Functions
const deletePost = (e) => {
    const id = e.target.dataset.id;

    return fetch(`http://localhost:5000/blog/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(data => location.reload())
        .catch(err => console.log(err));
}

// Events
buttons.forEach((button) => button.addEventListener(`click`, deletePost));
