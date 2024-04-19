const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const addNoteBtn = document.getElementById('addNoteBtn');
const noteTitleInput = document.getElementById('noteTitle');
const noteDescriptionInput = document.getElementById('noteDescription');
const noteList = document.getElementById('noteList');
import { catatan } from "./data/Notes.js";

// Variabel untuk menyimpan data catatan
let notesData = [];

// Memeriksa apakah ada catatan yang tersimpan di localStorage saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
        notesData = notes; // Mengisi data catatan dari localStorage ke dalam variabel notesData
        notes.forEach(function (note) {
            addNoteToDOM(note.title, note.description);
        });
    }
});

function openPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
    clearInputs(); // Membersihkan input setelah menutup popup
}

function showAlert(message) {
    const customAlert = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    const closeAlert = document.querySelector('.close-alert');

    alertMessage.textContent = message;
    customAlert.style.display = 'block';

    closeAlert.addEventListener('click', function () {
        customAlert.style.display = 'none';
    });
}


function clearInputs() {
    noteTitleInput.value = '';
    noteDescriptionInput.value = '';
}

function addNote() {
    const title = noteTitleInput.value.trim();
    const description = noteDescriptionInput.value.trim();

    if (title && description) {
        // Menambahkan catatan ke dalam variabel notesData
        notesData.push({ title, description });
        // Menyimpan catatan ke dalam localStorage
        localStorage.setItem('notes', JSON.stringify(notesData));

        // Menambahkan catatan ke dalam tampilan
        addNoteToDOM(title, description);

        // Bersihkan input dan tutup popup
        clearInputs();
        closePopup();
    } else {
        alert('Harap isi judul dan deskripsi catatan.');
    }
}


function addNote() {
    const title = noteTitleInput.value.trim();
    const description = noteDescriptionInput.value.trim();

    if (title && description) {
        notesData.push({ title, description });
        localStorage.setItem('notes', JSON.stringify(notesData));
        addNoteToDOM(title, description);
        clearInputs();
        closePopup();
    } else {
        showAlert('Harap isi judul dan deskripsi catatan.');
    }
}


openPopupBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);
addNoteBtn.addEventListener('click', addNote);

window.addEventListener('click', function (event) {
    if (event.target === popup) {
        closePopup();
    }
});
