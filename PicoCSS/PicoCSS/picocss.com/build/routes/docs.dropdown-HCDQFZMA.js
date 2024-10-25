import{a as S}from"/build/_shared/chunk-RI7YJF2N.js";import{a as C}from"/build/_shared/chunk-YSWQKXFT.js";import"/build/_shared/chunk-LVW6VCGV.js";import"/build/_shared/chunk-GL7VW4BM.js";import{a as h,b as v}from"/build/_shared/chunk-JT4PCSGL.js";import"/build/_shared/chunk-BZ4AUIAY.js";import{a as f}from"/build/_shared/chunk-PGB5EDTS.js";import{a as t}from"/build/_shared/chunk-2LGDFLPT.js";import"/build/_shared/chunk-SNDHQUDE.js";import{a as m}from"/build/_shared/chunk-OLA7NHCU.js";import{a as u}from"/build/_shared/chunk-UUMWCJG3.js";import"/build/_shared/chunk-WBY45DIQ.js";import{b as y,c as D,q as b}from"/build/_shared/chunk-YTHO3L5P.js";var c=y(D());var a=y(b()),{titleSuffix:k}=f,$=()=>[{title:`Dropdown ${k}`},{name:"description",content:"Create dropdown menus and custom selects with minimal and semantic HTML, without JavaScript."}],o=["Solid","Liquid","Gas","Plasma"],w=["Profile","Settings","Security","Logout"];function N({children:n,className:l,...r}){return(0,a.jsx)(m,{to:"#",onClick:p=>p.preventDefault(),...l&&{className:l},...r,children:n})}function s({items:n=o,dir:l,id:r}){return(0,a.jsx)("ul",{dir:l,id:r,children:n.map(d=>(0,a.jsx)("li",{children:(0,a.jsx)(N,{children:d})},d))})}function x({items:n=o}){return(0,a.jsx)(a.Fragment,{children:n.map(l=>(0,a.jsx)("option",{children:l},l))})}function g(){let n=(0,c.useRef)(),l=(0,c.useRef)(),r=(0,c.useRef)(),d=(0,c.useRef)(),p=(0,c.useRef)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v,{title:"Dropdown",description:"Create dropdown menus and custom selects with minimal and semantic HTML, without JavaScript."}),(0,a.jsx)(S,{data:[{anchor:"",title:"Syntax",ref:n},{anchor:"dropdowns-with-checkboxes-and-radios",title:"Checkboxes and radios",ref:l},{anchor:"button-variants",title:"Button variants",ref:r},{anchor:"validation-states",title:"Validation states",ref:d},{anchor:"usage-with-nav",title:"Usage with nav",ref:p}]}),(0,a.jsxs)(h,{children:[(0,a.jsxs)("section",{ref:n,children:[(0,a.jsxs)("p",{children:["Dropdowns are built with ",(0,a.jsx)(t,{display:"inline",children:'<details class="dropdown">'})," as a wrapper and ",(0,a.jsx)(t,{display:"inline",children:"<summary>"})," and"," ",(0,a.jsx)(t,{display:"inline",children:"<ul>"})," as direct childrens. Unless they are in a"," ",(0,a.jsx)(m,{to:"/docs/nav",children:"Nav"}),", dropdowns are ",(0,a.jsx)("code",{children:"width: 100%;"})," by default."]}),(0,a.jsxs)("p",{children:["Dropdowns are not available in the"," ",(0,a.jsx)(m,{to:"/docs/classless",children:"class\u2011less\xA0version"}),"."]}),(0,a.jsx)("p",{children:"For style consistency with the form elements, dropdowns are styled like a select by default."}),(0,a.jsxs)("article",{"aria-label":"Dropdowns as selects",className:"component",children:[(0,a.jsxs)("div",{className:"grid",children:[(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{children:"Dropdown"}),(0,a.jsx)(s,{})]}),(0,a.jsxs)("select",{name:"select","aria-label":"Select",defaultValue:"",required:!0,children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Select"}),(0,a.jsx)(x,{})]})]}),(0,a.jsx)(t,{as:"footer",children:`<!-- Dropdown -->
<details class="dropdown">
  <summary>Dropdown</summary>
  <ul>
  ${o.map((e,i)=>`${i!==0?"    ":"  "}<li><a href="#">${e}</a></li>${e!==o[o.length-1]?`
`:""}`).join("")}
  </ul>
</details>

<!-- Select -->
<select name="select" aria-label="Select" required>
  <option selected disabled value="">Select</option>
  ${o.map((e,i)=>`${i!==0?"  ":""}<option>${e}</option>${i!==o.length-1&&`
`}`).join("")}
</select>`})]})]}),(0,a.jsxs)("section",{ref:l,children:[(0,a.jsx)(u,{level:2,anchor:"dropdowns-with-checkboxes-and-radios",children:"Dropdowns with checkboxes and radios"}),(0,a.jsxs)("p",{children:["Dropdowns can be used as custom selects with"," ",(0,a.jsx)(t,{display:"inline",children:'<input type="radio">'})," or"," ",(0,a.jsx)(t,{display:"inline",children:'<input type="checkbox">'}),"."]}),(0,a.jsxs)("article",{"aria-label":"Dropdowns with radio buttons or checkboxes",className:"component",children:[(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{children:"Select a phase of matter..."}),(0,a.jsx)("ul",{children:o.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"radio",name:"phase",value:e}),e]})},e))})]}),(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{children:"Select phases of matter..."}),(0,a.jsx)("ul",{children:o.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"checkbox",name:e.toLowerCase(),value:e}),e]})},e))})]}),(0,a.jsx)(t,{as:"footer",language:"html",children:`<!-- Radios -->
<details class="dropdown">
  <summary>
    Select a phase of matter...
  </summary>
  <ul>
  ${o.map((e,i)=>`${i!==0?"    ":"  "}<li>
      <label>
        <input type="radio" name="phase" value="${e.toLowerCase()}" />
        ${e}
      </label>
    </li>${e!==o[o.length-1]?`
`:""}`).join("")}
  </ul>
</details>

<!-- Checkboxes -->
<details class="dropdown">
  <summary>
    Select phases of matter...
  </summary>
  <ul>
  ${o.map((e,i)=>`${i!==0?"    ":"  "}<li>
      <label>
        <input type="checkbox" name="${e.toLowerCase()}" />
        ${e}
      </label>
    </li>${e!==o[o.length-1]?`
`:""}`).join("")}
  </ul>
</details>`})]}),(0,a.jsx)("p",{children:"Pico does not include JavaScript code. You will probably need some JavaScript to interact with these custom dropdowns."})]}),(0,a.jsxs)("section",{ref:r,children:[(0,a.jsx)(u,{level:2,anchor:"button-variants",children:"Button variants"}),(0,a.jsxs)("p",{children:[(0,a.jsx)(t,{display:"inline",children:'<summary role="button">'})," transforms the dropdown into a button."]}),(0,a.jsxs)("article",{"aria-label":"Dropdowns as buttons",className:"component",children:[(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{role:"button",children:"Dropdown as a button"}),(0,a.jsx)(s,{})]}),(0,a.jsx)(t,{as:"footer",children:`<details class="dropdown">
  <summary role="button">
    Dropdown as a button
  </summary>
  <ul>
    ...
  </ul>
</details>`})]}),(0,a.jsxs)("p",{children:["Like regular buttons, they come with ",(0,a.jsx)("code",{children:".secondary"}),", ",(0,a.jsx)("code",{children:".contrast"}),", and ",(0,a.jsx)("code",{children:".outline"})," (not available in the"," ",(0,a.jsx)(m,{to:"/docs/classless",children:"class-less version"}),")."]}),(0,a.jsxs)("article",{"aria-label":"Dropdowns as buttons",className:"component",children:[(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{role:"button",children:"Primary"}),(0,a.jsx)(s,{})]}),(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{role:"button",className:"secondary",children:"Secondary"}),(0,a.jsx)(s,{})]}),(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{role:"button",className:"contrast",children:"Contrast"}),(0,a.jsx)(s,{})]}),(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{role:"button",className:"outline",children:"Primary outline"}),(0,a.jsx)(s,{})]}),(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{role:"button",className:"outline secondary",children:"Secondary outline"}),(0,a.jsx)(s,{})]}),(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{role:"button",className:"outline contrast",children:"Contrast outline"}),(0,a.jsx)(s,{})]}),(0,a.jsx)(t,{as:"footer",children:`<!-- Primary -->
<details class="dropdown">
  <summary role="button">
    Primary
  </summary>
  <ul>
    ...
  </ul>
</details>

<!-- Secondary -->
<details class="dropdown">
  <summary role="button" class="secondary">
    Secondary
  </summary>
  <ul>
    ...
  </ul>
</details>

<!-- Contrast -->
<details class="dropdown">
  <summary role="button" class="contrast">
    Contrast
  </summary>
  <ul>
    ...
  </ul>
</details>

<!-- Primary outline -->
<details class="dropdown">
  <summary role="button" class="outline">
    Primary outline
  </summary>
  <ul>
    ...
  </ul>
</details>

<!-- Secondary outline -->
<details class="dropdown">
  <summary role="button" class="outline secondary">
    Secondary outline
  </summary>
  <ul>
    ...
  </ul>
</details>

<!-- Contrast outline -->
<details class="dropdown">
  <summary role="button" class="outline contrast">
    Contrast outline
  </summary>
  <ul>
    ...
  </ul>
</details>
`})]})]}),(0,a.jsxs)("section",{ref:d,children:[(0,a.jsx)(u,{level:2,anchor:"validation-states",children:"Validation states"}),(0,a.jsxs)("p",{children:["Just like any form elements, validation states are provided with"," ",(0,a.jsx)("code",{children:"aria-invalid"}),"."]}),(0,a.jsxs)("article",{"aria-label":"Dropdowns with validation states",className:"component",children:[(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{"aria-invalid":"false",children:"Valid phase of matter: Solid"}),(0,a.jsx)(s,{})]}),(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{"aria-invalid":"true",children:"Debated classification: Plasma"}),(0,a.jsx)(s,{})]}),(0,a.jsx)(t,{as:"footer",children:`<details class="dropdown">
  <summary aria-invalid="false">
    Valid phase of matter: Solid
  </summary>
  <ul>
    ...
  </ul>
</details>

<details class="dropdown">
  <summary aria-invalid="true">
    Debated classification: Plasma
  </summary>
  <ul>
    ...
  </ul>
</details>`})]})]}),(0,a.jsxs)("section",{ref:p,children:[(0,a.jsxs)(u,{level:2,anchor:"usage-with-nav",children:["Usage with ",(0,a.jsx)(t,{display:"inline",children:"<nav>"})]}),(0,a.jsxs)("p",{children:["You can use dropdowns inside ",(0,a.jsx)(m,{to:"/docs/nav",children:"Nav"}),"."]}),(0,a.jsxs)("p",{children:["To change the alignment of the submenu, simply use"," ",(0,a.jsx)(t,{display:"inline",children:'<ul dir="rtl">'}),"."]}),(0,a.jsxs)("article",{"aria-label":"Dropdowns inside nav",className:"component",children:[(0,a.jsxs)("nav",{children:[(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:(0,a.jsx)("strong",{children:"Acme Corp"})})}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(N,{className:"secondary",children:"Services"})}),(0,a.jsx)("li",{children:(0,a.jsxs)("details",{className:"dropdown",children:[(0,a.jsx)("summary",{children:"Account"}),(0,a.jsx)(s,{items:w,dir:"rtl"})]})})]})]}),(0,a.jsx)(t,{as:"footer",children:`<nav>
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
${w.map((e,i)=>`          <li><a href="#">${e}</a></li>${i!==w.length-1?`
`:""}`).join("")}
        </ul>
      </details>
    </li>
  </ul>
</nav>`})]})]}),(0,a.jsx)(C,{file:"docs.dropdown.jsx"})]})]})}export{g as default,$ as meta};
