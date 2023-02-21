let idStudent = null
const inputName = document.getElementsByTagName("input")[0]
const inputEmail = document.getElementsByTagName("input")[1]
const inputGpa = document.getElementsByTagName("input")[2]

window.onload = () => {
    const student = JSON.parse(localStorage.getItem('student')) || {};
    idStudent = student['id']
    inputName.value = student['name']
    inputEmail.value = student['email']
    inputGpa.value = student['gpa']
}
try {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let students = JSON.parse(localStorage.getItem('students')) || [];
        for (let item of students) {
            if (item['id'] === idStudent * 1) {
                item['name'] = inputName.value
                item['email'] = inputEmail.value
                item['gpa'] = inputGpa.value
                localStorage.setItem('students', JSON.stringify(students));
                break
            }
        }
        location.href = "./index.html"
    });
} catch (error) {
    console.error(error);
    document.querySelector('#message').innerHTML = 'Error adding student';
    document.querySelector('#message').classList.add('error');
}
