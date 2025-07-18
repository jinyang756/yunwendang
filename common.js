/* common.js - 九州集团子域通用脚本 */

document.addEventListener('DOMContentLoaded', function() {
    // 通用淡入动画逻辑
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));

    // 您可以在这里添加其他所有子域通用的 JavaScript 逻辑
    // 例如：统一的顶部导航栏下拉菜单交互、通用表单提交处理等
});