exports.id=946,exports.ids=[946],exports.modules={7921:(r,e,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,6313,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},8193:(r,e,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,6013,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},9715:(r,e,t)=>{Promise.resolve().then(t.bind(t,5242))},3787:(r,e,t)=>{Promise.resolve().then(t.bind(t,6806))},3588:(r,e,t)=>{"use strict";t.d(e,{q:()=>s});class s{constructor(r,e){this.name=r.name,this.code=r.code,this.price=r.price,this.description=r.description,this.qty=e||1,this.totalPrice=0,this.image=r.image}getId(){return this.code}getDescription(){return this.description}getTitle(){return this.name}getPrice(){return this.price}getQty(){return this.qty}setQty(r){this.qty=r}setTotal(){this.totalPrice=this.getPrice()*this.getQty()}getTotalPrice(){return this.totalPrice*this.getQty()}formatPrice(r){return isNaN(r)?"0,00":r.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g," ")}}},6806:(r,e,t)=>{"use strict";t.d(e,{default:()=>w});var s=t(5512),o=t(9593),i=t.n(o),a=t(7313),n=t(1499),c=t(7473),d=t(9359),l=t.n(d);function u(){let{currentItem:r}=(0,a.mt)();return(0,s.jsxs)("div",{className:`row flex ${l().cardProduct}`,children:[(0,s.jsx)("div",{className:`${l().cardProductImage}`,children:(0,s.jsx)(c.A,{alt:"image",url:"/placeholder.webp"})}),(0,s.jsxs)("div",{className:`${l().cardProductInfo}`,children:[(0,s.jsxs)("div",{className:`${l().cardProductInfoTitle}`,children:[r?.getTitle(),(0,s.jsx)("span",{})]}),(0,s.jsx)("div",{className:`${l().cardProductInfoPrice}`,children:(0,s.jsxs)("p",{children:[r?.getPrice()," AMD"]})}),(0,s.jsx)("div",{className:`${l().cardProductInfoDescription}`,children:r?.getDescription()})]})]})}function m(){return(0,s.jsx)("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6",stroke:"#000000",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}t(8009);var h=t(4583),p=t.n(h),f=t(6171),g=t(7770);function _(){let{cartItems:r,removeItem:e,cartTotal:t,addItem:o,cleanCart:i}=(0,a._$)(),{setCardState:c}=(0,a.mt)(),{cardViewState:d}=(0,a.LM)(),{currentHistoryItem:l}=(0,a.GD)(),u=async()=>{let e=(0,f.R)("user");(0,g.lD)(r,e?parseInt(e):-1,t),i(),c(!1)};function h(r){return isNaN(r)?"0,00":r.toFixed(2).replace(".",",").replace(/\B(?=(\d{3})+(?!\d))/g," ")}return(0,s.jsxs)("div",{className:`${p().cardList}`,children:[(0,s.jsxs)("div",{className:`${p().cardListRow} flex row`,children:[(0,s.jsx)("div",{className:` ${p().cardListRowTitle}`,children:(0,s.jsx)("span",{children:"Name"})}),(0,s.jsx)("div",{className:` ${p().cardListRowTitle}`,children:(0,s.jsx)("span",{children:"Qty"})}),(0,s.jsx)("div",{className:` ${p().cardListRowTitle}`,children:(0,s.jsx)("span",{children:"Price"})}),(0,s.jsx)("div",{className:` ${p().cardListRowTitle}`,children:(0,s.jsx)("span",{children:"Total"})})]}),(0,s.jsx)("div",{className:`${p().cardListData}`,children:(d===n.G.History?l:r)?.map((r,t)=>s.jsxs("div",{className:`row flex ${p().cardListDataRow}`,children:[s.jsx("div",{className:`${p().cardListDataRowElement}`,children:s.jsx("span",{children:r.name})}),s.jsx("div",{className:`${p().cardListDataRowElement}`,children:r.qty}),s.jsx("div",{className:`${p().cardListDataRowElement}`,children:s.jsxs("span",{children:[h(r.price)," AMD"]})}),s.jsxs("div",{className:`${p().cardListDataRowElement} flex`,children:[s.jsxs("span",{children:[h(r.price*r.qty)," AMD"]}),d!==n.G.History&&s.jsx("button",{onClick:()=>e(r.getId()),children:s.jsx(m,{})})]})]},t))}),d!==n.G.History&&(0,s.jsxs)("div",{className:`${p().cardListCheckout} flex`,children:[(0,s.jsxs)("h1",{children:["Total: ",(0,s.jsxs)("span",{children:[h(t)," AMD"]})]}),(0,s.jsx)("button",{onClick:u,children:"Request"})]})]})}function w(){let{cardState:r,setCardState:e,setCurrentItem:t}=(0,a.mt)(),{cardViewState:o}=(0,a.LM)();return(0,s.jsx)("div",{className:i().cardContainer,style:{display:r?"flex":"none"},children:(0,s.jsxs)("div",{className:`${i().card}`,children:[(0,s.jsx)("div",{className:`row ${i().cardButton}`,children:(0,s.jsx)("button",{onClick:()=>{e(!1),t(null)},children:"X"})}),o===n.G.Product?(0,s.jsx)(u,{}):(0,s.jsx)(_,{})]})})}t(3588)},7473:(r,e,t)=>{"use strict";t.d(e,{A:()=>i});var s=t(5512),o=t(5103);function i({url:r,alt:e}){return(0,s.jsx)(o.default,{src:r,alt:e,fill:!0})}},7313:(r,e,t)=>{"use strict";t.d(e,{FI:()=>m,G7:()=>u,GD:()=>h,LM:()=>c,R7:()=>i,Rf:()=>d,_$:()=>a,iZ:()=>l,mt:()=>n});var s=t(2803),o=t(1499);let i=(0,s.v)(r=>({filters:[],addFilter:e=>r(r=>({filters:[...r.filters,e]})),removeFilter:e=>r(r=>({filters:r.filters.filter(r=>r.id!==e)}))})),a=(0,s.v)((r,e)=>({cartItems:[],cartTotal:0,addItem:e=>r(r=>{let t;let s=r.cartItems.findIndex(r=>r.getId()===e.getId());return -1!==s?(t=[...r.cartItems])[s].setQty(e.getQty()):t=[...r.cartItems,e],localStorage.setItem("cartItems",JSON.stringify(t)),{cartItems:t,cartTotal:t.reduce((r,e)=>r+e.getPrice()*e.getQty(),0)}}),removeItem:e=>r(r=>{let t=r.cartItems.find(r=>r.getId()===e);if(!t)return r;let s=r.cartItems.filter(r=>r.getId()!==e),o=t.getPrice()*t.getQty();return localStorage.setItem("cartItems",JSON.stringify(s)),{cartItems:s,cartTotal:r.cartTotal-o}}),getItemCount:()=>e().cartItems.length,cleanCart:()=>r(()=>(localStorage.removeItem("cartItems"),{cartItems:[]}))})),n=(0,s.v)(r=>({cardState:!1,currentItem:null,setCardState:e=>r(()=>({cardState:e})),setCurrentItem:e=>r(()=>({currentItem:e}))})),c=(0,s.v)(r=>({cardViewState:o.G.List,setCardView:e=>r(()=>({cardViewState:e}))})),d=(0,s.v)(r=>({activeState:o.B.History,setActiveState:e=>r(()=>({activeState:e}))})),l=(0,s.v)(r=>({user_data:{documentId:"",first_name:"",last_name:"",company:""},set_current_user:e=>r(()=>({user_data:e}))}));(0,s.v)(r=>({is_logged_in:!1,set_logged_in_status:e=>r(()=>({is_logged_in:e}))}));let u=(0,s.v)(r=>({products:[],searchQuery:"",loading:!0,setSearchQuery:e=>r({searchQuery:e}),add_product:e=>r(r=>({products:[...r.products,...e],loading:!1}))})),m=(0,s.v)(r=>({isError:!1,setIsError:e=>r({isError:e})})),h=(0,s.v)(r=>({currentHistoryItem:[],setCurrentHistoryItem:e=>r({currentHistoryItem:e})}))},1499:(r,e,t)=>{"use strict";t.d(e,{B:()=>o,G:()=>s});var s=function(r){return r[r.Product=0]="Product",r[r.List=1]="List",r[r.History=2]="History",r}({}),o=function(r){return r[r.History=0]="History",r[r.Settings=1]="Settings",r}({})},6171:(r,e,t)=>{"use strict";t.d(e,{R:()=>s});let s=r=>{let e=document.cookie.split("; ").find(e=>e.startsWith(r+"="));return e?e.split("=")[1]:null}},7770:(r,e,t)=>{"use strict";t.d(e,{lD:()=>$,Oq:()=>x,sR:()=>y,DJ:()=>j,iD:()=>I});var s=t(4905),o=t(6699);let i=new s.R({uri:"http://localhost:1337/graphql",cache:new o.D});var a=t(6282);async function n(r,e,t){try{let{data:s,loading:o,error:a}=await i.query({query:r,fetchPolicy:"no-cache",variables:e||null,context:{headers:t||{}}});if(o)return null;if(a&&console.error("Error fetching data:",a),!s)throw Error("No data found");return s}catch(r){if(r instanceof a.K4||r instanceof Error)return;console.error("Unknown error:",r)}}var c=t(7713);let d=(0,c.J1)`
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
`;var f=t(5998),g=t(7313);function _(r){g.FI.setState({isError:r})}let w=()=>new Date().toISOString().split(".")[0]+"Z",v=r=>{if(!Array.isArray(r)||0===r.length)return"<p>No items available</p>";let e=`
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
      <tbody>`;return r.forEach(r=>{e+=`
      <tr>
        <td>${r.name}</td>
        <td>${r.code}</td>
        <td>${r.description}</td>
        <td>${r.image?`<img src='${r.image}' width='50'>`:"No Image"}</td>
        <td>${r.price} AMD</td>
        <td>${r.qty}</td>
      </tr>`}),(e+=`
      </tbody>
    </table>`).trim()};async function I(r,e){try{let t=await n(d,{identifier:r,password:e});if(!t||t.errors){_(!0);return}let{jwt:s}=t.login;if(!s)throw Error("JWT not found in the response");document.cookie=`jwt=${s}; path=/; secure; SameSite=Strict`;let{documentId:o,id:i}=t.login.user;if(!o)throw Error("documentId not found in the response");return window.location.href="/",document.cookie=`document=${o}; path=/; secure; SameSite=Strict`,document.cookie=`user=${i}; path=/; secure; SameSite=Strict`,_(!1),o}catch(r){r instanceof a.K4?console.error("GraphQL error:",r.message):r instanceof Error?console.error("JS error:",r.message):console.error("Unknown error:",r)}}async function x(r,e,t){try{let s=f.A.get("jwt");return await n(l,{old_password:r,new_password:e,confirm_password:t},{Authorization:`Bearer ${s}`})}catch(r){r instanceof a.K4?console.error("GraphQL error:",r.message):r instanceof Error?console.error("JS error:",r.message):console.error("Unknown error:",r)}}async function y(r,e){try{return await n(u,{start:r,limit:e})||{products:[]}}catch(r){return console.error("Error fetching products:",r),{products:[]}}}async function P(){try{return await n(h,{})}catch(r){r instanceof a.K4?console.error("GraphQL error:",r.message):r instanceof Error?console.error("JS error:",r.message):console.error("Unknown error:",r)}}async function $(r,e,t){let s=await P(),o=0===s.orders.length?"1":(parseInt(s.orders[0].order_id)+1).toString(),i=w(),c=v(r);try{return await n(m,{order_id:o,created:i,total:t,products:c,users_permissions_user:e,products_json:r})}catch(r){r instanceof a.K4?console.error("GraphQL error:",r.message):r instanceof Error?console.error("JS error:",r.message):console.error("Unknown error:",r)}}async function j(r){try{let e=await n(p,{documentId:r});if(!e||!e)throw Error("Invalid response from API");return e}catch(r){r instanceof a.K4?console.error("GraphQL error:",r.message):r instanceof Error?console.error("JS error:",r.message):console.error("Unknown error:",r)}}},9593:r=>{r.exports={cardContainer:"card_cardContainer__CLzCF",card:"card_card___zOGa",cardButton:"card_cardButton__0VUeE"}},4583:r=>{r.exports={cardListRow:"cardListView_cardListRow__DUjn_",cardListRowTitle:"cardListView_cardListRowTitle__gT7v1",cardListData:"cardListView_cardListData__CP5j5",cardListDataRow:"cardListView_cardListDataRow__o4Iir",cardListDataRowElement:"cardListView_cardListDataRowElement__me2yC",cardListCheckout:"cardListView_cardListCheckout__a988D"}},9359:r=>{r.exports={cardProduct:"cardProductView_cardProduct__UeH5h",cardProductImage:"cardProductView_cardProductImage__FBVR3",cardProductInfo:"cardProductView_cardProductInfo__jvNBk",cardProductInfoTitle:"cardProductView_cardProductInfoTitle__NFT_T",cardProductInfoPrice:"cardProductView_cardProductInfoPrice__BK5YQ",cardProductInfoDescription:"cardProductView_cardProductInfoDescription__sSYc2"}},1354:(r,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>c,metadata:()=>n});var s=t(2740);t(8116),t(7691);var o=t(5242),i=t(4367),a=t.n(i);let n={title:"VetGroup"};function c({children:r}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsxs)("body",{className:a().className,children:[r,(0,s.jsx)(o.default,{})]})})}},5242:(r,e,t)=>{"use strict";t.d(e,{default:()=>s});let s=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/vrezh/Desktop/vetgroup/src/components/CardComponents/Card/card.component.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/vrezh/Desktop/vetgroup/src/components/CardComponents/Card/card.component.tsx","default")},7691:()=>{},8116:()=>{}};