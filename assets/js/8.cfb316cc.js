(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{19:function(t,e,a){},20:function(t,e,a){},25:function(t,e,a){"use strict";var n=a(19);a.n(n).a},26:function(t,e,a){"use strict";var n=a(20);a.n(n).a},29:function(t,e,a){"use strict";a.r(e);var n={components:{ParentLayout:a(54).a}},s=a(0),o=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("ParentLayout",[this._t("sidebar-top",null,{slot:"sidebar-top"}),this._v(" "),this._t("sidebar-bottom",null,{slot:"sidebar-bottom"}),this._v(" "),this._t("page-top",null,{slot:"page-top"}),this._v(" "),this._t("page-bottom",null,{slot:"page-bottom"})],2)}),[],!1,null,null,null);e.default=o.exports},56:function(t,e,a){"use strict";var n=a(55),s=(a(25),a(0)),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$page.frontmatter.tags?a("div",[t._v("\n  tags:\n  "),t._l(t.$page.frontmatter.tags,(function(e){return a("router-link",{key:e,staticClass:"tag",attrs:{to:{path:"/tag/#"+e}}},[t._v("\n    "+t._s(e)+"\n  ")])}))],2):t._e()}),[],!1,null,null,null).exports,r={name:"page",props:{sidebarItems:{type:Array,default:()=>[]}},components:{ParentPage:n.a,TagLinks:o}},l=(a(26),Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ParentPage",{attrs:{sidebarItems:t.sidebarItems}},[a("div",{staticClass:"content head",attrs:{slot:"top"},slot:"top"},[t._t("top",[t.$page.frontmatter.title?a("h1",{attrs:{id:t.$page.frontmatter.title}},[t._v("\n        "+t._s(t.$page.frontmatter.title)+"\n      ")]):t._e(),t._v(" "),a("TagLinks",{staticClass:"tag-links"})])],2),t._v(" "),t._t("bottom",null,{slot:"bottom"})],2)}),[],!1,null,null,null));e.a=l.exports}}]);