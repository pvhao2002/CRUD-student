window.onload = () => {
    const tableBody = document.getElementById('table-body');
    const students = JSON.parse(localStorage.getItem('students')) || [];
    for (let i = 0; i < students.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${students[i]['id']}</td>
        <td>${students[i]['name']}</td>
        <td>${students[i]['email']}</td>
        <td>${students[i]['gpa']}</td>
        <td style="display: flex; justify-content: space-evenly; border: none;">
            <i class="fas fa-edit" onclick='editStudent(this)' style="color:gray"></i>
            <i class="fas fa-trash-alt" onclick='removeStudent(this)' style="color: rgb(235, 63, 63)"></i>
        </td>
    `;
        tableBody.appendChild(row);
    }
}

function editStudent(td) {
    const row = td.parentElement.parentElement
    localStorage.setItem('selectedRow', row);
    const data = {
        id: row.cells[0].innerHTML,
        name: row.cells[1].innerHTML,
        email: row.cells[2].innerHTML,
        gpa: row.cells[3].innerHTML
    }
    localStorage.setItem('student', JSON.stringify(data));
    location.href = "./edit-student.html"
}

function removeStudent(td) {
    if (confirm(`Bạn có muốn xóa sinh viên này không ?`)) {
        row = td.parentElement.parentElement;
        const students = JSON.parse(localStorage.getItem('students')) || [];
        const index = students.findIndex(e => e.id === row.cells[0].innerHTML*1)
        students.splice(index, 1)
        localStorage.setItem('students', JSON.stringify(students));
        document.getElementById("table-body").removeChild(row)
    }
}