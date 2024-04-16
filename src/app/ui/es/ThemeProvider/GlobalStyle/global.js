import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import { css } from 'antd-style';
export default (function (token) {
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :root {\n    --font-settings: 'cv01', 'tnum', 'kern';\n    --font-variations: 'opsz' auto, tabular-nums;\n  }\n\n  html {\n    overscroll-behavior: none;\n    color-scheme: ", ";\n  }\n\n  body {\n    overflow: hidden auto;\n\n    min-height: 100vh;\n    margin: 0;\n    padding: 0;\n\n    font-family: ", ";\n    font-size: ", "px;\n    font-feature-settings: var(--font-settings);\n    font-variation-settings: var(--font-variations);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    line-height: 1;\n    color: ", ";\n    text-size-adjust: none;\n    text-rendering: optimizelegibility;\n    word-wrap: break-word;\n    vertical-align: baseline;\n\n    background-color: ", ";\n\n    -webkit-overflow-scrolling: touch;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  code {\n    font-family: ", " !important;\n\n    span {\n      font-family: ", " !important;\n    }\n  }\n\n  ::selection {\n    color: #000;\n    background: ", ";\n\n    -webkit-text-fill-color: unset !important;\n  }\n\n  * {\n    scrollbar-color: ", " transparent;\n    scrollbar-width: thin;\n    box-sizing: border-box;\n    vertical-align: baseline;\n  }\n"])), token.isDarkMode ? 'dark' : 'light', token.fontFamily, token.fontSize, token.colorTextBase, token.colorBgLayout, token.fontFamilyCode, token.fontFamilyCode, token.yellow9, token.colorFill);
});