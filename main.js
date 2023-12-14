import './style.css'

document.addEventListener('DOMContentLoaded', function () {
    const button1 = document.querySelector('.button1');
    const firstToast = document.querySelector('.toast-container .toast:first-child');
    const color1 = '#1fc2ae';
    const color2 = 'yellow';
    let currentColor = color1;
    button1.addEventListener('click', function () {
        if (currentColor === color1) {
            firstToast.style.background = color2;
            currentColor = color2;
        } else {
            firstToast.style.background = color1;
            currentColor = color1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const firstToast = document.querySelector('.toast-container .toast:first-child');
    firstToast.addEventListener('mouseover', function () {
        firstToast.style.background = 'red';
    });
    firstToast.addEventListener('mouseout', function () {
        firstToast.style.background = '#1fc2ae';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const button2 = document.querySelector('.button2');
    const secondToast = document.querySelector('.toast-container .toast:nth-child(2)');
    const text1 = 'FAIL';
    const text2 = 'SUCCESS';
    let currentText = text1;
    button2.addEventListener('click', function () {
        if (currentText === text1) {
            secondToast.textContent = text2;
            currentText = text2;
        } else {
            secondToast.textContent = text1;
            currentText = text1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const button3 = document.querySelector('.button3');
    const thirdToast = document.querySelector('.toast-container .toast:nth-child(3)');
    button3.addEventListener('click', function () {
        thirdToast.style.background = 'transparent';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const button4 = document.querySelector('.button4');
    const fourthToast = document.querySelector('.toast-container .toast:nth-child(4)');
    const color1 = '#1fc2ae';
    const color2 = 'transparent';
    let currentColor = color1;
    button4.addEventListener('click', function () {
        if (currentColor === color1) {
            fourthToast.style.background = color2;
            currentColor = color2;
        } else {
            fourthToast.style.background = color1;
            currentColor = color1;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const button5 = document.querySelector('.button5');
    const fifthToast = document.querySelector('.toast-container .toast:nth-child(5)');
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00'];
    button5.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * colors.length);
        fifthToast.style.background = colors[randomIndex];
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const fifthToast = document.querySelector('.toast-container .toast:nth-child(5)');
    let count = 0;
    let interval;
    fifthToast.addEventListener('mouseover', function () {
        interval = setInterval(function () {
            count++;
            fifthToast.textContent = count;
            if (count === 10) {
                clearInterval(interval);
            }
        }, 1000)
    });
    fifthToast.addEventListener('mouseout', function () {
        count = 0;
        clearInterval(interval);
        fifthToast.textContent = count;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const button6 = document.querySelector('.button6');
    const sixthToast = document.querySelector('.toast-container .toast:nth-child(6)');
    let count = 0;
    let interval;
    button6.addEventListener('click', function () {
        interval = setInterval(function () {
            count++;
            sixthToast.textContent = count;
            if (count === 10) {
                clearInterval(interval);
            }
        }, 3000);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const button7 = document.querySelector('.button7');
    const toastContainer = document.querySelector('.toast-container');
    button7.addEventListener('click', function () {
        const toasts = toastContainer.querySelectorAll('.toast');
        for (const toast of toasts) {
            toast.style.background = '#18D5E1';
        }
        document.body.style.background = '#000000';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const label = document.getElementById('label');
    input.addEventListener('input', function () {
        label.textContent = input.value;
    });
});