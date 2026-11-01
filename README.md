# Maroka Musa Calvin — Updated Professional Portfolio

A complete, responsive portfolio built using **HTML, CSS and vanilla JavaScript**. It does **not** need Node.js, npm, Vite, React, or a database.

This version updates the earlier portfolio using the two supplied CVs and preserves the graduation profile photo and the Makgobelo Lodge project screenshot.

## Preview it on your computer

1. Extract the ZIP file.
2. Open the `maroka-portfolio-updated` folder.
3. Double-click `index.html`.

You can alternatively use the VS Code Live Server extension, but it's optional.

## What the website includes

- Mobile-responsive layout and navigation
- Your graduation photograph
- All six selected projects with project categories and case studies
- Direct project demo and repository links where provided in your CVs
- Software engineering and AI/ML project filters
- Codveda Technologies machine learning internship
- Technical skills, education, and certifications
- **Two CV download links:** software engineering and AI/machine learning
- Your LinkedIn, GitHub, email address, and phone number
- Screenshot slots that automatically display your added images

## Add project screenshots later (no code changes required)

Put each picture into `assets/projects/` with the **exact filename** below. Use JPG files. When you refresh the website, the placeholder disappears automatically.

| Project | Screenshot filename | Status |
|---|---|---|
| TAXI MOVE | `taxi-move.jpg` | Space reserved |
| Makgobelo Lodge | `makgobelo-lodge.jpg` | **Already included** |
| Real-Time Meeting Discussion | `realtime-meetings.jpg` | Space reserved |
| Northern Sotho Speech Recognition | `northern-sotho-asr.jpg` | Space reserved |
| Waste Image Classification | `waste-classification.jpg` | Space reserved |
| Cloud OS Simulation | `cloud-systems.jpg` | Space reserved |

**Important:** If your screenshot is a PNG, convert it to JPG first (e.g. with Windows Paint: File → Save as → JPEG) so its extension matches. Aim for approximately 1400px width and ideally under 500KB per image.

## Replace your profile photo

Replace `assets/profile.jpg` with a new image of the same name.

## Update the downloadable CVs

Place the updated PDFs in `assets/docs/`, keeping the file names:

- `Maroka_MC_SE_CV.pdf` (Software Engineering / Full-Stack)
- `Maroka-MC-Resume.pdf` (AI / ML / Data Science)

## Update project descriptions or links

- Edit visible project details in `index.html`.
- Edit the case-study popup descriptions and links in the `portfolioProjects` object of `script.js`.
- Keep changes consistent between both files.

The current live demo and GitHub destinations were taken from your CV hyperlinks. They are not guaranteed to be continuously accessible; check them before submitting an application. Projects without a confirmed direct repository link use your main GitHub profile instead.

## Redeploy to your current Render portfolio

Your CVs reference `https://maroka-musa-portfolio.onrender.com/`.

1. Open the GitHub repository that currently deploys this portfolio.
2. Back up the current repository contents.
3. Replace the existing static site files with the contents of this ZIP **(put `index.html` at the same root your hosting service publishes)**.
4. Commit and push the changes to the branch used by Render.
5. If your Render static site has automatic deploys enabled, it should deploy the new commit. Otherwise use Render dashboard → Manual Deploy.
6. Check the live site on phone and desktop. Refresh without cache if you still see the old design.

For a new deployment, GitHub Pages can also host this entire project because it is a static website.

**Nothing has been pushed to GitHub or deployed to Render automatically.**

## Notes on professional accuracy

- Current honours study is labeled **in progress** rather than completed.
- Research metrics (22.78% WER, 5.86% CER) and waste classification performance (80% subset accuracy) are taken directly from the relevant CVs.
- The two CVs contain inconsistent dates for some older projects; project cards avoid specifying those disputed dates.
- Certifications are listed as courses/credentials, not employment.
