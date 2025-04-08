exports.id=946,exports.ids=[946],exports.modules={7921:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,6313,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},8193:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,6013,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},9715:(e,r,t)=>{Promise.resolve().then(t.bind(t,5242))},3787:(e,r,t)=>{Promise.resolve().then(t.bind(t,6806))},3588:(e,r,t)=>{"use strict";t.d(r,{q:()=>s});class s{constructor(e,r){this.name=e.name,this.code=e.code,this.price=e.price,this.description=e.description,this.qty=r||1,this.totalPrice=0,this.image=e.image,this.__typename=e.__typename,this.category=e.category}getId(){return this.code}getDescription(){return this.description}getTitle(){return this.name}getPrice(){return this.price}getQty(){return this.qty}setQty(e){this.qty=e}setTotal(){this.totalPrice=this.getPrice()*this.getQty()}getTotalPrice(){return this.totalPrice*this.getQty()}formatPrice(e){return isNaN(e)?"0,00":e.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g," ")}}},6806:(e,r,t)=>{"use strict";t.d(r,{default:()=>w});var s=t(5512),o=t(9593),i=t.n(o),a=t(7313),n=t(1499),c=t(7473),d=t(9359),l=t.n(d);function u(){let{currentItem:e}=(0,a.mt)();return(0,s.jsxs)("div",{className:`row flex ${l().cardProduct}`,children:[(0,s.jsx)("div",{className:`${l().cardProductImage}`,children:(0,s.jsx)(c.A,{alt:"image",url:"/placeholder.webp"})}),(0,s.jsxs)("div",{className:`${l().cardProductInfo}`,children:[(0,s.jsxs)("div",{className:`${l().cardProductInfoTitle}`,children:[e?.getTitle(),(0,s.jsx)("span",{})]}),(0,s.jsx)("div",{className:`${l().cardProductInfoPrice}`,children:(0,s.jsxs)("p",{children:[e?.getPrice()," AMD"]})}),(0,s.jsx)("div",{className:`${l().cardProductInfoDescription}`,children:e?.getDescription()})]})]})}function m(){return(0,s.jsx)("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}t(8009);var h=t(4583),p=t.n(h),g=t(6171),f=t(7770);function _(){let{cartItems:e,removeItem:r,cartTotal:t,addItem:o,cleanCart:i}=(0,a._$)(),{setCardState:c}=(0,a.mt)(),{cardViewState:d}=(0,a.LM)(),{currentHistoryItem:l}=(0,a.GD)(),u=async()=>{let r=(0,g.R)("user");(0,f.lD)(e,r?parseInt(r):-1,t),i(),c(!1)};function h(e){return isNaN(e)?"0,00":e.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g," ")}return(0,s.jsxs)("div",{className:`${p().cardList}`,children:[(0,s.jsxs)("div",{className:`${p().cardListRow} flex row`,children:[(0,s.jsx)("div",{className:` ${p().cardListRowTitle}`,children:(0,s.jsx)("span",{children:"Name"})}),(0,s.jsx)("div",{className:` ${p().cardListRowTitle}`,children:(0,s.jsx)("span",{children:"Qty"})}),(0,s.jsx)("div",{className:` ${p().cardListRowTitle}`,children:(0,s.jsx)("span",{children:"Price"})}),(0,s.jsx)("div",{className:` ${p().cardListRowTitle}`,children:(0,s.jsx)("span",{children:"Total"})})]}),(0,s.jsx)("div",{className:`${p().cardListData}`,children:(d===n.G.History?l:e)?.map((e,t)=>s.jsxs("div",{className:`row flex ${p().cardListDataRow}`,children:[s.jsx("div",{className:`${p().cardListDataRowElement}`,children:s.jsx("span",{children:e.name})}),s.jsx("div",{className:`${p().cardListDataRowElement}`,children:e.qty}),s.jsx("div",{className:`${p().cardListDataRowElement}`,children:s.jsxs("span",{children:[h(e.price)," AMD"]})}),s.jsxs("div",{className:`${p().cardListDataRowElement} flex`,children:[s.jsxs("span",{children:[h(e.price*e.qty)," AMD"]}),d!==n.G.History&&s.jsx("button",{onClick:()=>r(e.getId()),children:s.jsx(m,{})})]})]},t))}),d!==n.G.History&&(0,s.jsxs)("div",{className:`${p().cardListCheckout} flex`,children:[(0,s.jsxs)("h1",{children:["Total: ",(0,s.jsxs)("span",{children:[h(t)," AMD"]})]}),(0,s.jsx)("button",{onClick:u,children:"Request"})]})]})}function w(){let{cardState:e,setCardState:r,setCurrentItem:t}=(0,a.mt)(),{cardViewState:o}=(0,a.LM)();return(0,s.jsx)("div",{className:i().cardContainer,style:{display:e?"flex":"none"},children:(0,s.jsxs)("div",{className:`${i().card}`,children:[(0,s.jsx)("div",{className:`row ${i().cardButton}`,children:(0,s.jsx)("button",{onClick:()=>{r(!1),t(null)},children:"X"})}),o===n.G.Product?(0,s.jsx)(u,{}):(0,s.jsx)(_,{})]})})}t(3588)},7473:(e,r,t)=>{"use strict";t.d(r,{A:()=>i});var s=t(5512),o=t(5103);function i({url:e,alt:r}){return(0,s.jsx)(o.default,{src:e,alt:r,fill:!0})}},7313:(e,r,t)=>{"use strict";t.d(r,{FI:()=>m,G7:()=>u,GD:()=>h,LM:()=>c,R7:()=>i,Rf:()=>d,_$:()=>a,iZ:()=>l,mt:()=>n});var s=t(2803),o=t(1499);let i=(0,s.v)(e=>({filters:[],addFilter:r=>e(e=>({filters:[...e.filters,r]})),removeFilter:r=>e(e=>({filters:e.filters.filter(e=>e.id!==r)}))})),a=(0,s.v)((e,r)=>({cartItems:[],cartTotal:0,addItem:r=>e(e=>{let t;let s=e.cartItems.findIndex(e=>e.getId()===r.getId());return -1!==s?(t=[...e.cartItems])[s].setQty(r.getQty()):t=[...e.cartItems,r],localStorage.setItem("cartItems",JSON.stringify(t)),{cartItems:t,cartTotal:t.reduce((e,r)=>e+r.getPrice()*r.getQty(),0)}}),removeItem:r=>e(e=>{let t=e.cartItems.find(e=>e.getId()===r);if(!t)return e;let s=e.cartItems.filter(e=>e.getId()!==r),o=t.getPrice()*t.getQty();return localStorage.setItem("cartItems",JSON.stringify(s)),{cartItems:s,cartTotal:e.cartTotal-o}}),getItemCount:()=>r().cartItems.length,cleanCart:()=>e(()=>(localStorage.removeItem("cartItems"),{cartItems:[]}))})),n=(0,s.v)(e=>({cardState:!1,currentItem:null,setCardState:r=>e(()=>({cardState:r})),setCurrentItem:r=>e(()=>({currentItem:r}))})),c=(0,s.v)(e=>({cardViewState:o.G.List,setCardView:r=>e(()=>({cardViewState:r}))})),d=(0,s.v)(e=>({activeState:o.B.History,setActiveState:r=>e(()=>({activeState:r}))})),l=(0,s.v)(e=>({user_data:{documentId:"",first_name:"",last_name:"",company:""},set_current_user:r=>e(()=>({user_data:r}))}));(0,s.v)(e=>({is_logged_in:!1,set_logged_in_status:r=>e(()=>({is_logged_in:r}))}));let u=(0,s.v)((e,r)=>({products:[],categorizedProducts:[],searchQuery:"",loading:!0,selectedCategories:[],setSelectedCategory:t=>{let{selectedCategories:s,categorizedProducts:o}=r();s.includes(t)?e({selectedCategories:s.filter(e=>e!==t),categorizedProducts:o.filter(e=>e.cat!==t),searchQuery:""}):e({selectedCategories:[...s,t],searchQuery:""})},addCategorizedProducts:(r,t)=>{e(e=>({categorizedProducts:[...e.categorizedProducts,{cat:r,cat_prods:t}]}))},setSearchQuery:r=>{let t=r.trim();e(e=>({searchQuery:t,selectedCategories:t.length>0?[]:e.selectedCategories}))},add_product:r=>e(e=>({products:[...e.products,...r],loading:!1}))})),m=(0,s.v)(e=>({isError:!1,setIsError:r=>e({isError:r})})),h=(0,s.v)(e=>({currentHistoryItem:[],setCurrentHistoryItem:r=>e({currentHistoryItem:r})}))},1499:(e,r,t)=>{"use strict";t.d(r,{B:()=>o,G:()=>s});var s=function(e){return e[e.Product=0]="Product",e[e.List=1]="List",e[e.History=2]="History",e}({}),o=function(e){return e[e.History=0]="History",e[e.Settings=1]="Settings",e}({})},6171:(e,r,t)=>{"use strict";t.d(r,{R:()=>s});let s=e=>{let r=document.cookie.split("; ").find(r=>r.startsWith(e+"="));return r?r.split("=")[1]:null}},7770:(e,r,t)=>{"use strict";t.d(r,{lD:()=>L,Oq:()=>$,Sy:()=>D,sR:()=>j,ZR:()=>N,Ol:()=>b,DJ:()=>S,iD:()=>x});var s=t(4905),o=t(6699);let i=new s.R({uri:"http://localhost:1337/graphql",cache:new o.D});var a=t(6282);async function n(e,r,t){try{let{data:s,loading:o,error:a}=await i.query({query:e,fetchPolicy:"no-cache",variables:r||null,context:{headers:t||{}}});if(o)return null;if(a&&console.error("Error fetching data:",a),!s)throw Error("No data found");return s}catch(e){if(e instanceof a.K4||e instanceof Error)return;console.error("Unknown error:",e)}}var c=t(7713);let d=(0,c.J1)`
  mutation Login($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        documentId
        id
      }
    }
  }
`;(0,c.J1)`
  query GetVetgroupUsers($id: ID!) {
    vetgroupUsers(filters: { user: { documentId: { eq: $id } } }) {
      user {
        first_name
        last_name
        company
      }
    }
  }
`;let l=(0,c.J1)`
  mutation ChangePassword(
    $old_password: String!
    $new_password: String!
    $confirm_password: String!
  ) {
    changePassword(
      currentPassword: $old_password
      password: $new_password
      passwordConfirmation: $confirm_password
    ) {
      user {
        documentId
      }
    }
  }
`,u=(0,c.J1)`
  query GetProducts($start: Int!, $limit: Int!) {
    products(pagination: { start: $start, limit: $limit }) {
      code
      name
      description
      price
      category {
        title
      }
      image {
        url
      }
    }
  }
`,m=(0,c.J1)`
  mutation CreateOrder(
    $order_id: String!
    $created: DateTime!
    $total: Float!
    $products: String!
    $users_permissions_user: ID!
    $products_json: JSON!
  ) {
    createOrder(
      data: {
        order_id: $order_id
        created: $created
        total: $total
        products: $products
        users_permissions_user: $users_permissions_user
        products_json: $products_json
      }
    ) {
      order_id
      created
      total
      products
      products_json
      users_permissions_user {
        email
      }
    }
  }
`,h=(0,c.J1)`
  query {
    orders(sort: "id:desc", pagination: { limit: 1 }) {
      order_id
    }
  }
`,p=(0,c.J1)`
  query ($documentId: ID!) {
    orders(
      filters: { users_permissions_user: { documentId: { eq: $documentId } } }
    ) {
      order_id
      total
      created
      products_json
    }
  }
`,g=(0,c.J1)`
  query GetCategories {
    categories {
      title
    }
  }
`,f=(0,c.J1)`
  query GetProductsByCat($cat: String!) {
    products(
      filters: { category: { title: { eq: $cat } } }
      pagination: { limit: -1 }
    ) {
      code
      name
      description
      price
      image {
        url
      }
    }
  }
`,_=(0,c.J1)`
  query SearchProducts($filters: ProductFiltersInput) {
    products(filters: $filters, pagination: { limit: -1 }) {
      code
      name
      description
      price
      category {
        title
      }
      image {
        url
      }
    }
  }
`;var w=t(5998),y=t(7313);function v(e){y.FI.setState({isError:e})}let I=()=>new Date().toISOString().split(".")[0]+"Z",P=e=>{if(!Array.isArray(e)||0===e.length)return"<p>No items available</p>";let r=`
    <table border='1' cellpadding='5' cellspacing='0' style='border-collapse: collapse; width: 100%;'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>`;return e.forEach(e=>{r+=`
      <tr>
        <td>${e.name}</td>
        <td>${e.code}</td>
        <td>${e.description}</td>
        <td>${e.image?`<img src='${e.image}' width='50'>`:"No Image"}</td>
        <td>${e.price} AMD</td>
        <td>${e.qty}</td>
      </tr>`}),(r+=`
      </tbody>
    </table>`).trim()};async function x(e,r){try{let t=await n(d,{identifier:e,password:r});if(!t||t.errors){v(!0);return}let{jwt:s}=t.login;if(!s)throw Error("JWT not found in the response");document.cookie=`jwt=${s}; path=/; SameSite=Strict`;let{documentId:o,id:i}=t.login.user;if(!o)throw Error("documentId not found in the response");return window.location.href="/",document.cookie=`document=${o}; path=/; SameSite=Strict`,document.cookie=`user=${i}; path=/; SameSite=Strict`,v(!1),o}catch(e){e instanceof a.K4?console.error("GraphQL error:",e.message):e instanceof Error?console.error("JS error:",e.message):console.error("Unknown error:",e)}}async function $(e,r,t){try{let s=w.A.get("jwt");return await n(l,{old_password:e,new_password:r,confirm_password:t},{Authorization:`Bearer ${s}`})}catch(e){e instanceof a.K4?console.error("GraphQL error:",e.message):e instanceof Error?console.error("JS error:",e.message):console.error("Unknown error:",e)}}async function j(e,r){try{return await n(u,{start:e,limit:r})||{products:[]}}catch(e){return console.error("Error fetching products:",e),{products:[]}}}async function C(){try{return await n(h,{})}catch(e){e instanceof a.K4?console.error("GraphQL error:",e.message):e instanceof Error?console.error("JS error:",e.message):console.error("Unknown error:",e)}}async function L(e,r,t){let s=await C(),o=0===s.orders.length?"1":(parseInt(s.orders[0].order_id)+1).toString(),i=I(),c=P(e);try{return await n(m,{order_id:o,created:i,total:t,products:c,users_permissions_user:r,products_json:e})}catch(e){e instanceof a.K4?console.error("GraphQL error:",e.message):e instanceof Error?console.error("JS error:",e.message):console.error("Unknown error:",e)}}async function S(e){try{let r=await n(p,{documentId:e});if(!r||!r)throw Error("Invalid response from API");return r}catch(e){e instanceof a.K4?console.error("GraphQL error:",e.message):e instanceof Error?console.error("JS error:",e.message):console.error("Unknown error:",e)}}async function D(){try{return await n(g,{})}catch(e){e instanceof a.K4?console.error("GraphQL error:",e.message):e instanceof Error?console.error("JS error:",e.message):console.error("Unknown error:",e)}}async function N(e){try{return await n(f,{cat:e})}catch(e){e instanceof a.K4?console.error("GraphQL error:",e.message):e instanceof Error?console.error("JS error:",e.message):console.error("Unknown error:",e)}}async function b(e){try{return await n(_,{filters:function(e){let r=e.toLowerCase().split(/\s+/).filter(Boolean);return{or:[{and:r.map(e=>({name:{containsi:e}}))},{and:r.map(e=>({description:{containsi:e}}))}]}}(e)})}catch(e){e instanceof a.K4?console.error("GraphQL error:",e.message):e instanceof Error?console.error("JS error:",e.message):console.error("Unknown error:",e)}}},9593:e=>{e.exports={cardContainer:"card_cardContainer__CLzCF",card:"card_card___zOGa",cardButton:"card_cardButton__0VUeE"}},4583:e=>{e.exports={cardListRow:"cardListView_cardListRow__DUjn_",cardListRowTitle:"cardListView_cardListRowTitle__gT7v1",cardListData:"cardListView_cardListData__CP5j5",cardListDataRow:"cardListView_cardListDataRow__o4Iir",cardListDataRowElement:"cardListView_cardListDataRowElement__me2yC",cardListCheckout:"cardListView_cardListCheckout__a988D"}},9359:e=>{e.exports={cardProduct:"cardProductView_cardProduct__UeH5h",cardProductImage:"cardProductView_cardProductImage__FBVR3",cardProductInfo:"cardProductView_cardProductInfo__jvNBk",cardProductInfoTitle:"cardProductView_cardProductInfoTitle__NFT_T",cardProductInfoPrice:"cardProductView_cardProductInfoPrice__BK5YQ",cardProductInfoDescription:"cardProductView_cardProductInfoDescription__sSYc2"}},1354:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c,metadata:()=>n});var s=t(2740);t(8116),t(7691);var o=t(5242),i=t(4367),a=t.n(i);let n={title:"VetGroup"};function c({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{className:a().className,children:[e,(0,s.jsx)(o.default,{})]})})}},5242:(e,r,t)=>{"use strict";t.d(r,{default:()=>s});let s=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/vrezh/Desktop/vetgroup/src/components/CardComponents/Card/card.component.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/vrezh/Desktop/vetgroup/src/components/CardComponents/Card/card.component.tsx","default")},7691:()=>{},8116:()=>{}};