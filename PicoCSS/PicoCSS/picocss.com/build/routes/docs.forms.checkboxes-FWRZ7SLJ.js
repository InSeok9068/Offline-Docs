import{a as f}from"/build/_shared/chunk-RI7YJF2N.js";import{a as m}from"/build/_shared/chunk-YSWQKXFT.js";import"/build/_shared/chunk-LVW6VCGV.js";import"/build/_shared/chunk-GL7VW4BM.js";import{a as b,b as p}from"/build/_shared/chunk-JT4PCSGL.js";import"/build/_shared/chunk-BZ4AUIAY.js";import{a as h}from"/build/_shared/chunk-PGB5EDTS.js";import{a as t}from"/build/_shared/chunk-2LGDFLPT.js";import"/build/_shared/chunk-SNDHQUDE.js";import"/build/_shared/chunk-OLA7NHCU.js";import{a as i}from"/build/_shared/chunk-UUMWCJG3.js";import"/build/_shared/chunk-WBY45DIQ.js";import{b as l,c as x,q as s}from"/build/_shared/chunk-YTHO3L5P.js";var a=l(x());var e=l(s()),{titleSuffix:g}=h,y=()=>[{title:`Checkboxes ${g}`},{name:"description",content:"The native <input type='checkbox'> with a custom and responsive style."}];function u(){let o=(0,a.useRef)(),c=(0,a.useRef)(),r=(0,a.useRef)(),n=(0,a.useRef)(),d=(0,a.useRef)();return(0,a.useEffect)(()=>{if(!n.current)return;let k=n.current;k.indeterminate=!0},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p,{title:"Checkboxes",description:(0,e.jsxs)(e.Fragment,{children:["The native ",(0,e.jsx)(t,{display:"inline",children:'<input type="checkbox">'})," with a custom and responsive style."]})}),(0,e.jsx)(f,{data:[{anchor:"",title:"Syntax",ref:o},{anchor:"horizontal-stacking",title:"Horizontal stacking",ref:c},{anchor:"indeterminate",title:"Indeterminate",ref:r},{anchor:"validation-states",title:"Validation states",ref:d}]}),(0,e.jsxs)(b,{children:[(0,e.jsx)("section",{ref:o,children:(0,e.jsxs)("article",{"aria-label":"Checkboxes example",className:"component",children:[(0,e.jsxs)("fieldset",{children:[(0,e.jsx)("legend",{children:"Language preferences:"}),(0,e.jsxs)("label",{children:[(0,e.jsx)("input",{type:"checkbox",name:"english",defaultChecked:!0}),"English"]}),(0,e.jsxs)("label",{children:[(0,e.jsx)("input",{type:"checkbox",name:"french",defaultChecked:!0}),"French"]}),(0,e.jsxs)("label",{children:[(0,e.jsx)("input",{type:"checkbox",name:"mandarin"}),"Mandarin"]}),(0,e.jsxs)("label",{children:[(0,e.jsx)("input",{type:"checkbox",name:"thai"}),"Thai"]}),(0,e.jsxs)("label",{"aria-disabled":"true",children:[(0,e.jsx)("input",{type:"checkbox",name:"dothraki",disabled:!0}),"Dothraki"]})]}),(0,e.jsx)(t,{as:"footer",children:`<fieldset>
  <legend>Language preferences:</legend>
  <label>
    <input type="checkbox" name="english" checked />
    English
  </label>
  <label>
    <input type="checkbox" name="french" checked />
    French
  </label>
  <label>
    <input type="checkbox" name="mandarin" />
    Mandarin
  </label>
  <label>
    <input type="checkbox" name="thai" />
    Thai
  </label>
  <label aria-disabled="true">
    <input type="checkbox" name="dothraki" disabled />
    Dothraki
  </label>
</fieldset>`})]})}),(0,e.jsxs)("section",{ref:c,children:[(0,e.jsx)(i,{level:2,anchor:"horizontal-stacking",children:"Horizontal stacking"}),(0,e.jsxs)("article",{"aria-label":"Horizontal stacking example",className:"component",children:[(0,e.jsxs)("fieldset",{children:[(0,e.jsx)("legend",{children:"Language preferences:"}),(0,e.jsx)("input",{type:"checkbox",id:"hindi",name:"hindi",defaultChecked:!0}),(0,e.jsx)("label",{htmlFor:"hindi",children:"Hindi"}),(0,e.jsx)("input",{type:"checkbox",id:"swahili",name:"swahili"}),(0,e.jsx)("label",{htmlFor:"swahili",children:"Swahili"}),(0,e.jsx)("input",{type:"checkbox",id:"navi",name:"navi",disabled:!0}),(0,e.jsx)("label",{htmlFor:"navi","aria-disabled":"true",children:"Na'vi"})]}),(0,e.jsx)(t,{as:"footer",children:`<fieldset>
  <legend>Language preferences:</legend>
  <input type="checkbox" id="hindi" name="hindi" checked />
  <label htmlFor="hindi">Hindi</label>
  <input type="checkbox" id="swahili" name="swahili" />
  <label htmlFor="swahili">Swahili</label>
  <input type="checkbox" id="navi" name="navi" disabled />
  <label htmlFor="navi" aria-disabled="true">Na'vi</label>
</fieldset>`})]})]}),(0,e.jsxs)("section",{ref:r,children:[(0,e.jsx)(i,{level:2,anchor:"indeterminate",children:"Indeterminate"}),(0,e.jsxs)("p",{children:["You can change a checkbox to an indeterminate state by setting the"," ",(0,e.jsx)("code",{children:"indeterminate"})," property to ",(0,e.jsx)("code",{children:"true"}),"."]}),(0,e.jsxs)("article",{"aria-label":"Indeterminate checkbox example",className:"component",children:[(0,e.jsxs)("label",{children:[(0,e.jsx)("input",{type:"checkbox",name:"indeterminate",ref:n}),"Indeterminate"]}),(0,e.jsx)(t,{as:"footer",children:`<label>
  <input type="checkbox" id="indeterminate" name="indeterminate" />
  Indeterminate
</label>

<script>
  const checkbox = document.querySelector('#indeterminate');
  checkbox.indeterminate = true;
<\/script>

`})]})]}),(0,e.jsxs)("section",{ref:d,children:[(0,e.jsx)(i,{level:2,anchor:"validation-states",children:"Validation states"}),(0,e.jsxs)("p",{children:["Validation states are provided with ",(0,e.jsx)("code",{children:"aria-invalid"}),"."]}),(0,e.jsxs)("article",{"aria-label":"Validation states example",className:"component",children:[(0,e.jsxs)("label",{children:[(0,e.jsx)("input",{type:"checkbox",name:"valid","aria-invalid":!1}),"Valid"]}),(0,e.jsxs)("label",{children:[(0,e.jsx)("input",{type:"checkbox",name:"invalid","aria-invalid":!0}),"Invalid"]}),(0,e.jsx)(t,{as:"footer",children:`<label>
  <input type="checkbox" name="valid" aria-invalid="false" />
  Valid
</label>

<label>
  <input type="checkbox" name="invalid" aria-invalid="true" />
  Invalid
</label>`})]})]}),(0,e.jsx)(m,{file:"docs.forms.checkboxes.jsx"})]})]})}export{u as default,y as meta};
