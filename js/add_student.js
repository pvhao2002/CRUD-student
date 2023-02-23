try {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const students = JSON.parse(localStorage.getItem('students')) || [];
        // Create a new JavaScript object with the form data
        const formData = new FormData(event.target);
        const studentId = formData.get('studentID');
        const isFound = students.find(e => e.id === studentId);
        console.log(isFound);
        if (isFound) {
            document.querySelector('#message').innerHTML = 'Student ID is existed';
            document.querySelector('#message').classList.add('error');
        } else {
            const data = {
                id: formData.get('studentID'),
                name: formData.get('fullName'),
                email: formData.get('email'),
                gpa: formData.get('gpa')
            }
            // localStorage.setItem('numberOfStudent', numberStudent)
            // Store data in local storage
            students.push(data);
            localStorage.setItem('students', JSON.stringify(students));
            form.reset()
            document.querySelector('#message').innerHTML = 'Student added successfully';
            document.querySelector('#message').classList.add('success');
            $(document).ready(function () {
                $('form:first *:input[type!=hidden]:first').focus();
            });
        }
    });

} catch (error) {
    console.error(error);
    document.querySelector('#message').innerHTML = 'Error adding student';
    document.querySelector('#message').classList.add('error');
}

