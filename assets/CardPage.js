import{n as e}from"./share.js";
import{E as t,F as n,P as r,S as i,a,b as o,c as s,d as c,f as l,g as u,h as d,w as f,y as p}from"./app.js";
import{l as m,n as h,r as g,s as _}from"./points.js";
import{n as v,r as y}from"./subscription.js";
import{n as b,r as x,t as S}from"./public.js";

var C=n(),w=r();

function confetti() {
  const el = document.createElement('div');
  el.className = 'confetti';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1800);
}

function T({param:n}){
  let[r,T]=(0,C.useMemo)(()=>String(n).split('.'),[n]),
      [E,D]=(0,C.useState)(void 0),
      [O,k]=(0,C.useState)(void 0),
      [A,j]=(0,C.useState)([]),
      [M,N]=(0,C.useState)(false),
      [P,F]=u(),
      [showConfetti, setShowConfetti] = (0,C.useState)(false),
      [lang, setLang] = (0,C.useState)(localStorage.getItem('fold-lang') || 'en');

  const I=(0,C.useCallback)(async()=>{
    try{
      let[e,t]=await Promise.all([x(r,T),b(r,T,25)]);
      k(e),j(t);
      if (t && t.length && t[0].delta > 0) {
        setShowConfetti(true);
        confetti();
        setTimeout(() => setShowConfetti(false), 2000);
      }
    }catch{k(e=>e===void 0?null:e)}
  },[r,T]);

  if((0,C.useEffect)(()=>{
    if(!r||!T){D(null),k(null);return}
    S(r).then(D).catch(()=>D(null)),I();
    try{localStorage.setItem('lp_card',n)}catch{}
    let e=setInterval(()=>{document.hidden||I()},20000),
        t=()=>{document.hidden||I()};
    return document.addEventListener('visibilitychange',t),()=>{clearInterval(e),document.removeEventListener('visibilitychange',t)}
  },[r,T,n,I]),E===void 0||O===void 0)return(0,w.jsx)(d,{});

  if(!E||!O)return(0,w.jsx)('div',{className:'shell',children:(0,w.jsxs)('div',{className:'panel stack rise',style:{marginTop:60,textAlign:'center'},children:[
    (0,w.jsx)('h2',{children: lang==='ar' ? 'لا يمكننا العثور على هذه البطاقة' : "We can't find this card"}),
    (0,w.jsx)('p',{className:'muted',children: lang==='ar' ? 'قد يكون الرابط غير مكتمل. اطلب من المقهى إرسال الرابط مرة أخرى.' : 'The link may be incomplete or the card was removed. Ask the café to send you your card link again.'})
  ]})});

  let L=g(E.rules),
      R=v(E).state,
      z=_(L,O.lifetimeValue||0),
      B=h(L,O.lifetimeValue||0),
      V=(O.points||0)>=L.minRedeemPoints&&(O.points||0)>=L.redeemPointsPerUnit,
      H={"--accent":E.accent,"--accent-ink":t(E.accent)},
      U=M?A:A.slice(0,6),
      isPro = (E.plan || '').toLowerCase().includes('pro') || (E.plan || '').toLowerCase().includes('growth');

  // Mock rewards for demo (in real app these come from cafe.rules.rewards)
  const rewards = E.rules?.rewards || [
    { name: 'Free Coffee', nameAr: 'قهوة مجانية', points: 80, icon: '☕' },
    { name: '20% off pastry', nameAr: 'خصم 20% على المعجنات', points: 50, icon: '🥐' },
    { name: 'Birthday drink', nameAr: 'مشروب عيد الميلاد', points: 0, icon: '🎂' }
  ];

  const toggleLang = () => {
    const next = lang === 'en' ? 'ar' : 'en';
    setLang(next);
    localStorage.setItem('fold-lang', next);
    document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
  };

  return(0,w.jsxs)('div',{className:'shell',style:H,dir:lang==='ar'?'rtl':'ltr',children:[
    (0,w.jsxs)('div',{className:'topbar rise',children:[
      (0,w.jsx)(c,{cafe:E}),
      (0,w.jsx)('div',{className:'name',children:E.name}),
      (0,w.jsx)('button',{className:'lang-toggle',onClick:toggleLang,children:lang==='en'?'عربي':'EN'})
    ]}),
    R!=='active'&&(0,w.jsx)('div',{className:'notice warn',style:{marginBottom:14},children:y(R)}),
    E.welcomeMessage && (0,w.jsx)('div',{className:'welcome-banner rise',children:E.welcomeMessage}),
    (0,w.jsxs)('div',{className:'loyalty-card rise',children:[
      (0,w.jsx)('div',{className:'shimmer'}),
      (0,w.jsxs)('div',{className:'row between',children:[
        (0,w.jsxs)('span',{className:'small',style:{opacity:.85},children:[lang==='ar'?'عضو منذ ':'Member since ',p(O.createdAt)]}),
        (0,w.jsx)('span',{className:'tier-chip',style:{"--ring":z.color},children:z.name.toUpperCase()})
      ]}),
      (0,w.jsxs)('div',{style:{marginTop:22},children:[
        (0,w.jsx)('div',{style:{fontSize:13,opacity:.85,textTransform:'uppercase',letterSpacing:'.08em',fontWeight:600},children:lang==='ar'?'النقاط':'Points'}),
        (0,w.jsx)('div',{className:'points-big',style:{marginTop:6},children:i(O.points)}),
        (0,w.jsxs)('div',{className:'small',style:{opacity:.85,marginTop:6},children:[lang==='ar'?'تساوي ':'Worth ',L.currency,' ',m(L,O.points||0).toFixed(2),' off']})
      ]}),
      (0,w.jsxs)('div',{className:'row between',style:{marginTop:22,alignItems:'flex-end'},children:[
        (0,w.jsxs)('div',{children:[
          (0,w.jsx)('div',{style:{fontSize:19,fontWeight:650},children:O.name}),
          (0,w.jsx)('div',{className:'mono small',style:{opacity:.85,marginTop:3},children:O.code})
        ]}),
        (0,w.jsx)('div',{className:'qr',children:(0,w.jsx)(a,{text:O.code,size:88})})
      ]})
    ]}),
    (0,w.jsxs)('div',{className:'stack rise',style:{marginTop:16},children:[
      // Rewards catalog
      (0,w.jsxs)('div',{className:'panel',children:[
        (0,w.jsx)('div',{className:'panel-title',children:lang==='ar'?'المكافآت المتاحة':'Available rewards'}),
        rewards.map((rw,idx)=>(0,w.jsxs)('div',{className:'reward-card',key:idx,children:[
          (0,w.jsx)('div',{className:'reward-icon',children:rw.icon}),
          (0,w.jsxs)('div',{className:'grow',children:[
            (0,w.jsx)('div',{style:{fontWeight:700,fontSize:16},children:lang==='ar'?(rw.nameAr||rw.name):rw.name}),
            (0,w.jsxs)('div',{className:'small',style:{opacity:.8,marginTop:2},children:[rw.points,' ',lang==='ar'?'نقطة':'pts']}),
            rw.points > 0 && (0,w.jsx)('div',{className:'bar dark',style:{marginTop:8},children:(0,w.jsx)('i',{style:{width:`${Math.min(100, Math.round((O.points||0)/rw.points*100))}%`}})})
          ]})
        ]}))
      ]}),
      // Streaks (Pro)
      isPro && (0,w.jsxs)('div',{className:'panel',children:[
        (0,w.jsxs)('div',{className:'row between',children:[
          (0,w.jsx)('div',{className:'panel-title',style:{margin:0},children:lang==='ar'?'سلسلة الزيارات':'Visit streak'}),
          (0,w.jsx)('span',{className:'pro-badge',children:'PRO'})
        ]}),
        (0,w.jsx)('div',{className:'streak',style:{marginTop:8},children:[0,1,2,3,4].map(i=>(0,w.jsx)('div',{className:`streak-dot ${i<3?'on':''}`,key:i}))})
      ]}),
      B?(0,w.jsxs)('div',{className:'panel',children:[
        (0,w.jsxs)('div',{className:'row between small',children:[
          (0,w.jsxs)('strong',{children:[B.name,' tier']}),
          (0,w.jsxs)('span',{className:'muted',children:[L.currency,' ',B.remaining.toFixed(2),' to go']})
        ]}),
        (0,w.jsx)('div',{className:'bar dark',style:{marginTop:10},children:(0,w.jsx)('i',{style:{width:`${Math.round(B.progress*100)}%`}})})
      ]}):(0,w.jsxs)('div',{className:'panel small',children:[
        (0,w.jsx)('strong',{children:lang==='ar'?'أنت في أعلى مستوى.':'You\'re at the top tier.'}),
        ' ',(0,w.jsx)('span',{className:'muted',children:lang==='ar'?'شكراً لكونك من الزبائن الدائمين.':'Thank you for being a regular.'})
      ]}),
      (0,w.jsx)('div',{className:'notice',children:V
        ? (lang==='ar'?'لديك نقاط كافية. أظهر هذه البطاقة عند الدفع.':'You have enough points to use. Show this card at the till to redeem.')
        : (lang==='ar'?`اجمع ${i(L.minRedeemPoints)} نقطة للبدء.`:`Collect ${i(L.minRedeemPoints)} points to start redeeming. You earn ${L.earnPerUnit} point${L.earnPerUnit===1?'':'s'} per ${L.currency} spent.`)
      }),
      // Wallet (Pro)
      isPro && (0,w.jsxs)('div',{className:'row wrap',children:[
        (0,w.jsx)(l,{variant:'soft',block:!0,className:'wallet-btn',onClick:()=>alert(lang==='ar'?'سيتم إضافة البطاقة إلى المحفظة قريباً':'Add to Apple/Google Wallet coming soon — your card is already beautiful!'),children:['📱 ',lang==='ar'?'أضف إلى المحفظة':'Add to Wallet']}),
        (0,w.jsx)('span',{className:'pro-badge',children:'PRO'})
      ]}),
      (0,w.jsxs)('div',{className:'panel',children:[
        (0,w.jsx)('div',{className:'panel-title',children:lang==='ar'?'النشاط':'Activity'}),
        A.length===0&&(0,w.jsx)('p',{className:'small muted',children:lang==='ar'?'لا يوجد نشاط بعد.':'Nothing yet. Your first visit will show up here.'}),
        U.map(e=>(0,w.jsxs)('div',{className:'ledger',children:[
          (0,w.jsxs)('div',{children:[
            (0,w.jsx)('div',{children:e.text}),
            (0,w.jsx)('div',{className:'d',children:o(e.t)})
          ]}),
          e.delta?(0,w.jsxs)('span',{className:`delta ${e.delta>0?'pos':'neg'}`,children:[e.delta>0?'+':'',i(e.delta)]}):null
        ]},e.id)),
        A.length>6&&(0,w.jsx)('button',{className:'linkish',onClick:()=>N(e=>!e),children:M?(lang==='ar'?'أقل':'Show less'):(lang==='ar'?'أكثر':'Show more')})
      ]}),
      R==='active'&&L.referralBonus>0&&(0,w.jsxs)(l,{variant:'soft',block:!0,onClick:()=>e({title:`Join ${E.name}`,text:`Get a loyalty card at ${E.name}. I earn ${L.referralBonus} bonus points when you make your first purchase.`,url:f(r,O.code)},P),children:[
        lang==='ar'?'ادعُ صديقاً واكسب ':'Invite a friend, earn ',L.referralBonus,' points'
      ]}),
      // Review prompt
      (0,w.jsx)('div',{className:'notice review-prompt',children:lang==='ar'
        ? 'أعجبك المقهى؟ اترك تقييماً على جوجل بعد زيارتك القادمة.'
        : 'Love the café? Leave a Google review after your next visit — it means a lot!'}),
      (0,w.jsxs)('p',{className:'tiny muted',style:{textAlign:'center',lineHeight:1.6},children:[
        lang==='ar'?'افتح البطاقة كتطبيق كامل من الشاشة الرئيسية.':'Open as a full app from your home screen for the best experience.',
        (0,w.jsx)('br',{}),
        'Fold Loyalty · ',s.name
      ]})
    ]}),
    F
  ]})
}
export{T as default};
