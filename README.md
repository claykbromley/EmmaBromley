# Emma Bromley — Personal Website

A simple, self-contained website: `index.html`, `styles.css`, `script.js`, and
an `assets/` folder for the headshot photo. No build step, no dependencies.

## Add the headshot

Drop a photo into `assets/` and name it exactly `headshot.jpg`. The page
already looks for that file, so it will appear automatically — no code
changes needed. Until then, the page shows a simple "EB" placeholder.

## Publish it with GitHub Pages

1. Create a new repository on GitHub (for a personal site at
   `yourusername.github.io`, the repo must be named exactly that; for a
   project-style page, any repo name works and the site will live at
   `yourusername.github.io/repo-name`).
2. Upload these files (`index.html`, `styles.css`, `script.js`, `assets/`)
   to the repository, either by dragging them into GitHub's web uploader
   or with git:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment," set the source to **Deploy from a branch**,
   choose the **main** branch and the **/ (root)** folder, then save.
5. GitHub will publish the site at the URL shown on that page within a
   minute or two.

## Editing content later

All the text lives directly in `index.html`, organized into sections
(About, Research, Experience, Talks, Beyond Research, Contact) — open it
in any text editor and edit the text between the HTML tags. Colors and
fonts live in `styles.css` near the top, under `:root`.
