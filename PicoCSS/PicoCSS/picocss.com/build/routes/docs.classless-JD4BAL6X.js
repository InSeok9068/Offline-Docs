import{a as C}from"/build/_shared/chunk-DMGV2FYD.js";import{a as u}from"/build/_shared/chunk-RI7YJF2N.js";import{a as h}from"/build/_shared/chunk-YSWQKXFT.js";import"/build/_shared/chunk-LVW6VCGV.js";import"/build/_shared/chunk-GL7VW4BM.js";import{a as m,b as f}from"/build/_shared/chunk-JT4PCSGL.js";import"/build/_shared/chunk-BZ4AUIAY.js";import{a as p}from"/build/_shared/chunk-PGB5EDTS.js";import{a as s}from"/build/_shared/chunk-2LGDFLPT.js";import"/build/_shared/chunk-SNDHQUDE.js";import{a as o}from"/build/_shared/chunk-OLA7NHCU.js";import{a}from"/build/_shared/chunk-UUMWCJG3.js";import"/build/_shared/chunk-WBY45DIQ.js";import{b as n,c as y,q as d}from"/build/_shared/chunk-YTHO3L5P.js";var t=n(y());var e=n(d()),{titleSuffix:b,cdnBaseUrl:r}=p,w=C.find(i=>i.title==="Class-less preview"),g=()=>[{title:`Class-less version ${b}`},{name:"description",content:"Embrace minimalism with Pico\u2019s .classless version, a semantic option for wild HTML purists who prefer a stripped-down approach."}];function v(){let i=(0,t.useRef)(),l=(0,t.useRef)(),c=(0,t.useRef)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f,{title:"Class-less version",description:(0,e.jsxs)(e.Fragment,{children:["Embrace minimalism with Pico\u2019s ",(0,e.jsx)("code",{children:".classless"})," version, a semantic\xA0option for wild\xA0HTML\xA0purists who prefer a stripped-down\xA0approach."]})}),(0,e.jsx)(u,{data:[{anchor:"",title:"Semantic containers",ref:i},{anchor:"usage",title:"Usage",ref:l},{anchor:"root-container",title:"Custom root container",ref:c}]}),(0,e.jsxs)(m,{children:[(0,e.jsxs)("section",{ref:i,children:[(0,e.jsxs)("p",{children:["Pico provides a ",(0,e.jsx)("code",{children:".classless"})," version (",(0,e.jsx)(o,{to:w.links.preview,children:"example"}),")."]}),(0,e.jsxs)("p",{children:["In this version, ",(0,e.jsx)(s,{display:"inline",children:"<header>"}),","," ",(0,e.jsx)(s,{display:"inline",children:"<main>"}),", and ",(0,e.jsx)(s,{display:"inline",children:"<footer>"})," ","inside ",(0,e.jsx)(s,{display:"inline",children:"<body>"})," act as"," ",(0,e.jsx)(o,{to:"/docs/container",children:"containers"})," to define a centered or a fluid viewport."]}),(0,e.jsx)(s,{language:"css",children:`/* Containers */
body > header,
body > main,
body > footer {
  ...
}`}),(0,e.jsx)("p",{children:"These 2 pages have the same style:"}),(0,e.jsx)(s,{children:`<!-- With pico.min.css -->
<body>
  <main class="container">
    <h1>Hello, world!</h1>
  </main>
</body>`}),(0,e.jsx)(s,{children:`<!-- With pico.classless.min.css -->
<body>
  <main>
    <h1>Hello, world!</h1>
  </main>
</body>`}),(0,e.jsxs)("p",{children:["See the ",(0,e.jsx)(o,{to:"/docs/version-picker",children:"version picker"})," to easily select the ideal Pico CSS version variant to match your project's needs."]})]}),(0,e.jsxs)("section",{ref:l,children:[(0,e.jsx)(a,{level:2,anchor:"usage",children:"Usage"}),(0,e.jsxs)("p",{children:["Use the default ",(0,e.jsx)("code",{children:".classless"})," version if you need centered viewports:"]}),(0,e.jsx)(s,{className:"small",children:'<link rel="stylesheet" href="css/pico.classless.min.css">'}),(0,e.jsxs)("p",{children:["Or use the ",(0,e.jsx)("code",{children:".fluid.classless"})," version if you need a fluid container:"]}),(0,e.jsx)(s,{className:"small",children:'<link rel="stylesheet" href="css/pico.fluid.classless.min.css">'}),(0,e.jsxs)("p",{children:["These ",(0,e.jsx)("code",{children:".classless"})," versions are also available on"," ",(0,e.jsx)("a",{href:r,children:"jsDelivr CDN"}),":"]}),(0,e.jsx)(s,{children:`<!-- Centered viewport -->
<link
  rel="stylesheet"
  href="${r}css/pico.classless.min.css"
>`}),(0,e.jsx)(s,{children:`<!-- Fluid viewport -->
<link
  rel="stylesheet"
  href="${r}css/pico.fluid.classless.min.css"
>`})]}),(0,e.jsxs)("section",{ref:c,children:[(0,e.jsx)(a,{level:2,anchor:"root-container",children:"Root container"}),(0,e.jsxs)("p",{children:["If you need to customize the default root container for"," ",(0,e.jsx)(s,{display:"inline",children:"<header>"}),", ",(0,e.jsx)(s,{display:"inline",children:"<main>"}),", and ",(0,e.jsx)(s,{display:"inline",children:"<footer>"}),", you can recompile Pico with another CSS selector."]}),(0,e.jsxs)("p",{children:["Useful for ",(0,e.jsx)("a",{href:"https://reactjs.org/",children:"React"}),","," ",(0,e.jsx)("a",{href:"https://www.gatsbyjs.com/",children:"Gatsby"}),", or"," ",(0,e.jsx)("a",{href:"https://nextjs.org/",children:"Next.js"}),"."]}),(0,e.jsx)(s,{language:"scss",children:`/* Custom Class-less version for React */
@use "pico" with (
  
  // Define the root element used to target <header>, <main>, <footer>
  // with $enable-semantic-container and $enable-responsive-spacings
  $semantic-root-element: "#root";
  
  // Enable <header>, <main>, <footer> inside $semantic-root-element as containers
  $enable-semantic-container: true;

  // Enable .classes
  $enable-classes: false;
)`}),(0,e.jsx)("p",{children:"The code above will compile Pico with the containers defined like this:"}),(0,e.jsx)(s,{language:"css",children:`/* Containers */
#root > header,
#root > main,
#root > footer {
  ...
}`}),(0,e.jsxs)("p",{children:["Learn more about"," ",(0,e.jsx)(o,{to:"/docs/sass",children:"compiling a custom version of Pico with SASS"}),"."]})]}),(0,e.jsx)(h,{file:"docs.classless.jsx"})]})]})}export{v as default,g as meta};
