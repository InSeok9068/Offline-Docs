import{a as X}from"/build/_shared/chunk-Y7NYAR5B.js";import{a as $}from"/build/_shared/chunk-ZANZRYDV.js";import{a as F}from"/build/_shared/chunk-RI7YJF2N.js";import{a as A}from"/build/_shared/chunk-YSWQKXFT.js";import"/build/_shared/chunk-LVW6VCGV.js";import{a as D}from"/build/_shared/chunk-5KSWBPSR.js";import{a as K}from"/build/_shared/chunk-L5VKHY6F.js";import"/build/_shared/chunk-GL7VW4BM.js";import{a as V,b as L}from"/build/_shared/chunk-JT4PCSGL.js";import"/build/_shared/chunk-BZ4AUIAY.js";import{a as G}from"/build/_shared/chunk-PGB5EDTS.js";import{a as S,b as J,c as W,d as N,e as M,f as x,g as _,h as Y,i as q,j as I,k as O,l as Z}from"/build/_shared/chunk-MHGXEUGW.js";import{a as l}from"/build/_shared/chunk-2LGDFLPT.js";import"/build/_shared/chunk-SNDHQUDE.js";import{a as m}from"/build/_shared/chunk-OLA7NHCU.js";import{a as h}from"/build/_shared/chunk-UUMWCJG3.js";import"/build/_shared/chunk-WBY45DIQ.js";import{b as v,c as C,q as s}from"/build/_shared/chunk-YTHO3L5P.js";var n=v(C());var oo=v(C());function f(c){let a=c.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}var r=v(s());function w({color:c,isOpen:a,onClose:d,setSelectedColor:p,...u}){let b=`pico-background-${c.family}-${c.shade}`,y=S(c),z=J(c),k=W(c),R=N(c),e=i=>{i.target===i.currentTarget&&d(i)};(0,oo.useEffect)(()=>{let i=x(c),E=_(c),P=Y(c),B=q(c),j=g=>{g.key==="ArrowUp"&&p({family:B.family,shade:B.shade})},T=g=>{g.key==="ArrowRight"&&p({family:i.family,shade:i.shade})},U=g=>{g.key==="ArrowDown"&&p({family:P.family,shade:P.shade})},H=g=>{g.key==="ArrowLeft"&&p({family:E.family,shade:E.shade})};return document.addEventListener("keydown",j),document.addEventListener("keydown",T),document.addEventListener("keydown",U),document.addEventListener("keydown",H),()=>{document.removeEventListener("keydown",j),document.removeEventListener("keydown",T),document.removeEventListener("keydown",U),document.removeEventListener("keydown",H)}},[p,d,c]);let t=D(),Q=t?`calc(${t}px - 2rem)`:"calc(100vh - 2rem)";return!a&&!c.hex?null:(0,r.jsx)("dialog",{open:a,className:"color",onClick:e,...u,children:(0,r.jsxs)("article",{style:{"--pico-glowing-color":`${R}26`,maxHeight:Q},children:[(0,r.jsxs)("header",{className:b,children:[(0,r.jsx)("a",{href:"#close",rel:"prev","aria-label":"Close",className:"close",onClick:d,children:(0,r.jsx)(X,{})}),(0,r.jsxs)("hgroup",{children:[(0,r.jsxs)("h3",{className:"color-family",children:[f(c.family),"\xA0",c.shade]}),(0,r.jsx)("p",{className:"color-shade",children:k})]})]}),(0,r.jsxs)("div",{className:"grid",children:[(0,r.jsx)("p",{children:"Hexadecimal color"}),(0,r.jsx)(l,{className:"small",children:y.toUpperCase()}),(0,r.jsx)("p",{children:"RGB color"}),(0,r.jsx)(l,{className:"small",children:z}),(0,r.jsx)("p",{children:"Sass variable"}),(0,r.jsx)(l,{className:"small",children:`$${c.family}-${c.shade}`}),(0,r.jsx)("p",{children:"Color utility class"}),(0,r.jsx)(l,{className:"small",children:`pico-color-${c.family}-${c.shade}`}),(0,r.jsx)("p",{children:"Background utility class"}),(0,r.jsx)(l,{className:"small",children:`pico-background-${c.family}-${c.shade}`}),(0,r.jsx)("p",{children:"CSS variable"}),(0,r.jsx)(l,{className:"small",children:`var(--pico-color-${c.family}-${c.shade})`})]})]})})}var co=`@use "sass:map";
@use "../../settings" as pico-settings;

// Prefix for CSS variables
$css-var-prefix: "--pico-" !default; // Must start with "--"
$css-class-prefix: "pico-" !default;

// Palette
$palette: () !default;
$palette: map.merge(
  (
    // Color families
    "color-families":
      (
        red,
        pink,
        fuchsia,
        purple,
        violet,
        indigo,
        blue,
        azure,
        cyan,
        jade,
        green,
        lime,
        yellow,
        amber,
        pumpkin,
        orange,
        sand,
        grey,
        zinc,
        slate
      ),
    // Shades
    "shades":
      (
        50,
        100,
        150,
        200,
        250,
        300,
        350,
        400,
        450,
        500,
        550,
        600,
        650,
        700,
        750,
        800,
        850,
        900,
        950
      ),
    // Export main color for each family
    "enable-main-color": true,

    // Export shades for each family
    "enable-shades": true,

    // Export black and white
    "enable-black-and-white": false,

    // Light color used for dark backgrounds
    "light-color": #fff,

    // Dark color used for light backgrounds
    "dark-color": #000,

    // Export as HEX, RGB or HSL values
    "export-as": "hex" // hex | rgb | hsl
  ),
  $palette
);

// Properties names used for CSS variables and classes
// Useful if you want to shorten the names
$properties: () !default;
$properties: map.merge(
  (
    "color": "color",
    "background-color": "background",
  ),
  $properties
);

// Utilities to export
$utilities: () !default;
$utilities: map.merge(
  (
    // CSS Vars
    "css-vars": true,

    // Colors utility classes
    "colors": true,

    // Background color utility classes
    "background-colors": true,

    // Color value for background color utility classes
    "color-for-background-colors": true
  ),
  $utilities
);
`;var ro="/build/_assets/customization-colors-palette-importer-3MH32MKA.png";var lo="/build/_assets/color-utilities-5LLOCG3W.css";var o=v(s()),{cdnBaseUrl:io,titleSuffix:uo}=G;function go(){return[{rel:"stylesheet",href:lo}]}var vo=()=>[{title:`Colors ${uo}`},{name:"description",content:"Pico comes with 380 manually crafted colors to help you personalize your brand design system."}],ko=()=>{let[c,a]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let d=JSON.stringify(Z(),null,2),p=new Blob([d],{type:"application/json"}),u=URL.createObjectURL(p);return a(u),()=>URL.revokeObjectURL(u)},[]),(0,o.jsx)("a",{href:c,download:"pico-color-palette.json",role:"button",children:"Download"})};function ao(){let c=(0,n.useRef)(),a=(0,n.useRef)(),d=(0,n.useRef)(),p=(0,n.useRef)(),{modalIsOpen:u,onOpenModal:b,onCloseModal:y}=K(),[z,k]=(0,n.useState)({}),R=I();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(L,{title:"Colors",description:"Pico comes with 380 manually\xA0crafted colors to help you personalize your brand\xA0design\xA0system."}),(0,o.jsx)(F,{data:[{anchor:"",title:"Colors",ref:c},{anchor:"usage-with-css",title:"Usage with CSS",ref:a},{anchor:"usage-with-sass",title:"Usage with SASS",ref:d},{anchor:"import-in-figma",title:"Import in Figma",ref:p}]}),(0,o.jsxs)(V,{children:[(0,o.jsx)("section",{className:"color-families",ref:c,children:R.map(e=>{let t=O({family:e}),Q=M({family:e});return(0,o.jsxs)("article",{className:"family",children:[(0,o.jsx)("header",{className:`pico-background-${e}`,onClick:()=>{b(),k({family:e,shade:Q})},children:f(e)}),(0,o.jsx)("main",{children:t.map(i=>(0,o.jsx)("button",{className:`secondary pico-background-${e}-${i}`,onClick:()=>{b(),k({family:e,shade:i})},children:i},i))})]},e)})}),(0,o.jsxs)("section",{ref:a,children:[(0,o.jsx)(h,{level:2,anchor:"usage-with-css",children:"Usage with CSS"}),(0,o.jsx)("p",{children:"The main Pico stylesheet excludes color utilities."}),(0,o.jsxs)("p",{children:["There is a separate stylesheet with all the color utilities that you can link in the"," ",(0,o.jsx)(l,{display:"inline",children:"<head>"})," of your website."]}),(0,o.jsx)(l,{className:"small",children:'<link rel="stylesheet" href="css/pico.colors.min.css">'}),(0,o.jsxs)("p",{children:["Also available on ",(0,o.jsx)(m,{to:io,children:"jsDelivr CDN"}),":"]}),(0,o.jsx)(l,{children:`<link
  rel="stylesheet"
  href="${io}css/pico.colors.min.css"
>`}),(0,o.jsx)("p",{children:"This stylesheet is almost the same size as the entire Pico library."}),(0,o.jsx)("p",{children:"We do not recommend including all colors on a production site. You should include only the color families and shades that you use."}),(0,o.jsx)("p",{children:"After linking the color utilities, you can style any element with the utility classes. Click on any color above to see details."}),(0,o.jsxs)("article",{"aria-label":"Color example",className:"component",children:[(0,o.jsx)("h2",{className:"pico-color-pink-500",children:"Pink title"}),(0,o.jsx)(l,{as:"footer",className:"small",children:'<h2 class="pico-color-pink-500">Pink title</h2>'})]}),(0,o.jsx)("article",{"aria-label":"Background color example",className:"pico-background-pink-600",children:"Pink card"}),(0,o.jsx)(l,{children:`<article class="pico-background-pink-600">
  Pink card
</article>`})]}),(0,o.jsxs)("section",{ref:d,children:[(0,o.jsx)(h,{level:2,anchor:"usage-with-sass",children:"Usage with SASS"}),(0,o.jsxs)("p",{children:["You can import all colors as SASS variables in any ",(0,o.jsx)("code",{children:".scss"})," file with:"]}),(0,o.jsx)(l,{language:"scss",children:'@use "colors" as *;'}),(0,o.jsx)("p",{children:"The colors can then be used like this:"}),(0,o.jsx)(l,{language:"scss",children:`h2 {
  color: $pink-500;
}`}),(0,o.jsxs)("p",{children:["You can also generate the utility classes with"," ",(0,o.jsx)(m,{to:"https://sass-lang.com/documentation/at-rules/use",children:"@use"}),":"]}),(0,o.jsx)(l,{language:"scss",children:'@use "colors/utilities";'}),(0,o.jsx)("p",{children:"There are many settings available."}),(0,o.jsx)("p",{children:"Here is, for example, how to generate only the color utilities (and not the background utilities) and only for red, pink, fuchsia, and purple color families."}),(0,o.jsx)(l,{language:"scss",children:`@use "colors/utilities" with (
  $palette: (
    "color-families": (
      red,
      pink,
      fuchsia,
      purple,
    ),
  ),
  $utilities: (
    "background-colors": false,
  )
);`}),(0,o.jsxs)("details",{children:[(0,o.jsx)("summary",{role:"button",className:"secondary",children:"All default settings"}),(0,o.jsx)(l,{language:"scss",children:$({code:co,linesToRemoveFromStart:3})})]})]}),(0,o.jsxs)("section",{ref:p,children:[(0,o.jsx)(h,{level:2,anchor:"import-in-figma",children:"Import in Figma"}),(0,o.jsxs)("p",{children:["You can use the Figma plugin"," ",(0,o.jsx)(m,{to:"https://www.figma.com/community/plugin/1067561134666722782/Palette-Importer",children:"Palette Importer"})," ","to import all 380 Pico colors."]}),(0,o.jsx)("p",{children:(0,o.jsx)("img",{className:"rounded-bordered",src:ro,alt:"Figma plugin Palette Importer"})}),(0,o.jsxs)("p",{children:["Download the ",(0,o.jsx)("code",{children:".json"})," file with all the colors:"]}),(0,o.jsx)("p",{children:(0,o.jsx)(ko,{})})]}),(0,o.jsx)(A,{file:"docs.colors.jsx"}),u&&(0,o.jsx)(w,{isOpen:u,onClose:y,color:z,setSelectedColor:k})]})]})}export{ao as default,go as links,vo as meta};
