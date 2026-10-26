# Theories of Quantum Matter

These are the materials for Theories of Quantum Matter, a Part III Physics course at the University of Cambridge taught in Michaelmas 2024. [tqm.tripos.org](https://tqm.tripos.org/) is the live version of the notes. 

The materials for previous versions of the course can be found [here](https://austen.uk/courses/). While these are largely unchanged, you should regard this site as the authoritative version for 2024.

The source of these notes is [this GitHub repo](https://github.com/AustenLamacraft/tqm-quarto). If you find a typo, other problem or have any other comment on the material, please [raise an issue](https://github.com/AustenLamacraft/tqm-quarto/issues) there.

[The discussions section](https://github.com/AustenLamacraft/tqm-quarto/discussions/) is a good place to ask each other questions. Try it!

## Figures

Diagrams are drawn in TikZ, taken from William Royce's LaTeX version of the notes ([Overleaf](https://www.overleaf.com/project/6846ddc64bba2a49a368ea55)), and rendered with the [pandoc-ext/diagram](https://github.com/pandoc-ext/diagram) extension in `_extensions/` (see [this post](https://www.andrewheiss.com/blog/2026/02/25/tikz-quarto-svg-fun/)). Data plots, photos and third-party images remain as files in `assets/`.

- Each figure lives in its own file `figures/_<name>.qmd`, containing a single ```` ```{.tikz} ```` block. The leading `_` stops Quarto rendering it as a page.
- Notes pull a figure in with an include inside a figure div, so it can be cross-referenced as `@fig-<name>`:

  ```markdown
  ::: {#fig-fermi-shift}

  {{< include ../figures/_fermi-shift.qmd >}}

  Shifting the Fermi sea to increase the momentum.

  :::
  ```

  Slides include the same file inside `::: {.tikz-figure style="width: 50%;"}`, so notes and slides cannot drift apart. The `.tikz-figure` rule in `slides/reveal_custom.scss` centres the div and scales the SVG to its width.
- The `diagram` filter and the shared TikZ preamble (packages, libraries, the `my*` colours and styles from `project.sty` and the chapter files of the LaTeX notes) are set in `_quarto.yml`. The preamble must stay wrapped in a ```` ```{=latex} ```` block, otherwise Quarto parses it as Markdown and the LaTeX fails to compile.
- Rendering needs `pdflatex` (TikZ → PDF) and `inkscape` (PDF → SVG for HTML) on the path.
- The hand-drawn PNGs that these replaced are kept in `assets/old-figures/`.

**The extension is modified locally.** In `pdf2svg` in `_extensions/pandoc-ext/diagram/diagram.lua`, Inkscape is called with `--pdf-poppler`. Its default PDF importer drops TeX's large delimiters (`\qty[...]`, `\left(`, `\bigl[`, whose glyph codes are control characters) and writes those codes into `aria-label` attributes, making the SVG invalid XML so that the browser shows nothing. Reapply this change if the extension is updated (`quarto update`/`quarto add`).

**`keep-tex: true` in `notes/_metadata.yml` is required.** Notes pages render to both HTML and PDF. Quarto runs Pandoc for both formats and then LaTeX, and the LaTeX cleanup deletes `notes/<page>_files/`, which also holds the HTML's TikZ SVGs (`<page>_files/mediabag/`), before they are copied to `_site`. The site then links to SVGs that don't exist. Keeping the intermediate files avoids this; the leftover `notes/*.tex` files are git-ignored. With it in place, a plain `quarto render` or `quarto publish netlify` builds both formats correctly.

## TODOs

- [X] Callouts for in-lecture problems
- [X] Add list of supervisions
- [X] Add details about supervisions
- [X] Sun Woo correction in first lecture (normalization factor)
- [X] Add $\hbar =1$ warning!!
- [X] Add advice to complete exercises
- [X] Build problems with PDF. How to fix? I've tried `quarto render notes --to pdf` from the command line
- [X] Favicon for site
- [X] FQHE animation not working
- [X] Fix cot / tan disagreement between spin models lectures and slides
- [X] Fix statement about impenetrable Bose gas. Modulus form only works for ground state
- [ ] Switch to `\Braket` in KaTeX for matrix elements / expectation values in slides
- [ ] I believe there is an inconsistency between the two parts of Q6. The wavefunction given in the second part is problematic dimensionally - |c| doesn't have dimensions of inverse length. This is because the mass of the bosons m is not involved. From my results it follows that the consistent densities are obtained for m=2, i.e. the power of the exponents in psi should be m|c|/4*|x_j-x_k|.
- [X] There may be an inconsistency in the definition of Anderson spins. North pole should be occupancy by a pair but the u_p, v_p parameterization says otherwise.
- [ ] Need to update the pictures of domain walls in the BCS theory to reflect this change.
- [ ] Update hand drawn diagrams with William Royce's diagrams in https://www.overleaf.com/project/6846ddc64bba2a49a368ea55. Using the [diagram extension](https://www.andrewheiss.com/blog/2026/02/25/tikz-quarto-svg-fun/)
- [X] Respond to Daniil's question about FDT symmetry for different operators 

- [ ] Add material not lectured to site

- [ ] Deal with old Atilla questions about Bethe Ansatz