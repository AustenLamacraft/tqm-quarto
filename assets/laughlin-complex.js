// Simulation of Laughlin state with a non-potential drift contribution
// All sketches in instance mode, to keep variables out of global scope
// https://p5js.org/examples/instance-mode-instantiation.html

const width = document.getElementById("laughlin").offsetWidth;

export default function laughlin(p) {

    const numParticles = 512;

    const dt = 0.2
    const B = 0.07

    const holeCharge = 20

    const particles = new Array(numParticles).fill([0, 0])

    let inverseFilling = 3 

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    p.setup = function() {
        
        p.createCanvas(width, 400);
        
        p.noStroke();

        particles.forEach(function(_, i) {
            particles[i] = [p.randomGaussian() + p.width / 2, p.randomGaussian() + p.height / 2]
        })
        
        const inp = p.createInput(String(inverseFilling))
            .style('font-size', '20px')
            .parent("laughlin")
            .position(0, 0, 'relative')
            .size(30);

        const setFilling = function() {
            inverseFilling = Number(this.elt.value)
        }

        inp.input(setFilling);

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    p.draw = function() {
        // var g = slider.value();
        p.background(255);

        const interparticleDrift = function(ri, rj) {
            // drift if ith particle due to jth
            const dx = ri[0] - rj[0];
            const dy = ri[1] - rj[1];
            const d_ij = p.sqrt(dx**2 + dy**2);
            return [(dx - dy) / d_ij**2, (dy + dx) / d_ij**2]
        }

        p.fill(0, 128);
        
        particles.forEach((ri, i) => {
            p.circle(ri[0], ri[1], 8);
            // Effect of Gaussian and vector potential
            const xi = ri[0] - p.width / 2
            const yi = ri[1] - p.height / 2
            let vi = [B * (-xi + yi) / 2, B * (-yi - xi) / 2]
            particles.forEach((rj, j) => {
                if (j != i) {
                    const vij = interparticleDrift(ri, rj)
                    vi[0] += inverseFilling * vij[0]
                    vi[1] += inverseFilling * vij[1]
                }
            })
            const holeDrift = interparticleDrift(ri, [p.mouseX, p.mouseY])
            vi[0] += holeCharge * holeDrift[0]
            vi[1] += holeCharge * holeDrift[1]
            particles[i][0] += vi[0] * dt + p.sqrt(dt) * p.randomGaussian()
            particles[i][1] += vi[1] * dt + p.sqrt(dt) * p.randomGaussian()
        })

        
        p.fill('red');
        p.circle(p.mouseX, p.mouseY, 10);

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // p.windowResized = function() {
    //     resizeCanvas(p.windowWidth, p.windowHeight);
    // }




}

