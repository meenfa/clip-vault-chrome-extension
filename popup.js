
const input = document.getElementById("clipInput");
const saveBtn = document.getElementById("saveBtn");
const clipsList = document.getElementById("clipsList");

// SAVE A NEW CLIP
saveBtn.addEventListener("click", async () => {
    const text = input.value.trim();

    if (!text) return;

    const result = await chrome.storage.local.get("myClips");
    const clips = result.myClips || [];

    clips.push(text);

    await chrome.storage.local.set({
        myClips: clips
    });

    input.value = "";
    displayClips();
});

// DISPLAY ALL CLIPS
async function displayClips() {
    const result = await chrome.storage.local.get("myClips");
    const clips = result.myClips || [];

    clipsList.innerHTML = "";

    clips.forEach((clip, index) => {
        const li = document.createElement("li");

        const clipText = document.createElement("span");
        clipText.textContent = clip;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", () => {
            deleteClip(index);
        });

        li.appendChild(clipText);
        li.appendChild(deleteBtn);

        clipsList.appendChild(li);
    });
}

// DELETE A CLIP
async function deleteClip(index) {
    const result = await chrome.storage.local.get("myClips");
    const clips = result.myClips || [];

    clips.splice(index, 1);

    await chrome.storage.local.set({
        myClips: clips
    });

    displayClips();
}

// LOAD CLIPS WHEN POPUP OPENS
displayClips();
