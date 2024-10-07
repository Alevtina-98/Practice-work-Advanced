import "../style/styles.scss";

const posts = document.querySelector("#posts");

posts.addEventListener("click", (e) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const rightSection = document.querySelector(".section-right");
      rightSection.innerHTML = "";

      data.forEach((post) => {
        const postElement = document.createElement("div");

        postElement.className = "post";
        postElement.innerHTML = `
                  <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <button
          class="btn-favorite-heart"
          data-id="${post.id}"
          style="background-image: url(./assets/img/heart-svgrepo-com.svg);
           background-size: cover;
           border: none;
           cursor: pointer;
           height: 30px;
           width: 30px;
           visibility: visible;
          "
        ></button>
                `;
        rightSection.append(postElement);
      });
    })

    .catch((error) => console.error("Error", error));
});
