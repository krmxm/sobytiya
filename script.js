const btns = document.querySelectorAll('button');

// btn.onclick = function() {
//     alert('click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

let i = 0;
const deleteElement  = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btns.removeEventListener('click', deleteElement);
    }
};

// btns.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});


