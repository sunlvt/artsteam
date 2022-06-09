window.addEventListener('DOMContentLoaded', () => {
    let reply = (e) => {
        let index = e.target.dataset.rep;
        let d;
        for (let i = 1; i <= 4; i++) {
            if (i == index) {
                d = document.getElementById(`d-${i}`);
                if (d.style.display == 'none') {
                    d.style.display = 'block';
                } else {
                    d.style.display = 'none';
                }
            } else {
                d = document.getElementById(`d-${i}`);
                d.style.display = 'none';
            }
        }
    }
    let quests = document.getElementsByClassName('q');
    for (let quest of quests) {
        quest.addEventListener('click', reply);
    }
})