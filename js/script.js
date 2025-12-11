// Service LP JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // アニメーション用のIntersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // サービスボックスにアニメーションを適用
    document.querySelectorAll('.service-box').forEach(box => {
        observer.observe(box);
    });
});
