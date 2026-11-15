const fs=require('node:fs'),path=require('node:path'),{execFileSync}=require('node:child_process');
const root=__dirname,allowed=new Set(['web','ios','native','scripts','docs','licenses']);
for(const name of ['jollybox-web.tar.gz','jollybox-project.tar.gz']){
 const archive=path.join(root,name);if(!fs.existsSync(archive))throw new Error('Upload '+name+' alongside package.json.');
 const entries=execFileSync('tar',['-tzf',archive],{encoding:'utf8',windowsHide:true}).split(/\r?\n/).filter(Boolean);
 for(const entry of entries){const normalized=entry.replaceAll('\\','/');if(normalized.startsWith('/')||normalized.includes(':')||normalized.split('/').includes('..')||!allowed.has(normalized.split('/')[0]))throw new Error('Unexpected archive path: '+entry)}
 execFileSync('tar',['-xzf',archive,'-C',root],{windowsHide:true,stdio:'pipe'});
}
console.log('JollyBOX source, artwork and native project unpacked.');
