import{n as e,t}from"./share.js";
import{F as n,P as r,S as i,T as a,a as o,f as s,w as c}from"./app.js";
import{t as l}from"./stats.js";

var u=n(),d=r();

function f({ctx:n}){
  let{cafe:r,cafeId:f,rules:p,toast:m}=n,
      [h,g]=(0,u.useState)(null),
      _=c(f),
      isPro = (r.plan || '').toLowerCase().includes('pro') || (r.plan || '').toLowerCase().includes('growth');

  (0,u.useEffect)(()=>{l(f).then(g).catch(()=>g(false))},[f]);

  function v(){
    let e=document.getElementById('join-qr')?.querySelector('img');
    if(!e)return;
    let t=document.createElement('a');
    t.href=e.src,t.download=`${r.name.replace(/[^\w]+/g,'-')}-join-qr.png`,t.click();
  }

  // Mock inactive for demo
  const inactive = isPro ? [
    {name:'Aisha K.', last:'32 days ago', phone:'+971501234567'},
    {name:'Omar R.', last:'45 days ago', phone:'+971509876543'}
  ] : [];

  return(0,d.jsxs)('div',{className:'stack',children:[
    (0,d.jsxs)('div',{className:'analytics-grid',children:[
      (0,d.jsxs)('div',{className:'stat',children:[
        (0,d.jsx)('div',{className:'l',children:'Customers'}),
        (0,d.jsx)('div',{className:'n',children:h?i(h.members):'–'})
      ]}),
      (0,d.jsxs)('div',{className:'stat',children:[
        (0,d.jsx)('div',{className:'l',children:'New this week'}),
        (0,d.jsx)('div',{className:'n',children:h?i(h.newThisWeek):'–'})
      ]}),
      (0,d.jsxs)('div',{className:'stat',children:[
        (0,d.jsx)('div',{className:'l',children:'Points outstanding'}),
        (0,d.jsx)('div',{className:'n',children:h?i(h.points):'–'})
      ]}),
      (0,d.jsxs)('div',{className:'stat',children:[
        (0,d.jsx)('div',{className:'l',children:'Sales tracked'}),
        (0,d.jsx)('div',{className:'n',children:h?a(h.sales):'–'}),
        (0,d.jsx)('div',{className:'tiny muted',children:p.currency})
      ]})
    ]}),
    isPro && (0,d.jsxs)('div',{className:'panel',children:[
      (0,d.jsxs)('div',{className:'row between',children:[
        (0,d.jsx)('div',{className:'panel-title',style:{margin:0},children:'Advanced insights'}),
        (0,d.jsx)('span',{className:'pro-badge',children:'PRO'})
      ]}),
      (0,d.jsxs)('div',{style:{marginTop:12},children:[
        (0,d.jsx)('div',{className:'small muted',children:'Repeat visit rate'}),
        (0,d.jsx)('div',{className:'chart-bar',children:(0,d.jsx)('i',{style:{width:'68%'}})}),
        (0,d.jsx)('div',{className:'tiny muted',style:{marginTop:4},children:'68% of members returned this month'})
      ]}),
      (0,d.jsxs)('div',{style:{marginTop:10},children:[
        (0,d.jsx)('div',{className:'small muted',children:'Redemption rate'}),
        (0,d.jsx)('div',{className:'chart-bar',children:(0,d.jsx)('i',{style:{width:'41%'}})})
      ]})
    ]}),
    h===false&&(0,d.jsx)('p',{className:'small error',children:"Couldn't load stats right now."}),
    (0,d.jsxs)('div',{className:'panel stack',children:[
      (0,d.jsx)('div',{className:'panel-title',style:{marginBottom:0},children:'Get customers signed up'}),
      (0,d.jsx)('p',{className:'small muted',style:{lineHeight:1.5},children:'Put this QR code at the counter. Customers scan it, enter their name and number, and get their card in seconds.'}),
      (0,d.jsx)('div',{id:'join-qr',style:{display:'grid',placeItems:'center',padding:8},children:
        (0,d.jsx)('div',{style:{background:'#fff',padding:10,borderRadius:14,border:'1px solid var(--line)'},children:
          (0,d.jsx)(o,{text:_,size:200})
        })
      }),
      (0,d.jsxs)('div',{className:'row wrap',children:[
        (0,d.jsx)(s,{sm:!0,onClick:()=>window.print(),children:'Print poster'}),
        (0,d.jsx)(s,{sm:!0,variant:'ghost',onClick:v,children:'Save QR image'}),
        (0,d.jsx)(s,{sm:!0,variant:'ghost',onClick:()=>t(_,m,'Join link copied'),children:'Copy link'}),
        (0,d.jsx)(s,{sm:!0,variant:'ghost',onClick:()=>e({title:`Join ${r.name}`,text:`Get your ${r.name} loyalty card:`,url:_},m),children:'Share…'})
      ]})
    ]}),
    isPro && inactive.length > 0 && (0,d.jsxs)('div',{className:'panel',children:[
      (0,d.jsxs)('div',{className:'row between',children:[
        (0,d.jsx)('div',{className:'panel-title',style:{margin:0},children:'Inactive customers'}),
        (0,d.jsx)('span',{className:'pro-badge',children:'PRO'})
      ]}),
      (0,d.jsx)('p',{className:'small muted',children:'Haven\'t visited recently. One tap to message them.'}),
      (0,d.jsx)('div',{className:'inactive-list',children:inactive.map(c=>(0,d.jsxs)('div',{className:'item',children:[
        (0,d.jsxs)('div',{className:'grow',children:[
          (0,d.jsx)('div',{children:c.name}),
          (0,d.jsx)('div',{className:'sub',children:c.last})
        ]}),
        (0,d.jsx)('a',{className:'btn btn-ghost sm',href:`https://wa.me/${c.phone.replace(/\D/g,'')}?text=${encodeURIComponent(`Hi ${c.name.split(' ')[0]}, we miss you at ${r.name}! Your loyalty card is waiting.`)}`,target:'_blank',children:'WhatsApp'})
      ]},c.name))})
    ]}),
    (0,d.jsxs)('div',{className:'notice',children:[
      (0,d.jsx)('strong',{children:'How it works. '}),
      `Customers earn ${p.earnPerUnit} point${p.earnPerUnit===1?'':'s'} per ${p.currency} spent. Every ${i(p.redeemPointsPerUnit)} points is worth ${p.currency} 1 off, once they have ${i(p.minRedeemPoints)}+ points.`,
      p.topupBonus.length>0 && ` Top-ups earn bonus points: ${p.topupBonus.map(e=>`${e.pct}% from ${p.currency} ${e.min}`).join(', ')}. `,
      'Change any of this under Settings.'
    ]}),
    (0,d.jsxs)('div',{className:'poster',children:[
      r.logo&&(0,d.jsx)('img',{src:r.logo,alt:'',style:{width:120,height:120,borderRadius:24,objectFit:'cover'}}),
      (0,d.jsx)('div',{className:'big',children:r.name}),
      (0,d.jsx)('div',{style:{fontSize:26},children:'Scan to join our loyalty club'}),
      (0,d.jsx)(o,{className:'qr',text:_,size:360}),
      (0,d.jsx)('div',{style:{fontSize:20},children:'Earn points every visit · Get rewards'})
    ]})
  ]})
}
export{f as default};
