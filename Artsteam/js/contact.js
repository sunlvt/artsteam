let checkValidInput = (str) => {
    return str != ''
}
let checkValidTel = (tel) => {
    if (tel.length != 10)
        return false;
    if (tel.indexOf(0) != 0)
        return false;
    return true;
}
let checkValidEmail = (e) => {
    if (e.indexOf("@") < 1)
        return false;
    if (e.indexOf(".", e.indexOf("@")) < 0)
        return false;
    return true;
}
let submitYC = document.getElementById('submit-Yeucau');
let contactcard = document.getElementById('contact-card');
let submitsuc = document.getElementById('submitsuccess');
submitYC.addEventListener('click', function(e) {

    e.preventDefault()
    if (contactcard.style.display != 'none') {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let sdt = document.getElementById('sdt').value;
        let fb = document.getElementById('fb').value;
        let zalo = document.getElementById('zalo').value;
        let detail = document.getElementById('detail').value;

        let nameerror = document.getElementById('name-error-span');
        nameerror.innerHTML = '';
        if (!checkValidInput(name)) {
            nameerror.innerHTML = 'TTên không được để trống';
            return
        }
        let contacterror = document.getElementById('contact-error-span');
        contacterror.innerHTML = '';
        if (!checkValidInput(email) && !checkValidInput(sdt) &&
            !checkValidInput(fb) && !checkValidInput(zalo)) {
            contacterror.innerHTML = 'Vui lòng điền ít nhất 1 cách để liên hệ với bạn';
            return
        }

        let sdterror = document.getElementById('sdt-error-span');
        sdterror.innerHTML = '';
        if (checkValidInput(sdt)) {
            if (!checkValidTel(sdt)) {
                sdterror.innerHTML = 'SĐT không hợp lệ';
                return;
            }
        }
        let zaloerror = document.getElementById('zalo-error-span');
        zaloerror.innerHTML = '';
        if (checkValidInput(zalo)) {
            if (!checkValidTel(zalo)) {
                zaloerror.innerHTML = 'SĐT không hợp lệ';
                return;
            }
        }
        let emailerror = document.getElementById('email-error-span');
        emailerror.innerHTML = '';
        if (checkValidInput(email)) {
            if (!checkValidEmail(email)) {
                emailerror.innerHTML = 'Email không hợp lệ';
                return;
            }
        }
        contactcard.style.display = 'none';
        submitsuc.style.display = 'block';
        let namesuc = document.getElementById('namesuc');
        let emailsuc = document.getElementById('emailsuc');
        let sdtsuc = document.getElementById('sdtsuc');
        let fbsuc = document.getElementById('fbsuc');
        let zalosuc = document.getElementById('zalosuc');
        let detailsuc = document.getElementById('detailsuc');
        namesuc.innerHTML = 'Tên: ' + name;
        if (checkValidInput(email))
            emailsuc.innerHTML = 'Email: ' + email;
        if (checkValidInput(sdt))
            sdtsuc.innerHTML = 'SĐT: ' + sdt;
        if (checkValidInput(fb))
            fbsuc.innerHTML = 'Facebook: ' + fb;
        if (checkValidInput(zalo))
            zalosuc.innerHTML = 'Zalo: ' + zalo;
        if (checkValidInput(detail))
            detailsuc.innerHTML = 'detail: ' + detail;
        submitYC.innerHTML = 'Sửa đổi';
    } else {
        contactcard.style.display = 'block';
        submitsuc.style.display = 'none';
        submitYC.innerHTML = 'Yêu cầu';
    }
})