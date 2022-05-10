const projectInput = document.getElementById('project'); 
const labInput = document.getElementById('lab'); 
const compInput = document.getElementById('comp'); 
const langInput = document.getElementById('lang'); 
const lecturesInput = document.getElementById('lectures');

document.querySelector('#save-button').addEventListener('click', () => {
    fields=[projectInput, labInput, compInput, langInput];
    for(let i=0; i<fields.length; i++){
        if (fields[i].value.length != 3){
            console.log('error'+fields[i]);
            fields[i].style.border = '1px solid red';
            document.querySelector('#error').innerHTML = 'Please fill in all fields';
        } else {
            fields[i].style.border = '1px gray solid';
            document.querySelector('#error').innerHTML = '';
        }
    }
})