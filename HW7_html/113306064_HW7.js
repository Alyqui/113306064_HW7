document.addEventListener("DOMContentLoaded", () => {
    // 編輯名稱功能
    const nameElement = document.getElementById("name");
    const editNameBtn = document.getElementById("edit-name-btn");

    editNameBtn.addEventListener("click", () => {
        if (editNameBtn.textContent === "Edit") {
            const input = document.createElement("input");
            input.type = "text";
            input.value = nameElement.textContent;
            input.id = "name-input";
            nameElement.replaceWith(input);
            editNameBtn.textContent = "Save";
        } else {
            const input = document.getElementById("name-input");
            const h1 = document.createElement("h1");
            h1.id = "name";
            h1.textContent = input.value;
            input.replaceWith(h1);
            editNameBtn.textContent = "Edit";
        }
    });

     // 新增音樂功能
    const addMusicBtn = document.getElementById("add-music-btn");
    const musicFormContainer = document.getElementById("music-form-container");
    const submitMusicBtn = document.getElementById("submit-music-btn");

    addMusicBtn.addEventListener("click", () => {
        musicFormContainer.style.display = "block"; // 顯示表單
    });

    submitMusicBtn.addEventListener("click", () => {
        const musicLinkInput = document.getElementById("music-link");
        const musicNameInput = document.getElementById("music-name");
        const musicGallery = document.querySelector(".music-gallery");

        if (musicLinkInput.value.trim() && musicNameInput.value.trim()) {
            // 新增音樂項目
            const musicItem = document.createElement("div");
            musicItem.classList.add("music-item");

            const link = document.createElement("a");
            link.href = musicLinkInput.value;
            link.target = "_blank";
            link.innerHTML = `<img src="youtube.jpg" alt="${musicNameInput.value}" />`;

            const musicName = document.createElement("p");
            musicName.textContent = musicNameInput.value;

            // 將音樂項目追加到畫面
            musicItem.appendChild(link);
            musicItem.appendChild(musicName);
            musicGallery.appendChild(musicItem);

            // 清空表單並隱藏
            musicLinkInput.value = "";
            musicNameInput.value = "";
            musicFormContainer.style.display = "none";
        } else {
            alert("Please fill out both fields.");
        }
    });
});