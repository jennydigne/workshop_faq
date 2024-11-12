function toggle(e) {
    const element = e.target;
    element.classList.toggle("active");
}

const sections = ["section1", "section2", "section3"];
sections.forEach((id) => {
    const sectionElement = document.getElementById(id);
    sectionElement.classList.add("section");
    sectionElement.addEventListener("click", toggle);
});

const accordion = document.querySelector(".accordion");

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((post) => {
        const postTitle = document.createElement("div");
        postTitle.classList.add("section");
        postTitle.innerHTML = post.title.charAt(0).toUpperCase() + post.title.slice(1);
        accordion.appendChild(postTitle);
        postTitle.addEventListener("click", toggle);
        const postBody = document.createElement("div");
        postBody.classList.add("description");
        postBody.textContent = post.body.charAt(0).toUpperCase() + post.body.slice(1);
        accordion.appendChild(postBody);
    });
}

getPosts();










