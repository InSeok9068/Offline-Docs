import{a as h}from"/build/_shared/chunk-RI7YJF2N.js";import{a as f}from"/build/_shared/chunk-YSWQKXFT.js";import"/build/_shared/chunk-LVW6VCGV.js";import"/build/_shared/chunk-GL7VW4BM.js";import{a as m,b as p}from"/build/_shared/chunk-JT4PCSGL.js";import"/build/_shared/chunk-BZ4AUIAY.js";import{a as l}from"/build/_shared/chunk-PGB5EDTS.js";import{a as o}from"/build/_shared/chunk-2LGDFLPT.js";import"/build/_shared/chunk-SNDHQUDE.js";import{a as d}from"/build/_shared/chunk-OLA7NHCU.js";import{a as i}from"/build/_shared/chunk-UUMWCJG3.js";import"/build/_shared/chunk-WBY45DIQ.js";import{b as n,c as b,q as c}from"/build/_shared/chunk-YTHO3L5P.js";var t=n(b());var e=n(c()),{titleSuffix:g}=l,C=()=>[{title:`Landmarks & section ${g}`},{name:"description",content:"Structure your pages with semantic landmarks and sections for better accessibility and graceful spacings."}];function u(){let a=(0,t.useRef)(),r=(0,t.useRef)(),s=(0,t.useRef)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p,{title:"Landmarks & section",description:"Structure your pages with semantic landmarks and sections for better\xA0accessibility and graceful\xA0spacings."}),(0,e.jsx)(h,{data:[{anchor:"",title:"Landmarks",ref:a},{anchor:"root-container",title:"Custom root container",ref:r},{anchor:"section",title:"Section",ref:s}]}),(0,e.jsxs)(m,{children:[(0,e.jsxs)("section",{ref:a,children:[(0,e.jsxs)("p",{children:[(0,e.jsx)(o,{display:"inline",children:"<header>"}),", ",(0,e.jsx)(o,{display:"inline",children:"<main>"})," and"," ",(0,e.jsx)(o,{display:"inline",children:"<footer>"})," as direct children of"," ",(0,e.jsx)(o,{display:"inline",children:"<body>"})," provide a responsive vertical"," ",(0,e.jsx)("code",{children:"padding"})]}),(0,e.jsx)(o,{children:`<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>`})]}),(0,e.jsxs)("section",{ref:r,children:[(0,e.jsx)(i,{level:2,anchor:"root-container",children:"Root container"}),(0,e.jsxs)("p",{children:["If you need to customize the default root container for"," ",(0,e.jsx)(o,{display:"inline",children:"<header>"}),", ",(0,e.jsx)(o,{display:"inline",children:"<main>"}),", and ",(0,e.jsx)(o,{display:"inline",children:"<footer>"}),", you can recompile Pico with another CSS selector."]}),(0,e.jsxs)("p",{children:["Useful for ",(0,e.jsx)("a",{href:"https://reactjs.org/",children:"React"}),","," ",(0,e.jsx)("a",{href:"https://www.gatsbyjs.com/",children:"Gatsby"}),", or"," ",(0,e.jsx)("a",{href:"https://nextjs.org/",children:"Next.js"}),"."]}),(0,e.jsx)(o,{language:"scss",children:`/* Custom Class-less version for React */
@use "pico" with (
  
  // Define the root element used to target <header>, <main>, <footer>
  // with $enable-semantic-container and $enable-responsive-spacings
  $semantic-root-element: "#root",
  
  // Enable <header>, <main>, <footer> inside $semantic-root-element as containers
  $enable-semantic-container: true,

  // Enable .classes
  $enable-classes: false
)`}),(0,e.jsx)("p",{children:"The code above will compile Pico with the containers defined like this:"}),(0,e.jsx)(o,{language:"css",children:`/* Containers */
#root > header,
#root > main,
#root > footer {
  ...
}`}),(0,e.jsxs)("p",{children:["Learn more about"," ",(0,e.jsx)(d,{to:"/docs/sass",children:"compiling a custom version of Pico with SASS"}),"."]})]}),(0,e.jsxs)("section",{ref:s,children:[(0,e.jsx)(i,{level:2,anchor:"section",children:"Section"}),(0,e.jsxs)("p",{children:[(0,e.jsx)(o,{display:"inline",children:"<section>"})," provides a responsive"," ",(0,e.jsx)("code",{children:"margin-bottom"})," to separate your sections."]})]}),(0,e.jsx)(f,{file:"docs.landmarks-section.jsx"})]})]})}export{u as default,C as meta};
