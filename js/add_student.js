try {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Create a new JavaScript object with the form data
        const formData = new FormData(event.target);
        let numberStudent = localStorage.getItem('numberOfStudent') || 0;
        const data = {
            id: ++numberStudent,
            name: formData.get('fullName'),
            email: formData.get('email'),
            gpa: formData.get('gpa')
        }
        localStorage.setItem('numberOfStudent', numberStudent)
        // Store data in local storage
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(data);
        localStorage.setItem('students', JSON.stringify(students));
        form.reset()
        document.querySelector('#message').innerHTML = 'Student added successfully';
        document.querySelector('#message').classList.add('success');
        $(document).ready(function () {
            $('form:first *:input[type!=hidden]:first').focus();
        });
    });

} catch (error) {
    console.error(error);
    document.querySelector('#message').innerHTML = 'Error adding student';
    document.querySelector('#message').classList.add('error');
}

