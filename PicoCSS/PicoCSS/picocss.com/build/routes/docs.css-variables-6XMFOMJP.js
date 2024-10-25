import{a as c}from"/build/_shared/chunk-ZANZRYDV.js";import{a as g}from"/build/_shared/chunk-RI7YJF2N.js";import{a as h}from"/build/_shared/chunk-YSWQKXFT.js";import"/build/_shared/chunk-LVW6VCGV.js";import"/build/_shared/chunk-GL7VW4BM.js";import{a as b,b as u}from"/build/_shared/chunk-JT4PCSGL.js";import"/build/_shared/chunk-BZ4AUIAY.js";import{a as m}from"/build/_shared/chunk-PGB5EDTS.js";import{a as r}from"/build/_shared/chunk-2LGDFLPT.js";import"/build/_shared/chunk-SNDHQUDE.js";import{a as d}from"/build/_shared/chunk-OLA7NHCU.js";import{a as i}from"/build/_shared/chunk-UUMWCJG3.js";import"/build/_shared/chunk-WBY45DIQ.js";import{b as a,c as w,q as s}from"/build/_shared/chunk-YTHO3L5P.js";var e=a(w());var f=`/**
 * Color schemes
 */
[data-theme=light],
:root:not([data-theme=dark]) {
  --pico-background-color: #fff;
  --pico-color: #373c44;
  --pico-text-selection-color: rgba(2, 154, 232, 0.25);
  --pico-muted-color: #646b79;
  --pico-muted-border-color: #e7eaf0;
  --pico-primary: #0172ad;
  --pico-primary-background: #0172ad;
  --pico-primary-border: var(--pico-primary-background);
  --pico-primary-underline: rgba(1, 114, 173, 0.5);
  --pico-primary-hover: #015887;
  --pico-primary-hover-background: #02659a;
  --pico-primary-hover-border: var(--pico-primary-hover-background);
  --pico-primary-hover-underline: var(--pico-primary-hover);
  --pico-primary-focus: rgba(2, 154, 232, 0.5);
  --pico-primary-inverse: #fff;
  --pico-secondary: #5d6b89;
  --pico-secondary-background: #525f7a;
  --pico-secondary-border: var(--pico-secondary-background);
  --pico-secondary-underline: rgba(93, 107, 137, 0.5);
  --pico-secondary-hover: #48536b;
  --pico-secondary-hover-background: #48536b;
  --pico-secondary-hover-border: var(--pico-secondary-hover-background);
  --pico-secondary-hover-underline: var(--pico-secondary-hover);
  --pico-secondary-focus: rgba(93, 107, 137, 0.25);
  --pico-secondary-inverse: #fff;
  --pico-contrast: #181c25;
  --pico-contrast-background: #181c25;
  --pico-contrast-border: var(--pico-contrast-background);
  --pico-contrast-underline: rgba(24, 28, 37, 0.5);
  --pico-contrast-hover: #000;
  --pico-contrast-hover-background: #000;
  --pico-contrast-hover-border: var(--pico-contrast-hover-background);
  --pico-contrast-hover-underline: var(--pico-secondary-hover);
  --pico-contrast-focus: rgba(93, 107, 137, 0.25);
  --pico-contrast-inverse: #fff;
  --pico-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(129, 145, 181, 0.01698), 0.0335rem 0.067rem 0.402rem rgba(129, 145, 181, 0.024), 0.0625rem 0.125rem 0.75rem rgba(129, 145, 181, 0.03), 0.1125rem 0.225rem 1.35rem rgba(129, 145, 181, 0.036), 0.2085rem 0.417rem 2.502rem rgba(129, 145, 181, 0.04302), 0.5rem 1rem 6rem rgba(129, 145, 181, 0.06), 0 0 0 0.0625rem rgba(129, 145, 181, 0.015);
  --pico-h1-color: #2d3138;
  --pico-h2-color: #373c44;
  --pico-h3-color: #424751;
  --pico-h4-color: #4d535e;
  --pico-h5-color: #5c6370;
  --pico-h6-color: #646b79;
  --pico-mark-background-color: #fde7c0;
  --pico-mark-color: #0f1114;
  --pico-ins-color: #1d6a54;
  --pico-del-color: #883935;
  --pico-blockquote-border-color: var(--pico-muted-border-color);
  --pico-blockquote-footer-color: var(--pico-muted-color);
  --pico-button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --pico-button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --pico-table-border-color: var(--pico-muted-border-color);
  --pico-table-row-stripped-background-color: rgba(111, 120, 135, 0.0375);
  --pico-code-background-color: #f3f5f7;
  --pico-code-color: #646b79;
  --pico-code-kbd-background-color: var(--pico-color);
  --pico-code-kbd-color: var(--pico-background-color);
  --pico-form-element-background-color: #fbfcfc;
  --pico-form-element-selected-background-color: #dfe3eb;
  --pico-form-element-border-color: #cfd5e2;
  --pico-form-element-color: #23262c;
  --pico-form-element-placeholder-color: var(--pico-muted-color);
  --pico-form-element-active-background-color: #fff;
  --pico-form-element-active-border-color: var(--pico-primary-border);
  --pico-form-element-focus-color: var(--pico-primary-border);
  --pico-form-element-disabled-opacity: 0.5;
  --pico-form-element-invalid-border-color: #b86a6b;
  --pico-form-element-invalid-active-border-color: #c84f48;
  --pico-form-element-invalid-focus-color: var(--pico-form-element-invalid-active-border-color);
  --pico-form-element-valid-border-color: #4c9b8a;
  --pico-form-element-valid-active-border-color: #279977;
  --pico-form-element-valid-focus-color: var(--pico-form-element-valid-active-border-color);
  --pico-switch-background-color: #bfc7d9;
  --pico-switch-checked-background-color: var(--pico-primary-background);
  --pico-switch-color: #fff;
  --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --pico-range-border-color: #dfe3eb;
  --pico-range-active-border-color: #bfc7d9;
  --pico-range-thumb-border-color: var(--pico-background-color);
  --pico-range-thumb-color: var(--pico-secondary-background);
  --pico-range-thumb-active-color: var(--pico-primary-background);
  --pico-accordion-border-color: var(--pico-muted-border-color);
  --pico-accordion-active-summary-color: var(--pico-primary-hover);
  --pico-accordion-close-summary-color: var(--pico-color);
  --pico-accordion-open-summary-color: var(--pico-muted-color);
  --pico-card-background-color: var(--pico-background-color);
  --pico-card-border-color: var(--pico-muted-border-color);
  --pico-card-box-shadow: var(--pico-box-shadow);
  --pico-card-sectioning-background-color: #fbfcfc;
  --pico-dropdown-background-color: #fff;
  --pico-dropdown-border-color: #eff1f4;
  --pico-dropdown-box-shadow: var(--pico-box-shadow);
  --pico-dropdown-color: var(--pico-color);
  --pico-dropdown-hover-background-color: #eff1f4;
  --pico-loading-spinner-opacity: 0.5;
  --pico-modal-overlay-background-color: rgba(232, 234, 237, 0.75);
  --pico-progress-background-color: #dfe3eb;
  --pico-progress-color: var(--pico-primary-background);
  --pico-tooltip-background-color: var(--pico-contrast-background);
  --pico-tooltip-color: var(--pico-contrast-inverse);
  --pico-icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(76, 155, 138)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --pico-icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(200, 79, 72)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  color-scheme: light;
}
[data-theme=light] input:is([type=submit],
[type=button],
[type=reset],
[type=checkbox],
[type=radio],
[type=file]),
:root:not([data-theme=dark]) input:is([type=submit],
[type=button],
[type=reset],
[type=checkbox],
[type=radio],
[type=file]) {
  --pico-form-element-focus-color: var(--pico-primary-focus);
}

@media only screen and (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --pico-background-color: #13171f;
    --pico-color: #c2c7d0;
    --pico-text-selection-color: rgba(1, 170, 255, 0.1875);
    --pico-muted-color: #7b8495;
    --pico-muted-border-color: #202632;
    --pico-primary: #01aaff;
    --pico-primary-background: #0172ad;
    --pico-primary-border: var(--pico-primary-background);
    --pico-primary-underline: rgba(1, 170, 255, 0.5);
    --pico-primary-hover: #79c0ff;
    --pico-primary-hover-background: #017fc0;
    --pico-primary-hover-border: var(--pico-primary-hover-background);
    --pico-primary-hover-underline: var(--pico-primary-hover);
    --pico-primary-focus: rgba(1, 170, 255, 0.375);
    --pico-primary-inverse: #fff;
    --pico-secondary: #969eaf;
    --pico-secondary-background: #525f7a;
    --pico-secondary-border: var(--pico-secondary-background);
    --pico-secondary-underline: rgba(150, 158, 175, 0.5);
    --pico-secondary-hover: #b3b9c5;
    --pico-secondary-hover-background: #5d6b89;
    --pico-secondary-hover-border: var(--pico-secondary-hover-background);
    --pico-secondary-hover-underline: var(--pico-secondary-hover);
    --pico-secondary-focus: rgba(144, 158, 190, 0.25);
    --pico-secondary-inverse: #fff;
    --pico-contrast: #dfe3eb;
    --pico-contrast-background: #eff1f4;
    --pico-contrast-border: var(--pico-contrast-background);
    --pico-contrast-underline: rgba(223, 227, 235, 0.5);
    --pico-contrast-hover: #fff;
    --pico-contrast-hover-background: #fff;
    --pico-contrast-hover-border: var(--pico-contrast-hover-background);
    --pico-contrast-hover-underline: var(--pico-contrast-hover);
    --pico-contrast-focus: rgba(207, 213, 226, 0.25);
    --pico-contrast-inverse: #000;
    --pico-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(7, 9, 12, 0.01698), 0.0335rem 0.067rem 0.402rem rgba(7, 9, 12, 0.024), 0.0625rem 0.125rem 0.75rem rgba(7, 9, 12, 0.03), 0.1125rem 0.225rem 1.35rem rgba(7, 9, 12, 0.036), 0.2085rem 0.417rem 2.502rem rgba(7, 9, 12, 0.04302), 0.5rem 1rem 6rem rgba(7, 9, 12, 0.06), 0 0 0 0.0625rem rgba(7, 9, 12, 0.015);
    --pico-h1-color: #f0f1f3;
    --pico-h2-color: #e0e3e7;
    --pico-h3-color: #c2c7d0;
    --pico-h4-color: #b3b9c5;
    --pico-h5-color: #a4acba;
    --pico-h6-color: #8891a4;
    --pico-mark-background-color: #014063;
    --pico-mark-color: #fff;
    --pico-ins-color: #62af9a;
    --pico-del-color: #ce7e7b;
    --pico-blockquote-border-color: var(--pico-muted-border-color);
    --pico-blockquote-footer-color: var(--pico-muted-color);
    --pico-button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --pico-button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --pico-table-border-color: var(--pico-muted-border-color);
    --pico-table-row-stripped-background-color: rgba(111, 120, 135, 0.0375);
    --pico-code-background-color: #1a1f28;
    --pico-code-color: #8891a4;
    --pico-code-kbd-background-color: var(--pico-color);
    --pico-code-kbd-color: var(--pico-background-color);
    --pico-form-element-background-color: #1c212c;
    --pico-form-element-selected-background-color: #2a3140;
    --pico-form-element-border-color: #2a3140;
    --pico-form-element-color: #e0e3e7;
    --pico-form-element-placeholder-color: #8891a4;
    --pico-form-element-active-background-color: #1a1f28;
    --pico-form-element-active-border-color: var(--pico-primary-border);
    --pico-form-element-focus-color: var(--pico-primary-border);
    --pico-form-element-disabled-opacity: 0.5;
    --pico-form-element-invalid-border-color: #964a50;
    --pico-form-element-invalid-active-border-color: #b7403b;
    --pico-form-element-invalid-focus-color: var(--pico-form-element-invalid-active-border-color);
    --pico-form-element-valid-border-color: #2a7b6f;
    --pico-form-element-valid-active-border-color: #16896a;
    --pico-form-element-valid-focus-color: var(--pico-form-element-valid-active-border-color);
    --pico-switch-background-color: #333c4e;
    --pico-switch-checked-background-color: var(--pico-primary-background);
    --pico-switch-color: #fff;
    --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --pico-range-border-color: #202632;
    --pico-range-active-border-color: #2a3140;
    --pico-range-thumb-border-color: var(--pico-background-color);
    --pico-range-thumb-color: var(--pico-secondary-background);
    --pico-range-thumb-active-color: var(--pico-primary-background);
    --pico-accordion-border-color: var(--pico-muted-border-color);
    --pico-accordion-active-summary-color: var(--pico-primary-hover);
    --pico-accordion-close-summary-color: var(--pico-color);
    --pico-accordion-open-summary-color: var(--pico-muted-color);
    --pico-card-background-color: #181c25;
    --pico-card-border-color: var(--pico-card-background-color);
    --pico-card-box-shadow: var(--pico-box-shadow);
    --pico-card-sectioning-background-color: #1a1f28;
    --pico-dropdown-background-color: #181c25;
    --pico-dropdown-border-color: #202632;
    --pico-dropdown-box-shadow: var(--pico-box-shadow);
    --pico-dropdown-color: var(--pico-color);
    --pico-dropdown-hover-background-color: #202632;
    --pico-loading-spinner-opacity: 0.5;
    --pico-modal-overlay-background-color: rgba(8, 9, 10, 0.75);
    --pico-progress-background-color: #202632;
    --pico-progress-color: var(--pico-primary-background);
    --pico-tooltip-background-color: var(--pico-contrast-background);
    --pico-tooltip-color: var(--pico-contrast-inverse);
    --pico-icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(42, 123, 111)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --pico-icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(150, 74, 80)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    color-scheme: dark;
  }
  :root:not([data-theme]) input:is([type=submit],
  [type=button],
  [type=reset],
  [type=checkbox],
  [type=radio],
  [type=file]) {
    --pico-form-element-focus-color: var(--pico-primary-focus);
  }
  :root:not([data-theme]) details summary[role=button].contrast:not(.outline)::after {
    filter: brightness(0);
  }
  :root:not([data-theme]) [aria-busy=true]:not(input, select, textarea).contrast:is(button,
  [type=submit],
  [type=button],
  [type=reset],
  [role=button]):not(.outline)::before {
    filter: brightness(0);
  }
}
[data-theme=dark] {
  --pico-background-color: #13171f;
  --pico-color: #c2c7d0;
  --pico-text-selection-color: rgba(1, 170, 255, 0.1875);
  --pico-muted-color: #7b8495;
  --pico-muted-border-color: #202632;
  --pico-primary: #01aaff;
  --pico-primary-background: #0172ad;
  --pico-primary-border: var(--pico-primary-background);
  --pico-primary-underline: rgba(1, 170, 255, 0.5);
  --pico-primary-hover: #79c0ff;
  --pico-primary-hover-background: #017fc0;
  --pico-primary-hover-border: var(--pico-primary-hover-background);
  --pico-primary-hover-underline: var(--pico-primary-hover);
  --pico-primary-focus: rgba(1, 170, 255, 0.375);
  --pico-primary-inverse: #fff;
  --pico-secondary: #969eaf;
  --pico-secondary-background: #525f7a;
  --pico-secondary-border: var(--pico-secondary-background);
  --pico-secondary-underline: rgba(150, 158, 175, 0.5);
  --pico-secondary-hover: #b3b9c5;
  --pico-secondary-hover-background: #5d6b89;
  --pico-secondary-hover-border: var(--pico-secondary-hover-background);
  --pico-secondary-hover-underline: var(--pico-secondary-hover);
  --pico-secondary-focus: rgba(144, 158, 190, 0.25);
  --pico-secondary-inverse: #fff;
  --pico-contrast: #dfe3eb;
  --pico-contrast-background: #eff1f4;
  --pico-contrast-border: var(--pico-contrast-background);
  --pico-contrast-underline: rgba(223, 227, 235, 0.5);
  --pico-contrast-hover: #fff;
  --pico-contrast-hover-background: #fff;
  --pico-contrast-hover-border: var(--pico-contrast-hover-background);
  --pico-contrast-hover-underline: var(--pico-contrast-hover);
  --pico-contrast-focus: rgba(207, 213, 226, 0.25);
  --pico-contrast-inverse: #000;
  --pico-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(7, 9, 12, 0.01698), 0.0335rem 0.067rem 0.402rem rgba(7, 9, 12, 0.024), 0.0625rem 0.125rem 0.75rem rgba(7, 9, 12, 0.03), 0.1125rem 0.225rem 1.35rem rgba(7, 9, 12, 0.036), 0.2085rem 0.417rem 2.502rem rgba(7, 9, 12, 0.04302), 0.5rem 1rem 6rem rgba(7, 9, 12, 0.06), 0 0 0 0.0625rem rgba(7, 9, 12, 0.015);
  --pico-h1-color: #f0f1f3;
  --pico-h2-color: #e0e3e7;
  --pico-h3-color: #c2c7d0;
  --pico-h4-color: #b3b9c5;
  --pico-h5-color: #a4acba;
  --pico-h6-color: #8891a4;
  --pico-mark-background-color: #014063;
  --pico-mark-color: #fff;
  --pico-ins-color: #62af9a;
  --pico-del-color: #ce7e7b;
  --pico-blockquote-border-color: var(--pico-muted-border-color);
  --pico-blockquote-footer-color: var(--pico-muted-color);
  --pico-button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --pico-button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --pico-table-border-color: var(--pico-muted-border-color);
  --pico-table-row-stripped-background-color: rgba(111, 120, 135, 0.0375);
  --pico-code-background-color: #1a1f28;
  --pico-code-color: #8891a4;
  --pico-code-kbd-background-color: var(--pico-color);
  --pico-code-kbd-color: var(--pico-background-color);
  --pico-form-element-background-color: #1c212c;
  --pico-form-element-selected-background-color: #2a3140;
  --pico-form-element-border-color: #2a3140;
  --pico-form-element-color: #e0e3e7;
  --pico-form-element-placeholder-color: #8891a4;
  --pico-form-element-active-background-color: #1a1f28;
  --pico-form-element-active-border-color: var(--pico-primary-border);
  --pico-form-element-focus-color: var(--pico-primary-border);
  --pico-form-element-disabled-opacity: 0.5;
  --pico-form-element-invalid-border-color: #964a50;
  --pico-form-element-invalid-active-border-color: #b7403b;
  --pico-form-element-invalid-focus-color: var(--pico-form-element-invalid-active-border-color);
  --pico-form-element-valid-border-color: #2a7b6f;
  --pico-form-element-valid-active-border-color: #16896a;
  --pico-form-element-valid-focus-color: var(--pico-form-element-valid-active-border-color);
  --pico-switch-background-color: #333c4e;
  --pico-switch-checked-background-color: var(--pico-primary-background);
  --pico-switch-color: #fff;
  --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --pico-range-border-color: #202632;
  --pico-range-active-border-color: #2a3140;
  --pico-range-thumb-border-color: var(--pico-background-color);
  --pico-range-thumb-color: var(--pico-secondary-background);
  --pico-range-thumb-active-color: var(--pico-primary-background);
  --pico-accordion-border-color: var(--pico-muted-border-color);
  --pico-accordion-active-summary-color: var(--pico-primary-hover);
  --pico-accordion-close-summary-color: var(--pico-color);
  --pico-accordion-open-summary-color: var(--pico-muted-color);
  --pico-card-background-color: #181c25;
  --pico-card-border-color: var(--pico-card-background-color);
  --pico-card-box-shadow: var(--pico-box-shadow);
  --pico-card-sectioning-background-color: #1a1f28;
  --pico-dropdown-background-color: #181c25;
  --pico-dropdown-border-color: #202632;
  --pico-dropdown-box-shadow: var(--pico-box-shadow);
  --pico-dropdown-color: var(--pico-color);
  --pico-dropdown-hover-background-color: #202632;
  --pico-loading-spinner-opacity: 0.5;
  --pico-modal-overlay-background-color: rgba(8, 9, 10, 0.75);
  --pico-progress-background-color: #202632;
  --pico-progress-color: var(--pico-primary-background);
  --pico-tooltip-background-color: var(--pico-contrast-background);
  --pico-tooltip-color: var(--pico-contrast-inverse);
  --pico-icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(42, 123, 111)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --pico-icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(150, 74, 80)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  color-scheme: dark;
}
[data-theme=dark] input:is([type=submit],
[type=button],
[type=reset],
[type=checkbox],
[type=radio],
[type=file]) {
  --pico-form-element-focus-color: var(--pico-primary-focus);
}
[data-theme=dark] details summary[role=button].contrast:not(.outline)::after {
  filter: brightness(0);
}
[data-theme=dark] [aria-busy=true]:not(input, select, textarea).contrast:is(button,
[type=submit],
[type=button],
[type=reset],
[role=button]):not(.outline)::before {
  filter: brightness(0);
}

progress,
[type=checkbox],
[type=radio],
[type=range] {
  accent-color: var(--pico-primary);
}

/*# sourceMappingURL=default-theme-color-schemes.css.map */
`;var v=`/**
 * Styles
 */
:root {
  --pico-font-family-emoji: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --pico-font-family-sans-serif: system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, Helvetica, Arial, "Helvetica Neue", sans-serif, var(--pico-font-family-emoji);
  --pico-font-family-monospace: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, var(--pico-font-family-emoji);
  --pico-font-family: var(--pico-font-family-sans-serif);
  --pico-line-height: 1.5;
  --pico-font-weight: 400;
  --pico-font-size: 100%;
  --pico-text-underline-offset: 0.1rem;
  --pico-border-radius: 0.25rem;
  --pico-border-width: 0.0625rem;
  --pico-outline-width: 0.125rem;
  --pico-transition: 0.2s ease-in-out;
  --pico-spacing: 1rem;
  --pico-typography-spacing-vertical: 1rem;
  --pico-block-spacing-vertical: var(--pico-spacing);
  --pico-block-spacing-horizontal: var(--pico-spacing);
  --pico-grid-column-gap: var(--pico-spacing);
  --pico-grid-row-gap: var(--pico-spacing);
  --pico-form-element-spacing-vertical: 0.75rem;
  --pico-form-element-spacing-horizontal: 1rem;
  --pico-group-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --pico-group-box-shadow-focus-with-button: 0 0 0 var(--pico-outline-width) var(--pico-primary-focus);
  --pico-group-box-shadow-focus-with-input: 0 0 0 0.0625rem var(--pico-form-element-border-color);
  --pico-modal-overlay-backdrop-filter: blur(0.375rem);
  --pico-nav-element-spacing-vertical: 1rem;
  --pico-nav-element-spacing-horizontal: 0.5rem;
  --pico-nav-link-spacing-vertical: 0.5rem;
  --pico-nav-link-spacing-horizontal: 0.5rem;
  --pico-nav-breadcrumb-divider: ">";
  --pico-icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --pico-icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --pico-icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --pico-icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --pico-icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --pico-icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --pico-icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(136, 145, 164)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --pico-icon-loading: url("data:image/svg+xml,%3Csvg fill='none' height='24' width='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' %3E%3Cstyle%3E g %7B animation: rotate 2s linear infinite; transform-origin: center center; %7D circle %7B stroke-dasharray: 75,100; stroke-dashoffset: -5; animation: dash 1.5s ease-in-out infinite; stroke-linecap: round; %7D @keyframes rotate %7B 0%25 %7B transform: rotate(0deg); %7D 100%25 %7B transform: rotate(360deg); %7D %7D @keyframes dash %7B 0%25 %7B stroke-dasharray: 1,100; stroke-dashoffset: 0; %7D 50%25 %7B stroke-dasharray: 44.5,100; stroke-dashoffset: -17.5; %7D 100%25 %7B stroke-dasharray: 44.5,100; stroke-dashoffset: -62; %7D %7D %3C/style%3E%3Cg%3E%3Ccircle cx='12' cy='12' r='10' fill='none' stroke='rgb(136, 145, 164)' stroke-width='4' /%3E%3C/g%3E%3C/svg%3E");
}
@media (min-width: 576px) {
  :root {
    --pico-font-size: 106.25%;
  }
}
@media (min-width: 768px) {
  :root {
    --pico-font-size: 112.5%;
  }
}
@media (min-width: 1024px) {
  :root {
    --pico-font-size: 118.75%;
  }
}
@media (min-width: 1280px) {
  :root {
    --pico-font-size: 125%;
  }
}
@media (min-width: 1536px) {
  :root {
    --pico-font-size: 131.25%;
  }
}

a {
  --pico-text-decoration: underline;
}
a.secondary, a.contrast {
  --pico-text-decoration: underline;
}

small {
  --pico-font-size: 0.875em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --pico-font-weight: 700;
}

h1 {
  --pico-font-size: 2rem;
  --pico-line-height: 1.125;
  --pico-typography-spacing-top: 3rem;
}

h2 {
  --pico-font-size: 1.75rem;
  --pico-line-height: 1.15;
  --pico-typography-spacing-top: 2.625rem;
}

h3 {
  --pico-font-size: 1.5rem;
  --pico-line-height: 1.175;
  --pico-typography-spacing-top: 2.25rem;
}

h4 {
  --pico-font-size: 1.25rem;
  --pico-line-height: 1.2;
  --pico-typography-spacing-top: 1.874rem;
}

h5 {
  --pico-font-size: 1.125rem;
  --pico-line-height: 1.225;
  --pico-typography-spacing-top: 1.6875rem;
}

h6 {
  --pico-font-size: 1rem;
  --pico-line-height: 1.25;
  --pico-typography-spacing-top: 1.5rem;
}

thead th,
thead td,
tfoot th,
tfoot td {
  --pico-font-weight: 600;
  --pico-border-width: 0.1875rem;
}

pre,
code,
kbd,
samp {
  --pico-font-family: var(--pico-font-family-monospace);
}

kbd {
  --pico-font-weight: bolder;
}

input:not([type=submit],
[type=button],
[type=reset],
[type=checkbox],
[type=radio],
[type=file]),
:where(select, textarea) {
  --pico-outline-width: 0.0625rem;
}

[type=search] {
  --pico-border-radius: 5rem;
}

[type=checkbox],
[type=radio] {
  --pico-border-width: 0.125rem;
}

[type=checkbox][role=switch] {
  --pico-border-width: 0.1875rem;
}

details.dropdown summary:not([role=button]) {
  --pico-outline-width: 0.0625rem;
}

nav details.dropdown summary:focus-visible {
  --pico-outline-width: 0.125rem;
}

[role=search] {
  --pico-border-radius: 5rem;
}

[role=search]:has(button.secondary:focus,
[type=submit].secondary:focus,
[type=button].secondary:focus,
[role=button].secondary:focus),
[role=group]:has(button.secondary:focus,
[type=submit].secondary:focus,
[type=button].secondary:focus,
[role=button].secondary:focus) {
  --pico-group-box-shadow-focus-with-button: 0 0 0 var(--pico-outline-width) var(--pico-secondary-focus);
}
[role=search]:has(button.contrast:focus,
[type=submit].contrast:focus,
[type=button].contrast:focus,
[role=button].contrast:focus),
[role=group]:has(button.contrast:focus,
[type=submit].contrast:focus,
[type=button].contrast:focus,
[role=button].contrast:focus) {
  --pico-group-box-shadow-focus-with-button: 0 0 0 var(--pico-outline-width) var(--pico-contrast-focus);
}
[role=search] button,
[role=search] [type=submit],
[role=search] [type=button],
[role=search] [role=button],
[role=group] button,
[role=group] [type=submit],
[role=group] [type=button],
[role=group] [role=button] {
  --pico-form-element-spacing-horizontal: 2rem;
}

details summary[role=button]:not(.outline)::after {
  filter: brightness(0) invert(1);
}

[aria-busy=true]:not(input, select, textarea):is(button, [type=submit], [type=button], [type=reset], [role=button]):not(.outline)::before {
  filter: brightness(0) invert(1);
}

/*# sourceMappingURL=default-theme-styles.css.map */
`;var y=`/* Orange color for light color scheme (Default) */
/* Can be forced with data-theme="light" */
[data-theme=light],
:root:not([data-theme=dark]) {
  --pico-text-selection-color: rgba(244, 93, 44, 0.25);
  --pico-primary: #bd3c13;
  --pico-primary-background: #d24317;
  --pico-primary-underline: rgba(189, 60, 19, 0.5);
  --pico-primary-hover: #942d0d;
  --pico-primary-hover-background: #bd3c13;
  --pico-primary-focus: rgba(244, 93, 44, 0.5);
  --pico-primary-inverse: #fff;
  --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

/* Orange color for dark color scheme (Auto) */
/* Automatically enabled if user has Dark mode enabled */
@media only screen and (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --pico-text-selection-color: rgba(245, 107, 61, 0.1875);
    --pico-primary: #f56b3d;
    --pico-primary-background: #d24317;
    --pico-primary-underline: rgba(245, 107, 61, 0.5);
    --pico-primary-hover: #f8a283;
    --pico-primary-hover-background: #e74b1a;
    --pico-primary-focus: rgba(245, 107, 61, 0.375);
    --pico-primary-inverse: #fff;
    --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
}
/* Orange color for dark color scheme (Forced) */
/* Enabled if forced with data-theme="dark" */
[data-theme=dark] {
  --pico-text-selection-color: rgba(245, 107, 61, 0.1875);
  --pico-primary: #f56b3d;
  --pico-primary-background: #d24317;
  --pico-primary-underline: rgba(245, 107, 61, 0.5);
  --pico-primary-hover: #f8a283;
  --pico-primary-hover-background: #e74b1a;
  --pico-primary-focus: rgba(245, 107, 61, 0.375);
  --pico-primary-inverse: #fff;
  --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

/*# sourceMappingURL=orange.css.map */
`;var o=a(s()),{titleSuffix:S}=m,B=()=>[{title:`CSS variables ${S}`},{name:"description",content:"Customize Pico's design system with over 130 CSS variables to create a unique look and feel."}];function z(){return[{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Pacifico&display=swap"}]}function k(){let t=(0,e.useRef)(),n=(0,e.useRef)(),p=(0,e.useRef)(),l=(0,e.useRef)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u,{title:"CSS variables",description:"Customize Pico's design system with over 130 CSS variables to create a unique look\xA0and\xA0feel."}),(0,o.jsx)(g,{data:[{anchor:"",title:"Introduction",ref:t},{anchor:"example",title:"Example",ref:n},{anchor:"css-variables-for-color-schemes",title:"Color schemes",ref:p},{anchor:"all-css-variables",title:"All CSS variables",ref:l}]}),(0,o.jsxs)(b,{children:[(0,o.jsxs)("section",{ref:t,children:[(0,o.jsxs)("p",{children:["Pico includes many custom properties (variables) that allow easy access to frequently used values such as ",(0,o.jsx)("code",{children:"font-family"}),", ",(0,o.jsx)("code",{children:"font-size"}),",",(0,o.jsx)("code",{children:"border-radius"}),", ",(0,o.jsx)("code",{children:"margin"}),", ",(0,o.jsx)("code",{children:"padding"}),", and more."]}),(0,o.jsxs)("p",{children:["All CSS variables are prefixed with ",(0,o.jsx)("code",{children:"pico-"})," to avoid collisions with other CSS frameworks or your own vars. You can remove or customize this prefix by recompiling the CSS files with ",(0,o.jsx)(d,{to:"/docs/sass",children:"SASS"}),"."]}),(0,o.jsxs)("p",{children:["You can define the CSS variables within the ",(0,o.jsx)("code",{children:":root"})," selector to apply the changes globally or overwrite the CSS variables on specific selectors to apply the changes locally."]})]}),(0,o.jsxs)("section",{ref:n,children:[(0,o.jsx)(i,{level:2,anchor:"example",children:"Example"}),(0,o.jsxs)("article",{"aria-label":"Button colors example",className:"component",id:"css-var-example",children:[(0,o.jsx)("style",{children:`
              #css-var-example h1,
              #css-var-example p,
              #css-var-example button {
                --pico-border-radius: 2rem;
                --pico-typography-spacing-vertical: 1.5rem;
                --pico-form-element-spacing-vertical: 1rem;
                --pico-form-element-spacing-horizontal: 1.5rem;
              }
              #css-var-example h1 {
                --pico-font-family: Pacifico, cursive;
                --pico-font-weight: 400;
                --pico-typography-spacing-vertical: 0.5rem;
              }
              #css-var-example button {
                --pico-font-weight: 700;
                margin-bottom: 0;
              }
            `}),(0,o.jsx)("h1",{children:"Music fest mania"}),(0,o.jsx)("p",{children:"Get ready to dance and sing your heart out at our Music Fest Mania. Join the crowd, jam to your favorite band, and discover new artists."}),(0,o.jsx)("button",{children:"Let\u2019s rock out!"}),(0,o.jsx)(r,{as:"footer",children:`<style>
  :root {
    --pico-border-radius: 2rem;
    --pico-typography-spacing-vertical: 1.5rem;
    --pico-form-element-spacing-vertical: 1rem;
    --pico-form-element-spacing-horizontal: 1.25rem;
  }
  h1 {
    --pico-font-family: Pacifico, cursive;
    --pico-font-weight: 400;
    --pico-typography-spacing-vertical: 0.5rem;
  }
  button {
    --pico-font-weight: 700;
  }
</style>

<h1>Music fest mania</h1>
<p>
  Get ready to dance and sing your heart out at 
  our Music Fest Mania. Join the crowd, jam to
  your favorite band, and discover new artists.
</p>
<button>Let's rock out!</button>
`})]})]}),(0,o.jsxs)("section",{ref:p,children:[(0,o.jsx)(i,{level:2,anchor:"css-variables-for-color-schemes",children:"CSS variables for color schemes"}),(0,o.jsx)("p",{children:"To add or edit CSS variables for light mode only (the default mode), define them inside:"}),(0,o.jsx)(r,{language:"css",children:`/* Light color scheme (Default) */
/* Can be forced with data-theme="light" */
[data-theme="light"],
:root:not([data-theme="dark"]) {
 ...
}`}),(0,o.jsx)("p",{children:"To add or edit CSS variables for dark mode, you need to define them twice."}),(0,o.jsxs)("p",{children:["The first inclusion is in the ",(0,o.jsx)("code",{children:"@media"}),"query that checks if the user has dark mode enabled through their device settings with"," ",(0,o.jsx)("code",{children:`prefers-color-scheme:
            dark`}),". In this case, the dark mode styling is applied to the ",(0,o.jsx)("code",{children:":root"})," element if there is no explicit ",(0,o.jsx)("code",{children:"data-theme"})," attribute set."]}),(0,o.jsxs)("p",{children:["The second inclusion is when you force the dark mode with"," ",(0,o.jsx)("code",{children:'data-theme="dark"'}),". This allows you to manually toggle between the light and dark themes regardless of the user\u2019s device settings."]}),(0,o.jsx)(r,{language:"css",children:`/* Dark color scheme (Auto) */
/* Automatically enabled if user has Dark mode enabled */
 @media only screen and (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    ...
  }
}

/* Dark color scheme (Forced) */
/* Enabled if forced with data-theme="dark" */
[data-theme="dark"] {
  ...
}`}),(0,o.jsxs)("details",{children:[(0,o.jsx)("summary",{role:"button",className:"secondary",children:"Detailed example to override the primary color"}),(0,o.jsx)(r,{language:"css",children:c({code:y,linesMatching:["  --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);","    --pico-switch-thumb-box-shadow: 0 0 0 rgba(0, 0, 0, 0);"],linesToRemoveFromEnd:2})})]})]}),(0,o.jsxs)("section",{ref:l,children:[(0,o.jsx)(i,{level:2,anchor:"all-css-variables",children:"All CSS variables"}),(0,o.jsx)("p",{children:"There are two categories of CSS variables:"}),(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Style variables"}),", which do not depend on the color scheme,"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("strong",{children:"Color variables"}),", which depend on the color scheme."]})]}),(0,o.jsx)("p",{style:{marginBottom:"2rem"},children:"Here is the list of all CSS variables used in Pico:"}),(0,o.jsxs)("details",{children:[(0,o.jsx)("summary",{role:"button",className:"secondary",children:"Default styles CSS variables"}),(0,o.jsx)(r,{language:"css",children:c({code:v,linesToRemoveFromStart:3,linesToRemoveFromEnd:2})})]}),(0,o.jsxs)("details",{children:[(0,o.jsx)("summary",{role:"button",className:"secondary",children:"Default colors CSS variables"}),(0,o.jsx)(r,{language:"css",children:c({code:f,linesToRemoveFromStart:3,linesToRemoveFromEnd:2})})]})]}),(0,o.jsx)(h,{file:"docs.css-variables.jsx"})]})]})}export{k as default,z as links,B as meta};