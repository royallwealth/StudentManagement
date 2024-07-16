'use strict';

//Student Management//

const students = [];

const input = (promptMessage) => window.prompt(promptMessage);

function addStudent() {
    const name = input(`Enter student's name:`);
    const age = Number(input(`Enter student's age:`));
    const grade = Number(input(`Enter student's grade:`));

    const student = {
        name: name,
        age: age,
        grade: grade,
        id: students.length ? students[students.length - 1].id + 1 : 1,
        details: function () {
            return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
        }
    };

    students.push(student);
    console.log(`Student added: ${student.details()}`);
}

function viewStudent() {
    const id = Number(input("Enter student's ID to view details:"));
    const student = students.find(s => s.id === id);

    if (student) {
        console.log(student.details());
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

function updateStudent() {
    const id = Number(input("Enter student's ID to update details:"));
    const student = students.find(s => s.id === id);

    if (student) {
        student.name = input("Enter new name:") || student.name;
        student.age = Number(input("Enter new age:")) || student.age;
        student.grade = Number(input("Enter new grade:")) || student.grade;

        console.log(`Student updated: ${student.details()}`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

function displayGrades() {
    students.forEach(student => {
        const grade = student.grade;
        const gradeLetter = grade >= 90 ? 'A' :
                            grade >= 80 ? 'B' :
                            grade >= 70 ? 'C' :
                            grade >= 60 ? 'D' : 'F';

        console.log(`Student: ${student.name}, Grade: ${grade}, Letter Grade: ${gradeLetter}`);
    });
}

function displayStatistics() {
    const totalStudents = students.length;
    const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / totalStudents;

    console.log(`Total Students: ${totalStudents}`);
    console.log(`Average Grade: ${averageGrade.toFixed(2)}`);
}

function mainMenu() {
    while (true) {
        const choice = input(`
            Student Management System
            1. Add Student
            2. View Student
            3. Update Student
            4. Display Grades
            5. Display Statistics
            6. Exit
            Enter your choice (1-6):
        `);

        switch (choice) {
            case '1':
                addStudent();
                break;
            case '2':
                viewStudent();
                break;
            case '3':
                updateStudent();
                break;
            case '4':
                displayGrades();
                break;
            case '5':
                displayStatistics();
                break;
            case '6':
                console.log('Exiting...');
                return;
            default:
                console.log('Invalid choice. Please enter a number between 1 and 6.');
        }
    }
}

mainMenu();
