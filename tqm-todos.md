# TQM TODOs

Compiled from a review of the Notes at [tqm.tripos.org](https://tqm.tripos.org/) and the past papers (2017–2023, 2025). Organised as: site/migration bugs → physics/math errors → typos by chapter → content updates → exam ideas.

## Site & migration bugs (Jekyll → Quarto debris)

- [ ] Unconverted Liquid cite tags render literally: `{% cite dirac1926 %}` (Many Body Wavefunctions), `{% cite Fisher:1989aa %}` (Lattice Models)
- [ ] Broken `{{< ref >}}` shortcodes render as raw markup in: Spin Models (Appendix link), A is for Annihilation (two "Lecture 1" links), Lattice Models (Lecture 4, Problem Set 2), Bose Gas (Lecture 2), Superconductivity ("above figure"), Response and Correlation (Lecture 1)
- [ ] Dead links to excised chapters: `notes/lieb-liniger.qmd` (Spin Models "Lecture 15"), `notes/jellium.qmd` (B is for Bunching "Lecture 11", Superconductivity "Lecture 12") — purge or restore; also reword passages that assume Lieb–Liniger was covered
- [ ] Un-rendered math: "the phase of the `$ _k$`" (Elastic Chain §2.6, presumably ρ_k); "`$ H_ = - f(t)y, $`" (Response §2.6); raw `\braket` macro in Response Eq. 27; empty inline "`$ $`" in Superconductivity ("for small $ $")
- [ ] **Empty section**: Superconductivity §2.2 "Discussion: Heisenberg's Problem" — write it or delete the heading
- [ ] **Truncated sentence** in Elastic Chain §2.6: "To find the dependence on Δq" stops mid-thought; text missing before "This leads to the conclusion…"
- [ ] Past-papers page: embedded PDFs may not render for all users (page shows bare year headings without them) — consider adding plain download links alongside the embeds

## Physics / math errors

### Many Body Wavefunctions
- [ ] Integral limits: `∫_{k_F}^{k_F}` → `∫_{−k_F}^{k_F}` (density-matrix Check box)
- [ ] δ-function cusp condition off by factor 2 (integration over x_i misses the δ contribution from ∂²/∂x_j²): jump in ∂Ψ/∂x_i should be mcΨ

### Quantum Hall Effect (Appendix)
- [ ] Schrödinger equation missing ψ on kinetic term
- [ ] Drift missing 1/m: **v** = (∇R + ∇S − qA)/m
- [ ] Many-body drift: sum over j ≠ i (not j ≠ 1); X_i/Y_i vs X_t/Y_t subscripts; "m" doubles as mass and Laughlin exponent — remark or relabel

### Elastic Chain
- [ ] Appendix 3.2: sum should be n = 0 … j−1 (starts at 1/(1/2)), not n = 1 … j
- [ ] a_n definition: √(ZkL) needs |k_n|; "k" clashes with the spring constant
- [ ] [u_i, p_j] = iδ_ij stated in the classical section before quantization

### Spin Models
- [ ] Sign slip: Δs = −⟨(1/N)Σ a†a⟩ combined with ⟨sᶻ⟩ = (−1)ʲ(s − Δs) gives depletion the wrong sign; also η_n left inside the integral
- [ ] Anderson tower: ΔS_A² = −𝒩/2, not −𝒩/8
- [ ] "goes to zero as 𝒩 → 0" → 𝒩 → ∞
- [ ] Rotor energies: l(l+1), not L(L+1)
- [ ] "zero quanta on the odd sites, but 2s quanta on the odd sites" — one should be *even*
- [ ] Projector: P_η = (1/N)Σ_n e^{−iηn}Tⁿ (exponent and 1/N)
- [ ] "des Cloiseaux" → **des Cloizeaux** (multiple places incl. figure caption; caption L=26 vs text N=26)
- [ ] Two-magnon appendix: missing "= 0" in the c₁/c₂ consistency equation; clarify units in "−4 not −8" remark

### Lattice Models
- [ ] Validity condition inverted: N_sites ≳ **(U/t)²**, not (t/U)²
- [ ] Fermi–Hubbard: U Σ_j N_{j,↑}N_{j,↓} (site index missing)
- [ ] i/j index mismatch in the opening Hamiltonian (recurs in Response: H_pert and T)
- [ ] t–J aside: unclosed parenthesis; "constant term in Equation 9" points at the wrong equation

### Bose Gas
- [ ] **LHY appendix factor of 2**: prefactor should be V/(8π²m); E_reg = (8/15π²)(V/m)(mnU₀)^{5/2}, consistent with the (correct) 128/15√π in the E₀ formula below it
- [ ] Vortex energy functional: kinetic pieces should carry n (not n²); "U" → U₀
- [ ] "difference between N and N+1" → N and N−1
- [ ] "Onsager–Feynmann" → Feynman

### Fermi Gas
- [ ] Galilean appendix: δk = **mv**, not v/m
- [ ] "f_{↑↑} = f_{↑↑}" → f_{↑↑} = f_{↓↓}
- [ ] Missing "+" between the two sums in the f_{↑↓} display
- [ ] z formula: U → U₀ for consistency

### Superconductivity
- [ ] **T_c formula**: k_B T_c = (e^γ/π)Δ_BCS ≈ 0.567Δ with γ the Euler–Mascheroni constant (or redefine γ ≡ e^C); as written it reads as 0.18Δ
- [ ] Eq. 15 and two reprises: sum over p, summand indexed p′
- [ ] Eq. 14: product over i only with j = P(i); say φ(r) is the FT of v_p/u_p
- [ ] Appendix Eq. 20: U / U₀ / Ũ / U₀(p) notation inconsistent
- [ ] "|BCS⟩⟩" doubled ket

### Response and Correlation
- [ ] Lamb model closed equation missing m's (or γ = τ/(mc))
- [ ] e^{−γ/2mt} → e^{−γt/2m} (twice)
- [ ] m used as both mass and level index in the oscillator spectral representation
- [ ] β used for both inverse temperature and compressibility in one chapter — use κ

## Typos & small style fixes (by chapter)

- [ ] **Intro**: "decribing"; "at the the Curie temperature"; "the end of story"
- [ ] **Many Body Wavefunctions**: "provide we ignore"; "verions"; "explict"; "single particle state |φ_α⟩ are"
- [ ] **QHE**: "obvserved"; "electon"; "antianaltyic"; "the m=1 an m>1"; "distrubution"; "A Laughlin Laughlin state" (caption); unclosed parenthesis after "∂_z̄"; "ρq₀" → qρ₀; "is then be given"; "intepret"
- [ ] **Elastic Chain**: "or original Hamiltonian"; "has lead to"; "way to to see"; "For a vector x_j = 1,…N" → f_j, j = 1,…,N; "∫₀^∞ φ(x)V(x−y)φ(y)" limits → [0, L]; backtick quote artifact in "the `size' of the system"
- [ ] **Spin Models**: "we will at each state end up" → stage; "read of the dispersion" → off; "vanishes both η=0 and at"; "eigenergies"; missing full stop after "lower energy"
- [ ] **A is for Annihilation**: "movement of of"; "a_a" subscript; "on N−1 particle wavefunctions" → are; undefined shorthand B_{αβ} and Latin/Greek index mixing in the two-particle check; "Here we give simpler derivation"
- [ ] **B is for Bunching**: "from with Bose condensates"; "orginating"; "succintly"; "φ_r" → φ_R; bra ⟨N̄_R,N̄_L| has L/R swapped; bold ρ for scalar density; E_K and E_V used but never defined; "is the ground state is"; unclosed parenthesis at "(as we did in Lecture 4"
- [ ] **Lattice Models**: "in that in involves"; "neighouring"; "ocurrence"; "antiferromangetic"; missing full stop after "U/t→∞"; "the boundaries that we have have found"
- [ ] **Bose Gas**: "trignometric"; "digaonal"; "quantiatively"; "in erms of"; "There is far-reaching analogy"; unclosed parenthesis at Problem Set 2 link
- [ ] **Fermi Gas**: "Hamilonian"; "modifed"; "Discontinutity" (caption); "Thus we have Finally"; "In this limit we can take the |k|=|k′|=k_F"; unclosed parenthesis at Problem Set 3 link; stray period inside the 2×2 matrix
- [ ] **Superconductivity**: "which are are all"; "their theory become"; "though the BCS-BEC crossover" → through; "accross" (caption); "inhomogenous"; "as the form" → has; "isolated pair" → an isolated pair; lowercase fermi/bose/fermi-dirac scattered throughout; unclosed parenthesis at Lecture-12 reference; n_p vs n^P_p in Eq. 2
- [ ] **Response and Correlation**: "the dissipative dissipative part"; "far less significant that"; "corrsponding"; "quentity"; "eignestates"; missing full stop after "up or down in energy by ω"; double-bar rendering in "∂u/∂x‖"

## Content updates (2016 → present)

- [ ] Add a lecture on **topological band theory via the SSH model** (Berry phase, winding number, edge states); optional second step: **Kitaev chain** paired with the Superconductivity lecture (already examined in 2019 — lecture material would close the loop)
- [ ] Add a short section on **entanglement entropy** (reduced density matrices of many-body states, area laws, why MPS/DMRG works) — hook: the density-matrix Note box in Ch. 1 and the N=26 exact-diagonalization section
- [ ] **Refresh experimental anchors**:
  - [ ] Fractional statistics measured 2020 (Bartolomei et al. anyon collider; Nakamura et al. interferometry); fractional QAH in moiré materials (2023)
  - [ ] Unitary gas: Bertsch parameter ξ = 0.376(4) (experiment) and ≈0.37 (modern QMC), replacing 0.44 ± 0.01
  - [ ] Cuprates/Hubbard: sharpen "still controversial" — pure 2D Hubbard at relevant doping is stripe-ordered, superconductivity restored by t′ (Simons-collaboration-era numerics)
  - [ ] Bose/Fermi–Hubbard: quantum gas microscope figure (AF correlations imaged 2017)
- [ ] Optional closing lecture on **dynamics**: thermalization/ETH, quantum simulation (Rydberg arrays); MBL only with 2020s caveats
- [ ] Note box connecting the QHE Monte-Carlo sampling appendix to **neural quantum states / diffusion-model sampling** (Carleo–Troyer 2017)
- [ ] **Candidates for removal/compression** to make room:
  - [ ] Fermi Gas §2.1 second-order f-function computation → state structure, quote F(φ), G(φ), keep effective-mass argument (~1 lecture freed)
  - [ ] Lattice Models WKB "Physical Motivation" → appendix or cut
  - [ ] Response damped-oscillator preamble → compress ~1/3 (Langevin detour → problem set)
  - [ ] Fourier review → handout
  - [ ] Stoner criterion → Check box
  - [ ] Keep Anderson tower and two-magnon appendices (already non-examinable)

## Exam bank ideas (never-examined territory: QHE, impenetrable Bose gas, HOM/HBT, Hartree–Fock/Stoner, sum rules)

- [ ] **LLL & bosonic Laughlin**: analytic wavefunctions → harmonic potential in LLL → Ψ₂ zero-energy proof for δ interactions → quasihole degeneracy counting / plasma density
- [ ] **Beam splitter & N-particle HOM**: SU(2) mode rotation → odd-suppression law for N vs N → HBT connection → fermionic antibunching
- [ ] **Girardeau mapping with a twist**: mapping bookwork → n(k) for N=2 → twisted boundary conditions and n_s (boson vs fermion periodicity) → persistent currents
- [ ] **Stoner meets Zeeman**: HF bookwork → susceptibility with Stoner enhancement → d=2 first-order transition → discussion
- [ ] **Feynman single mode**: f-sum rule → S(q,ω) in Bogoliubov theory → Feynman bound ω(q) ≤ q²/2mS(q) → roton phenomenology
- [ ] **Attractive Hubbard dimer as baby BCS**: exact spectrum → Anderson pseudospins → BCS variational vs exact → number fluctuations
- [ ] **SSH chain**: two-band spectrum → winding number → explicit edge-state ansatz → Peierls argument (check overlap with 2018 Q3 part (a))
- [ ] **Magnons in a field**: FM with field bookwork → AFM doublet splitting ω(η) ± h → spin-flop softening → transverse magnetization (magnon BEC)
- [ ] Possible "modern classic" synthesis: Affleck–Lieb twist (2019 Q1) applied to Majumdar–Ghosh (2023 Q1) — twist argument consistent with a gap given two-fold degeneracy (hard)
