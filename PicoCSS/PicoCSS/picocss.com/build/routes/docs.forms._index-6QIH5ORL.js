import{a as h}from"/build/_shared/chunk-RI7YJF2N.js";import{a as b}from"/build/_shared/chunk-YSWQKXFT.js";import"/build/_shared/chunk-LVW6VCGV.js";import"/build/_shared/chunk-GL7VW4BM.js";import{a as c,b as f}from"/build/_shared/chunk-JT4PCSGL.js";import"/build/_shared/chunk-BZ4AUIAY.js";import{a as d}from"/build/_shared/chunk-PGB5EDTS.js";import{a}from"/build/_shared/chunk-2LGDFLPT.js";import"/build/_shared/chunk-SNDHQUDE.js";import{a as r}from"/build/_shared/chunk-OLA7NHCU.js";import{a as i}from"/build/_shared/chunk-UUMWCJG3.js";import"/build/_shared/chunk-WBY45DIQ.js";import{b as o,c as w,q as u}from"/build/_shared/chunk-YTHO3L5P.js";var l=o(w());var e=o(u()),{titleSuffix:v}=d,C=()=>[{title:`Forms overview ${v}`},{name:"description",content:"All form elements are fully responsive with pure semantic HTML, enabling forms to scale gracefully across devices and viewports."}];function g(){let t=y=>y.preventDefault(),m=(0,l.useRef)(),n=(0,l.useRef)(),s=(0,l.useRef)(),p=(0,l.useRef)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f,{title:"Forms overview",description:"All form elements are fully responsive with pure semantic HTML, enabling forms to scale gracefully across devices and viewports."}),(0,e.jsx)(h,{data:[{anchor:"",title:"Introduction",ref:m},{anchor:"helper-text",title:"Helper text",ref:p},{anchor:"usage-with-grid",title:"Usage with grid",ref:n},{anchor:"usage-with-group",title:"Usage with group",ref:s}]}),(0,e.jsxs)(c,{children:[(0,e.jsxs)("section",{"aria-label":"Introduction",ref:m,children:[(0,e.jsxs)("p",{children:["Inputs are ",(0,e.jsx)(a,{display:"inline",language:"css",children:"width: 100%;"})," by default and are the same size as the buttons to build consistent forms."]}),(0,e.jsxs)("article",{"aria-label":"Form example",className:"component",children:[(0,e.jsxs)("form",{onSubmit:t,children:[(0,e.jsxs)("fieldset",{children:[(0,e.jsxs)("label",{children:["First name",(0,e.jsx)("input",{name:"first_name",placeholder:"First name",autoComplete:"given-name"})]}),(0,e.jsxs)("label",{children:["Email",(0,e.jsx)("input",{type:"email",name:"email",placeholder:"Email",autoComplete:"email"})]})]}),(0,e.jsx)("input",{type:"submit",value:"Subscribe"})]}),(0,e.jsx)(a,{as:"footer",children:`<form>
  <fieldset>
    <label>
      First name
      <input
        name="first_name"
        placeholder="First name"
        autocomplete="given-name"
      />
    </label>
    <label>
      Email
      <input
        type="email"
        name="email"
        placeholder="Email"
        autocomplete="email"
      />
    </label>
  </fieldset>

  <input
    type="submit"
    value="Subscribe"
  />
</form>`})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)(a,{display:"inline",children:"<input>"})," can be inside or outside"," ",(0,e.jsx)(a,{display:"inline",children:"<label>"}),"."]}),(0,e.jsxs)("article",{"aria-label":"Label and input syntax",className:"component",children:[(0,e.jsxs)("form",{children:[(0,e.jsxs)("label",{children:["First name",(0,e.jsx)("input",{name:"first_name",placeholder:"First name",autoComplete:"given-name"})]}),(0,e.jsx)("label",{htmlFor:"email",children:"Email"}),(0,e.jsx)("input",{type:"email",id:"email",placeholder:"Email",autoComplete:"email"})]}),(0,e.jsx)(a,{as:"footer",children:`<form>
  
  <!-- Input inside label -->
  <label>
    First name
    <input
      name="first_name"
      placeholder="First name"
      autocomplete="given-name"
    />
  </label>

  <!-- Input outside label -->
  <label for="email">Email</label>
  <input
    type="email"
    id="email"
    placeholder="Email"
    autocomplete="email"
  />

</form>`})]})]}),(0,e.jsxs)("section",{ref:p,children:[(0,e.jsx)(i,{level:2,anchor:"helper-text",children:"Helper text"}),(0,e.jsxs)("p",{children:[(0,e.jsx)(a,{display:"inline",children:"<small>"})," below form elements are muted and act as helper texts."]}),(0,e.jsxs)("article",{"aria-label":"Form helpers example",className:"component",children:[(0,e.jsx)("input",{type:"email",name:"email",placeholder:"Email",autoComplete:"email","aria-label":"Email","aria-describedby":"email-helper"}),(0,e.jsx)("small",{id:"email-helper",children:"We\u2019ll never share your email with anyone else."}),(0,e.jsx)(a,{as:"footer",children:`<input
  type="email"
  name="email"
  placeholder="Email"
  autoComplete="email"
  aria-label="Email"
  aria-describedby="email-helper"
/>
<small id="email-helper">
  We'll never share your email with anyone else.
</small>`})]})]}),(0,e.jsxs)("section",{ref:n,children:[(0,e.jsx)(i,{level:2,anchor:"usage-with-grid",children:"Usage with grid"}),(0,e.jsxs)("p",{children:["You can use ",(0,e.jsx)("code",{children:".grid"})," inside a form. See ",(0,e.jsx)(r,{to:"/docs/grid",children:"Grid"}),"."]}),(0,e.jsxs)("article",{"aria-label":"Form and grid example",className:"component",children:[(0,e.jsx)("form",{onSubmit:t,children:(0,e.jsxs)("fieldset",{className:"grid",children:[(0,e.jsx)("input",{name:"login",placeholder:"Login","aria-label":"Login",autoComplete:"username"}),(0,e.jsx)("input",{type:"password",name:"password",placeholder:"Password","aria-label":"Password",autoComplete:"current-password"}),(0,e.jsx)("input",{type:"submit",value:"Log in"})]})}),(0,e.jsx)(a,{as:"footer",children:`<form>
  <fieldset class="grid">
    <input 
      name="login"
      placeholder="Login"
      aria-label="Login"
      autocomplete="username"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      aria-label="Password"
      autocomplete="current-password"
    />
    <input
      type="submit"
      value="Log in"
    />
  </fieldset>
</form>`})]})]}),(0,e.jsxs)("section",{ref:s,children:[(0,e.jsx)(i,{level:2,anchor:"usage-with-group",children:"Usage with group"}),(0,e.jsxs)("p",{children:["You can use ",(0,e.jsx)("code",{children:'role="group"'})," with form elements. See"," ",(0,e.jsx)(r,{to:"/docs/group",children:"Group"}),"."]}),(0,e.jsxs)("article",{className:"component","aria-label":"Form group example",children:[(0,e.jsx)("form",{onSubmit:t,children:(0,e.jsxs)("fieldset",{role:"group",children:[(0,e.jsx)("input",{type:"email",name:"email",placeholder:"Enter your email",autoComplete:"email"}),(0,e.jsx)("input",{type:"submit",value:"Subscribe"})]})}),(0,e.jsx)(a,{as:"footer",children:`<form>
  <fieldset role="group">
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      autocomplete="email"
    />
    <input type="submit" value="Subscribe" />
  </fieldset>
</form>`})]})]}),(0,e.jsx)(b,{file:"docs.forms._index.jsx"})]})]})}export{g as default,C as meta};