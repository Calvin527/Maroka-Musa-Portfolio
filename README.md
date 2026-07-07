# Maroka Musa Calvin Portfolio

This is a deployable static portfolio project built with HTML, CSS, and JavaScript.

## What is included

- Responsive portfolio homepage
- Project section
- Experience section
- Certifications section
- Downloadable CV
- Downloadable Udemy certificate PDFs
- Netlify and Vercel deployment config

## Edit before deploying

Open `index.html` and replace these placeholders:

- `your-email@example.com`
- `https://github.com/your-github`
- `https://www.linkedin.com/in/your-linkedin`
- Project links that say `Add Project Link` or `Add GitHub Link`

To add your graduate picture:

1. Rename your picture to `graduate-photo.jpg`.
2. Put it inside `assets/images/`.
3. Refresh the website.

If you want to update the CV PDF, edit `tools/create_cv.py` and run:

```bash
python3 tools/create_cv.py
```

## Deploy on Netlify

1. Go to Netlify.
2. Create a new site from this folder or upload the zipped folder.
3. No build command is needed.
4. Publish directory: `.`

## Deploy on Vercel

1. Import this folder as a project.
2. Framework preset: Other.
3. No build command is needed.
4. Output directory: `.`

## Deploy on GitHub Pages

1. Upload the project to a GitHub repository.
2. Go to Settings > Pages.
3. Select the main branch and root folder.
4. Save and open the published link.
