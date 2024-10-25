import{a as C}from"/build/_shared/chunk-DMGV2FYD.js";import{a as v}from"/build/_shared/chunk-RI7YJF2N.js";import{a as g}from"/build/_shared/chunk-YSWQKXFT.js";import"/build/_shared/chunk-LVW6VCGV.js";import"/build/_shared/chunk-GL7VW4BM.js";import{a as u,b as x}from"/build/_shared/chunk-JT4PCSGL.js";import"/build/_shared/chunk-BZ4AUIAY.js";import{a as y}from"/build/_shared/chunk-PGB5EDTS.js";import{a as t}from"/build/_shared/chunk-2LGDFLPT.js";import"/build/_shared/chunk-SNDHQUDE.js";import{a as i}from"/build/_shared/chunk-OLA7NHCU.js";import{a as n}from"/build/_shared/chunk-UUMWCJG3.js";import"/build/_shared/chunk-WBY45DIQ.js";import{b as a,c as b,q as h}from"/build/_shared/chunk-YTHO3L5P.js";var o=a(b());var e=a(h()),{titleSuffix:T,cdnBaseUrl:w}=y,H=()=>[{title:`
  Conditional styling ${T}`},{name:"description",content:"Apply Pico CSS styles selectively by wrapping elements in a .pico container, ideal for mixed-style environments."}];function k(){let l=C.find(S=>S.title==="Conditional styling"),s=(0,o.useRef)(),r=(0,o.useRef)(),c=(0,o.useRef)(),m=(0,o.useRef)(),p=(0,o.useRef)(),d=(0,o.useRef)(),f=(0,o.useRef)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x,{title:"Conditional styling",description:(0,e.jsxs)(e.Fragment,{children:["Apply Pico CSS styles selectively by wrapping elements in a ",(0,e.jsx)("code",{children:".pico"})," ","container, ideal for mixed-style environments."]})}),(0,e.jsx)(v,{data:[{anchor:"",title:"Introduction",ref:s},{anchor:"local-setup",title:"Install manually",ref:r},{anchor:"usage-from-cdn",title:"Usage from CDN",ref:c},{anchor:"usage-with-sass",title:"Usage with Sass",ref:m},{anchor:"starter-html-template",title:"Starter HTML template",ref:p},{anchor:"examples",title:"Examples",ref:d},{anchor:"demo",title:"Demo",ref:f}]}),(0,e.jsxs)(u,{children:[(0,e.jsxs)("section",{ref:s,children:[(0,e.jsxs)("p",{children:["Pico offers a ",(0,e.jsx)("code",{children:".conditional"})," version that restricts styling to elements within ",(0,e.jsx)("code",{children:".pico"})," class containers."]}),(0,e.jsxs)("p",{children:["The remaining minimal ",(0,e.jsx)("code",{children:":root"})," reset ensures typography consistency across your entire site."]}),(0,e.jsxs)("p",{children:["See the ",(0,e.jsx)(i,{to:"/docs/version-picker",children:"version picker"})," to easily select the ideal Pico CSS version variant to match your project's needs."]})]}),(0,e.jsxs)("section",{ref:r,children:[(0,e.jsx)(n,{level:2,anchor:"local-setup",children:"Install manually"}),(0,e.jsxs)("p",{children:[(0,e.jsx)(i,{to:"https://github.com/picocss/pico/archive/refs/heads/v2.zip",children:"Download Pico"})," ","and link ",(0,e.jsx)("code",{children:"/css/pico.conditional.min.css"})," in the"," ",(0,e.jsx)(t,{display:"inline",children:"<head>"})," of your website."]}),(0,e.jsx)(t,{className:"small",children:'<link rel="stylesheet" href="css/pico.conditional.min.css">'})]}),(0,e.jsxs)("section",{ref:c,children:[(0,e.jsx)(n,{level:2,anchor:"usage-from-cdn",children:"Usage from CDN"}),(0,e.jsxs)("p",{children:["Alternatively, you can use ",(0,e.jsx)(i,{to:w,children:"jsDelivr CDN"})," to link",(0,e.jsx)("code",{children:"pico.conditional.min.css"}),"."]}),(0,e.jsx)(t,{children:`<link
  rel="stylesheet"
  href="${w}css/pico.conditional.min.css">`})]}),(0,e.jsxs)("section",{ref:m,children:[(0,e.jsx)(n,{level:2,anchor:"usage-with-sass",children:"Usage with Sass"}),(0,e.jsx)(t,{language:"scss",children:`@use "pico" with (
  $parent-selector: ".pico"
);`})]}),(0,e.jsxs)("section",{ref:p,children:[(0,e.jsx)(n,{level:2,anchor:"starter-html-template",children:"Starter HTML template"}),(0,e.jsx)(t,{children:`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark" />
    <link rel="stylesheet" href="css/pico.conditional.min.css">
    <title>Hello world!</title>
  </head>
  <body>
    <main>
      <section>
        <p>Unstyled hello world!</p>
      </section>
      <section class="pico">
        <p>Styled hello world!</p>
      </section>
    </main>
  </body>
</html>`})]}),(0,e.jsxs)("section",{ref:d,children:[(0,e.jsx)(n,{level:2,anchor:"examples",children:"Examples"}),(0,e.jsx)("p",{children:"Example with Pico styles:"}),(0,e.jsxs)("article",{"aria-label":"Styled example",className:"component",children:[(0,e.jsx)("form",{children:(0,e.jsx)("input",{type:"text",name:"text",placeholder:"Text","aria-label":"Text"})}),(0,e.jsx)(t,{as:"footer",children:`<form class="pico">
  <input type="text" name="text" placeholder="Text" aria-label="Text" />
</form>`})]}),(0,e.jsx)("p",{children:"Example without Pico styles:"}),(0,e.jsxs)("article",{"aria-label":"Unstyled example",className:"component",children:[(0,e.jsx)("form",{children:(0,e.jsx)("input",{type:"text",name:"text",placeholder:"Text","aria-label":"Text",style:{all:"revert"}})}),(0,e.jsx)(t,{as:"footer",children:`<form>
  <input type="text" name="text" placeholder="Text" aria-label="Text" />
</form>`})]})]}),(0,e.jsxs)("section",{ref:f,children:[(0,e.jsx)(n,{level:2,anchor:"demo",children:"Demo"}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(i,{to:l.links.preview,children:"Preview"})}),(0,e.jsx)("li",{children:(0,e.jsx)(i,{to:l.links.editor,children:"Edit in CodeSandbox"})}),(0,e.jsx)("li",{children:(0,e.jsx)(i,{to:l.links.source,children:"View source"})})]})]}),(0,e.jsx)(g,{file:"docs.conditional.jsx"})]})]})}export{k as default,H as meta};
