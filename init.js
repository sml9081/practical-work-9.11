
window.onload = function() {

document.getElementById('genData').addEventListener('click', () =>

{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
})};


document.getElementById('resetData').addEventListener('click', () => {

   document.getElementById('firstNameOutput').innerText = '';
   document.getElementById('surnameOutput').innerText = '';
   document.getElementById('middleNameOutput').innerText = '';
   document.getElementById('genderOutput').innerText = '';
   document.getElementById('birthDateOutput').innerText = '';
   document.getElementById('birthYearOutput').innerText = '';
   document.getElementById('professionOutput').innerText = '';
})