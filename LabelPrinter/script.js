const printBtn = document.querySelector('.print-btn');
const instructions = document.querySelector('.instructions')
const alertMsg = document.querySelector('.alert-message')
const fileInput = document.querySelector('.pdf-input');

printBtn.addEventListener('click', e => printPDF());

function printPDF() {
    let file = fileInput.files[0];
    if (file) {
        let fileURL = URL.createObjectURL(file);
        printJS(fileURL);
    } else {
        alert('Seleziona un PDF prima di stampare');
    }
}

// Aggiorna le istruzioni appena il file viene caricato 
fileInput.addEventListener('change', () => {
    if (fileInput.files[0]) {
        instructions.textContent = 'Premi ora "Stampa PDF" per procedere.';
        instructions.classList.replace ('alert-secondary','alert-success');
        alertMsg.classList.remove("visually-hidden");

    };
});

