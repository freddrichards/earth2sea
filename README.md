# Earth2Sea website

Static website for the ERC Starting Grant project **Earth2Sea: Dynamic Earth Impacts on Past, Present, and Future Sea Levels** (grant agreement No. 101221058, Imperial College London).

Plain HTML/CSS/JS, so no build step is needed. To serve it with GitHub Pages: *Settings → Pages → Deploy from branch*, root folder.

## Pages
- `index.html`: landing page, project summary, objectives and news sidebar
- `workplan.html`: plain-language overview of the research themes
- `team.html`: team and core collaborators
- `results.html`: publications and outputs

## Common edits
- **News**: edit `js/news.js` and add new items at the top of the list.
- **Team photos**: put images in `assets/img/team/` and replace an `<div class="avatar">..</div>` with
  `<img class="avatar" src="assets/img/team/name.jpg" alt="Name">` in `team.html`.
- **Funding logo**: `assets/img/eu-erc-logo.png`. Overwrite it with the official EU/ERC logo file if needed.
- **Figures**: `assets/img/figures/`, taken from the Earth2Sea proposal and Lau et al. (2026).
- **Colours/fonts**: CSS variables at the top of `css/style.css`.

## Preview locally
```bash
python3 -m http.server 8000
```
