const fs=require('node:fs'),path=require('node:path'),{execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');
execFileSync(process.execPath,[path.join(__dirname,'build-web.cjs')],{cwd:root,env:{...process.env,JOLLYBOX_PREVIEW:'false'},stdio:'inherit'});
const output=path.join(root,'dist/jollybox');fs.mkdirSync(output,{recursive:true});fs.cpSync(path.join(root,'www'),output,{recursive:true});
// Keep the website below GitHub's browser-upload file count by placing scripts
// and styles in the page. Images and fonts remain normal, cacheable assets.
let html=fs.readFileSync(path.join(output,'index.html'),'utf8');const bundled=new Set();
function readLocal(name){if(path.basename(name)!==name)throw Error('Expected a root-level source file');bundled.add(name);return fs.readFileSync(path.join(output,name),'utf8')}
html=html.replace(/<link rel="stylesheet" href="([^"]+)">/g,(_,name)=>'<style>'+readLocal(name)+'</style>');
html=html.replace(/<script src="([^"]+)"><\/script>/g,(_,name)=>'<script>'+readLocal(name)+'</script>');
fs.writeFileSync(path.join(output,'index.html'),html);for(const name of bundled)fs.unlinkSync(path.join(output,name));
console.log('Website ready for https://www.bluffle.co.uk/jollybox/ in dist/jollybox');
