let images = [
    [
        'https://drive.google.com/uc?export=view&id=1WbXGofpKupLKFPGNIk2WGyMk1Kcpljfg',
        'https://drive.google.com/uc?export=view&id=1z8GL__SsNT2JWkQxYLwD6s2uK3ZDKV49',
        'https://drive.google.com/uc?export=view&id=13nLQELpJ31oHuCXo-oK9a8X2rVnbGr-n',
        'https://drive.google.com/uc?export=view&id=1ugvwjA4ylJUerq6hviM20UkvZMOcPCeg',
        'https://drive.google.com/uc?export=view&id=14xiLkiAGZU5QnBW1b3H5w1ggfhehMISf',
    ],
    [
        'https://drive.google.com/uc?export=view&id=19EYoqQdxlu4Ju3rqWe5UbTCLSKdVwoMk',
        'https://drive.google.com/uc?export=view&id=1dcFxlffHrQCOu_Jw72IWU1OOtWOqMuKk',
        'https://drive.google.com/uc?export=view&id=1Otl-n8lMhs5cA-S8ocWvOufHIN5Xt9el',
        'https://drive.google.com/uc?export=view&id=1t3irUSVs2LExsLCyGNtrf1iG7A_4dR9U',
        'https://drive.google.com/uc?export=view&id=151xFEPoV7X1Jj_pShYEZND_M0RB-hkfE',
    ],
    [
        'https://drive.google.com/uc?export=view&id=1sGVPS6iMYuXtZWfSNe759Ky9IWRPGj1i',
        'https://drive.google.com/uc?export=view&id=1LJEuYwR07HAvUZiczCXvbdLg6NcqQXpD',
        'https://drive.google.com/uc?export=view&id=1JL60oi1O19B6f4-8A-JEpy2wgOAJi19B',
        'https://drive.google.com/uc?export=view&id=1TkMB4FQqe6crpIELBMSB7I_DQG7ivWRi',
        'https://drive.google.com/uc?export=view&id=1zGWwQBVDEWSrWYo5OG1KuVY4rtyCgT5h',
    ],
    [
        'https://drive.google.com/uc?export=view&id=1pDHGRv4XU5Ol5gOz-R76JnEP7cWx309K',
        'https://drive.google.com/uc?export=view&id=1TJ453a0WRyb8MeDnmrQqXDxEOy24G2ye',
        'https://drive.google.com/uc?export=view&id=1giFMcTBpDOTy4clP7p1ngnc41TJgRzUI',
        'https://drive.google.com/uc?export=view&id=13B9fEt4CYcRYOKZFq26CN1mq4v5Dxer-',
        'https://drive.google.com/uc?export=view&id=192bvfzV3hMrV6VoK_fSpK9kaNTvzVxlh',
    ],
    [
        'https://drive.google.com/uc?export=view&id=1tODkXzJVsoqJvuwJugLqhzd8sDq7Jvv0',
        'https://drive.google.com/uc?export=view&id=1Vb3Nr9cFUS6n-JSza3ej58NsHtVJScgB',
        'https://drive.google.com/uc?export=view&id=1TbJaDMuZseQ4KJ_lHsd_G1UQjXsnPG_R',
        'https://drive.google.com/uc?export=view&id=1HpIUy9W6gfdLzDRM1lz3FtLsyXP0Xl3A',
        'https://drive.google.com/uc?export=view&id=1UG51wSHeEDykycItlaE16TtXCTomdMfk',
    ]
]
window.addEventListener('DOMContentLoaded', function() {
    let tabs = document.getElementsByClassName('tab');
    let activeTab = tabs[0];
    let activePanel;
    let tabIndex = 0;
    let previewIndex = 0;
    let leftCaret = document.getElementById('left-caret')
    let rightCaret = document.getElementById('right-caret')
    let onCaretClick = (e) => {
        previewIndex += Number(e.target.dataset.forward)
        if (previewIndex >= images[tabIndex].length) {
            previewIndex = 0;
        } else if (previewIndex <= -1) {
            previewIndex = images[tabIndex].length - 1;
        }
        forward();
    }
    let forward = () => {
        let previewStack = document.getElementById(`preview-stack-${tabIndex}`);
        let previewImage = document.getElementById(`preview-img-${tabIndex}`);
        previewStack.style.transform = `translateX(${40 - previewIndex * 20}%)`;
        previewImage.src = images[tabIndex][previewIndex]
    }
    leftCaret.addEventListener('click', onCaretClick)
    rightCaret.addEventListener('click', onCaretClick)
    let changeTab = (e) => {
        if (activeTab == e.target) return;
        if (activeTab) {
            activeTab.classList.remove('active')
        }
        activeTab = e.target;
        activeTab.classList.add('active');
        loadTab(activeTab.dataset.tabIndex);
    }
    for (let tab of tabs) {
        tab.addEventListener('click', changeTab)
    }
    let onImageClick = (e) => {
        if (previewIndex != e.target.dataset.imageIndex) {
            previewIndex = e.target.dataset.imageIndex;

            forward();
        }
    }
    let loadTab = (index) => {
        let tab = document.getElementById(`tab-${index}`);
        let currentTab = document.getElementById(`tab-${tabIndex}`);
        let previewStack = document.getElementById(`preview-stack-${index}`);
        let previewImage = document.getElementById(`preview-img-${index}`);
        previewImage.src = images[index][0];
        previewStack.innerHTML = "";
        previewStack.style.transform = "translateX(40%)";
        for (let i = 0; i < images[index].length; i++) {
            let div = document.createElement('div');
            div.classList.add('preview-item');
            let img = document.createElement('img');
            img.src = images[index][i];
            img.classList.add('item-img')
            img.dataset.imageIndex = i;
            img.addEventListener('click', onImageClick);

            div.appendChild(img);
            previewStack.appendChild(div);
        }
        if (currentTab != tab) {
            currentTab.style.display = 'none';
        }
        tab.style.display = 'block';
        tabIndex = index;
        previewIndex = 0;
    }
    loadTab(0);
})