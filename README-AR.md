# LSPD Website — Admin-only editing (no database)

## What changed
- Visitors can read the website but do not see the edit-mode button.
- Admin login is handled by a Netlify Function.
- Content is stored in `site-data.json` in the GitHub repository (no database).
- Saving commits `site-data.json` to GitHub. If this Netlify site is connected to that repository/branch, Netlify automatically deploys the new version.

## Files
Keep `index.html`, `script.js`, `style.css`, `site-data.json`, `assets/`, `netlify.toml`, and `netlify/functions/` in the published repository root.

## Netlify environment variables
In Netlify: Site configuration / Project configuration -> Environment variables, add:
- `ADMIN_PASSWORD`: choose a long, unique password.
- `SESSION_SECRET`: a random secret at least 32 characters long.
- `GITHUB_TOKEN`: a GitHub fine-grained personal access token, restricted to this repository with **Contents: Read and write** permission.
- `GITHUB_OWNER`: `fasailmoohmad`
- `GITHUB_REPO`: `Virex-lspd323`
- `GITHUB_BRANCH`: `main`

Never put these secrets in HTML, CSS, JavaScript, or any public repository file. Use a fine-grained token with the narrowest repository access and an expiration date. If exposed, revoke it immediately.

## Deploy steps
1. Download/extract this ZIP.
2. Copy the included files into the root of the existing GitHub repository, preserving the `assets/` folder and any images already there. Add the `netlify/` folder and `netlify.toml`.
3. Ensure `site-data.json` is at the repository root.
4. Add the environment variables in Netlify. Then trigger a fresh deploy so the functions receive them.
5. In Netlify, confirm the site is connected to the same GitHub repository and branch (`main`) and that deploys from that branch are enabled.
6. Open the live site normally: visitors only see reading content. To log in as admin, open the site URL with `?admin=1` appended (example: `https://YOUR-SITE.netlify.app/?admin=1`) or press **Ctrl+Shift+L**. Enter the admin password. After login the edit button appears for that browser tab/session.
7. Use the edit controls and Save. The function writes `site-data.json` to GitHub; Netlify then publishes it automatically. Deployment can take a short while.

## Notes / limitations
- This setup uses no database; GitHub is the content store and deployment trigger.
- The login token expires after 8 hours. If it expires, log in again.
- This protects editing and saving through the site. Keep the GitHub token secret and restrict its scope.
- The existing "Export backup" feature remains available. Import/reset/save now require an authenticated admin session.
- A successful save means GitHub accepted the commit; the public website updates after Netlify finishes deploying.
- The included source files do not include the original `assets/lspd-logo.png`. Preserve your existing `assets/` folder when replacing files so the logo remains.
