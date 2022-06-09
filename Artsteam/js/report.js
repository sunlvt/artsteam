let submitButton = document.getElementById('reportSubmit');
let reportForm = document.getElementById('reportForm');
let reportFormDiv = document.getElementById('report-form-div');
let reportSuccessDiv = document.getElementById('report-success-div');

submitButton.addEventListener('click', function(e) {
    e.preventDefault()
    let title = document.getElementById('title').value;
    let detail = document.getElementById('detail').value;
    let detailerror = document.getElementById('detail-error-span');
    let titleerror = document.getElementById('title-error-span');
    titleerror.innerHTML = '';
    detailerror.innerHTML = '';
    if (!checkValidInput(title)) {
        titleerror.innerHTML = 'Bạn vui vòng hay miêu tả vấn đề';
        return
    }

    if (!checkValidInput(detail)) {
        detailerror.innerHTML = 'Bạn vui vòng hay miêu tả chi tiet';
        return
    }
    // hide form
    reportFormDiv.style.display = 'none';

    // show success div
    reportSuccessDiv.style.display = 'block';
})
let checkValidInput = (str) => {
    return str != ''
}