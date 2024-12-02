```markdown
# MyNotes - A Simple Note-Taking App

This is a straightforward note-taking application built using HTML, CSS, and JavaScript. It allows you to create, save, edit, delete, search, and categorize notes.  It also features a light/dark mode toggle.

## Functionality

The app provides the following functionalities:

* **Adding Notes:** Click the "+ Add Note" button to open a modal where you can enter the note title, content, select a category (Work or Personal), and choose a background color for the note.
* **Saving Notes:**  Click "Save" in the modal to save the new note or update an existing one. Notes are stored in local storage, so they persist even after closing the browser.
* **Editing Notes:** Click the pencil icon (✏️) on a note to open the modal pre-filled with the note's details, allowing you to make changes.
* **Deleting Notes:** Click the trash can icon (🗑) on a note to permanently delete it.
* **Searching Notes:** Use the search bar at the top to filter notes based on their titles.
* **Categorizing Notes:**  Use the sidebar to filter notes by category (All Notes, Work, Personal).
* **Light/Dark Mode:** Toggle between light and dark mode using the "Light/Dark Mode" button in the header.

## Technical Details

Here's a breakdown of the technologies and features used:

### HTML (index.html)wz33
3Wwwwwwwzzzzzzzzs








*   **Structure:** Uses semantic HTML5 elements like `<header>`, `<main>`, `<aside>`, `<ul>`, `<li>`, `<div>`, `<input>`, `<textarea>`, `<button>`, and `<select>` for structuring the content.
*   **Modal:**  Implements a modal for note editing using a `<div>` with the class "modal".
*   **Placeholders:** Uses placeholders in input fields and textareas to guide user input.

### CSS (styles.css)

*   **Layout:** Uses Flexbox and Grid for layout, creating a responsive design.
*   **Styling:** Styles elements with colors, fonts, shadows, and other visual properties to enhance the user interface.
*   **Modal Styling:** Styles the modal with a semi-transparent background and centered position.
*   **Dark Mode:** Implements a dark mode toggle that changes the color scheme of the application.
*   **Responsive Design:**  Uses media queries to adapt the layout for different screen sizes.
*   **Transitions and Animations:**  Uses CSS transitions for smooth visual changes and a slide-down animation for the modal appearance.


### JavaScript (script.js)

*   **DOM Manipulation:**  Manipulates the DOM to dynamically update content, such as displaying notes, opening/closing the modal, and handling user interactions.
*   **Event Handling:**  Uses event listeners to respond to user actions like clicks, input changes, and search queries.
*   **Local Storage:**  Uses local storage to persist notes between browser sessions.
*   **Modal Control:**  Controls the visibility of the note editor modal.
*   **Note Management:** Handles creating, saving, editing, and deleting notes.
*   **Search Functionality:** Filters notes based on user input in the search bar.
*   **Category Filtering:**  Filters notes based on selected categories.
*   **Dark Mode Toggle:**  Toggles the dark mode class on the body element.


## How to Run

1.  Clone the repository.
2.  Open `index.html` in your web browser.


```
