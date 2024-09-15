const animatedElements = document.querySelectorAll(".animated");
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            debugger;
            const delay = entry.target.dataset.delay;
            entry.target.classList.add("triggered");
            entry.target.style.transitionDelay = `${delay}ms`;

            // To prevent the event to be triggered again
            observer.unobserve(entry.target);
        }
    });
}, {
    root: null,
    threshold: 0.1
});

for (let i = 0; i < animatedElements.length; i++) {
    const element = animatedElements[i];
    observer.observe(element);
}

const heroTechnos = document.querySelectorAll(".hero-techno");
for (let i = 0; i < heroTechnos.length; i++) {
    const element = heroTechnos[i];
    setTimeout(() => {
        element.classList.add("triggered");
    }, 400);
}
