(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{479:function(t,e,l){},480:function(t,e,l){"use strict";l(479)},481:function(t,e,l){"use strict";var r={data:function(){return{grid:null,active:"isotope",filterStr:"*",sorterStr:"original-order"}},mounted:function(){var t=this;this.$nextTick((function(){var e=l(483);t.grid=new e(".grid",{itemSelector:".gallery-item",layoutMode:"fitRows",getSortData:{name:".name",symbol:".symbol",number:".number parseInt",category:"[data-category]"}})})),this.$glightbox({selector:".lightbox-image",touchNavigation:!0,loop:!0,autoplayVideos:!0})},methods:{onFilter:function(t){this.filterStr=t,this.grid.arrange({filter:t})},onSorter:function(t){this.sorterStr=t,this.grid.arrange({sortBy:t})}}},o=(l(480),l(24)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("section",{directives:[{name:"show",rawName:"v-show",value:"isotope"===t.active,expression:"active === 'isotope'"}]},[e("div",{staticClass:"filter-nav"},[t._m(0),t._v(" "),e("nav",[e("b-button",{staticClass:"inline",attrs:{upload:"*"===t.filterStr},on:{click:function(e){return t.onFilter("*")}}},[t._v("\n            Все\n          ")]),t._v(" "),e("b-button",{staticClass:"inline",attrs:{upload:".house1"===t.filterStr},on:{click:function(e){return t.onFilter(".house1")}}},[t._v("\n            Дом 1\n          ")]),t._v(" "),e("b-button",{staticClass:"inline",attrs:{upload:".house2"===t.filterStr},on:{click:function(e){return t.onFilter(".house2")}}},[t._v("\n            Дом 2\n          ")])],1),t._v(" "),e("nav",[e("b-button",{staticClass:"inline",attrs:{upload:".appearance"===t.filterStr},on:{click:function(e){return t.onFilter(".appearance")}}},[t._v("\n            Снаружи\n          ")]),t._v(" "),e("b-button",{staticClass:"inline",attrs:{upload:".livingroom"===t.filterStr},on:{click:function(e){return t.onFilter(".livingroom")}}},[t._v("\n            Гостиная\n          ")]),t._v(" "),e("b-button",{staticClass:"inline",attrs:{upload:".bedroom"===t.filterStr},on:{click:function(e){return t.onFilter(".bedroom")}}},[t._v("\n            Спальня\n          ")]),t._v(" "),e("b-button",{staticClass:"inline",attrs:{upload:".kitchen"===t.filterStr},on:{click:function(e){return t.onFilter(".kitchen")}}},[t._v("\n            Кухня\n          ")]),t._v(" "),e("b-button",{staticClass:"inline",attrs:{upload:".bathroom"===t.filterStr},on:{click:function(e){return t.onFilter(".bathroom")}}},[t._v("\n            Санузел\n          ")])],1)]),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"w-full"},[e("div",{staticClass:"grid"},[e("div",{staticClass:"gallery-item appearance house1"},[e("div",{staticClass:"inner-box"},[t._m(1),t._v(" "),e("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-1.jpg","data-fancybox":"gallery"}}),t._v(" "),e("div",{staticClass:"cap-box"},[e("div",{staticClass:"cap-inner"},[t._m(2),t._v(" "),e("div",{staticClass:"title"},[e("h5",[e("nuxt-link",{attrs:{to:"/portfolio"}},[t._v("Fimlor Experience")])],1)])])])])]),t._v(" "),e("div",{staticClass:"gallery-item livingroom house1"},[e("div",{staticClass:"inner-box"},[t._m(3),t._v(" "),e("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-2.jpg","data-fancybox":"gallery"}}),t._v(" "),e("div",{staticClass:"cap-box"},[e("div",{staticClass:"cap-inner"},[t._m(4),t._v(" "),e("div",{staticClass:"title"},[e("h5",[e("nuxt-link",{attrs:{to:"/portfolio"}},[t._v("Fimlor Experience")])],1)])])])])]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42)])])])])}),[function(){var t=this._self._c;return t("header",[t("p",{staticClass:"title-h4"},[this._v("Фильтры:")])])},function(){var t=this._self._c;return t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-1.jpg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"cat"},[t("span",[this._v("Graphic 6")])])},function(){var t=this._self._c;return t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-2.jpg",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"cat"},[t("span",[this._v("Graphic 6")])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-3.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-3.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-4.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-4.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-5.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-5.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item livingroom house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-6.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-6.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item livingroom house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-7.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-7.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item livingroom house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-8.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-8.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item livingroom house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-9.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-9.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item bedroom house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-10.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-10.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item bedroom house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-11.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-11.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item bedroom house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-12.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-12.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item bedroom house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-13.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-13.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item livingroom house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-14.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-14.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-15.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-15.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-16.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-16.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-17.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-17.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-18.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-18.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house1"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house1-19.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house1-19.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-1.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-1.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-2.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-2.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-3.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-3.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-4.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-4.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-5.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-5.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-6.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-6.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item appearance house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-7.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-7.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item livingroom house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-8.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-8.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item livingroom house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-9.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-9.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item livingroom house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-10.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-10.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item kitchen house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-11.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-11.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item kitchen house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-12.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-12.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item bathroom house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-13.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-13.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item bedroom house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-14.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-14.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-15.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-15.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-16.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-16.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item livingroom house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-17.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-17.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item kitchen house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-18.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-18.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item kitchen house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-19.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-19.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item kitchen house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-20.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-20.jpg","data-fancybox":"gallery"}})])])},function(){var t=this._self._c;return t("div",{staticClass:"gallery-item livingroom house2"},[t("div",{staticClass:"inner-box"},[t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/gallery/thumbnails/house2-21.jpg",alt:""}})]),this._v(" "),t("a",{staticClass:"lightbox-image overlay-box",attrs:{href:"/images/gallery/house2-21.jpg","data-fancybox":"gallery"}})])])}],!1,null,null,null);e.a=component.exports},539:function(t,e,l){"use strict";l.r(e);var r={components:{Gallery:l(481).a},pageData:{title:"+++ Винное казино на мероприятия в СПб | Casino Wine Москва",description:"Винное казино — новый формат мероприятия на корпоратив, день рождения, свадьбу и тимбилдинг. Дегустация, мастер-класс и 2 часа полезного общения в компании сомелье",canonical:"",publish_date:"2023-02-21T06:08:18.000000Z",updated_date:"2023-02-21T06:08:18.000000Z",type:"article++",image_page:"favicons/favicon-512x512.png"},layout:"marketing"},o=l(24),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",[t("gallery")],1)}),[],!1,null,null,null);e.default=component.exports}}]);