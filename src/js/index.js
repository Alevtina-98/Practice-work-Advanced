import "../style/styles.scss";

const posts = document.querySelector("#posts");

posts.addEventListener("click", (e) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      const rightSection = document.querySelector(".section-right");
      rightSection.innerHTML = "";

      const template = document.createElement("template");
      rightSection.append(template);

      data.forEach((post) => {
        const postElement = document.createElement("div");

        postElement.style.border = "2px solid #D97EB0";

        postElement.className = "post";
        postElement.innerHTML = `
                  <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <button
          class="btn-favorite-heart"
          data-id="${post.id}"
          style="
           background-size: cover;
           border: none;
           cursor: pointer;
           visibility: visible;
           font-size:50px;
          "
        >❤
        </button>
                `;
        template.content.appendChild(postElement);
      });

      const clone = document.importNode(template.content, true);

      rightSection.appendChild(clone);

      const favoriteHeartButtons = document.querySelectorAll(
        ".btn-favorite-heart"
      );

      favoriteHeartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          const postId = button.getAttribute("data-id");
          const postTitle = button
            .closest(".post")
            .querySelector("h2").textContent;
          const postBody = button
            .closest(".post")
            .querySelector("p").textContent;

          let favoritePosts =
            JSON.parse(localStorage.getItem("favoritePosts")) || [];

          if (button.classList.contains("added-to-favorite")) {
            button.style.color = "white";
            button.classList.remove("added-to-favorite");

            favoritePosts = favoritePosts.filter((post) => post.id !== postId);

            localStorage.setItem(
              "favoritePosts",
              JSON.stringify(favoritePosts)
            );
            const postDeleteElement = button.closest(".post");
            postDeleteElement.remove();

            console.log(`Post with ID ${postId} removed from favorites`);
          } else {
            button.style.color = "red";
            button.style.fontSize = "70px";
            button.classList.add("added-to-favorite");

            const postDetails = {
              id: postId,
              title: postTitle,
              body: postBody,
            };

            favoritePosts.push(postDetails);

            console.log(`Post with ID ${postId} added to favorites`);
          }
          localStorage.setItem("favoritePosts", JSON.stringify(favoritePosts));
        });
      });
      const favoriteButton = document.querySelector("#favorite-btn");

      favoriteButton.addEventListener("click", (event) => {
        const rightSection = document.querySelector(".section-right");
        rightSection.innerHTML = "";

        const favoritePosts =
          JSON.parse(localStorage.getItem("favoritePosts")) || [];

        if (favoritePosts.length === 0) {
          rightSection.innerHTML = "<p>You don't have any favorite posts</p>";
        } else {
          favoritePosts.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.innerHTML = `
        <p>Post with ID: ${post.id}</p>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
            rightSection.append(postElement);
          });
        }
      });
    })

    .catch((error) => console.error("Error", error));
});
