(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,function(t,e,c){t.exports={item:"CartItem_item__1Noml",details:"CartItem_details__1tPLb",quantity:"CartItem_quantity__2U6XE",price:"CartItem_price__DHA0D",itemprice:"CartItem_itemprice__2ILCD",actions:"CartItem_actions__NUVUl"}},,,function(t,e,c){t.exports={item:"ProductItem_item___A-8q",price:"ProductItem_price__1wpST",actions:"ProductItem_actions__3m97R"}},function(t,e,c){t.exports={notification:"Notification_notification__2ZJnA",error:"Notification_error__3JD3E",success:"Notification_success__3etL8"}},,,function(t,e,c){t.exports={button:"CartButton_button__1K8Cc",badge:"CartButton_badge__aXmp6"}},,function(t,e,c){t.exports={card:"Card_card__2DEW7"}},function(t,e,c){t.exports={cart:"Cart_cart__19Yfp"}},function(t,e,c){t.exports={header:"MainHeader_header__FZiXv"}},function(t,e,c){t.exports={products:"Products_products__2c24d"}},,,,,,function(t,e,c){},,,,,,,,,function(t,e,c){"use strict";c.r(e);var n=c(7),r=c.n(n),a=(c(23),c(1)),i=c(2),s=c(14),o=c.n(s),u=c(0),d=function(t){return Object(u.jsx)("section",{className:"".concat(o.a.card," ").concat(t.className?t.className:""),children:t.children})},l=c(15),j=c.n(l),f=c(5),b=c.n(f),p=c(3),m=c.n(p),h=c(6),x=c(18),O=c(4),_=Object(O.b)({name:"displayCart",initialState:{showCart:!1,notification:{status:"",title:"",message:""}},reducers:{show:function(t){t.showCart=!0},hide:function(t){t.showCart=!1},toggle:function(t){t.showCart=!t.showCart},addNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),v=_.actions,y=_.reducer,g=Object(O.b)({name:"displayCart",initialState:{items:[],totalQuantity:0},reducers:{addItem:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.title===c.title}));n?(n.quantity++,n.total+=n.price):(t.items.push({title:c.title,quantity:1,total:Number(c.price),price:Number(c.price)}),t.totalQuantity++)},increment:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.title===c}));n.quantity++,n.total+=n.price},decrement:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.title===c}));1===n.quantity?(t.items=t.items.filter((function(t){return t.title!==c})),t.totalQuantity--):(n.quantity--,n.total-=n.price)},fetchData:function(t,e){null!==e.payload&&(t.items=Object(x.a)(e.payload.items),t.totalQuantity=e.payload.totalQuantity)}}}),N=g.actions,C=g.reducer,w=function(t){var e=Object(i.b)(),c=t.items.map((function(t){return Object(u.jsxs)("li",{className:b.a.item,children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:t.title}),Object(u.jsxs)("div",{className:b.a.price,children:["$",t.total.toFixed(2)," ",Object(u.jsxs)("span",{className:b.a.itemprice,children:["($",t.price.toFixed(2),"/item)"]})]})]}),Object(u.jsxs)("div",{className:b.a.details,children:[Object(u.jsxs)("div",{className:b.a.quantity,children:["x ",Object(u.jsx)("span",{children:t.quantity})]}),Object(u.jsxs)("div",{className:b.a.actions,children:[Object(u.jsx)("button",{onClick:function(){var c;c=t.title,e(N.decrement(c))},children:"-"}),Object(u.jsx)("button",{onClick:function(){var c;c=t.title,e(N.increment(c))},children:"+"})]})]})]})}));return Object(u.jsx)(a.Fragment,{children:t.items&&c})},I=function(t){var e=Object(i.c)((function(t){return t.cartItems}));return Object(u.jsxs)(d,{className:j.a.cart,children:[Object(u.jsx)("h2",{children:"Your Shopping Cart"}),Object(u.jsx)("ul",{children:e&&Object(u.jsx)(w,{items:e.items})})]})},S=c(12),k=c.n(S),q=function(t){var e=Object(i.c)((function(t){return t.cartItems})),c=Object(i.b)();return Object(u.jsxs)("button",{className:k.a.button,onClick:function(){c(v.toggle())},children:[Object(u.jsx)("span",{children:"My Cart"}),Object(u.jsx)("span",{className:k.a.badge,children:e?e.totalQuantity:0})]})},E=c(16),F=c.n(E),Q=function(t){return Object(u.jsxs)("header",{className:F.a.header,children:[Object(u.jsx)("h1",{children:"ReduxCart"}),Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:Object(u.jsx)(q,{})})})})]})},D=function(t){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(Q,{}),Object(u.jsx)("main",{children:t.children})]})},P=c(8),J=c.n(P),R=function(t){var e=Object(i.b)(),c=t.items.map((function(t){return Object(u.jsx)("li",{className:J.a.item,children:Object(u.jsxs)(d,{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:t.title}),Object(u.jsxs)("div",{className:J.a.price,children:["$",t.price.toFixed(2)]})]}),Object(u.jsx)("p",{children:t.description}),Object(u.jsx)("div",{className:J.a.actions,children:Object(u.jsx)("button",{onClick:function(){!function(t){e(N.addItem(t))}(t)},children:"Add to Cart"})})]})})}));return Object(u.jsx)("ul",{children:c})},T=c(17),A=c.n(T),B=function(t){var e=Object(i.c)((function(t){return t.shopItems}));return Object(u.jsxs)("section",{className:A.a.products,children:[Object(u.jsx)("h2",{children:"Buy your favorite products"}),Object(u.jsx)("ul",{children:Object(u.jsx)(R,{items:e})})]})},U=c(9),L=c.n(U),X=function(t){var e="";"error"===t.status&&(e=L.a.error),"success"===t.status&&(e=L.a.success);var c="".concat(L.a.notification," ").concat(e);return Object(u.jsxs)("section",{className:c,children:[Object(u.jsx)("h2",{children:t.title}),Object(u.jsx)("p",{children:t.message})]})},$=!0;var H=function(){var t=Object(i.c)((function(t){return t.cart.showCart})),e=Object(i.c)((function(t){return t.cartItems})),c=Object(i.c)((function(t){return t.cart.notification})),n=Object(i.b)();return Object(a.useEffect)((function(){n(function(){var t=Object(h.a)(m.a.mark((function t(e){var c,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(h.a)(m.a.mark((function t(){var e,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://shopping-cart-b1484-default-rtdb.firebaseio.com/cart.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Receiving cart data failed.");case 5:return t.next=7,e.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,c();case 4:n=t.sent,e(N.fetchData({items:n.items||[],totalQuantity:n.totalQuantity})),e(v.addNotification({status:"success",title:"Success!",message:"Received cart data successfully!"})),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),alert(t.t0),e(v.addNotification({status:"error",title:"Error!",message:"Receiving cart data failed!"}));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[n]),Object(a.useEffect)((function(){$?$=!1:n(function(t){return function(){var e=Object(h.a)(m.a.mark((function e(c){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(v.addNotification({status:"pending",title:"Sending...",message:"Sending cart data"})),n=function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://shopping-cart-b1484-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify(t)});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Sending cart data failed.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,n();case 5:c(v.addNotification({status:"success",title:"Success!",message:"Sent cart data successfully!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c(v.addNotification({status:"error",title:"Error!",message:"Sending cart data failed!"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(e))}),[e,n]),Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(X,{status:c.status,title:c.title,message:c.message}),Object(u.jsxs)(D,{children:[t&&Object(u.jsx)(I,{}),Object(u.jsx)(B,{})]})]})},M=Object(O.b)({name:"displayCart",initialState:[{title:"Test Item1",price:6,description:"First product of the Store"},{title:"Test Item2",price:12,description:"Second product of the Store"},{title:"Test Item3",price:12,description:"Second product of the Store"}],reducers:{}}).reducer,Y=Object(O.a)({reducer:{cart:y,cartItems:C,shopItems:M}});r.a.render(Object(u.jsx)(i.a,{store:Y,children:Object(u.jsx)(H,{})}),document.getElementById("root"))}],[[32,1,2]]]);
//# sourceMappingURL=main.09ec72a0.chunk.js.map