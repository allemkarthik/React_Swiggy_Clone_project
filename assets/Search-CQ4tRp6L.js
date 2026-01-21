import{u,r as o,a as x,j as e,S as f,L as m,d as g,R as l}from"./index-ugwyLXxw.js";const w=()=>{const t=u(),[a,i]=o.useState(""),[c,n]=o.useState([]),d=g(l);return o.useEffect(()=>{n(t)},[t]),x()==!1?e.jsx("h1",{children:"looks like you're offline !! please check your internet connection."}):t.length==0?e.jsx(f,{}):e.jsxs("div",{className:"",children:[e.jsx("div",{className:"mx-auto w-full px-4 sm:px-6 md:px-0 md:w-[90%] lg:w-[80%] my-10",children:e.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[e.jsxs("div",{className:"flex w-full sm:w-auto",children:[e.jsx("input",{type:"text","data-testid":"searchInput",className:`w-full sm:w-75 md:w-87.5 lg:w-100\r
                   border border-gray-300 py-3 px-4 rounded-lg\r
                   focus:outline-none focus:ring-2 focus:ring-green-400`,placeholder:"Search for restaurant or food",value:a,onChange:s=>i(s.target.value)}),e.jsx("button",{className:`ml-2 px-5 py-3 bg-green-500 text-white rounded-lg\r
                   hover:bg-green-600 transition`,onClick:()=>{const s=t.filter(r=>r.info.name.toLowerCase().includes(a.toLowerCase()));n(s)},children:"Search"})]}),e.jsx("button",{className:`w-full sm:w-auto px-6 py-3 bg-gray-100 rounded-lg\r
                 hover:bg-gray-200 transition text-center`,onClick:()=>{const s=t.filter(r=>r.info.avgRating>4.5);n(s)},children:"⭐ Top Rated Restaurants"})]})}),e.jsx("div",{className:`mx-auto\r
    w-full\r
    px-4\r
    sm:px-6\r
    md:px-8\r
    lg:px-0\r
    lg:w-[80%]\r
\r
    grid\r
    grid-cols-1\r
    sm:grid-cols-2\r
    md:grid-cols-3\r
    lg:grid-cols-4\r
    gap-6`,children:c.map((s,r)=>e.jsx(m,{to:"/resturants/"+s.info.id,children:s.info.aggregatedDiscountInfoV3.header>="30%"?e.jsx(d,{props:s}):e.jsx(l,{props:s})},`${s.info.id}-${r}`))})]})};export{w as default};
