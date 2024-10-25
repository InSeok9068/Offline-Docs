import{a as f}from"/build/_shared/chunk-ZANZRYDV.js";import{a as y}from"/build/_shared/chunk-RI7YJF2N.js";import{a as b}from"/build/_shared/chunk-YSWQKXFT.js";import"/build/_shared/chunk-LVW6VCGV.js";import"/build/_shared/chunk-GL7VW4BM.js";import{a as h,b as g}from"/build/_shared/chunk-JT4PCSGL.js";import"/build/_shared/chunk-BZ4AUIAY.js";import{a as d}from"/build/_shared/chunk-PGB5EDTS.js";import{a as t}from"/build/_shared/chunk-2LGDFLPT.js";import"/build/_shared/chunk-SNDHQUDE.js";import{a as o}from"/build/_shared/chunk-OLA7NHCU.js";import{a as i}from"/build/_shared/chunk-UUMWCJG3.js";import"/build/_shared/chunk-WBY45DIQ.js";import{b as n,c as k,q as m}from"/build/_shared/chunk-YTHO3L5P.js";var s=n(k());var w=`@use "sass:map";

// Settings
// \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013

// Theme color
$theme-color: "azure" !default; // amber, azure, blue, cyan, fuchsia, green, grey, indigo, jade, lime, orange, pink, pumpkin, purple, red, sand, slate, violet, yellow, zinc

// Prefix for CSS variables
$css-var-prefix: "--pico-" !default; // Must start with "--"

// Define the root element used to target <header>, <main>, <footer>
// with $enable-semantic-container and $enable-responsive-spacings
$semantic-root-element: "body" !default;

// Enable <header>, <main>, <footer> inside $semantic-root-element as containers
$enable-semantic-container: false !default;

// Enable a centered viewport for <header>, <main>, <footer> inside $semantic-root-element
// Fluid layout if disabled
$enable-viewport: true !default;

// Enable responsive spacings for <header>, <main>, <footer>, <section>, <article>
// Fixed spacings by default
$enable-responsive-spacings: false !default;

// Enable responsive typography
// Fixed root element size (rem) if disabled
$enable-responsive-typography: true !default;

// Enable .classes
// .classless version if disabled
$enable-classes: true !default;

// Enable transitions
$enable-transitions: true !default;

// Enable overriding with !important
$enable-important: true !default;

// Optional parent selector
// If defined, all HTML tags are wrapped with this selector
// :root is not wrapped
$parent-selector: "" !default;

// Breakpoints, viewports and root font size
$breakpoints: () !default;
$breakpoints: map.deep-merge(
  (
    // Small (landscape phones)
    // Font size: 17px
    sm:
      (
        breakpoint: 576px,
        viewport: 510px,
        root-font-size: 106.25%,
      ),

    // Medium (tablets)
    // Font size: 18px
    md:
      (
        breakpoint: 768px,
        viewport: 700px,
        root-font-size: 112.5%,
      ),

    // Large
    // Font size: 19px
    lg:
      (
        breakpoint: 1024px,
        viewport: 950px,
        root-font-size: 118.75%,
      ),

    // Extra large
    // Font size: 20px
    xl:
      (
        breakpoint: 1280px,
        viewport: 1200px,
        root-font-size: 125%,
      ),

    // Extra extra large
    // Font size: 21px
    xxl:
      (
        breakpoint: 1536px,
        viewport: 1450px,
        root-font-size: 131.25%,
      )
  ),
  $breakpoints
);

// Modules to export
$modules: () !default;
$modules: map.merge(
  (
    // Theme
    "themes/default": true,

    // Layout
    "layout/document": true,
    "layout/landmarks": true,
    "layout/container": true,
    "layout/section": true,
    "layout/grid": true,
    "layout/overflow-auto": true,

    // Content
    "content/link": true,
    "content/typography": true,
    "content/embedded": true,
    "content/button": true,
    "content/table": true,
    "content/code": true,
    "content/figure": true,
    "content/miscs": true,

    // Forms
    "forms/basics": true,
    "forms/checkbox-radio-switch": true,
    "forms/input-color": true,
    "forms/input-date": true,
    "forms/input-file": true,
    "forms/input-range": true,
    "forms/input-search": true,

    // Components
    "components/accordion": true,
    "components/card": true,
    "components/dropdown": true,
    "components/group": true,
    "components/loading": true,
    "components/modal": true,
    "components/nav": true,
    "components/progress": true,
    "components/tooltip": true,

    // Utilities
    "utilities/accessibility": true,
    "utilities/reduce-motion": true
  ),
  $modules
);
`;var e=n(m()),{titleSuffix:S,githubTreeBaseUrl:C}=d,z=()=>[{title:`Sass ${S}`},{name:"description",content:"Build your own minimal design system by compiling a custom version of Pico CSS framework with Sass."}];function v(){let a=(0,s.useRef)(),r=(0,s.useRef)(),l=(0,s.useRef)(),c=(0,s.useRef)(),p=(0,s.useRef)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(g,{title:"Sass",description:(0,e.jsxs)(e.Fragment,{children:["Build your own minimal design\xA0system by compiling a custom version of Pico\xA0CSS\xA0framework with\xA0",(0,e.jsx)(o,{to:"https://sass-lang.com/",children:"SASS"}),"."]})}),(0,e.jsx)(y,{data:[{anchor:"",title:"Introduction",ref:a},{anchor:"import",title:"Import",ref:r},{anchor:"settings",title:"Settings",ref:l},{anchor:"theme-color",title:"Theme color",ref:c},{anchor:"custom-theme",title:"Custom theme",ref:p}]}),(0,e.jsxs)(h,{children:[(0,e.jsxs)("section",{ref:a,children:[(0,e.jsx)("p",{children:"To get the most out of Pico, we recommend compiling your own version with SASS. This way, you can include only the required modules and personalize the settings without overriding CSS styles."}),(0,e.jsxs)("p",{children:["Avoid modifying Pico\u2019s core files whenever possible. This approach allows you to keep Pico up to date without conflicts since the Pico code and your custom code are separated."," "]})]}),(0,e.jsxs)("section",{ref:r,children:[(0,e.jsx)(i,{level:2,anchor:"import",children:"Import"}),(0,e.jsxs)("p",{children:["You can import Pico into your SCSS file with"," ",(0,e.jsx)(o,{to:"https://sass-lang.com/documentation/at-rules/use",children:"@use"}),":"]}),(0,e.jsx)(t,{language:"scss",className:"small",children:'@use "pico";'}),(0,e.jsxs)("p",{children:["If you are using"," ",(0,e.jsx)(o,{to:"https://sass-lang.com/documentation/cli/dart-sass",children:"Sass Command-Line Interface"})," ","to compile your ",(0,e.jsx)(t,{display:"inline",children:".scss"})," files, you can define the load path using ",(0,e.jsx)(t,{display:"inline",children:"sass --load-path=node_modules/@picocss/pico/scss/"})," to avoid using relative URLs like:"]}),(0,e.jsx)(t,{language:"scss",className:"small",children:'@use "node_modules/@picocss/pico/scss/pico";'}),(0,e.jsxs)("p",{children:["If you are using ",(0,e.jsx)(o,{to:"https://react.dev/",children:"React"}),", or"," ",(0,e.jsx)(o,{to:"https://webpack.js.org/",children:"Webpack"})," with"," ",(0,e.jsx)(o,{to:"https://github.com/webpack-contrib/sass-loader",children:"sass-loader"}),", the default configuration will automatically resolve the path to"," ",(0,e.jsx)(t,{display:"inline",children:"node_modules"})," so you can simply import Pico with:"]}),(0,e.jsx)(t,{language:"scss",className:"small",children:'@use "@picocss/pico/scss/pico";'})]}),(0,e.jsxs)("section",{ref:l,children:[(0,e.jsx)(i,{level:2,anchor:"settings",children:"Settings"}),(0,e.jsxs)("p",{children:["You can set custom settings with"," ",(0,e.jsx)(t,{display:"inline",language:"scss",children:'@use "pico" with ( ... );'}),". These custom values will override the default variables."]}),(0,e.jsx)("p",{children:"Here is an example to generate the classless version:"}),(0,e.jsx)(t,{language:"scss",children:`// Pico classless version
@use "pico" with (
  $enable-semantic-container: true,
  $enable-classes: false
);
`}),(0,e.jsxs)("p",{children:["Example to generate a lightweight version without ",(0,e.jsx)("code",{children:".classes"}),", uncommon form elements, and components."]}),(0,e.jsx)("p",{children:"This version reduces the weight of Pico by ~50%."}),(0,e.jsx)(t,{language:"scss",children:`// Pico lightweight version
@use "pico" with (
  $enable-semantic-container: true,
  $enable-classes: false,
  $modules: (
    "content/code": false,
    "forms/input-color": false,
    "forms/input-date": false,
    "forms/input-file": false,
    "forms/input-range": false,
    "forms/input-search": false,
    "components/accordion": false,
    "components/card": false,
    "components/dropdown": false,
    "components/loading": false,
    "components/modal": false,
    "components/nav": false,
    "components/progress": false,
    "components/tooltip": false,
    "utilities/accessibility": false,
    "utilities/reduce-motion": false
  )
);
`}),(0,e.jsxs)("details",{children:[(0,e.jsx)("summary",{role:"button",className:"secondary",children:"All default settings"}),(0,e.jsx)(t,{language:"scss",children:f({code:w,linesToRemoveFromStart:5})})]})]}),(0,e.jsxs)("section",{ref:c,children:[(0,e.jsx)(i,{level:2,anchor:"theme-color",children:"Theme color"}),(0,e.jsxs)("p",{children:["Pico comes with a default"," ",(0,e.jsx)(t,{display:"inline",language:"scss",children:'"azure"'})," ","theme.",(0,e.jsx)("br",{}),"You can easily recompile Pico using a different primary color from a selection of 20 colors."]}),(0,e.jsx)(t,{language:"scss",children:`// Pico with purple primary color
@use "pico" with (
  $theme-color: "purple"
);`}),(0,e.jsxs)("p",{children:["Possible color choices:"," ",["amber","azure","blue","cyan","fuchsia","green","grey","indigo","jade","lime","orange","pink","pumpkin","purple","red","sand","slate","violet","yellow","zinc"].map((u,x)=>(0,e.jsxs)(s.Fragment,{children:[(0,e.jsx)("code",{children:`${u}`}),x<19?", ":"."]},u))]})]}),(0,e.jsxs)("section",{ref:p,children:[(0,e.jsx)(i,{level:2,anchor:"custom-theme",children:"Custom theme"}),(0,e.jsx)("p",{children:"To create a custom version of Pico with a fully custom theme that reflects your brand identity, you can:"}),(0,e.jsxs)("ol",{children:[(0,e.jsx)("li",{children:"Exclude the default theme from compilation,"}),(0,e.jsxs)("li",{children:["Import your custom theme (you can duplicate"," ",(0,e.jsx)(o,{to:`${C}scss/themes/`,children:"Pico\u2019s default theme"})," as a starting point and customize it to match your brand\u2019s style)."]})]}),(0,e.jsx)(t,{language:"scss",children:`// Pico without default theme
@use "pico" with (
  $modules: (
    "themes/default": false
  )
);

// Your custom theme
@use "path/custom-theme";   
`})]}),(0,e.jsx)(b,{file:"docs.sass.jsx"})]})]})}export{v as default,z as meta};
