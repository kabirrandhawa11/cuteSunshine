// ============================================================
// GSAP SETUP
// ============================================================
gsap.registerPlugin(ScrollTrigger);

// ============================================================
// HERO ANIMATIONS
// ============================================================
function initHeroAnimations() {
    const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

    timeline
        .to(".hero-title", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: 0.3
        })
        .to(".hero-subtitle", {
            opacity: 0.8,
            y: 0,
            duration: 1,
        }, "-=0.6");
}

// ============================================================
// FADE UP ANIMATION (Reusable)
// ============================================================
function animateFadeUp(selector, options = {}) {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((element) => {
        gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: options.duration || 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: options.start || "top 85%",
                toggleActions: "play none none none"
            }
        });
    });
}

// ============================================================
// IMAGE ANIMATIONS (Scale + Fade)
// ============================================================
function animateImages() {
    const photoCards = gsap.utils.toArray(".photo-card");

    photoCards.forEach((card, index) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            delay: index * 0.1
        });

        // Subtle scale on image wrapper
        gsap.fromTo(card.querySelector(".photo-wrapper"),
            { scale: 1.1 },
            {
                scale: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });
}

// ============================================================
// TIMELINE ANIMATIONS (Staggered Reveal)
// ============================================================
function animateTimeline() {
    const timelineItems = gsap.utils.toArray(".timeline-item");

    timelineItems.forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            delay: index * 0.15
        });
    });
}

// ============================================================
// LETTER SECTION ANIMATION
// ============================================================
function animateLetter() {
    gsap.to(".letter-text", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".letter-text",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

// ============================================================
// FINAL CTA ANIMATION
// ============================================================
function animateCTA() {
    gsap.to(".cta-content", {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".cta-content",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

// ============================================================
// SMOOTH SCROLL FOR CTA BUTTON
// ============================================================
function initSmoothScroll() {
    document.querySelector(".cta-button").addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ============================================================
// INITIALIZE ALL ANIMATIONS
// ============================================================
function init() {
    // Hero loads immediately
    initHeroAnimations();

    // Scroll-triggered animations
    animateImages();
    animateLetter();
    animateTimeline();
    animateCTA();

    // Smooth scroll behavior
    initSmoothScroll();
}

// ============================================================
// RUN ON PAGE LOAD
// ============================================================
window.addEventListener("load", init);
