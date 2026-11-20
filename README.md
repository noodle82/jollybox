# JOLLYmix: Naughty Elf Village — GitHub, Codemagic and TestFlight

UPDATE — 20 November 2026
If JOLLYmix already works in TestFlight, reuse your existing Codemagic app, signing certificate and profile. Follow step 1 to replace the upload files, then steps 6 and 7. No new Apple app or certificate is needed.

Your app details
- App name: JOLLYmix: Naughty Elf Village
- Subtitle: Interactive Advent Calendar
- Bundle ID: com.jollybox.advent
- Apple ID: 6835128594
- SKU: jollybox-2026
- Existing Apple connection in your Bluffle Codemagic configuration: bluffle_apple

1. Upload the app files to GitHub
Download JOLLYmix-Easy-GitHub-Upload.zip and extract it once. In https://github.com/noodle82/jollybox choose Add file > Upload files. Open the extracted folder, select ALL its contents, and drag those items into GitHub. The .github folder supplies optional website publishing workflows; it is not required for TestFlight. Keep jollybox-web.tar.gz and jollybox-project.tar.gz compressed. Commit the upload to main.

Check the repository's top level: you should see codemagic.yaml, package.json, unpack.cjs, jollybox-web.tar.gz and jollybox-project.tar.gz. Codemagic will unpack the complete app automatically. The full project and latest artwork are inside those two compressed files.

2. Add JOLLYmix in Codemagic
Sign in at https://codemagic.io and choose the SAME TEAM that contains Bluffle. Choose Add application, connect/select GitHub and choose noodle82/jollybox. If asked for project type, choose Other / a codemagic.yaml project. The build configuration is already in the repository.

3. Check the Apple connection and certificate
In the team's settings, find the Apple Developer Portal integrations and confirm bluffle_apple is available. This is the connection used by your existing Bluffle workflow. In Code signing identities, the Apple Distribution certificate used for Bluffle can also sign JOLLYmix when it belongs to the same Apple Developer team.

4. Create a JOLLYmix signing profile in Apple Developer
Go to https://developer.apple.com/account/resources/profiles/list and sign in. Choose +, then App Store Connect under Distribution. Choose the App ID matching com.jollybox.advent. Select the SAME Apple Distribution certificate that is available in Codemagic. Give the profile a name such as JOLLYmix TestFlight, generate it and download the .mobileprovision file.

5. Upload that profile to Codemagic
In the team's Code signing identities, open the iOS provisioning profiles area and upload the downloaded .mobileprovision file. Use jollybox_app_store as its reference name. Check that it lists com.jollybox.advent, the App Store distribution type and a matching certificate.

6. Start the build
Open JOLLYmix in Codemagic and choose Start new build. Select branch main and workflow ios-testflight (displayed as JOLLYmix iPhone and iPad TestFlight review). Start the build. The workflow already uses bluffle_apple and records Apple ID 6835128594. It uses the project's increasing build number, builds the iPhone/iPad app and uploads to TestFlight.

7. Install on your iPad or iPhone
After Codemagic finishes and Apple has processed the upload, open https://appstoreconnect.apple.com, select JOLLYmix: Naughty Elf Village, then TestFlight. Create/select an internal testing group, add your own App Store Connect account and add the processed build. Open Apple's TestFlight app on your iPad/iPhone, accept the invitation if shown, and install JOLLYmix.

This review build has everything unlocked for testing. The workflow does not submit an App Store release. The short name below the device icon remains JOLLYmix. No signed build, TestFlight upload or repository commit was made by the assistant; you are doing the uploads. No passwords, private keys or signing certificates belong in the GitHub upload package.

Official instructions
Codemagic app setup: https://docs.codemagic.io/getting-started/adding-apps/
Codemagic signing: https://docs.codemagic.io/yaml-code-signing/signing-ios/
Apple profile creation: https://developer.apple.com/help/account/provisioning-profiles/create-an-app-store-provisioning-profile/
TestFlight publishing: https://docs.codemagic.io/yaml-publishing/app-store-connect/

REBRAND
Keep the existing app and bundle ID. The source now displays JOLLYmix below its icon. Rename the existing App Store Connect listing to JOLLYmix: Naughty Elf Village when you update the listing; no replacement app or signing setup is needed. Existing repository and compressed payload names deliberately remain jollybox for compatibility.

REVIEW CHECKS
This is one more all-unlocked review build, with grown-up date tools retained. Check the approved animated logo; sleeve attachment and bottle-feeding on all three babies; the new theatre near the village bridge; reverse voice; and audible successive Jingle Bells catch notes on your actual iPad/iPhone. Use real date to check the brief online time verification; device date/timezone changes should not unlock future doors. Collected surprises remain available offline. The saved timezone is detected once and has no change control.

INTERNAL TESTING UPLOAD
The ios-testflight workflow uploads the IPA to the existing App Store Connect app but does not request external TestFlight beta review (submit_to_testflight: false). This avoids the earlier post-processing failure caused by missing external-review contact details. Use your existing internal group / automatic distribution setting, or add the processed build to that group in App Store Connect. No internal group name has been invented or changed here. See https://docs.codemagic.io/yaml-publishing/app-store-connect/ .

LATEST REVIEW CHECKS
Power Station is now the hilltop house, and theatre is the old lower-right Power Station building. On test date 3 December, verify that doors 1–3 open and door 4 stays locked. Unwrap all five surprises before toy/game play. Mission accomplished? is red and changes to green Mission accomplished! in the theatre only. See waiting screen now uses the real date; explicit simulated dates are labelled.

COMPLETION AND JANUARY
Finish all 24 days to see the keep-playing / new-calendar-next-year message. This edition and its collection remain available in January, including missed doors. The 2026 collection no longer resets when the device calendar changes year.
