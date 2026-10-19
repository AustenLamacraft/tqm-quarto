// Langevin simulation of the Laughlin state, including the non-potential
// (phase and vector potential) contribution to the drift.
// See "Appendix: Sampling from a complex wavefunction" in notes/quantum-hall-effect.qmd

const dt = 0.2
const B = 0.07

// Charge of the quasihole relative to the particles. 20 quasiholes for clarity
const holeCharge = 20

function randomGaussian() {
    // Box–Muller
    return Math.sqrt(-2 * Math.log(1 - Math.random())) * Math.cos(2 * Math.PI * Math.random())
}

function interparticleDrift(ri, rj) {
    // drift of ith particle due to jth
    const dx = ri[0] - rj[0]
    const dy = ri[1] - rj[1]
    const d2 = dx ** 2 + dy ** 2
    return [(dx - dy) / d2, (dy + dx) / d2]
}

export function initParticles(numParticles, width, height) {
    return Array.from({ length: numParticles }, () =>
        [randomGaussian() + width / 2, randomGaussian() + height / 2])
}

// Advance all particles by one time step, given inverse filling m and quasihole position
export function step(particles, m, hole, width, height) {
    particles.forEach((ri, i) => {
        // Effect of Gaussian and vector potential
        const xi = ri[0] - width / 2
        const yi = ri[1] - height / 2
        const vi = [B * (-xi + yi) / 2, B * (-yi - xi) / 2]
        particles.forEach((rj, j) => {
            if (j != i) {
                const vij = interparticleDrift(ri, rj)
                vi[0] += m * vij[0]
                vi[1] += m * vij[1]
            }
        })
        const holeDrift = interparticleDrift(ri, hole)
        vi[0] += holeCharge * holeDrift[0]
        vi[1] += holeCharge * holeDrift[1]
        ri[0] += vi[0] * dt + Math.sqrt(dt) * randomGaussian()
        ri[1] += vi[1] * dt + Math.sqrt(dt) * randomGaussian()
    })
}
