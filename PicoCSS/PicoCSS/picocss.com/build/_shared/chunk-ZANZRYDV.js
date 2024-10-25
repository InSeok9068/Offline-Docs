function p({code:c,linesMatching:n=[],linesToRemoveFromStart:f=0,linesToRemoveFromEnd:t=0}){let e=c.split(`
`);return n.length>0&&n.forEach(l=>{let i=e.indexOf(l);for(;i>-1;)e.splice(i,1),i=e.indexOf(l)}),e.splice(0,f),e.splice(e.length-t,t),e.join(`
`)}export{p as a};
