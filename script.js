const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav-bar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}


async function subscribe() {
    const email = document.getElementById('newsletter-email').value;
    
    const response = await fetch('http://localhost:3000/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });
    
    if (response.ok) {
        alert('Subscription successful');
    } else {
        alert('Subscription failed');
    }
}


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


