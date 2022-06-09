window.addEventListener('DOMContentLoaded', () => {
    let checkValidInput = (str) => {
        return str != ''
    }
    let submit = document.getElementById('Submit');
    let commentsuc = document.getElementById('commentsuc');
    let commentform = document.getElementById('Commentform');
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        if (commentform.style.display != 'none') {
            let commenterror = document.getElementById('comment-error-span');
            commenterror.innerHTML = '';
            let comment = document.getElementById('comment').value;
            if (!checkValidInput(comment)) {
                commenterror.innerHTML = 'Bạn chưa nhận xét';
                return;
            }
            commentsuc.style.display = 'block';
            commentform.style.display = 'none';
            let img = document.getElementById('image').value;
            let feedback = document.getElementById('feedback');
            let imgrv = document.getElementById('imgrv');
            feedback.innerHTML = comment;
            imgrv.src = img;
        }

    })
    let mode = document.querySelectorAll('.mode');
    mode.forEach((icon) => {
        icon.addEventListener('click', () => {
            let index = icon.dataset.info;
            let sp = document.getElementById(`sp-${index}`);
            let ic = document.getElementById(`ic-${index}`);
            if (sp.style.display == 'none') {
                sp.style.display = 'block';
                ic.classList.add('fa-angle-up');
                ic.classList.remove('fa-angle-down');
            } else {
                sp.style.display = 'none';
                ic.classList.add('fa-angle-down');
                ic.classList.remove('fa-angle-up');
            }
        });
    })
})