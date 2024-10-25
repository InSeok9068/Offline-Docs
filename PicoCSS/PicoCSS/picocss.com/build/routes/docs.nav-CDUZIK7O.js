import{a as S}from"/build/_shared/chunk-TDEEKD4Z.js";import{a as $}from"/build/_shared/chunk-RI7YJF2N.js";import{a as N}from"/build/_shared/chunk-YSWQKXFT.js";import"/build/_shared/chunk-LVW6VCGV.js";import{a as y}from"/build/_shared/chunk-SNWS3XCL.js";import"/build/_shared/chunk-GL7VW4BM.js";import{a as w,b as L}from"/build/_shared/chunk-JT4PCSGL.js";import"/build/_shared/chunk-BZ4AUIAY.js";import{a as C}from"/build/_shared/chunk-PGB5EDTS.js";import{a as t}from"/build/_shared/chunk-2LGDFLPT.js";import"/build/_shared/chunk-SNDHQUDE.js";import{a as o}from"/build/_shared/chunk-OLA7NHCU.js";import{a as u}from"/build/_shared/chunk-UUMWCJG3.js";import"/build/_shared/chunk-WBY45DIQ.js";import{b as v,c as x,q as g}from"/build/_shared/chunk-YTHO3L5P.js";var s=v(x());var e=v(g()),{titleSuffix:I}=C,R=()=>[{title:`Nav ${I}`},{name:"description",content:"The essential navbar component in pure semantic HTML."}],r="Acme Corp",a=["About","Services","Products"],T=["Solid","Liquid","Gas","Plasma"],f=["Profile","Settings","Security","Logout"];function D({children:n,className:c,...d}){return(0,e.jsx)(o,{to:"#",onClick:p=>p.preventDefault(),...c&&{className:c},...d,children:n})}function B({items:n=T,dir:c,id:d}){return(0,e.jsx)("ul",{dir:c,id:d,children:n.map(m=>(0,e.jsx)("li",{children:(0,e.jsx)(D,{children:m})},m))})}function H(){let n=l=>l.preventDefault(),c=(0,s.useRef)(),d=(0,s.useRef)(),m=(0,s.useRef)(),p=(0,s.useRef)(),b=(0,s.useRef)(),k=(0,s.useRef)(),h=(0,s.useRef)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("nav",{"aria-label":"overflow-with-focus",children:[(0,e.jsx)("ul",{children:a.slice(0,2).map(l=>{let i=l===a[0];return(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,...i&&{className:"focused"},children:l})},l)})}),(0,e.jsx)("ul",{children:a[2]&&(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,className:"focused",children:a[2]})},a[2])})]}),(0,e.jsx)(L,{title:"Nav",description:"The essential navbar component in pure semantic HTML."}),(0,e.jsx)($,{data:[{anchor:"",title:"Syntax",ref:c},{anchor:"link-variants",title:"Link variants",ref:d},{anchor:"buttons",title:"Buttons",ref:m},{anchor:"dropdowns",title:"Dropdowns",ref:p},{anchor:"vertical-stacking",title:"Vertical stacking",ref:b},{anchor:"breadcrumb",title:"Breadcrumb",ref:k},{anchor:"overflow",title:"Overflow",ref:h}]}),(0,e.jsxs)(w,{children:[(0,e.jsxs)("section",{ref:c,children:[(0,e.jsxs)("article",{"aria-label":"Nav example",className:"component",children:[(0,e.jsxs)("nav",{children:[(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)("strong",{children:r})})}),(0,e.jsx)("ul",{children:a.map(l=>(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,children:l})},l))})]}),(0,e.jsx)(t,{as:"footer",children:`<nav>
  <ul>
    <li><strong>${r}</strong></li>
  </ul>
  <ul>
    ${a.map((l,i)=>`${i!==0?"    ":""}<li><a href="#">${l}</a></li>${i!==a.length-1?`
`:""}`).join("")}
  </ul>
</nav>`})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)(t,{display:"inline",children:"<ul>"})," are automatically distributed horizontally."]}),(0,e.jsxs)("p",{children:[(0,e.jsx)(t,{display:"inline",children:"<li>"})," are unstyled and inlined."]}),(0,e.jsxs)("p",{children:[(0,e.jsx)(t,{display:"inline",children:"<a>"})," are underlined only on ",(0,e.jsx)("code",{children:":hover"}),"."]})]}),(0,e.jsxs)("section",{ref:d,children:[(0,e.jsx)(u,{level:2,anchor:"link-variants",children:"Link variants"}),(0,e.jsxs)("p",{children:["You can use ",(0,e.jsx)("code",{children:".secondary"}),", ",(0,e.jsx)("code",{children:".contrast"}),", and ",(0,e.jsx)("code",{children:".outline"})," ","classes (not available in the ",(0,e.jsx)(o,{to:"/docs/classless",children:"class-less version"}),")."]}),(0,e.jsxs)("article",{"aria-label":"Nav example",className:"component",children:[(0,e.jsxs)("nav",{children:[(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)("strong",{children:r})})}),(0,e.jsx)("ul",{children:a.map(l=>(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",className:"contrast",onClick:n,children:l})},l))})]}),(0,e.jsx)(t,{as:"footer",children:`<nav>
  <ul>
    <li><strong>${r}</strong></li>
  </ul>
  <ul>
    ${a.map((l,i)=>`${i!==0?"    ":""}<li><a href="#" class="contrast">${l}</a></li>${i!==a.length-1?`
`:""}`).join("")}
  </ul>
</nav>`})]}),(0,e.jsxs)("article",{"aria-label":"Nav example",className:"component",children:[(0,e.jsxs)("nav",{children:[(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,className:"secondary","aria-label":"Menu",children:(0,e.jsx)(S,{height:"1rem",width:"100%"})})})}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)("strong",{children:r})})}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,className:"secondary","aria-label":"Twitter",children:(0,e.jsx)(y,{height:"1rem",width:"100%"})})})})]}),(0,e.jsx)(t,{as:"footer",children:`<nav>
  <ul>
    <li><a href="#" class="secondary">...</a></li>
  </ul>
  <ul>
    <li><strong>${r}</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="secondary">...</a></li>
  </ul>
</nav>`})]})]}),(0,e.jsxs)("section",{ref:m,children:[(0,e.jsx)(u,{level:2,anchor:"buttons",children:"Buttons"}),(0,e.jsxs)("p",{children:["You can use ",(0,e.jsx)(t,{display:"inline",children:"<button>"})," inside"," ",(0,e.jsx)(t,{display:"inline",children:"<li>"}),"."]}),(0,e.jsx)("p",{children:"Button sizes automatically match link size and margin."}),(0,e.jsxs)("article",{"aria-label":"Nav example",className:"component",children:[(0,e.jsxs)("nav",{children:[(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)("strong",{children:r})})}),(0,e.jsx)("ul",{children:a.map((l,i)=>a.length-1===i?(0,e.jsx)("li",{children:(0,e.jsx)("button",{className:"secondary",children:l})},l):(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,children:l})},l))})]}),(0,e.jsx)(t,{as:"footer",children:`<nav>
  <ul>
    <li><strong>${r}</strong></li>
  </ul>
  <ul>
    ${a.map((l,i)=>`${i!==0?"    ":""}<li>${a.length-1===i?'<button class="secondary">':'<a href="#">'}${l}${a.length-1===i?"</button>":"</a>"}</li>${i!==a.length-1?`
`:""}`).join("")}
  </ul>
</nav>`})]})]}),(0,e.jsxs)("section",{ref:p,children:[(0,e.jsx)(u,{level:2,anchor:"dropdowns",children:"Dropdowns"}),(0,e.jsxs)("p",{children:["You can use ",(0,e.jsx)(o,{to:"/docs/dropdown",children:"dropdowns"})," inside Nav."]}),(0,e.jsxs)("article",{"aria-label":"Dropdowns inside nav",className:"component",children:[(0,e.jsxs)("nav",{children:[(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:(0,e.jsx)("strong",{children:"Acme Corp"})})}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(D,{className:"secondary",children:"Services"})}),(0,e.jsx)("li",{children:(0,e.jsxs)("details",{className:"dropdown",children:[(0,e.jsx)("summary",{children:"Account"}),(0,e.jsx)(B,{items:f,dir:"rtl"})]})})]})]}),(0,e.jsx)(t,{as:"footer",children:`<nav>
  <ul>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul>
    <li><a href="#" class="secondary">Services</a></li>
    <li>
      <details class="dropdown">
        <summary>
          Account
        </summary>
        <ul dir="rtl">
${f.map((l,i)=>`          <li><a href="#">${l}</a></li>${i!==f.length-1?`
`:""}`).join("")}
        </ul>
      </details>
    </li>
  </ul>
</nav>`})]})]}),(0,e.jsxs)("section",{ref:b,children:[(0,e.jsx)(u,{level:2,anchor:"vertical-stacking",children:"Vertical stacking"}),(0,e.jsxs)("p",{children:["Inside ",(0,e.jsx)(t,{display:"inline",children:"<aside>"}),", navs items are stacked vertically."]}),(0,e.jsxs)("article",{"aria-label":"Vertical nav example",className:"component",children:[(0,e.jsx)("aside",{children:(0,e.jsx)("nav",{children:(0,e.jsx)("ul",{children:a.map(l=>(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,children:l})},l))})})}),(0,e.jsx)(t,{as:"footer",children:`<aside>
  <nav>
    <ul>
      ${a.map((l,i)=>`${i!==0?"      ":""}<li><a href="#">${l}</a></li>${i!==a.length-1?`
`:""}`).join("")}
    </ul>
  </nav>
</aside>`})]})]}),(0,e.jsxs)("section",{ref:k,children:[(0,e.jsx)(u,{level:2,anchor:"breadcrumb",children:"Breadcrumb"}),(0,e.jsxs)("p",{children:["With ",(0,e.jsx)(t,{display:"inline",children:'<nav aria-label="breadcrumb">'}),", you can turn a nav into a breadcrumb."]}),(0,e.jsxs)("article",{"aria-label":"Breadcrumb example",className:"component",children:[(0,e.jsx)("nav",{"aria-label":"breadcrumb",children:(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,children:"Home"})}),(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,children:"Services"})}),(0,e.jsx)("li",{children:"Design"})]})}),(0,e.jsx)(t,{as:"footer",children:`<nav aria-label="breadcrumb">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Services</a></li>
    <li>Design</li>
  </ul>
</nav>`})]}),(0,e.jsxs)("p",{children:["You can change the divider with a local CSS custom property"," ",(0,e.jsx)("code",{children:"--pico-nav-breadcrumb-divider"}),"."]}),(0,e.jsxs)("article",{"aria-label":"Breadcrumb example",className:"component",children:[(0,e.jsx)("nav",{"aria-label":"breadcrumb",style:{"--pico-nav-breadcrumb-divider":"'\u2728'"},children:(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,children:"Home"})}),(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,children:"Services"})}),(0,e.jsx)("li",{children:"Design"})]})}),(0,e.jsx)(t,{as:"footer",children:`<nav
  aria-label="breadcrumb"
  style="--pico-nav-breadcrumb-divider: '\u2728';"
>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Services</a></li>
    <li>Design</li>
  </ul>
</nav>`})]})]}),(0,e.jsxs)("section",{id:"overflow",ref:h,children:[(0,e.jsx)(u,{level:2,anchor:"overflow",children:"Overflow"}),(0,e.jsxs)("p",{children:["The ",(0,e.jsx)(t,{display:"inline",children:"<nav>"})," component uses"," ",(0,e.jsx)(t,{display:"inline",language:"css",children:"overflow: visible;"})," ","on the container and negative margins on childrens to provide a nice"," ",(0,e.jsx)("code",{children:"::focus-visible"})," style for links on keyboard navigation while keeping the content aligned horizontally."]}),(0,e.jsxs)("article",{"aria-label":"Overflow example",className:"component",children:[(0,e.jsxs)("nav",{"aria-label":"overflow",children:[(0,e.jsx)("ul",{children:a.slice(0,2).map(l=>(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,children:l})},l))}),(0,e.jsx)("ul",{children:a[2]&&(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,children:a[2]})},a[2])})]}),(0,e.jsxs)("nav",{"aria-label":"overflow-with-focus",children:[(0,e.jsx)("ul",{children:a.slice(0,2).map(l=>{let i=l===a[0];return(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,...i&&{className:"focused"},children:l})},l)})}),(0,e.jsx)("ul",{children:a[2]&&(0,e.jsx)("li",{children:(0,e.jsx)(o,{to:"#",onClick:n,className:"focused",children:a[2]})},a[2])})]})]})]}),(0,e.jsx)(N,{file:"docs.nav.jsx"})]})]})}export{H as default,R as meta};
