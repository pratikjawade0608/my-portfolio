# Pratik Jawade — DevOps Portfolio

A responsive DevOps portfolio built with **React + Vite** and prepared for automated deployment to **GitHub Pages using GitHub Actions**.

## What is included

- Hero / professional positioning
- About section
- Quantified impact metrics
- Technical skills
- Selected projects
- Experience timeline
- Certifications
- Awards and recognition
- Contact section
- Responsive mobile layout
- GitHub Actions deployment workflow

## 1. Update your links first

Open `src/data.js` and replace these placeholders:

```js
linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN-SLUG',
github: 'https://github.com/YOUR-GITHUB-USERNAME',
```

Your email is already set from the resume you provided.

## 2. Review / replace the resume

The uploaded resume has been copied to:

`public/Pratik_Jawade_Resume.pdf`

**Important:** the current PDF you provided does not include all of your latest work. Replace this file with your updated resume before publishing the site publicly. Keep the same filename so the Download Resume button keeps working.

## 3. Optional: replace the profile photo

The site currently uses:

`public/profile.png`

Replace it with any professional headshot using the same filename.

## 4. Run locally

```bash
npm install
npm run dev
```

Vite will show the local URL in your terminal.

## 5. Build locally

```bash
npm run build
npm run preview
```

## 6. Create the GitHub repository

Example repository name:

`pratik-devops-portfolio`

Then from this project folder:

```bash
git init
git add .
git commit -m "Initial DevOps portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/pratik-devops-portfolio.git
git push -u origin main
```

## 7. Enable GitHub Pages

In GitHub:

1. Open your repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main` if the workflow has not already started.
5. Open the **Actions** tab and wait for `Deploy portfolio to GitHub Pages` to complete.

Your site should then be available at a URL similar to:

`https://YOUR-GITHUB-USERNAME.github.io/pratik-devops-portfolio/`

## Why the site uses `base: './'`

Vite normally needs a repository-specific base path on GitHub Pages. This starter uses relative asset paths so the same build can work on either:

- `username.github.io`
- `username.github.io/repository-name/`

## Suggested next DevOps upgrades

Once the GitHub Pages version is live, good portfolio upgrades are:

- Add Terraform code for an Azure Static Web Apps deployment
- Add a second Azure deployment pipeline
- Add code quality / security scanning to GitHub Actions
- Add a custom domain
- Add a Projects repository with sanitized sample IaC / CI/CD code
- Add Microsoft / Google credential verification links

## Public-data reminder

The project summaries are intentionally written at a public-safe level. Before adding any screenshots, architecture diagrams, source code, database names, internal URLs, or client data, confirm that they are approved for public sharing.
