const color = "#DEB992";
var maxParticles = 10;
if (window.innerWidth > 992) {
    var maxParticles = 20;
}

// ParticlesJS Config.
particlesJS("particles-js", {
    particles: {
        number: {
            value: maxParticles,
            density: {
                enable: false,
                value_area: maxParticles * 10 * 2,
            },
        },
        color: {
            value: color,
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#f1f2f4",
            },
            polygon: {
                nb_sides: 4,
            },
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 8,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
            distance: 1000,
            color: color,
            opacity: 0.4,
            width: 2,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble",
            },
            onclick: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5,
                },
            },
            bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});
