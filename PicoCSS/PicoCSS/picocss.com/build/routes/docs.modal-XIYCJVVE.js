import{a as m}from"/build/_shared/chunk-DMGV2FYD.js";import{a as x}from"/build/_shared/chunk-RI7YJF2N.js";import{a as w}from"/build/_shared/chunk-YSWQKXFT.js";import"/build/_shared/chunk-LVW6VCGV.js";import{a as C}from"/build/_shared/chunk-L5VKHY6F.js";import"/build/_shared/chunk-GL7VW4BM.js";import{a as y,b as k}from"/build/_shared/chunk-JT4PCSGL.js";import"/build/_shared/chunk-BZ4AUIAY.js";import{a as v}from"/build/_shared/chunk-PGB5EDTS.js";import{a as o}from"/build/_shared/chunk-2LGDFLPT.js";import"/build/_shared/chunk-SNDHQUDE.js";import{a as l}from"/build/_shared/chunk-OLA7NHCU.js";import{a as n}from"/build/_shared/chunk-UUMWCJG3.js";import"/build/_shared/chunk-WBY45DIQ.js";import{b as p,c as L,q as b}from"/build/_shared/chunk-YTHO3L5P.js";var r=p(L());var e=p(b()),{titleSuffix:O}=v,F=()=>[{title:`Modal ${O}`},{name:"description",content:"The classic modal component with graceful spacings across devices and viewports, using the semantic HTML tag <dialog>."}],H=({preventDefault:a,...t})=>(0,e.jsx)("dialog",{...t,children:(0,e.jsxs)("article",{children:[(0,e.jsxs)("header",{children:[(0,e.jsx)("button",{"aria-label":"Close",rel:"prev",onClick:a}),(0,e.jsx)("p",{children:(0,e.jsx)("strong",{children:"\u{1F5D3}\uFE0F Thank You for Registering!"})})]}),(0,e.jsx)("p",{children:"We\u2019re excited to have you join us for our upcoming event. Please arrive at the museum on time to check in and get started."}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:"Date: Saturday, April 15"}),(0,e.jsx)("li",{children:"Time: 10:00am - 12:00pm"})]})]})}),M=({handleClickOverlay:a,modalIsOpen:t,onCloseModal:s,...d})=>(0,e.jsx)("dialog",{onClick:a,open:t,...d,children:(0,e.jsxs)("article",{children:[(0,e.jsx)(n,{level:2,children:"Confirm Your Membership"}),(0,e.jsx)("p",{children:"Thank you for signing up for a membership! Please review the membership details below:"}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:"Membership: Individual"}),(0,e.jsx)("li",{children:"Price: $10"})]}),(0,e.jsxs)("footer",{children:[(0,e.jsx)("button",{className:"secondary",onClick:s,children:"Cancel"}),(0,e.jsx)("button",{onClick:s,children:"Confirm"})]})]})});function T(){let t=m.find(i=>i.title==="Preview").links.editor.replace("%2Findex.html","%2Fjs%2Fmodal.js"),d=m.find(i=>i.title==="React color schemes and modal").links.editor.replace("%2Fsrc%2FApp.js","%2Fsrc%2Fcomponents%2FModal.js"),{modalIsOpen:E,onOpenModal:D,onCloseModal:u}=C(),c=i=>i.preventDefault(),h=(0,r.useRef)(),g=(0,r.useRef)(),f=(0,r.useRef)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(M,{handleClickOverlay:i=>{i.target===i.currentTarget&&u()},modalIsOpen:E,onCloseModal:u}),(0,e.jsx)(k,{title:"Modal",description:(0,e.jsxs)(e.Fragment,{children:["The classic modal component with graceful spacings across devices and viewports, using the semantic HTML tag ",(0,e.jsx)(o,{display:"inline",children:"<dialog>"}),"."]})}),(0,e.jsx)(x,{data:[{anchor:"",title:"Syntax",ref:h},{anchor:"demo",title:"Demo",ref:g},{anchor:"utilities",title:"Utilities",ref:f}]}),(0,e.jsxs)(y,{children:[(0,e.jsxs)("section",{ref:h,children:[(0,e.jsxs)("p",{children:["Modals are built with ",(0,e.jsx)(o,{display:"inline",children:"<dialog>"})," as a wrapper and"," ",(0,e.jsx)(o,{display:"inline",children:"<article>"})," for the modal content."]}),(0,e.jsxs)("p",{children:["Inside ",(0,e.jsx)(o,{display:"inline",children:"<header>"})," ",(0,e.jsx)(o,{display:"inline",children:'<button rel="prev">'})," is defined to"," ",(0,e.jsx)("code",{children:"float: right;"})," allowing a close icon to be top aligned with a title."]}),(0,e.jsx)(H,{preventDefault:c,className:"example",open:!0}),(0,e.jsx)(o,{children:`<dialog open>
  <article>
    <header>
      <button aria-label="Close" rel="prev"></button>
      <p>
        <strong>\u{1F5D3}\uFE0F Thank You for Registering!</strong>
      </p>
    </header>
    <p>
      We're excited to have you join us for our
      upcoming event. Please arrive at the museum 
      on time to check in and get started.
    </p>
    <ul>
      <li>Date: Saturday, April 15</li>
      <li>Time: 10:00am - 12:00pm</li>
    </ul>
  </article>
</dialog>`}),(0,e.jsxs)("p",{children:["Inside ",(0,e.jsx)(o,{display:"inline",children:"<footer>"}),", the content is right aligned by default."]}),(0,e.jsx)(M,{handleClickOverlay:c,modalIsOpen:!0,onCloseModal:c,className:"example"}),(0,e.jsx)(o,{children:`<dialog open>
  <article>
    <h2>Confirm Your Membership</h2>
    <p>
      Thank you for signing up for a membership!
      Please review the membership details below:
    </p>
    <ul>
      <li>Membership: Individual</li>
      <li>Price: $10</li>
    </ul>
    <footer>
      <button class="secondary">
        Cancel
      </button>
      <button>Confirm</button>
    </footer>
  </article>
</dialog>`})]}),(0,e.jsxs)("section",{ref:g,children:[(0,e.jsx)(n,{level:2,anchor:"demo",children:"Demo"}),(0,e.jsx)("p",{children:"Toggle a modal by clicking the button below."}),(0,e.jsx)("article",{"aria-label":"Modal demo",id:"modal-demo",children:(0,e.jsx)("button",{className:"contrast",onClick:D,children:"Open modal"})}),(0,e.jsx)("p",{children:"Pico does not include JavaScript code. You need to implement your JS to interact with modals."}),(0,e.jsxs)("p",{children:["As a starting point, you can look at the"," ",(0,e.jsx)(l,{to:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement",children:"HTMLDialogElement"})," ","or the advanced examples below:"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:t,children:"Vanilla JavaScript"})}),(0,e.jsx)("li",{children:(0,e.jsx)(l,{to:d,children:"React"})})]}),(0,e.jsxs)("p",{children:["To open a modal, add the ",(0,e.jsx)("code",{children:"open"})," attribute to the",(0,e.jsx)(o,{display:"inline",children:"<dialog>"})," container."]})]}),(0,e.jsxs)("section",{ref:f,children:[(0,e.jsx)(n,{level:2,anchor:"utilities",children:"Utilities"}),(0,e.jsx)("p",{children:"Modals come with 3 utility classes."}),(0,e.jsxs)("p",{children:["These classes are not available in the"," ",(0,e.jsx)(l,{to:"/docs/classless",children:"class-less version"}),"."]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:".modal-is-open"})," prevents any scrolling and interactions below the modal."]}),(0,e.jsx)(o,{children:`<!doctype html>
<html class="modal-is-open">
  ...
</html>`}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:".modal-is-opening"})," brings an opening animation."]}),(0,e.jsx)(o,{children:`<!doctype html>
<html class="modal-is-open modal-is-opening">
  ...
</html>`}),(0,e.jsxs)("p",{children:[(0,e.jsx)("code",{children:".modal-is-closing"})," brings a closing animation."]}),(0,e.jsx)(o,{children:`<!doctype html>
<html class="modal-is-open modal-is-closing">
  ...
</html>`})]}),(0,e.jsx)(w,{file:"docs.modal.jsx"})]})]})}export{T as default,F as meta};
