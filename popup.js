const groupInput = document.querySelector('#group');
const projectInput = document.getElementById('project'); 
const labInput = document.getElementById('lab'); 
const compInput = document.getElementById('comp'); 
const langInput = document.getElementById('lang'); 
const lecturesInput = document.getElementById('lectures');

window.onload = () => {
    chrome.storage.local.get(['group', 'projectGroup', 'labGroup', 'compGroup', 'langGroup', 'hideLectures'], (result) => {
        groupInput.value = result.group;
        projectInput.value = result.projectGroup;
        labInput.value = result.labGroup;
        compInput.value = result.compGroup;
        langInput.value = result.langGroup;
        lecturesInput.checked = result.hideLectures;
    });
}
let fields=[groupInput, projectInput, labInput, compInput, langInput];
fields.forEach(field => {
    field.addEventListener('onkeyup', () => {
        field.value = field.value.toUpperCase();
        console.log(field.value);
    })
});

document.querySelector('#save-button').addEventListener('click', () => {
    fields=[projectInput, labInput, compInput, langInput];
    let checkFlag=false;
    if (groupInput.value==="" || groupInput.value.length!=4) {
        groupInput.style.border = '1px solid red';
    } else {
        groupInput.style.border = '1px solid #ccc';
    }

    for(let i=0; i<fields.length; i++){
        if (fields[i].value.length != 3){
            checkFlag=true;
            console.log('error'+fields[i]); 
            fields[i].style.border = '1px solid red';
        } else {
            fields[i].style.border = '1px #ccc solid';
        }
        if(!checkFlag){
            chrome.storage.local.set({
                group: groupInput.value.toUpperCase(),
                projectGroup: projectInput.value.toUpperCase(),
                labGroup: labInput.value.toUpperCase(),
                compGroup: compInput.value.toUpperCase(),
                langGroup: langInput.value.toUpperCase(),
                hideLectures: lecturesInput.checked,
            });
        }
    }
})