document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        void loadDocument(document.getElementById('search').value);
    }
});

let noticeVisible = false;
async function showWarning(message, duration) {
    const box = document.getElementById('notice');
    box.querySelector('p').textContent = message;

    if (noticeVisible) {
        box.style.background = 'rgba(255, 80, 80, 0.7)'
        setTimeout(() => {
            box.style.background = 'rgba(255, 80, 80, 0.35)';
        }, 40)
    }

    if (!noticeVisible)  {
        box.style.display = 'block';
        noticeVisible = true;

        setTimeout(() => {
            box.style.display = 'none';
            noticeVisible = false;
        }, duration);
    }
}

window.onload = function () {
    document.getElementById('search').value = '';
};