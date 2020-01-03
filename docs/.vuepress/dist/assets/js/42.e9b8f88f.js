(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{100:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"加密-对称加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加密-对称加密","aria-hidden":"true"}},[t._v("#")]),t._v(" 加密 对称加密")]),t._v(" "),a("h2",{attrs:{id:"aes-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aes-js","aria-hidden":"true"}},[t._v("#")]),t._v(" AES-js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" PassPhrase "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is my private key"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Bits "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// private key")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MattsRSAkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cryptico"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateRSAKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PassPhrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Bits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// public key")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MattsPublicKeyString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cryptico"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publicKeyString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MattsRSAkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" PlainText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Matt, I need you to help me with my Starcraft strategy."')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加密 - publickey")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" EncryptionResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cryptico"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encrypt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PlainText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MattsPublicKeyString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解密 - privatekey")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" DecryptionResult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cryptico"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decrypt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EncryptionResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cipher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MattsRSAkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EncryptionResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cipher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DecryptionResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plaintext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("使用三方 cryptico")])]),t._v(" "),a("h3",{attrs:{id:"js-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-版本","aria-hidden":"true"}},[t._v("#")]),t._v(" js 版本")]),t._v(" "),a("h3",{attrs:{id:"go-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-版本","aria-hidden":"true"}},[t._v("#")]),t._v(" go 版本")]),t._v(" "),a("h2",{attrs:{id:"rsa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rsa","aria-hidden":"true"}},[t._v("#")]),t._v(" RSA")]),t._v(" "),a("h2",{attrs:{id:"des"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#des","aria-hidden":"true"}},[t._v("#")]),t._v(" DES")])])}],!1,null,null,null);s.default=e.exports}}]);