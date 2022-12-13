const ratio = .5
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .5
}

const handleIntersect = function (entries, observe) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('revealVisible')
            observe.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r)
})