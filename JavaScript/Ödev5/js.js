// Öğrenci bilgilerini saklamak için bir dizi oluşturun
let students = [];

// Formu seçin
const form = document.getElementById('studentForm');

// Öğrenci listesini seçin
const studentList = document.getElementById('studentList');

// Form gönderildiğinde çalışacak işlevi tanımlayın
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Formun sayfayı yeniden yüklemesini engelle

    // Formdan öğrenci bilgilerini al
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const grade = document.getElementById('grade').value;

    // Yeni bir öğrenci nesnesi oluştur
    const student = {
        name: name,
        surname: surname,
        grade: parseFloat(grade)
    };

    
    students.push(student);

    
    form.reset();

    
    displayStudents();
});


function displayStudents() {
    
    studentList.innerHTML = '';

   
    students.forEach(function (student, index) {
        const li = document.createElement('li');
        li.innerHTML = `Adı: ${student.name}, Soyadı: ${student.surname}, Notu: ${student.grade}`;
        studentList.appendChild(li);

       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.addEventListener('click', function () {
            deleteStudent(index);
        });
        li.appendChild(deleteButton);
    });
}


function deleteStudent(index) {
    students.splice(index, 1); 
    displayStudents(); 
}


displayStudents();
