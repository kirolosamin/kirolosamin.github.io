// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Video autoplay
window.addEventListener('load', () => {
    const video = document.getElementById('heroVideo');
    if (video) {
        video.play().catch(e => console.log('Video autoplay failed:', e));
    }
});

// Parallax effect
const parallaxBg = document.querySelector('.parallax-bg');
if (parallaxBg) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 20;
        const y = (e.clientY / window.innerHeight) * 20;
        parallaxBg.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Progress Bar
window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
});

// Scroll Reveal
const revealElements = document.querySelectorAll('section, .card, .arsenal-card, .experience-card');
revealElements.forEach(el => {
    el.classList.add('reveal');
});
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });
revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Logo click - scroll to top
const logoLink = document.getElementById('logoLink');
if (logoLink) {
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Also make the whole logo-wrapper clickable
const logoWrapper = document.querySelector('.logo-wrapper');
if (logoWrapper) {
    logoWrapper.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    window.addEventListener('load', () => {
    const video = document.getElementById('heroVideo');
    if (video) {
        video.loop = true;
        video.play().catch(e => console.log('Video autoplay failed:', e));
        
        // لو الفيديو وقف لأي سبب، ارجع شغله تاني
        video.addEventListener('ended', () => {
            video.play();
        });
    }
});
}
