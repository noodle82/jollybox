# Publish at bluffle.co.uk/jollybox

JollyBOX's editable source lives in **https://github.com/noodle82/jollybox**. The existing **https://github.com/noodle82/Bluffle** project hosts `www.bluffle.co.uk`. The compiled JollyBOX website goes into that site's `jollybox/` folder. Bluffle's existing HTTPS redirect sends the apex domain to `www`.

## Option A — upload the built folder

1. Unzip **JollyBOX-Website.zip**. It contains a folder called `jollybox`.
2. In `noodle82/Bluffle`, add that folder at the repository root alongside the existing `index.html` and `CNAME`.
3. Commit the added folder. Let the existing GitHub Pages publish finish.
4. Open **https://www.bluffle.co.uk/jollybox/** on your phone. The assets use relative paths and the site works from this subdirectory.

The app remains maintained in its own JollyBOX repository; the Bluffle folder is generated output. Its root page, CNAME and other apps do not need edits.

## Option B — publish from the new JollyBOX repository

1. In the JollyBOX repository's **Settings → Secrets and variables → Actions**, add `BLUFFLE_DEPLOY_TOKEN`. Use a fine-grained GitHub token with **Contents: read and write**, limited to `noodle82/Bluffle`. Keep the token in the secret store.
2. In **Actions**, run **Publish to bluffle.co.uk/jollybox**.
3. The workflow builds the date-locked site and commits only the `jollybox/` folder to `Bluffle/main`. The Bluffle repository's existing Pages publishing then serves the folder.

## Independent preview URL

If you want a separate preview at **https://noodle82.github.io/jollybox/**, enable GitHub Actions as the Pages source in the JollyBOX repository's Settings → Pages, then run **Publish standalone JollyBOX Pages site**. This URL is separate from Bluffle's project-site custom domain. Do not set the new repository's custom domain to the Bluffle apex: the requested location is a subfolder of the existing site.

## Local commands

```sh
pnpm install --frozen-lockfile
pnpm build:site
pnpm serve:site
```

Open `http://localhost:4173/jollybox/`. `dist/jollybox/` is the upload folder. Production web builds keep date locks; the grown-up Power Station still contains the review option.

The site needs HTTPS for microphone and motion permission requests. Child profiles and progress save in that browser and are separate from the TestFlight app. The website has no account service or cloud sync. The native TestFlight package contains its assets for offline use; the website needs an initial network connection.

The prepared files and local routing have been tested. Publication is complete only after the Pages build succeeds and the live URL loads; this package does not contain GitHub/Apple credentials.
