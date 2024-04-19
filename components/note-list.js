class noteList extends HTMLElement {
    constructor() {
        super()
    }
    addNoteToDOM(title, description) {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.style.border = '1px solid #ccc'; // Mengatur border catatan
        noteDiv.style.borderRadius = '5px'; // Mengatur border radius catatan
        noteDiv.style.padding = '10px'; // Mengatur padding catatan
        noteDiv.style.marginBottom = '10px'; // Mengatur margin bottom catatan
        noteDiv.innerHTML = `
        <h3>${catatan.title}</h3>
        <p>${catatan.description}</p>
        <button class="deleteBtn">Hapus</button>
      `;
        noteList.appendChild(noteDiv);

        const deleteBtn = noteDiv.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', function () {
            notesData = notesData.filter(function (note) {
                return note.title !== title || note.description !== description;
            });
            localStorage.setItem('notes', JSON.stringify(notesData));
            noteDiv.remove();
        });
    }
}
customElements.define('note-list', noteList);