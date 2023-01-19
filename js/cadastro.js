var selectedRow = null;

function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container2 = document.querySelector(".container2");
    const main = document.querySelector(".main");
    container2.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
};

function clearFields() {
    document.querySelector("#nome").value = "";
    document.querySelector("#rgm").value = "";
    document.querySelector("#turma").value = "";
    document.querySelector("#nota1").value = "";
    document.querySelector("#nota2").value = "";
};

document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.querySelector("#nome").value;
    const rgm = document.querySelector("#rgm").value;
    const turma = document.querySelector("#turma").value;
    const nota1 = document.querySelector("#nota1").value;
    const nota2 = document.querySelector("#nota2").value;

    if (selectedRow == null) {
        const list = document.querySelector("#student-list");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${nome}</td>
            <td>${rgm}</td>
            <td>${turma}</td>
            <td>${nota1}</td>
            <td>${nota2}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
            <a href="#" class="btn btn-danger btn-sm delete">Excluir</a>
        `;
        list.appendChild(row);
        selectedRow = null;
        showAlert("Aluno Adicionado", "success");
    }
    else {
        selectedRow.children[0].textContent = nome;
        selectedRow.children[1].textContent = rgm;
        selectedRow.children[2].textContent = turma;
        selectedRow.children[3].textContent = nota1;
        selectedRow.children[4].textContent = nota2;
        selectedRow = null;
        showAlert("Aluno Editado", "info");
    }
    clearFields();
});

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#nome").value = selectedRow.children[0].textContent;
        document.querySelector("#rgm").value = selectedRow.children[1].textContent;
        document.querySelector("#turma").value = selectedRow.children[2].textContent;
        document.querySelector("#nota1").value = selectedRow.children[3].textContent;
        document.querySelector("#nota2").value = selectedRow.children[4].textContent;
    }
});

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Aluno Excluído", "danger");
    }
});