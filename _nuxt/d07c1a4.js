(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{475:function(t,e,o){},476:function(t,e,o){"use strict";o(45),o(56);var n={name:"MicroMarkupArticle",props:{dateModified:{type:String},datePublished:{type:String},imageArticle:{type:String}}},r=o(24),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("meta",{attrs:{itemprop:"image",content:t.imageArticle}}),t._v(" "),e("meta",{attrs:{itemprop:"dateModified",content:t.dateModified}}),t._v(" "),e("meta",{attrs:{itemscope:"",itemprop:"mainEntityOfPage",itemid:"".concat(t.$config.SITE_URL,"/").concat(t.$route.name)}}),t._v(" "),e("meta",{attrs:{itemprop:"datePublished",content:t.datePublished}}),t._v(" "),e("div",{attrs:{itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("div",{attrs:{itemprop:"publisher",itemscope:"",itemtype:"https://schema.org/Organization"}},[e("div",{attrs:{itemprop:"logo",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[e("img",{staticStyle:{display:"none"},attrs:{itemprop:"url",src:t.$config.LOGO_URL,alt:"Logo ".concat(t.$config.SITE_NAME_EN)}}),t._v(" "),e("meta",{attrs:{itemprop:"width",content:t.$config.LOGO_WIDTH}}),t._v(" "),e("meta",{attrs:{itemprop:"height",content:t.$config.LOGO_HEIGHT}}),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}}),t._v(" "),e("meta",{attrs:{itemprop:"telephone",content:t.$config.TELEPHONE}}),t._v(" "),e("meta",{attrs:{itemprop:"address",content:t.$config.ADDRESS}}),t._v(" "),e("meta",{attrs:{itemprop:"url",content:t.$config.SITE_URL}})])])}),[],!1,null,null,null);e.a=component.exports},477:function(t,e,o){"use strict";o(475)},478:function(t,e,o){"use strict";o(27),o(41),o(263),o(56);var n={data:function(){return{showForm:!0,showSuccess:!1,name:"",submittedNames:[],record:{phone:"",color:""}}},computed:{nameState:function(){return this.record.phone?12===this.record.phone.length:null}},methods:{handleSubmit:function(){var t=this;this.submittedNames.push(this.name);var e="https://api.telegram.org/bot".concat(this.$config.BOT_API_KEY,"/sendMessage"),o="<b>Заявка на обратный звонок!</b>\n";o+="<b>Отправитель: Заказать подбор</b>\n",o+="<b>Телефон: </b> ".concat(this.record.phone),this.$axios.post(e,{chat_id:this.$config.BOT_CHAT_ID,parse_mode:"html",text:o}).then((function(e){t.showSuccess=!0,t.showForm=!1,console.log("data ==>",e.data),console.log("status ==>",e.status),console.log("statusText ==>",e.statusText),console.log("headers ==>",e.headers),console.log("config ==>",e.config)}))}}},r=(o(477),o(24)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("b-form",{ref:"form",staticClass:"capture-form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("svg",{staticStyle:{visibility:"hidden",position:"absolute"},attrs:{width:"0",height:"0",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e("defs",[e("filter",{attrs:{id:"goo"}},[e("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"10",result:"blur"}}),t._v(" "),e("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}}),t._v(" "),e("feComposite",{attrs:{in:"SourceGraphic",in2:"goo",operator:"atop"}})],1)])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.showForm?e("div",{staticClass:"show-form"},[e("b-form-group",{staticStyle:{width:"240px","margin-bottom":"30px"}},[e("p",{staticClass:"capture-form__title"},[t._v("Нужна помощь?")]),t._v(" "),e("p",{staticClass:"capture-form__description goo"},[t._v("\n          Подберем программу игры для вашего мероприятия\n        ")])]),t._v(" "),e("b-form-group",{attrs:{label:"Телефон"}},[e("vesp-input-text-mask",{attrs:{mask:"+7 (XXX) XXX-XX-XX","placeholder-char":"X",state:t.nameState,"format-value":function(t){return t.replaceAll(/[^\d+]/g,"")}},model:{value:t.record.phone,callback:function(e){t.$set(t.record,"phone",e)},expression:"record.phone"}})],1),t._v(" "),e("b-form-group",{staticClass:"capture-form__group-buttom"},[e("b-button",{staticClass:"signup",attrs:{disabled:!t.nameState,type:"submit"}},[e("span",{staticClass:"btn-title"},[t._v("Заказать подбор")])])],1),t._v(" "),e("b-form-group",{staticClass:"capture-form__group-privacy-policy"},[e("p",{staticClass:"capture-form__privacy-policy"},[t._v("\n          Нажимая на кнопку вы принимаете\n          "),e("b-link",{attrs:{href:"/agreement"}},[t._v("политику конфеденциальности")])],1)])],1):t._e()]),t._v(" "),e("transition",{attrs:{name:"bounce"}},[t.showSuccess?e("div",{staticClass:"show-success"},[e("p",{staticClass:"goo"},[t._v("\n        Спасибо!"),e("br"),t._v("\n        Ваше сообщение отправлено\n      ")])]):t._e()])],1)}),[],!1,null,null,null);e.a=component.exports},482:function(t,e,o){"use strict";o(15),o(64);var n={name:"PageHeader",props:{title:{type:String},description:{type:String},imgbg:{type:String}}},r=o(24),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"page-banner"},[e("div",{class:t.imgbg}),t._v(" "),e("div",{staticClass:"shape-1"}),t._v(" "),e("div",{staticClass:"shape-2"}),t._v(" "),e("div",{staticClass:"banner-inner"},[e("div",{staticClass:"auto-container"},[e("div",{staticClass:"inner-container clearfix"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),e("h2",[t._v(t._s(t.description))]),t._v(" "),e("div",{staticClass:"page-nav"},[e("ul",{staticClass:"bread-crumb clearfix"},[e("li",[e("nuxt-link",{attrs:{to:"/"}},[t._v("Главная")])],1),t._v(" "),e("li",{staticClass:"active"},[t._v(t._s(t.title))])])])])])])])}),[],!1,null,null,null);e.a=component.exports},495:function(t,e,o){},514:function(t,e,o){"use strict";o(495)},535:function(t,e,o){"use strict";o.r(e);o(15),o(64),o(45),o(56);var n=o(476),r=o(482),c=o(478),l={components:{MicroMarkupArticle:n.a,PageHeader:r.a,CaptureForm:c.a},jumbotronData:{title:"Контактная информация Casino Wine",description:"Есть вопрос или нужна консультация? Свяжитесь с командой Casino Wine и получите быстрый и компетентный ответ. Мы здесь, чтобы помочь вам!",img:"/img/contacts.svg"},layout:"page",data:function(){return{title:"Контактная информация Casino Wine | Свяжитесь с нами",description:"Есть вопрос или нужна консультация? Свяжитесь с командой Casino Wine и получите быстрый и компетентный ответ. Мы здесь, чтобы помочь вам!",dateModified:"2023-02-21T06:08:18+03:00",datePublished:"2023-02-21T06:08:18+03:00",imageArticle:"/img/contacts.jpg"}},head:function(){return{htmlAttrs:{lang:"ru"},title:"".concat(this.title),meta:[{hid:"description",name:"description",content:"".concat(this.description)},{hid:"publish_date",name:"publish_date",content:"2023-02-21T06:08:18.000000Z"},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:title",name:"og:title",content:"".concat(this.title)},{hid:"og:description",property:"og:description",content:"".concat(this.description)},{hid:"og:image",property:"og:image",content:"favicons/favicon-512x512.png"},{hid:"og:url",property:"og:url",content:"".concat(this.$config.SITE_URL)},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:"".concat(this.title)},{hid:"twitter:description",property:"twitter:description",content:"".concat(this.description)},{hid:"twitter:image",property:"twitter:image",content:"favicons/favicon-512x512.png"}],link:[{rel:"canonical",href:"".concat(this.$config.SITE_URL,"/").concat(this.$route.name)}]}}},m=(o(514),o(24)),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("PageHeader",{attrs:{title:"Контакты",description:t.description,imgbg:"bg-contacts image-layer"}}),t._v(" "),e("div",{staticClass:"article-container article-min"},[e("aside",{staticClass:"article-sidebar-left"},[e("CaptureForm")],1),t._v(" "),e("main",{staticClass:"article-main",attrs:{id:"scrollspy-nested"}},[e("article",{attrs:{itemscope:"",itemprop:"mainEntity",itemtype:"http://schema.org/Article"}},[e("MicroMarkupArticle",{attrs:{"date-modified":t.dateModified,"date-published":t.datePublished,"image-article":t.imageArticle}}),t._v(" "),e("div",{staticClass:"article-body",attrs:{itemprop:"articleBody"}},[t._m(0),t._v(" "),e("div",{staticClass:"title-h5"},[t._v("Как к нам добраться")]),t._v(" "),e("p",[t._v("\n            Станция метро «Академическая», торговый комплекс «Академ-Парк»\n          ")]),t._v(" "),e("div",{staticClass:"adress-card",attrs:{itemscope:"",itemtype:"https://schema.org/Organization"}},[e("p",{attrs:{itemprop:"name"}},[t._v(t._s(t.$config.SITE_NAME_RU))]),t._v(" "),t._m(1),t._v(" "),e("p",{attrs:{itemprop:"telephone"}},[t._v("+7 931 63 888 57")])]),t._v(" "),e("p",[t._v("\n            Выходите из метро «Академическая», поворачиваете направо,\n            переходите Гражданский проспект, 200 метров и заходите в торговый\n            комплекс. Мы находимся на 1 этаже. (есть еще цокольный и второй,\n            можно любой).\n          ")]),t._v(" "),e("p",[t._v("Время работы: ПН — ВОСК с 10:00 до 22:00")]),t._v(" "),e("p",[t._v("Ждем вас по предварительному звонку!")])])],1)])])],1)}),[function(){var t=this._self._c;return t("p",[t("b",[this._v("\n              Уважаемые наши гости! Мы можем быть на мероприятии, пожалуйста,\n              согласуйте свой визит с нами!\n            ")])])},function(){var t=this,e=t._self._c;return e("ul",{attrs:{itemprop:"address",itemscope:"",itemtype:"https://schema.org/PostalAddress"}},[e("li",{attrs:{itemprop:"streetAddress"}},[t._v("Гражданский проспект, дом 41 Б")]),t._v(" "),e("li",{attrs:{itemprop:"addressLocality"}},[t._v("Санкт-Петербург")]),t._v(" "),e("li",{attrs:{itemprop:"addressCountry"}},[t._v("Россия")])])}],!1,null,null,null);e.default=component.exports}}]);