// Import Highway
import Highway from "@dogstudio/highway";

// GSAP Library
import gsap from "gsap";

// Overlay
class Overlay extends Highway.Transition {
    out({ done }) {
        // Animation
        const tl = gsap.timeline();
        tl.to(".screen__blue", { duration: 0.4, y: "-100%" });
        tl.to(".screen__brown", { duration: 0.4, y: "-100%", delay: "-0.25", onComplete: done });
    }

    in({ from, done }) {
        // Reset Scroll
        window.scrollTo(0, 0);

        // Remove Old View
        from.remove();

        // Animation
        const tl = gsap.timeline();
        tl.to(".screen__blue", { duration: 0.4, y: "-200%", delay: 0.2 });
        tl.to(".screen__brown", { duration: 0.4, y: "-200%", delay: "-0.25", onComplete: done });
        tl.set(".screen__blue", { y: "0" });
        tl.set(".screen__brown", { y: "0" });
    }
}

export default Overlay;
