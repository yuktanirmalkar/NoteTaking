const themeToggle = document.getElementById("theme-toggle");
const addNoteButton = document.getElementById("add-note");
const noteEditor = document.getElementById("note-editor");
const saveNoteButton = document.getElementById("save-note");
const closeEditorButton = document.getElementById("close-editor");
const notesContainer = document.getElementById("notes-container");
const searchInput = document.getElementById("search");
const sidebarItems = document.querySelectorAll("aside li");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let editMode = false; // Track whether we are editing or adding
let editIndex = null; // Track the index of the note being edited

// Toggle Light/Dark Mode
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Open Note Editor
addNoteButton.addEventListener("click", () => {
  noteEditor.style.display = "block";
  resetEditor();
});

// Close Note Editor
closeEditorButton.addEventListener("click", () => {
  noteEditor.style.display = "none";
  resetEditor();
});

// Save Note
saveNoteButton.addEventListener("click", () => {
  const title = document.getElementById("note-title").value;
  const content = document.getElementById("note-content").value;
  const color = document.getElementById("note-color").value;
  const category = document.getElementById("note-category").value;

  if (title && content) {
    if (editMode) {
      // Edit the existing note
      notes[editIndex] = { title, content, color, category };
      editMode = false;
      editIndex = null;
    } else {
      // Add a new note
      notes.push({ title, content, color, category });
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
    noteEditor.style.display = "none";
    resetEditor();
  } else {
    alert("Please fill out all fields.");
  }
});

// Display Notes
function displayNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.style.backgroundColor = note.color;
    noteDiv.setAttribute("data-category", note.category);
    noteDiv.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <span class="edit" data-index="${index}">✏️</span>
      <span class="delete" data-index="${index}">🗑</span>
    `;
    notesContainer.appendChild(noteDiv);
  });

  // Delete Note
  document.querySelectorAll(".delete").forEach((button) =>
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      displayNotes();
    })
  );

  // Edit Note
  document.querySelectorAll(".edit").forEach((button) =>
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      const note = notes[index];
      document.getElementById("note-title").value = note.title;
      document.getElementById("note-content").value = note.content;
      document.getElementById("note-color").value = note.color;
      document.getElementById("note-category").value = note.category;
      noteEditor.style.display = "block";
      editMode = true; // Enable edit mode
      editIndex = index; // Store the index of the note being edited
    })
  );
}

// Sidebar Filter
sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    const category = item.innerText.toLowerCase();
    document.querySelectorAll(".note").forEach((note) => {
      note.style.display = category === "all notes" || note.dataset.category === category ? "block" : "none";
    });
  });
});

// Search Notes
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll(".note").forEach((note) => {
    const title = note.querySelector("h3").innerText.toLowerCase();
    note.style.display = title.includes(query) ? "block" : "none";
  });
});

// Reset Editor Fields
function resetEditor() {
  document.getElementById("note-title").value = "";
  document.getElementById("note-content").value = "";
  document.getElementById("note-color").value = "#ffffff";
  document.getElementById("note-category").value = "work";
  editMode = false;
  editIndex = null;
}

// Initial Load
displayNotes();
