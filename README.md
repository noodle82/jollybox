# JollyBOX: Naughty Elf Village — GitHub, Codemagic and TestFlight

UPDATE — 19 November 2026
If JollyBOX already works in TestFlight, reuse your existing Codemagic app, signing certificate and profile. Follow step 1 to replace the upload files, then steps 6 and 7. No new Apple app or certificate is needed.

Your app details
- App name: JollyBOX: Naughty Elf Village
- Subtitle: Interactive Advent Calendar
- Bundle ID: com.jollybox.advent
- Apple ID: 6835128594
- SKU: jollybox-2026
- Existing Apple connection in your Bluffle Codemagic configuration: bluffle_apple

1. Upload the app files to GitHub
Download JollyBOX-Easy-GitHub-Upload.zip and extract it once. In https://github.com/noodle82/jollybox choose Add file > Upload files. Open the extracted folder, select ALL its contents, and drag those items into GitHub. The .github folder supplies optional website publishing workflows; it is not required for TestFlight. Keep jollybox-web.tar.gz and jollybox-project.tar.gz compressed. Commit the upload to main.

Check the repository's top level: you should see codemagic.yaml, package.json, unpack.cjs, jollybox-web.tar.gz and jollybox-project.tar.gz. Codemagic will unpack the complete app automatically. The full project and latest artwork are inside those two compressed files.

2. Add JollyBOX in Codemagic
Sign in at https://codemagic.io and choose the SAME TEAM that contains Bluffle. Choose Add application, connect/select GitHub and choose noodle82/jollybox. If asked for project type, choose Other / a codemagic.yaml project. The build configuration is already in the repository.

3. Check the Apple connection and certificate
In the team's settings, find the Apple Developer Portal integrations and confirm bluffle_apple is available. This is the connection used by your existing Bluffle workflow. In Code signing identities, the Apple Distribution certificate used for Bluffle can also sign JollyBOX when it belongs to the same Apple Developer team.

4. Create a JollyBOX signing profile in Apple Developer
Go to https://developer.apple.com/account/resources/profiles/list and sign in. Choose +, then App Store Connect under Distribution. Choose the App ID matching com.jollybox.advent. Select the SAME Apple Distribution certificate that is available in Codemagic. Give the profile a name such as JollyBOX TestFlight, generate it and download the .mobileprovision file.

5. Upload that profile to Codemagic
In the team's Code signing identities, open the iOS provisioning profiles area and upload the downloaded .mobileprovision file. Use jollybox_app_store as its reference name. Check that it lists com.jollybox.advent, the App Store distribution type and a matching certificate.

6. Start the build
Open JollyBOX in Codemagic and choose Start new build. Select branch main and workflow ios-testflight (displayed as JollyBOX iPhone and iPad TestFlight review). Start the build. The workflow already uses bluffle_apple and records Apple ID 6835128594. It uses the project's increasing build number, builds the iPhone/iPad app and uploads to TestFlight.

7. Install on your iPad or iPhone
After Codemagic finishes and Apple has processed the upload, open https://appstoreconnect.apple.com, select JollyBOX: Naughty Elf Village, then TestFlight. Create/select an internal testing group, add your own App Store Connect account and add the processed build. Open Apple's TestFlight app on your iPad/iPhone, accept the invitation if shown, and install JollyBOX.

This review build has everything unlocked for testing. The workflow does not submit an App Store release. The short name below the device icon remains JollyBOX. No signed build, TestFlight upload or repository commit was made by the assistant; you are doing the uploads. No passwords, private keys or signing certificates belong in the GitHub upload package.

Official instructions
Codemagic app setup: https://docs.codemagic.io/getting-started/adding-apps/
Codemagic signing: https://docs.codemagic.io/yaml-code-signing/signing-ios/
Apple profile creation: https://developer.apple.com/help/account/provisioning-profiles/create-an-app-store-provisioning-profile/
TestFlight publishing: https://docs.codemagic.io/yaml-publishing/app-store-connect/
