// Simulation of Laughlin state with a non-potential drift contribution
// All sketches in instance mode, to keep variables out of global scope
// https://p5js.org/examples/instance-mode-instantiation.html
const laughlin = function(p) {

    const numParticles = 512;
    
    const dt = 0.2
    const B = 0.05

    const holeCharge = 10
    const m = 3

    const particles = new Array(numParticles).fill([p.random(0, 1), p.random(0, 1)])

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);
        
        p.noStroke();

        particles.forEach(function(_, i, _) {
            particles[i] = [p.random(0, 1), p.random(0, 1)]
        })

        

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
            return [m * (dx - dy) / d_ij**2, m * (dy + dx) / d_ij**2]
        }

        p.fill(0, 128);
        
        particles.forEach((ri, i) => {
            p.circle(ri[0], ri[1], 8);
            // Effect of Gaussian and vector potential
            const xi = ri[0] - p.width / 4
            const yi = ri[1] - p.height / 4
            let vi = [B * (-xi + yi) / 2, B * (-yi - xi) / 2]
            particles.forEach((rj, j) => {
                if (j != i) {
                    const vij = interparticleDrift(ri, rj)
                    vi[0] += vij[0]
                    vi[1] += vij[1]
                }
            })
            holeDrift = interparticleDrift(ri, [p.mouseX, p.mouseY])
            vi[0] += holeCharge * holeDrift[0]
            vi[1] += holeCharge * holeDrift[1]
            particles[i][0] += vi[0] * dt + p.sqrt(dt) * p.randomGaussian()
            particles[i][1] += vi[1] * dt + p.sqrt(dt) * p.randomGaussian()
        })

        
    
        
        // for (let i = 0; i < c; i++) {
        //     p.circle(x[i], y[i], 8);
        // }
        
        p.fill('red');
        p.circle(p.mouseX, p.mouseY, 20);

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    p.windowResized = function() {
        resizeCanvas(p.windowWidth, p.windowHeight);
    }

    function addNewParticle() {
        // if (mouseY < height - 50) {
        // 	x[c] = mouseX;//random(0,windowWidth); //mouseX;
        // 	y[c] = mouseY;//random(0,windowHeight); //mouseY;
        // 	vx[c] = 0;
        // 	vy[c] = 0;

        // 	c++;
        // 	c = c % particlesQ;
        // }
        
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    p.mouseClicked = function() {
        isLooping() ? noLoop() : loop()
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    p.mouseDragged = function() {
        addNewParticle();
    }

}

new p5(laughlin, "laughlin");
