const fs=require('node:fs'),path=require('node:path');const root=path.resolve(__dirname,'..'),app=path.join(root,'ios/App/App');
if(!fs.existsSync(app))throw new Error('Run pnpm exec cap add ios first.');
const config=JSON.parse(fs.readFileSync(path.join(root,'capacitor.config.json'),'utf8')),bundle=process.env.BUNDLE_ID||config.appId;
if(!/^[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/.test(bundle))throw new Error('BUNDLE_ID must be a reverse-domain app identifier.');
fs.copyFileSync(path.join(root,'native/Info.plist'),path.join(app,'Info.plist'));
const project=path.join(root,'ios/App/App.xcodeproj/project.pbxproj');let pbx=fs.readFileSync(project,'utf8');
pbx=pbx.replace(/PRODUCT_BUNDLE_IDENTIFIER = [^;]+;/g,'PRODUCT_BUNDLE_IDENTIFIER = '+bundle+';').replace(/MARKETING_VERSION = [^;]+;/g,'MARKETING_VERSION = 1.0.0;');
const ciBuild=process.env.PROJECT_BUILD_NUMBER||process.env.BUILD_NUMBER;if(ciBuild){const build=String(Number(ciBuild)+1);if(!/^\d+$/.test(build))throw new Error('Invalid build number');pbx=pbx.replace(/CURRENT_PROJECT_VERSION = [^;]+;/g,'CURRENT_PROJECT_VERSION = '+build+';')}
fs.copyFileSync(path.join(root,'native/PrivacyInfo.xcprivacy'),path.join(app,'PrivacyInfo.xcprivacy'));
if(!pbx.includes('A011B0A10000000000000001')){pbx=pbx.replace('/* End PBXBuildFile section */','A011B0A10000000000000001 /* PrivacyInfo.xcprivacy in Resources */ = {isa = PBXBuildFile; fileRef = A011B0A10000000000000002; };\n/* End PBXBuildFile section */').replace('/* End PBXFileReference section */','A011B0A10000000000000002 /* PrivacyInfo.xcprivacy */ = {isa = PBXFileReference; lastKnownFileType = text.xml; path = PrivacyInfo.xcprivacy; sourceTree = "<group>"; };\n/* End PBXFileReference section */').replace('504EC3131FED79650016851F /* Info.plist */,','504EC3131FED79650016851F /* Info.plist */,\n A011B0A10000000000000002 /* PrivacyInfo.xcprivacy */,').replace(/(isa = PBXResourcesBuildPhase;[\s\S]*?files = \()/,'$1\n A011B0A10000000000000001 /* PrivacyInfo.xcprivacy in Resources */,')}
fs.writeFileSync(project,pbx);const icons=path.join(app,'Assets.xcassets/AppIcon.appiconset');fs.mkdirSync(icons,{recursive:true});
fs.copyFileSync(path.join(root,'native/AppIcon.png'),path.join(icons,'JollyBox.png'));fs.writeFileSync(path.join(icons,'Contents.json'),JSON.stringify({images:[{filename:'JollyBox.png',idiom:'universal',platform:'ios',size:'1024x1024'}],info:{author:'xcode',version:1}},null,2));
console.log('Configured iOS permissions, icon and bundle ID: '+bundle);

const splash=path.join(app,'Assets.xcassets/Splash.imageset');fs.copyFileSync(path.join(root,'native/Splash.png'),path.join(splash,'JollyBoxSplash.png'));fs.writeFileSync(path.join(splash,'Contents.json'),JSON.stringify({images:[{idiom:'universal',filename:'JollyBoxSplash.png',scale:'1x'}],info:{author:'xcode',version:1}},null,2));
