(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{475:function(t,e,n){},476:function(t,e,n){"use strict";n(45),n(56);var r={name:"MicroMarkupArticle",props:{dateModified:{type:String},datePublished:{type:String},imageArticle:{type:String}}},o=n(24),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("meta",{attrs:{itemprop:"image",content:t.imageArticle}}),t._v(" "),e("meta",{attrs:{itemprop:"dateModified",content:t.dateModified}}),t._v(" "),e("meta",{attrs:{itemscope:"",itemprop:"mainEntityOfPage",itemid:"".concat(t.$config.SITE_URL,"/").concat(t.$route.name)}}),t._v(" "),e("meta",{attrs:{itemprop:"datePublished",content:t.datePublished}}),t._v(" "),e("div",{attrs:{itemprop:"author",itemscope:"",itemtype:"http://schema.org/Person"}},[e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("div",{attrs:{itemprop:"publisher",itemscope:"",itemtype:"https://schema.org/Organization"}},[e("div",{attrs:{itemprop:"logo",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[e("img",{staticStyle:{display:"none"},attrs:{itemprop:"url",src:t.$config.LOGO_URL,alt:"Logo ".concat(t.$config.SITE_NAME_EN)}}),t._v(" "),e("meta",{attrs:{itemprop:"width",content:t.$config.LOGO_WIDTH}}),t._v(" "),e("meta",{attrs:{itemprop:"height",content:t.$config.LOGO_HEIGHT}}),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}})]),t._v(" "),e("meta",{attrs:{itemprop:"name",content:t.$config.SITE_NAME_EN}}),t._v(" "),e("meta",{attrs:{itemprop:"telephone",content:t.$config.TELEPHONE}}),t._v(" "),e("meta",{attrs:{itemprop:"address",content:t.$config.ADDRESS}}),t._v(" "),e("meta",{attrs:{itemprop:"url",content:t.$config.SITE_URL}})])])}),[],!1,null,null,null);e.a=component.exports},477:function(t,e,n){"use strict";n(475)},478:function(t,e,n){"use strict";n(27),n(41),n(263),n(56);var r={data:function(){return{showForm:!0,showSuccess:!1,name:"",submittedNames:[],record:{phone:"",color:""}}},computed:{nameState:function(){return this.record.phone?12===this.record.phone.length:null}},methods:{handleSubmit:function(){var t=this;this.submittedNames.push(this.name);var e="https://api.telegram.org/bot".concat(this.$config.BOT_API_KEY,"/sendMessage"),n="<b>Заявка на обратный звонок!</b>\n";n+="<b>Отправитель: Заказать подбор</b>\n",n+="<b>Телефон: </b> ".concat(this.record.phone),this.$axios.post(e,{chat_id:this.$config.BOT_CHAT_ID,parse_mode:"html",text:n}).then((function(e){t.showSuccess=!0,t.showForm=!1,console.log("data ==>",e.data),console.log("status ==>",e.status),console.log("statusText ==>",e.statusText),console.log("headers ==>",e.headers),console.log("config ==>",e.config)}))}}},o=(n(477),n(24)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("b-form",{ref:"form",staticClass:"capture-form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("svg",{staticStyle:{visibility:"hidden",position:"absolute"},attrs:{width:"0",height:"0",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e("defs",[e("filter",{attrs:{id:"goo"}},[e("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"10",result:"blur"}}),t._v(" "),e("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}}),t._v(" "),e("feComposite",{attrs:{in:"SourceGraphic",in2:"goo",operator:"atop"}})],1)])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.showForm?e("div",{staticClass:"show-form"},[e("b-form-group",{staticStyle:{width:"240px","margin-bottom":"30px"}},[e("p",{staticClass:"capture-form__title"},[t._v("Нужна помощь?")]),t._v(" "),e("p",{staticClass:"capture-form__description goo"},[t._v("\n          Подберем программу игры для вашего мероприятия\n        ")])]),t._v(" "),e("b-form-group",{attrs:{label:"Телефон"}},[e("vesp-input-text-mask",{attrs:{mask:"+7 (XXX) XXX-XX-XX","placeholder-char":"X",state:t.nameState,"format-value":function(t){return t.replaceAll(/[^\d+]/g,"")}},model:{value:t.record.phone,callback:function(e){t.$set(t.record,"phone",e)},expression:"record.phone"}})],1),t._v(" "),e("b-form-group",{staticClass:"capture-form__group-buttom"},[e("b-button",{staticClass:"signup",attrs:{disabled:!t.nameState,type:"submit"}},[e("span",{staticClass:"btn-title"},[t._v("Заказать подбор")])])],1),t._v(" "),e("b-form-group",{staticClass:"capture-form__group-privacy-policy"},[e("p",{staticClass:"capture-form__privacy-policy"},[t._v("\n          Нажимая на кнопку вы принимаете\n          "),e("b-link",{attrs:{href:"/agreement"}},[t._v("политику конфеденциальности")])],1)])],1):t._e()]),t._v(" "),e("transition",{attrs:{name:"bounce"}},[t.showSuccess?e("div",{staticClass:"show-success"},[e("p",{staticClass:"goo"},[t._v("\n        Спасибо!"),e("br"),t._v("\n        Ваше сообщение отправлено\n      ")])]):t._e()])],1)}),[],!1,null,null,null);e.a=component.exports},485:function(t,e,n){},488:function(t,e,n){"use strict";n(485)},489:function(t,e,n){"use strict";n(15),n(64);var r={name:"Hero",props:{title:{type:String},description:{type:String},img:{type:String},color1:{type:String},color2:{type:String}}},o=(n(488),n(24)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"hero-section",style:"background-color: ".concat(t.color2)},[e("main",{staticClass:"hero-main-wrapper"},[e("h1",{staticClass:"title-h1"},[t._v(t._s(t.title))]),t._v(" "),e("p",{},[t._v(t._s(t.description))])]),t._v(" "),e("div",{staticClass:"hero-illustration-wrapper"},[e("img",{staticClass:"hero-illustration",attrs:{src:t.img,alt:""}})]),t._v(" "),e("div",{staticClass:"hero-polygon-shape",style:"background-color: ".concat(t.color1)})])}),[],!1,null,null,null);e.a=component.exports},545:function(t,e,n){"use strict";n.r(e);n(15),n(64),n(45),n(56);var r=n(476),o=n(489),c=n(478),l={components:{MicroMarkupArticle:r.a,Hero:o.a,CaptureForm:c.a},data:function(){return{title:"Программа дегустаций | Откройте для себя мир вина с Casino Wine",description:"Наши опытные сомелье проведут вас через уникальное путешествие, где вы сможете узнать об истории, процессе производства и характеристиках различных типов вин. Забронируйте винное казино прямо сейчас и насладитесь незабываемым опытом.",dateModified:"2023-02-21T06:08:18+03:00",datePublished:"2023-02-21T06:08:18+03:00",imageArticle:"/img/tasting-program-900.png"}},head:function(){return{htmlAttrs:{lang:"ru"},title:"".concat(this.title),meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"".concat(this.description)},{hid:"publish_date",name:"publish_date",content:"".concat(this.datePublished)},{hid:"og:type",name:"og:type",content:"article"},{hid:"og:title",name:"og:title",content:"".concat(this.title)},{hid:"og:description",property:"og:description",content:"".concat(this.description)},{hid:"og:image",property:"og:image",content:"".concat(this.imageArticle)},{hid:"og:url",property:"og:url",content:"".concat(this.$config.SITE_URL)},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",name:"twitter:title",content:"".concat(this.title)},{hid:"twitter:description",property:"twitter:description",content:"".concat(this.description)},{hid:"twitter:image",property:"twitter:image",content:"".concat(this.imageArticle)}],link:[{rel:"canonical",href:"".concat(this.$config.SITE_URL,"/").concat(this.$route.name)}]}}},_=n(24),component=Object(_.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("Hero",{attrs:{title:"Программа дегустаций",description:t.description,img:"/img/tasting-program-900.png",color1:"var(--thm-grey);",color2:"#fff"}}),t._v(" "),e("div",{staticClass:"article-container"},[e("aside",{staticClass:"article-sidebar-left"},[e("CaptureForm")],1),t._v(" "),e("main",{staticClass:"article-main",attrs:{id:"scrollspy-nested"}},[e("article",{attrs:{itemscope:"",itemprop:"mainEntity",itemtype:"http://schema.org/Article"}},[e("MicroMarkupArticle",{attrs:{"date-modified":t.dateModified,"date-published":t.datePublished,"image-article":t.imageArticle}}),t._v(" "),t._m(0)],1)]),t._v(" "),e("aside",{staticClass:"article-sidebar-right"},[e("section",{staticClass:"toc"},[t._m(1),t._v(" "),e("b-navbar",{directives:[{name:"b-scrollspyy",rawName:"v-b-scrollspyy",value:{element:"#scrollspy-nested",offset:150},expression:"{ element: '#scrollspy-nested', offset: 150 }"}],staticClass:"flex-column"},[e("b-nav",{attrs:{pills:"",vertical:""}},[e("b-nav-item",{attrs:{href:"#tasting-1"}},[t._v("Дегустация I:"),e("br"),t._v("\n              Знакомство с миром вина")]),t._v(" "),e("b-nav-item",{attrs:{href:"#tasting-2"}},[t._v("Дегустация II:"),e("br"),t._v("\n              Путешествие в мир вина")]),t._v(" "),e("b-nav-item",{attrs:{href:"#tasting-3"}},[t._v("Дегустация III:"),e("br"),t._v("\n              Вкус бочки")]),t._v(" "),e("b-nav-item",{attrs:{href:"#tasting-4"}},[t._v("Дегустация IV:"),e("br"),t._v("\n              Вкус великих регионов")]),t._v(" "),e("b-nav-item",{attrs:{href:"#tasting-5"}},[t._v("Дегустация V:"),e("br"),t._v("\n              Изюминки мирового виноделия")])],1)],1)],1)])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-body",attrs:{itemprop:"articleBody"}},[e("p",[t._v("\n            Мы хотели бы подчеркнуть, что приведенные ниже программы\n            дегустаций являются лишь примером. Они направлены на то, чтобы\n            познакомить участников с интерактивом и помочь выбрать подходящую\n            тему дегустации. Любое наше предложение для вас и ваших гостей\n            готовится индивидуально. Каждая дегустация уникальна и не походит\n            на предыдущую — разные компании и разные вина. Чтобы подготовить\n            подробное предложение, нам нужна информация о продолжительности\n            вечера, ваших интересах, данные о площадке и предполагаемом\n            бюджете. Напитки нами тщательно подбираются, чтобы найти наилучшее\n            соотношение цены и качества.\n          ")]),t._v(" "),e("p",{staticClass:"title-h3",attrs:{id:"tasting-1"}},[t._v("\n            Дегустация I: Знакомство с миром вина\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Тема:")]),e("br"),t._v("\n            Мы обсуждаем самые важные вопросы, связанные с вином: его\n            производство, этикетки, сорта и сам процесс дегустации. Наша цель\n            — пробудить у участников интерес к теме вина, а также донести\n            информацию, которая в будущем позволит сделать осознанный выбор\n            при его покупке.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Презентация:")]),e("br"),t._v("\n            Мы познакомим участников с информацией о выращивании виноградной\n            лозы и ее разнообразии, с историей возникновения напитка.\n            Расскажем о культуре употребления и дегустации, объясним, что\n            такое «нос» и «рот» в вине, чем отличаются сорта, регионы и\n            винтажи."),e("br"),t._v("\n            Мы постараемся вызвать интерес у гостей и поможем по-другому\n            взглянуть на вино в целом, представляя несколько практических\n            советов, призванных облегчить покупку вина в магазине.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Вина, подаваемые для игры:")]),e("br"),t._v("\n            Мы рекомендуем моносортовые вина, отражающие характер региона и\n            сорта. Это бутылки с выразительным вкусом и ароматом, которые\n            иллюстрируют колоссальные различия, присутствующие в мире вина.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Продолжительность:")]),e("br"),t._v("\n            В зависимости от пожеланий компании и количества представленного\n            вина, но дегустация не может быть меньше часа.\n          ")]),t._v(" "),e("p",{staticClass:"title-h3",attrs:{id:"tasting-2"}},[t._v("\n            Дегустация II: Путешествие в мир вина\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Тема:")]),e("br"),t._v("\n            Этот интерактив направлен на презентацию разных стилей вина. Мы\n            покажем различные свойства и вкусы, которые характерны для\n            традиционных регионов производства, таких как Бордо, Тоскана или\n            Риоха, а также вин из нового света, США, Чили, Новой Зеландии и\n            Австралии.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Презентация:")]),e("br"),t._v("\n            Презентация предполагает рассказ о сортах винограда в регионе, его\n            аппелансионах, истории виноделия и терруаре, подходящего для\n            винограда. Дегустация делится на несколько этапов, каждый из\n            которых посвящен одному региону и одному типу вина. После каждого\n            этапа есть 5-10-минутная дискуссия с участниками, обмен мнениями.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Вина, подаваемые на дегустации:")]),e("br"),t._v("\n            Мы предлагаем подавать от 8 до 12 видов вина в зависимости от\n            запроса организаторов. Это вина, характерные для своего региона,\n            подтверждающие его класс и стиль. В то же время эти вина\n            удовлетворят даже самых больших ценителей.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Продолжительность:")]),e("br"),t._v("\n            В зависимости от количества представленных вин дегустация длится\n            от 1,5 до 3 часов. Если у участников много вопросов, даже не\n            связанных с вином, есть возможность продлить дегустацию.\n          ")]),t._v(" "),e("p",{staticClass:"title-h3",attrs:{id:"tasting-3"}},[t._v("Дегустация III: Вкус бочки")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Тема:")]),e("br"),t._v("\n            Во время игры обсуждаем очень важный вопрос: выдержка вина в\n            дубовых бочках. Какие вкусы и ароматы они приобретают, благодаря\n            использованию древесины дуба. Поделимся информацией о самой\n            технике старения, производстве бочек, этикетках на бутылках,\n            рассказывающих об использовании той или иной технологии.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Презентация:")]),e("br"),t._v("\n            Мы обсудим различные технологии на примере представленных бутылок.\n            Участники имеют возможность сравнить свои наблюдения. Мы\n            показываем практически всю гамму ароматов, которые приобретает\n            вино от выдержки в дубе.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Представленное вино:")]),e("br"),t._v("\n            Вина, которые имели длительный и не очень контакт с бочкой.\n            Мадейра, портвейн, херес, пинотаж и вина из Риохи и Крыма будут\n            специально выбраны, чтобы проиллюстрировать разнообразное влияние,\n            которое древесина дуба может оказывать на производство вина.\n            Благодаря этому каждый участник определит для себя идеальную\n            выдержку и технологию производства.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Продолжительность:")]),e("br"),t._v("\n            В зависимости от набора вин и количества участников от 2,5 до 4\n            часов.\n          ")]),t._v(" "),e("p",{staticClass:"title-h3",attrs:{id:"tasting-4"}},[t._v("\n            Дегустация IV: Вкус великих регионов\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Тема:")]),e("br"),t._v("\n            Тема игры — самые престижные винодельческие регионы: Бордо,\n            Бургундия, Риоха, Рибера-дель-Дуэро, Приорат, Пьемонт, Тоскана и\n            Шампань. Мы показываем и дегустируем вина из лучших аппелансионов\n            определенного региона.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Презентация:")]),e("br"),t._v("\n            Обсуждая данный регион и виноградник, мы одновременно представляем\n            вино. В обсуждении и дегустации каждого образца принимают участие\n            все гости — участники увидят образец после слепой дегустации.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Представленное вино:")]),e("br"),t._v("\n            Вина от самых выдающихся производителей из самых известных\n            регионов. Напитки, гарантирующие удовлетворение даже самым\n            требовательным гостям.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Продолжительность:")]),e("br"),t._v("\n            Презентация длится в зависимости от пожелания организаторов — от\n            1,5 до 3 часов.\n          ")]),t._v(" "),e("p",{staticClass:"title-h3",attrs:{id:"tasting-5"}},[t._v("\n            Дегустация V: Изюминки мирового виноделия\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Тема:")]),e("br"),t._v("\n            Представляем самые интересные вина из малоизвестных регионов,\n            таких как Марке, Трентино, Сицилия, Лангедок-Руссийон, Пенедес,\n            Виллань или Нидеростеррайх. Каждый из эти вин завоевали множество\n            призов на международных выставках и получили широкое признание.\n            Одна из главных целей презентации — показать, что и маленькие\n            винодельни могут делать отличное вино. Это позволит побудить\n            участников к поиску неизвестных и интересных вкусов в будущем.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Презентация:")]),e("br"),t._v("\n            Обсуждая данный регион и виноградник, мы одновременно представляем\n            вино. Делаем его ароматический и вкусовой анализ. После слепой\n            дегустации участники увидят образец.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Представленное вино:")]),e("br"),t._v("\n            Необычные и малоизвестные производители и регионы.\n          ")]),t._v(" "),e("p",[e("span",{staticClass:"title-h4 theme_color"},[t._v("Продолжительность:")]),e("br"),t._v("\n            Презентация длится в зависимости от пожелания организатора — от\n            1,5 до 3 часов.\n          ")])])},function(){var t=this._self._c;return t("header",[t("p",{staticClass:"title-h6"},[this._v("Содержание:")])])}],!1,null,null,null);e.default=component.exports}}]);