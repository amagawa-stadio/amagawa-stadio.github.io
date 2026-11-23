const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-Dv-6EfDZ.js","./passages-g1-DNKSsD3r.js","./passages-g2-CjlmWSg5.js","./passages-g3-B6ed0Sb4.js","./dictionary-main-Bhmb7CXA.js","./vocab-bank-B_JfTwfS.js"])))=>i.map(i=>d[i]);
import{P as _e,a as Ee,b as Me,c as Ie,d as Le,e as He,f as qe}from"./passages-g1-DNKSsD3r.js";import{P as Ge,a as De,b as Re,c as Oe,d as Be,e as Ne,f as We,g as Fe}from"./passages-g2-CjlmWSg5.js";import{P as Ue,a as Ve,b as ze,c as Qe,d as Je,e as Ze}from"./passages-g3-B6ed0Sb4.js";import{D as re}from"./dictionary-main-Bhmb7CXA.js";import{V as le,C as Ye}from"./vocab-bank-B_JfTwfS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();const T=[{id:"explanation",label:"説明文・物語",shortLabel:"説明文",icon:"📖",description:"エッセイ・物語・文化紹介・理科や社会の教養コラムなど"},{id:"dialogue",label:"会話文",shortLabel:"会話文",icon:"💬",description:"学校生活・買い物・道案内・友だちや先生との対話など"},{id:"chart",label:"資料・グラフ",shortLabel:"グラフ・表",icon:"📊",description:"ポスター・お知らせ・アンケート結果の表やグラフの読み取り"}],O=[{id:"g1",label:"中学1年",shortLabel:"中1",color:"#10b981"},{id:"g2",label:"中学2年",shortLabel:"中2",color:"#3b82f6"},{id:"g3",label:"中学3年",shortLabel:"中3",color:"#8b5cf6"}],L=[{step:1,id:"g1_01_be",grade:"g1",title:"be動詞",subtitle:"am / are / is の文・疑問文・否定文",wordRange:[40,65],allowedGrammarSummary:"be動詞現在形（肯定・否定・疑問）、基本の名詞・形容詞・指示語（this/that）"},{step:2,id:"g1_02_general_verbs",grade:"g1",title:"一般動詞",subtitle:"I / you / 複数主語の一般動詞（do / don't）",wordRange:[45,70],allowedGrammarSummary:"step 1 ＋ 一般動詞現在形（1・2人称および複数主語）、疑問詞（what/where等）の基本"},{step:3,id:"g1_03_pronouns",grade:"g1",title:"代名詞",subtitle:"he / she / they・所有格・目的格",wordRange:[50,75],allowedGrammarSummary:"step 1〜2 ＋ 人称代名詞（主格・所有格・目的格・所有代名詞）※動詞はまだbe動詞＋複数/1・2人称一般動詞中心"},{step:4,id:"g1_04_third_person",grade:"g1",title:"三単現",subtitle:"三人称単数現在形（-s / -es, does / doesn't）",wordRange:[55,85],allowedGrammarSummary:"step 1〜3 ＋ 三人称単数現在のs/es、does / doesn't、疑問詞（who/when/which/how等）"},{step:5,id:"g1_05_can",grade:"g1",title:"助動詞 can",subtitle:"〜できる（can / cannot / Can you ...?）",wordRange:[60,95],allowedGrammarSummary:"step 1〜4 ＋ 助動詞 can（肯定・否定・疑問）、命令文・Let's〜"},{step:6,id:"g1_06_present_progressive",grade:"g1",title:"現在進行形",subtitle:"be動詞 + 〜ing（今〜している）",wordRange:[65,100],allowedGrammarSummary:"step 1〜5 ＋ 現在進行形（am/are/is + -ing）"},{step:7,id:"g1_07_past",grade:"g1",title:"過去形",subtitle:"一般動詞（規則・不規則）と be動詞の過去形",wordRange:[75,115],allowedGrammarSummary:"step 1〜6 ＋ 一般動詞の過去形（did/didn't）、be動詞の過去形（was/were）"},{step:8,id:"g2_01_past_progressive",grade:"g2",title:"過去進行形",subtitle:"was / were + 〜ing（その時〜していた）",wordRange:[85,125],allowedGrammarSummary:"中1全範囲 ＋ 過去進行形（was/were + -ing）"},{step:9,id:"g2_02_future",grade:"g2",title:"未来表現",subtitle:"be going to / will（〜するつもり・〜でしょう）",wordRange:[90,130],allowedGrammarSummary:"step 1〜8 ＋ 未来表現（be going to + 原形、will / won't）"},{step:10,id:"g2_03_modals",grade:"g2",title:"助動詞",subtitle:"must / have to / may / should / shall 等",wordRange:[95,135],allowedGrammarSummary:"step 1〜9 ＋ 各種助動詞（must, have to, may, should, Could/Would you...? 等）"},{step:11,id:"g2_04_infinitives",grade:"g2",title:"不定詞",subtitle:"to + 動詞の原形（名詞的・副詞的・形容詞的用法）",wordRange:[100,145],allowedGrammarSummary:"step 1〜10 ＋ to不定詞の基本3用法"},{step:12,id:"g2_05_gerunds",grade:"g2",title:"動名詞",subtitle:"〜ing（〜すること：enjoy / finish / 前置詞 + -ing）",wordRange:[105,145],allowedGrammarSummary:"step 1〜11 ＋ 動名詞（主語・補語・目的語・前置詞の目的語）"},{step:13,id:"g2_06_comparisons",grade:"g2",title:"比較",subtitle:"比較級・最上級・原級（as ... as）",wordRange:[110,155],allowedGrammarSummary:"step 1〜12 ＋ 比較級（-er / more）、最上級（-est / most）、原級（as ... as）"},{step:14,id:"g2_07_conjunctions",grade:"g2",title:"接続詞",subtitle:"when / if / because / that / although 等",wordRange:[115,160],allowedGrammarSummary:"step 1〜13 ＋ 従属接続詞（when, if, because, before, after, that節, though/although）"},{step:15,id:"g2_08_there_is",grade:"g2",title:"there is 構文",subtitle:"There is / are ...（〜がある・いる）",wordRange:[120,165],allowedGrammarSummary:"中1〜中2全範囲（There is/are/was/were 構文、第4・第5文型の基本含む）"},{step:16,id:"g3_01_passive",grade:"g3",title:"受動態",subtitle:"be動詞 + 過去分詞（〜される・〜によって作られた）",wordRange:[150,200],allowedGrammarSummary:"中1〜中2全範囲 ＋ 受動態（be + 過去分詞）"},{step:17,id:"g3_02_present_perfect",grade:"g3",title:"現在完了",subtitle:"have / has + 過去分詞（継続・経験・完了）",wordRange:[160,210],allowedGrammarSummary:"step 1〜16 ＋ 現在完了形（継続・経験・完了結果）"},{step:18,id:"g3_03_present_perfect_prog",grade:"g3",title:"現在完了進行形",subtitle:"have / has been + 〜ing（ずっと〜し続けている）",wordRange:[165,220],allowedGrammarSummary:"step 1〜17 ＋ 現在完了進行形、It is ... for A to do、疑問詞 + to do 等"},{step:19,id:"g3_04_relatives",grade:"g3",title:"関係代名詞",subtitle:"who / which / that による後置修飾（分詞修飾含む）",wordRange:[175,235],allowedGrammarSummary:"step 1〜18 ＋ 関係代名詞（主格・目的格）、現在分詞・過去分詞の後置修飾、間接疑問文"},{step:20,id:"g3_05_bare_infinitive",grade:"g3",title:"原形不定詞",subtitle:"使役動詞（make / let / help）・知覚動詞（see / hear）",wordRange:[180,245],allowedGrammarSummary:"step 1〜19 ＋ 原形不定詞（make/let/help/see/hear/watch/feel + O + 原形）"},{step:21,id:"g3_06_subjunctive",grade:"g3",title:"仮定法",subtitle:"I wish ... / If I were ...（事実と異なる仮定・願望）",wordRange:[190,255],allowedGrammarSummary:"中学3年間の全英文法範囲（仮定法過去を含む総仕上げ）"}],Z=5,de=new Map(T.map((i,e)=>[i.id,e])),$=[..._e,...Ee,...Me,...Ie,...Le,...He,...qe,...Ge,...De,...Re,...Oe,...Be,...Ne,...We,...Fe,...Ue,...Ve,...ze,...Qe,...Je,...Ze].sort((i,e)=>{if(i.step!==e.step)return i.step-e.step;const s=de.get(i.type)??99,t=de.get(e.type)??99;return s!==t?s-t:(i.index||1)-(e.index||1)});function oe(i){return $.find(e=>e.id===i)||null}function ce(i){return $.filter(e=>e.stepId===i).sort((e,s)=>(e.index||0)-(s.index||0))}function pe(i,e){return $.filter(s=>s.stepId===i&&s.type===e).sort((s,t)=>(s.index||0)-(t.index||0))}function Pe(i){if(!i)return null;const e=i.index||1,s=T.findIndex(l=>l.id===i.type),t=L.findIndex(l=>l.id===i.stepId);let a=L[t],n=T[s>=0?s:0],o=e+1;if(o>Z)if(o=1,s+1<T.length)n=T[s+1];else if(t+1<L.length)a=L[t+1],n=T[0];else return{isAllCompletedEnd:!0,passage:null,label:"全ステップ完了"};const r=$.find(l=>l.stepId===a.id&&l.type===n.id&&(l.index||1)===o)||null,h=a.id===i.stepId?`${n.shortLabel} 第${o}回`:`Step ${a.step} ${n.shortLabel} 第${o}回`;return{isAllCompletedEnd:!1,passage:r,stepId:a.id,typeId:n.id,index:o,label:h}}function Xe(i,e){const s=oe(i);if(!s)return $.find(n=>!e(n.id))||$[0]||null;const t=Pe(s);if(t!=null&&t.passage)return t.passage;const a=$.findIndex(n=>n.id===s.id);if(a!==-1){for(let n=a+1;n<$.length;n++)if(!e($[n].id))return $[n];for(let n=0;n<a;n++)if(!e($[n].id))return $[n];if(a+1<$.length)return $[a+1]}return null}const he="step_english_reading_progress_v1";function D(i=new Date){const e=i.getFullYear(),s=String(i.getMonth()+1).padStart(2,"0"),t=String(i.getDate()).padStart(2,"0");return`${e}-${s}-${t}`}class es{constructor(){this.state=this.load(),this.ensureHistoricalActivity(),this.recordLogin()}load(){try{const e=localStorage.getItem(he);if(e){const s=JSON.parse(e);if(s&&typeof s=="object")return{completedPassages:s.completedPassages||{},inProgressPassages:s.inProgressPassages||{},lastActivity:s.lastActivity||null,lastStepId:s.lastStepId||null,loginDates:Array.isArray(s.loginDates)?s.loginDates:[],dailyPassageActivity:s.dailyPassageActivity&&typeof s.dailyPassageActivity=="object"?s.dailyPassageActivity:{}}}}catch(e){console.warn("Storage load error:",e)}return{completedPassages:{},inProgressPassages:{},lastActivity:null,lastStepId:null,loginDates:[],dailyPassageActivity:{}}}save(){try{localStorage.setItem(he,JSON.stringify(this.state))}catch(e){console.warn("Storage save error:",e)}}ensureHistoricalActivity(){let e=!1;for(const s of Object.values(this.state.completedPassages))if(s!=null&&s.updatedAt){const t=D(new Date(s.updatedAt));this.state.dailyPassageActivity[t]||(this.state.dailyPassageActivity[t]=0),this.state.loginDates.includes(t)||(this.state.loginDates.push(t),e=!0)}e&&(this.state.loginDates.sort(),this.save())}recordLogin(){const e=D();return this.state.loginDates.includes(e)||(this.state.loginDates.push(e),this.state.loginDates.sort(),this.save()),this.getLoginStats()}getLoginStats(){const e=new Set(this.state.loginDates),s=e.size;let t=0;const a=new Date,n=D(a);let o=new Date(a.getFullYear(),a.getMonth(),a.getDate());for(e.has(n)||o.setDate(o.getDate()-1);;){const r=D(o);if(e.has(r))t++,o.setDate(o.getDate()-1);else break}return{totalDays:Math.max(1,s),streakDays:Math.max(1,t),isTodayLogged:e.has(n)}}recordPassageAttempt(e=D()){const s=this.state.dailyPassageActivity[e]||0;this.state.dailyPassageActivity[e]=s+1,this.recordLogin(),this.save()}getDailyPassageActivity(){return{...this.state.dailyPassageActivity}}saveInterruptedPassage(e,{answers:s={},currentQIndex:t=0,totalCount:a=0}={}){const n=Object.values(s).filter(o=>o==null?void 0:o.answered).length;this.state.inProgressPassages[e]={answers:s,currentQIndex:t,answeredCount:n,totalCount:a,updatedAt:Date.now()},this.state.lastActivity={type:"interrupted",passageId:e,answeredCount:n,totalCount:a,updatedAt:Date.now()},this.recordPassageAttempt(),this.save()}getInterruptedState(e){return this.state.inProgressPassages[e]||null}clearInterruptedState(e){this.state.inProgressPassages[e]&&(delete this.state.inProgressPassages[e],this.save())}recordPassageResult(e,s,t){const a=this.state.completedPassages[e],n=a?Math.max(a.bestCorrect||0,s):s;this.state.completedPassages[e]={completed:!0,lastCorrect:s,bestCorrect:n,totalCount:t,perfect:n>=t&&t>0,attempts:((a==null?void 0:a.attempts)||0)+1,updatedAt:Date.now()},delete this.state.inProgressPassages[e],this.state.lastActivity={type:"completed",passageId:e,correctCount:s,totalCount:t,updatedAt:Date.now()},this.recordPassageAttempt(),this.save()}getLastActivity(){if(this.state.lastActivity)return this.state.lastActivity;const e=Object.entries(this.state.completedPassages);if(e.length>0){e.sort((a,n)=>{var o,r;return(((o=n[1])==null?void 0:o.updatedAt)||0)-(((r=a[1])==null?void 0:r.updatedAt)||0)});const[s,t]=e[0];return{type:"completed",passageId:s,correctCount:t.lastCorrect,totalCount:t.totalCount,updatedAt:t.updatedAt||0}}return null}getPassageStatus(e){return this.state.completedPassages[e]||null}setLastStepId(e){this.state.lastStepId=e,this.save()}getLastStepId(){return this.state.lastStepId}}const k=new es;/*! Capacitor: https://capacitorjs.com/ - MIT License */var B;(function(i){i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE"})(B||(B={}));class te extends Error{constructor(e,s,t){super(e),this.message=e,this.code=s,this.data=t}}const ss=i=>{var e,s;return i!=null&&i.androidBridge?"android":!((s=(e=i==null?void 0:i.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||s===void 0)&&s.bridge?"ios":"web"},ts=i=>{const e=i.CapacitorCustomPlatform||null,s=i.Capacitor||{},t=s.Plugins=s.Plugins||{},a=()=>e!==null?e.name:ss(i),n=()=>a()!=="web",o=d=>{const p=h.get(d);return!!(p!=null&&p.platforms.has(a())||r(d))},r=d=>{var p;return(p=s.PluginHeaders)===null||p===void 0?void 0:p.find(m=>m.name===d)},c=d=>i.console.error(d),h=new Map,l=(d,p={})=>{const m=h.get(d);if(m)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),m.proxy;const g=a(),f=r(d);let y;const w=async()=>(!y&&g in p?y=typeof p[g]=="function"?y=await p[g]():y=p[g]:e!==null&&!y&&"web"in p&&(y=typeof p.web=="function"?y=await p.web():y=p.web),y),b=(P,K)=>{var M,H;if(f){const q=f==null?void 0:f.methods.find(_=>K===_.name);if(q)return q.rtype==="promise"?_=>s.nativePromise(d,K.toString(),_):(_,z)=>s.nativeCallback(d,K.toString(),_,z);if(P)return(M=P[K])===null||M===void 0?void 0:M.bind(P)}else{if(P)return(H=P[K])===null||H===void 0?void 0:H.bind(P);throw new te(`"${d}" plugin is not implemented on ${g}`,B.Unimplemented)}},v=P=>{let K;const M=(...H)=>{const q=w().then(_=>{const z=b(_,P);if(z){const Q=z(...H);return K=Q==null?void 0:Q.remove,Q}else throw new te(`"${d}.${P}()" is not implemented on ${g}`,B.Unimplemented)});return P==="addListener"&&(q.remove=async()=>K()),q};return M.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(M,"name",{value:P,writable:!1,configurable:!1}),M},x=v("addListener"),A=v("removeListener"),N=(P,K)=>{const M=x({eventName:P},K),H=async()=>{const _=await M;A({eventName:P,callbackId:_},K)},q=new Promise(_=>M.then(()=>_({remove:H})));return q.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await H()},q},V=new Proxy({},{get(P,K){switch(K){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return f?N:x;case"removeListener":return A;default:return v(K)}}});return t[d]=V,h.set(d,{name:d,proxy:V,platforms:new Set([...Object.keys(p),...f?[g]:[]])}),V};return s.convertFileSrc||(s.convertFileSrc=d=>d),s.getPlatform=a,s.handleError=c,s.isNativePlatform=n,s.isPluginAvailable=o,s.registerPlugin=l,s.Exception=te,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s},as=i=>i.Capacitor=ts(i),F=as(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ee=F.registerPlugin;class ie{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,s){let t=!1;this.listeners[e]||(this.listeners[e]=[],t=!0),this.listeners[e].push(s);const n=this.windowListeners[e];n&&!n.registered&&this.addWindowListener(n),t&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,s);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,s,t){const a=this.listeners[e];if(!a){if(t){let n=this.retainedEventArguments[e];n||(n=[]),n.push(s),this.retainedEventArguments[e]=n}return}a.forEach(n=>n(s))}hasListeners(e){var s;return!!(!((s=this.listeners[e])===null||s===void 0)&&s.length)}registerWindowListener(e,s){this.windowListeners[s]={registered:!1,windowEventName:e,pluginEventName:s,handler:t=>{this.notifyListeners(s,t)}}}unimplemented(e="not implemented"){return new F.Exception(e,B.Unimplemented)}unavailable(e="not available"){return new F.Exception(e,B.Unavailable)}async removeListener(e,s){const t=this.listeners[e];if(!t)return;const a=t.indexOf(s);a!==-1&&this.listeners[e].splice(a,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const s=this.retainedEventArguments[e];s&&(delete this.retainedEventArguments[e],s.forEach(t=>{this.notifyListeners(e,t)}))}}const ue=i=>encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ge=i=>i.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ns extends ie{async getCookies(){const e=document.cookie,s={};return e.split(";").forEach(t=>{if(t.length<=0)return;let[a,n]=t.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");a=ge(a).trim(),n=ge(n).trim(),s[a]=n}),s}async setCookie(e){try{const s=ue(e.key),t=ue(e.value),a=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",n=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${s}=${t||""}${a}; path=${n}; ${o};`}catch(s){return Promise.reject(s)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(s){return Promise.reject(s)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const s of e)document.cookie=s.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}ee("CapacitorCookies",{web:()=>new ns});const os=async i=>new Promise((e,s)=>{const t=new FileReader;t.onload=()=>{const a=t.result;e(a.indexOf(",")>=0?a.split(",")[1]:a)},t.onerror=a=>s(a),t.readAsDataURL(i)}),is=(i={})=>{const e=Object.keys(i);return Object.keys(i).map(a=>a.toLocaleLowerCase()).reduce((a,n,o)=>(a[n]=i[e[o]],a),{})},rs=(i,e=!0)=>i?Object.entries(i).reduce((t,a)=>{const[n,o]=a;let r,c;return Array.isArray(o)?(c="",o.forEach(h=>{r=e?encodeURIComponent(h):h,c+=`${n}=${r}&`}),c.slice(0,-1)):(r=e?encodeURIComponent(o):o,c=`${n}=${r}`),`${t}&${c}`},"").substr(1):null,ls=(i,e={})=>{const s=Object.assign({method:i.method||"GET",headers:i.headers},e),a=is(i.headers)["content-type"]||"";if(typeof i.data=="string")s.body=i.data;else if(a.includes("application/x-www-form-urlencoded")){const n=new URLSearchParams;for(const[o,r]of Object.entries(i.data||{}))n.set(o,r);s.body=n.toString()}else if(a.includes("multipart/form-data")||i.data instanceof FormData){const n=new FormData;if(i.data instanceof FormData)i.data.forEach((r,c)=>{n.append(c,r)});else for(const r of Object.keys(i.data))n.append(r,i.data[r]);s.body=n;const o=new Headers(s.headers);o.delete("content-type"),s.headers=o}else(a.includes("application/json")||typeof i.data=="object")&&(s.body=JSON.stringify(i.data));return s};class ds extends ie{async request(e){const s=ls(e,e.webFetchExtra),t=rs(e.params,e.shouldEncodeUrlParams),a=t?`${e.url}?${t}`:e.url,n=await fetch(a,s),o=n.headers.get("content-type")||"";let{responseType:r="text"}=n.ok?e:{};o.includes("application/json")&&(r="json");let c,h;switch(r){case"arraybuffer":case"blob":h=await n.blob(),c=await os(h);break;case"json":c=await n.json();break;case"document":case"text":default:c=await n.text()}const l={};return n.headers.forEach((d,p)=>{l[p]=d}),{data:c,headers:l,status:n.status,url:n.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}ee("CapacitorHttp",{web:()=>new ds});var me;(function(i){i.Dark="DARK",i.Light="LIGHT",i.Default="DEFAULT"})(me||(me={}));var be;(function(i){i.StatusBar="StatusBar",i.NavigationBar="NavigationBar"})(be||(be={}));class cs extends ie{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}ee("SystemBars",{web:()=>new cs});const ps="modulepreload",hs=function(i,e){return new URL(i,e).href},fe={},us=function(e,s,t){let a=Promise.resolve();if(s&&s.length>0){let o=function(l){return Promise.all(l.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const r=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),h=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));a=o(s.map(l=>{if(l=hs(l,t),l in fe)return;fe[l]=!0;const d=l.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!t)for(let f=r.length-1;f>=0;f--){const y=r[f];if(y.href===l&&(!d||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":ps,d||(g.as="script"),g.crossOrigin="",g.href=l,h&&g.setAttribute("nonce",h),document.head.appendChild(g),d)return new Promise((f,y)=>{g.addEventListener("load",f),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(o){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o}return a.then(o=>{for(const r of o||[])r.status==="rejected"&&n(r.reason);return e().catch(n)})};var ye;(function(i){i[i.Flush=0]="Flush",i[i.Add=1]="Add"})(ye||(ye={}));const ae=ee("TextToSpeech",{web:()=>us(()=>import("./web-Dv-6EfDZ.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(i=>new i.TextToSpeechWeb)});class gs{constructor(){this.isNative=typeof F<"u"&&F.isNativePlatform(),this.synth=typeof window<"u"&&window.speechSynthesis||null,this.voice=null,this.enabled=this.loadStorageBool("reading_sound_enabled",!0),this.rate=this.loadStorageFloat("reading_speech_rate",.95),this.pitch=1,this.autoPlay=this.loadStorageBool("reading_auto_play",!1),this.listeningMode=!1,this.isSpeaking=!1,this.listeners=new Set,this.initVoice()}loadStorageBool(e,s){try{const t=localStorage.getItem(e);return t!==null?t==="true":s}catch{return s}}loadStorageFloat(e,s){try{const t=localStorage.getItem(e);return t!==null?parseFloat(t):s}catch{return s}}initVoice(){if(!this.synth)return;const e=()=>{try{const s=this.synth.getVoices();this.voice=s.find(t=>t.lang.startsWith("en-US")&&(t.name.includes("Google")||t.name.includes("Natural")||t.name.includes("Samantha")||t.name.includes("Ava")))||s.find(t=>t.lang.startsWith("en-US"))||s.find(t=>t.lang.startsWith("en"))||null}catch(s){console.warn("Voice load error:",s)}};this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=e),e()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(e,s){this.listeners.forEach(t=>{try{t(e,s)}catch(a){console.warn("Audio listener error:",a)}})}setRate(e){this.rate=parseFloat(e)||.95;try{localStorage.setItem("reading_speech_rate",this.rate.toString())}catch{}return this.notify("rateChanged",this.rate),this.rate}getRate(){return this.rate}setAutoPlay(e){this.autoPlay=!!e;try{localStorage.setItem("reading_auto_play",this.autoPlay.toString())}catch{}return this.notify("autoPlayChanged",this.autoPlay),this.autoPlay}getAutoPlay(){return this.autoPlay}toggleSound(){this.enabled=!this.enabled;try{localStorage.setItem("reading_sound_enabled",this.enabled.toString())}catch{}return this.enabled||this.stop(),this.notify("soundToggled",this.enabled),this.enabled}async speak(e,s={}){if(!this.enabled||!e)return;const t=String(e).replace(/\(.*?\)/g,"").replace(/_+/g,"").trim();if(!t)return;const a=s.rate||this.rate,n=s.pitch||this.pitch;if(this.isNative||!this.synth)try{await ae.stop().catch(()=>{}),this.isSpeaking=!0,this.notify("speakStart",{text:t,rate:a}),await ae.speak({text:t,lang:"en-US",rate:a,pitch:n,volume:1,category:"ambient"}),this.isSpeaking=!1,this.notify("speakEnd",{text:t}),s.onEnd&&s.onEnd();return}catch(o){if(this.isSpeaking=!1,this.notify("speakEnd",{text:t,error:o}),s.onError&&s.onError(o),!this.synth)return}try{this.synth.cancel();const o=new SpeechSynthesisUtterance(t);o.lang="en-US",this.voice&&(o.voice=this.voice),o.rate=a,o.pitch=n,this.isSpeaking=!0,this.notify("speakStart",{text:t,rate:o.rate}),o.onend=()=>{this.isSpeaking=!1,this.notify("speakEnd",{text:t}),s.onEnd&&s.onEnd()},o.onerror=r=>{this.isSpeaking=!1,this.notify("speakEnd",{text:t,error:r}),s.onError&&s.onError(r)},this.synth.speak(o)}catch(o){this.isSpeaking=!1,console.warn("SpeechSynthesis error:",o)}}speakSlow(e,s={}){return this.speak(e,{...s,rate:.75})}speakFast(e,s={}){return this.speak(e,{...s,rate:1.2})}stop(){this.isNative&&ae.stop().catch(()=>{}),this.synth&&this.synth.cancel(),this.isSpeaking=!1,this.notify("speakEnd",{stopped:!0})}playCorrect(){if(this.enabled)try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const s=new e,t=s.currentTime,a=s.createOscillator(),n=s.createGain();a.type="sine",a.frequency.setValueAtTime(659.25,t),n.gain.setValueAtTime(.18,t),n.gain.exponentialRampToValueAtTime(.001,t+.35),a.connect(n),n.connect(s.destination),a.start(t),a.stop(t+.35);const o=s.createOscillator(),r=s.createGain();o.type="sine",o.frequency.setValueAtTime(880,t+.15),r.gain.setValueAtTime(.22,t+.15),r.gain.exponentialRampToValueAtTime(.001,t+.55),o.connect(r),r.connect(s.destination),o.start(t+.15),o.stop(t+.55)}catch(e){console.warn("AudioContext error:",e)}}playPinPon(){this.playCorrect()}playIncorrect(){if(this.enabled)try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const s=new e,t=s.currentTime,a=s.createOscillator(),n=s.createGain();a.type="sawtooth",a.frequency.setValueAtTime(180,t),n.gain.setValueAtTime(.15,t),n.gain.exponentialRampToValueAtTime(.001,t+.25),a.connect(n),n.connect(s.destination),a.start(t),a.stop(t+.25);const o=s.createOscillator(),r=s.createGain();o.type="sawtooth",o.frequency.setValueAtTime(150,t+.2),r.gain.setValueAtTime(.18,t+.2),r.gain.exponentialRampToValueAtTime(.001,t+.55),o.connect(r),r.connect(s.destination),o.start(t+.2),o.stop(t+.55)}catch(e){console.warn("AudioContext error:",e)}}playBubu(){this.playIncorrect()}}const j=new gs,ms={1:"①",2:"②",3:"③",4:"④",5:"⑤",6:"⑥",7:"⑦",8:"⑧",9:"⑨",10:"⑩"};function u(i){return String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function S(i,e={}){if(!i)return"";const{highlightWords:s=[],underlineHint:t=!1}=e,a=String(i),n=[];if(Array.isArray(s)&&s.length>0){const d=a.toLowerCase();for(const p of s){if(!p)continue;const m=p.trim().toLowerCase();if(!m)continue;let g=0;for(;(g=d.indexOf(m,g))!==-1;)n.push([g,g+m.length]),g+=m.length}}const o=(d,p)=>n.some(([m,g])=>d>=m&&p<=g),r=/[A-Za-z]+(?:['’][A-Za-z]+)*/g;let c="",h=0,l;for(;(l=r.exec(a))!==null;){const d=l.index,p=l[0],m=d+p.length;if(d>h){const f=u(a.slice(h,d)).replace(/\n/g,"<br>");c+=f}const g=[t?"dict-word-hint":"",o(d,m)?"evidence-word-chip":""].filter(Boolean).join(" ");c+=`<span class="dict-word${g?" "+g:""}" data-word="${u(p)}">${u(p)}</span>`,h=m}return h<a.length&&(c+=u(a.slice(h)).replace(/\n/g,"<br>")),c}function ne(i,e={}){if(!i)return"";const{highlightWords:s=[],filledBlanks:t={}}=e,a=/\{\{(?:u([0-9A-Za-z]+):([^}]+)|b([0-9A-Za-z]+))\}\}/g;let n="",o=0,r;for(;(r=a.exec(i))!==null;){if(r.index>o&&(n+=S(i.slice(o,r.index),{highlightWords:s})),r[1]!==void 0){const c=r[1],h=r[2],l=ms[c]||`(${c})`;n+=`<span class="passage-underline" data-underline="u${u(c)}"><span class="underline-badge">${l}</span><span class="underline-body">${S(h,{highlightWords:s})}</span></span>`}else if(r[3]!==void 0){const c=r[3],h=t[c];h?n+=`<span class="passage-blank is-filled" data-blank="${u(c)}"><span class="blank-badge">[ ${u(c)} ]</span> ${S(h,{highlightWords:s})}</span>`:n+=`<span class="passage-blank" data-blank="${u(c)}">[ ${u(c)} ]</span>`}o=r.index+r[0].length}return o<i.length&&(n+=S(i.slice(o),{highlightWords:s})),n}function ve(i,e={}){return i?String(i).replace(/\{\{u[0-9A-Za-z]+:([^}]+)\}\}/g,"$1").replace(/\{\{b([0-9A-Za-z]+)\}\}/g,(s,t)=>e[t]||" , ").replace(/\s+/g," ").trim():""}function Ce(i){if(!i)return[];const s=String(i).replace(/\{\{u[0-9A-Za-z]+:([^}]+)\}\}/g,"$1").replace(/\{\{b[0-9A-Za-z]+\}\}/g," ").match(/[A-Za-z]+(?:['’][A-Za-z]+)*/g);return s||[]}class bs{constructor({container:e,headerEl:s,onSelectPassage:t}){this.container=e,this.headerEl=s,this.onSelectPassage=t,this.selectedGrade="all",this.modalStepId=null,this.modalTypeId="explanation",this.showStatsModal=!1,this.showHelpModal=!1,this.showCalendarModal=!1,this.calendarViewingDate=new Date}mount(){this.renderHeader(),this.renderMain()}renderHeader(){if(!this.headerEl)return;this.headerEl.className="app-header home-header",this.headerEl.innerHTML=`
      <div class="home-portal-nav">
        <a href="../index.html" class="portal-home-back-btn" aria-label="ホームページに戻る">
          🏠 ホームページに戻る
        </a>
      </div>
      <div class="home-header-inner">
        <div class="home-brand">
          <img src="./reading_icon.png" alt="アプリアイコン" class="home-brand-img-icon" />
          <div class="home-brand-text">
            <h1 id="app-header-title">段階別！中学英語長文！</h1>
            <p class="home-brand-sub">習った文法だけで1段ずつステップアップ</p>
          </div>
        </div>
        <div class="home-header-actions">
          <button type="button" class="icon-pill-btn" id="home-help-btn" aria-label="使い方を見る">
            ❓ 使い方
          </button>
          <button type="button" class="icon-pill-btn" id="home-stats-btn" aria-label="学習記録を見る">
            📊 記録
          </button>
          <button type="button" class="icon-pill-btn" id="home-sound-toggle" aria-label="効果音・音声の切り替え">
            ${j.enabled?"🔊 音声 ON":"🔇 音声 OFF"}
          </button>
        </div>
      </div>
    `;const e=this.headerEl.querySelector("#home-help-btn");e&&(e.onclick=()=>this.openHelpSheet());const s=this.headerEl.querySelector("#home-stats-btn");s&&(s.onclick=()=>this.openStatsSheet());const t=this.headerEl.querySelector("#home-sound-toggle");t&&(t.onclick=()=>{j.toggleSound(),this.renderHeader()})}resolveSpotlightInfo(){const e=k.getLastActivity();if((e==null?void 0:e.type)==="interrupted"&&e.passageId){const s=oe(e.passageId);if(s){const t=k.getInterruptedState(s.id),a=(t==null?void 0:t.answeredCount)??e.answeredCount??0,n=s.questions.length;return{mode:"interrupted",heading:"⏸️ 前回中断した問題",badgeText:`${a}/${n}問 回答済み`,actionLabel:"続きから再開 →",passage:s}}}if((e==null?void 0:e.type)==="completed"&&e.passageId){const s=a=>{var n;return!!((n=k.getPassageStatus(a))!=null&&n.completed)},t=Xe(e.passageId,s);return t?{mode:"next",heading:"▶️ 次の問題に挑戦",badgeText:"前回の続き",actionLabel:"挑戦する →",passage:t}:{mode:"all_done",heading:"👑 公開中の問題をすべてクリア！",badgeText:"",actionLabel:"",passage:null}}return $.length>0?{mode:"first",heading:"🚀 まずはここからスタート",badgeText:"Step 1",actionLabel:"挑戦する →",passage:$[0]}:null}renderSpotlightSection(){const e=this.resolveSpotlightInfo();if(!e)return"";if(e.mode==="all_done")return`
        <section class="spotlight-section">
          <div class="spotlight-all-done">
            👑 現在収録中の長文をすべてクリアしました！下のステップ一覧から自由に復習できます。
          </div>
        </section>
      `;const s=e.passage,t=O.find(r=>r.id===s.grade),a=T.find(r=>r.id===s.type),n=this.countPassageWords(s),o=e.mode==="interrupted";return`
      <section class="spotlight-section">
        <div class="section-heading-row">
          <h2 class="section-heading">${u(e.heading)}</h2>
          ${e.badgeText?`<span class="section-sub-badge ${o?"is-resume":""}">${u(e.badgeText)}</span>`:""}
        </div>
        <button type="button" class="quick-passage-card ${o?"is-resume-card":""}" data-open-passage="${u(s.id)}">
          <div class="quick-card-top">
            <span class="quick-step-pill" style="background:${(t==null?void 0:t.color)||"#3b82f6"}">
              Step ${s.step}（${u((t==null?void 0:t.shortLabel)||"")}）
            </span>
            <span class="quick-type-pill">${(a==null?void 0:a.icon)||"📖"} ${u((a==null?void 0:a.shortLabel)||"")}</span>
          </div>
          <div class="quick-card-title">${u(s.title)}</div>
          <div class="quick-card-sub">${u(s.titleJa)}</div>
          <div class="quick-card-meta">
            <span>約${n}語・全${s.questions.length}問</span>
            <span class="status-badge ${o?"is-resume-text":"is-new"}">${u(e.actionLabel)}</span>
          </div>
        </button>
      </section>
    `}renderLoginStreakBanner(){const e=k.getLoginStats(),s=D(),a=k.getDailyPassageActivity()[s]||0;return`
      <section class="login-streak-section">
        <button type="button" class="login-streak-card" data-open-calendar="true" aria-label="学習カレンダーを開く">
          <div class="streak-card-left">
            <div class="streak-cal-badge">
              <span class="cal-icon">📅</span>
              <span class="cal-today-count">${a>0?`${a}問`:"今日"}</span>
            </div>
            <div class="streak-card-texts">
              <div class="streak-main-title">
                <span class="streak-fire-icon">🔥</span>
                <strong>連続 ${e.streakDays} 日</strong> ログイン！
                <span class="streak-sub-pill">累計 ${e.totalDays} 日</span>
              </div>
              <p class="streak-sub-hint">📅 タップして学習カレンダーを表示（今日: ${a}問挑戦）</p>
            </div>
          </div>
          <div class="streak-card-arrow">
            <span class="streak-arrow-btn">カレンダー →</span>
          </div>
        </button>
      </section>
    `}renderMain(){var r;const e=((r=this.container.querySelector(".home-scroll-area"))==null?void 0:r.scrollTop)||0,s=$.length;let t=0,a=0;for(const c of $){const h=k.getPassageStatus(c.id);h!=null&&h.completed&&t++,h!=null&&h.perfect&&a++}const n=this.selectedGrade==="all"?L:L.filter(c=>c.grade===this.selectedGrade);this.container.className="app-main home-main",this.container.innerHTML=`
      <div class="home-scroll-area">
        <!-- 進捗サマリーカード（タップでも詳細学習記録を表示） -->
        <button type="button" class="home-summary-card" data-open-stats="true" aria-label="学習記録の詳細を開く">
          <div class="summary-stats">
            <div class="summary-stat-item">
              <span class="stat-label">クリア長文</span>
              <strong class="stat-val">${t} <small>/ ${s}本</small></strong>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-stat-item">
              <span class="stat-label">満点王冠</span>
              <strong class="stat-val">👑 ${a}</strong>
            </div>
            <div class="summary-divider"></div>
            <div class="summary-stat-item">
              <span class="stat-label">全カリキュラム</span>
              <strong class="stat-val">21 <small>単元</small></strong>
            </div>
          </div>
        </button>

        <!-- ログイン連続日数 ＆ 学習カレンダーバナー -->
        ${this.renderLoginStreakBanner()}

        <!-- 前回中断した問題 または 次の1問のみ表示 -->
        ${this.renderSpotlightSection()}

        <!-- 学年フィルタタブ ＆ 全21ステップ階段 -->
        <section class="steps-section">
          <div class="section-heading-row">
            <h2 class="section-heading">🪜 全21ステップ階段カリキュラム</h2>
          </div>

          <div class="grade-tabs" role="tablist" aria-label="学年選択">
            <button type="button" class="grade-tab ${this.selectedGrade==="all"?"is-active":""}" data-grade="all">
              すべて
            </button>
            ${O.map(c=>{const h=L.filter(l=>l.grade===c.id).length;return`
                <button type="button" class="grade-tab ${this.selectedGrade===c.id?"is-active":""}" data-grade="${c.id}" style="--grade-color:${c.color}">
                  ${u(c.shortLabel)} (${h})
                </button>
              `}).join("")}
          </div>

          <div class="staircase-list">
            ${n.map(c=>this.renderStepCard(c)).join("")}
          </div>
        </section>
      </div>

      <!-- 単元詳細＆3タイプ選択モーダルシート -->
      <div id="step-sheet-host"></div>
    `;const o=this.container.querySelector(".home-scroll-area");o&&e>0&&(o.scrollTop=e),this.bindEvents(),this.modalStepId?this.renderStepSheet():this.showStatsModal?this.renderStatsSheet():this.showHelpModal?this.renderHelpSheet():this.showCalendarModal&&this.renderCalendarSheet()}renderStepCard(e){const s=O.find(h=>h.id===e.grade),t=ce(e.id),a=t.length,n=T.length*Z,o=t.filter(h=>{var l;return(l=k.getPassageStatus(h.id))==null?void 0:l.completed}).length,r=t.filter(h=>{var l;return(l=k.getPassageStatus(h.id))==null?void 0:l.perfect}).length,c=a>0?Math.round(o/a*100):0;return`
      <button type="button" class="step-stair-card ${a>0?"has-content":"is-upcoming"}" data-open-step="${u(e.id)}" style="--step-accent:${(s==null?void 0:s.color)||"#3b82f6"}">
        <div class="step-num-col">
          <span class="step-grade-mini">${u((s==null?void 0:s.shortLabel)||"")}</span>
          <strong class="step-num-badge">STEP ${String(e.step).padStart(2,"0")}</strong>
        </div>
        <div class="step-info-col">
          <div class="step-title-row">
            <h3 class="step-card-title">${u(e.title)}</h3>
            ${r>0?`<span class="step-crown" title="満点クリア数">👑×${r}</span>`:""}
          </div>
          <p class="step-card-subtitle">${u(e.subtitle)}</p>
          <div class="step-meta-row">
            <span class="step-word-range">📏 ${e.wordRange[0]}〜${e.wordRange[1]}語</span>
            ${a>0?`<span class="step-avail-pill">📚 公開中 ${a}本 (${o}/${a})</span>`:`<span class="step-upcoming-pill">全${n}本枠</span>`}
          </div>
          ${a>0?`
            <div class="step-progress-bar">
              <div class="step-progress-fill" style="width:${c}%"></div>
            </div>
          `:""}
        </div>
        <div class="step-arrow-col" aria-hidden="true">›</div>
      </button>
    `}countPassageWords(e){const s=(e.paragraphs||[]).flatMap(a=>(a.sentences||[]).map(n=>n.en)).join(" "),t=(e.questions||[]).flatMap(a=>a.subSentences||[]).join(" ");return Ce(s+" "+t).length}bindEvents(){this.container.onclick=e=>{const s=e.target.closest("[data-grade]");if(s){this.selectedGrade=s.dataset.grade,this.renderMain();return}const t=e.target.closest("[data-open-passage]");if(t){const r=t.dataset.openPassage;r&&this.onSelectPassage&&this.onSelectPassage(r);return}const a=e.target.closest("[data-open-step]");if(a){const r=a.dataset.openStep;this.openStepModal(r);return}const n=e.target.closest("[data-modal-type]");if(n){e.stopPropagation(),this.modalTypeId=n.dataset.modalType,this.renderStepSheet();return}if(e.target.closest("[data-open-help]")){this.openHelpSheet();return}if(e.target.closest("[data-open-calendar]")){this.openCalendarSheet();return}const o=e.target.closest("[data-cal-nav]");if(o){e.stopPropagation();const r=o.dataset.calNav,c=this.calendarViewingDate;r==="prev"?this.calendarViewingDate=new Date(c.getFullYear(),c.getMonth()-1,1):r==="next"&&(this.calendarViewingDate=new Date(c.getFullYear(),c.getMonth()+1,1)),this.renderCalendarSheet();return}if(e.target.closest("[data-open-stats]")){this.openStatsSheet();return}e.target.closest("[data-close-sheet]")&&this.closeStepModal()}}openHelpSheet(){this.closeStepModal(),this.showHelpModal=!0,this.renderHelpSheet()}openCalendarSheet(){this.closeStepModal(),this.showCalendarModal=!0,this.calendarViewingDate=new Date,this.renderCalendarSheet()}openStatsSheet(){this.closeStepModal(),this.showStatsModal=!0,this.renderStatsSheet()}openStepModal(e){this.closeStepModal(),this.modalStepId=e,k.setLastStepId(e);const s=ce(e);s.length>0&&!s.some(t=>t.type===this.modalTypeId)&&(this.modalTypeId=s[0].type),this.renderStepSheet()}closeStepModal(){this.modalStepId=null,this.showStatsModal=!1,this.showHelpModal=!1,this.showCalendarModal=!1;const e=this.container.querySelector("#step-sheet-host");e&&(e.innerHTML="")}renderStatsSheet(){const e=this.container.querySelector("#step-sheet-host");if(!e||!this.showStatsModal)return;const s=$.length;let t=0,a=0,n=0,o=0,r=0;for(const d of $){const p=k.getPassageStatus(d.id);p!=null&&p.completed&&(t++,p.perfect&&a++,n+=this.countPassageWords(d),o+=p.bestCorrect||0,r+=p.totalCount||d.questions.length)}const c=r>0?Math.round(o/r*100):0,h=O.map(d=>{const p=$.filter(y=>y.grade===d.id),m=p.filter(y=>{var w;return(w=k.getPassageStatus(y.id))==null?void 0:w.completed}).length,g=p.filter(y=>{var w;return(w=k.getPassageStatus(y.id))==null?void 0:w.perfect}).length,f=p.length>0?Math.round(m/p.length*100):0;return`
        <div class="stats-progress-row">
          <div class="stats-row-top">
            <span class="stats-row-title">
              <span class="stats-grade-dot" style="background:${d.color}"></span>
              ${u(d.label)}
            </span>
            <span class="stats-row-meta">
              👑 ${g} ・ <strong>${m}</strong> / ${p.length}本 (${f}%)
            </span>
          </div>
          <div class="step-progress-bar">
            <div class="step-progress-fill" style="width:${f}%; background:${d.color}"></div>
          </div>
        </div>
      `}).join(""),l=T.map(d=>{const p=$.filter(g=>g.type===d.id),m=p.filter(g=>{var f;return(f=k.getPassageStatus(g.id))==null?void 0:f.completed}).length;return`
        <div class="stats-type-box">
          <div class="stats-type-icon">${d.icon}</div>
          <div class="stats-type-name">${u(d.shortLabel)}</div>
          <div class="stats-type-val"><strong>${m}</strong><small>/${p.length}</small></div>
        </div>
      `}).join("");e.innerHTML=`
      <div class="sheet-overlay" data-close-sheet="true"></div>
      <section class="step-bottom-sheet stats-bottom-sheet" role="dialog" aria-label="学習記録ダッシュボード">
        <div class="sheet-handle-bar"></div>
        <div class="sheet-header">
          <div>
            <span class="sheet-step-badge" style="background:#2563eb">LEARNING STATS</span>
            <h2 class="sheet-title">📊 学習記録・読破データ</h2>
          </div>
          <button type="button" class="sheet-close-btn" data-close-sheet="true" aria-label="閉じる">✕</button>
        </div>

        <div class="stats-sheet-body">
          <div class="stats-kpi-grid">
            <div class="stats-kpi-card">
              <span class="stats-kpi-label">📖 総読破語数</span>
              <strong class="stats-kpi-val">${n.toLocaleString()} <small>語</small></strong>
            </div>
            <div class="stats-kpi-card">
              <span class="stats-kpi-label">🎯 ベスト正答率</span>
              <strong class="stats-kpi-val">${r>0?`${c}%`:"—"}</strong>
            </div>
            <div class="stats-kpi-card">
              <span class="stats-kpi-label">✅ クリア長文</span>
              <strong class="stats-kpi-val">${t} <small>/ ${s}</small></strong>
            </div>
            <div class="stats-kpi-card">
              <span class="stats-kpi-label">👑 満点王冠</span>
              <strong class="stats-kpi-val">${a} <small>個</small></strong>
            </div>
          </div>

          <h3 class="stats-sub-heading">学年別クリア進捗</h3>
          <div class="stats-grade-stack">
            ${h}
          </div>

          <h3 class="stats-sub-heading">文タイプ別クリア数</h3>
          <div class="stats-type-grid">
            ${l}
          </div>
        </div>
      </section>
    `}renderStepSheet(){var h;const e=this.container.querySelector("#step-sheet-host");if(!e||!this.modalStepId)return;const s=L.find(l=>l.id===this.modalStepId);if(!s)return;const t=O.find(l=>l.id===s.grade),a=pe(s.id,this.modalTypeId),n=T.find(l=>l.id===this.modalTypeId),o=Array.from({length:Z},(l,d)=>{const p=d+1,m=a.find(g=>g.index===p)||null;if(m){const g=k.getPassageStatus(m.id),f=k.getInterruptedState(m.id),y=this.countPassageWords(m);return`
          <button type="button" class="passage-slot-card is-ready" data-open-passage="${u(m.id)}">
            <div class="slot-left">
              <span class="slot-index-badge">第${p}回</span>
              <div>
                <div class="slot-title">${u(m.title)}</div>
                <div class="slot-sub">${u(m.titleJa)}</div>
                <div class="slot-meta">🏷️ ${u(m.themeTag||"")} ・ 約${y}語</div>
              </div>
            </div>
            <div class="slot-right">
              ${f?`<span class="slot-status is-resume">⏸️ 再開 (${f.answeredCount}/${m.questions.length})</span>`:g!=null&&g.perfect?'<span class="slot-status is-perfect">👑 満点</span>':g!=null&&g.completed?`<span class="slot-status is-cleared">✅ ${g.bestCorrect}/${g.totalCount}</span>`:'<span class="slot-start-btn">挑戦 →</span>'}
            </div>
          </button>
        `}return`
        <div class="passage-slot-card is-locked" aria-disabled="true">
          <div class="slot-left">
            <span class="slot-index-badge is-muted">第${p}回</span>
            <div>
              <div class="slot-title is-muted">${u(s.title)}（${u((n==null?void 0:n.shortLabel)||"")} #${p}）</div>
              <div class="slot-sub">今後のアップデートで収録予定</div>
            </div>
          </div>
          <div class="slot-right">
            <span class="slot-upcoming-tag">準備中</span>
          </div>
        </div>
      `}).join(""),r=e.querySelector(".step-bottom-sheet"),c=(h=r==null?void 0:r.dataset)==null?void 0:h.stepId;if(r&&c===s.id){r.querySelectorAll("[data-modal-type]").forEach(m=>{m.dataset.modalType===this.modalTypeId?m.classList.add("is-active"):m.classList.remove("is-active")});const d=r.querySelector(".sheet-type-desc");d&&(d.textContent=(n==null?void 0:n.description)||"");const p=r.querySelector(".sheet-slots-list");p&&(p.innerHTML=o);return}e.innerHTML=`
      <div class="sheet-overlay" data-close-sheet="true"></div>
      <section class="step-bottom-sheet" data-step-id="${u(s.id)}" role="dialog" aria-label="${u(s.title)}の長文選択">
        <div class="sheet-handle-bar"></div>
        <div class="sheet-header">
          <div>
            <span class="sheet-step-badge" style="background:${(t==null?void 0:t.color)||"#3b82f6"}">
              STEP ${s.step}（${u((t==null?void 0:t.label)||"")}）
            </span>
            <h2 class="sheet-title">${u(s.title)}</h2>
            <p class="sheet-grammar-note">✅ 使用文法：${u(s.allowedGrammarSummary)}</p>
          </div>
          <button type="button" class="sheet-close-btn" data-close-sheet="true" aria-label="閉じる">✕</button>
        </div>

        <div class="sheet-type-tabs" role="tablist">
          ${T.map(l=>{const d=pe(s.id,l.id).length;return`
              <button type="button" class="sheet-type-tab ${this.modalTypeId===l.id?"is-active":""}" data-modal-type="${l.id}">
                <span class="type-icon">${l.icon}</span>
                <span class="type-name">${u(l.shortLabel)}</span>
                <span class="type-count">${d}/${Z}</span>
              </button>
            `}).join("")}
        </div>

        <p class="sheet-type-desc">${u((n==null?void 0:n.description)||"")}</p>

        <div class="sheet-slots-list">
          ${o}
        </div>
      </section>
    `}renderHelpSheet(){const e=this.container.querySelector("#step-sheet-host");!e||!this.showHelpModal||(e.innerHTML=`
      <div class="sheet-overlay" data-close-sheet="true"></div>
      <section class="step-bottom-sheet help-bottom-sheet" role="dialog" aria-label="このアプリの使い方">
        <div class="sheet-handle-bar"></div>
        <div class="sheet-header">
          <div>
            <span class="sheet-step-badge" style="background:#0ea5e9">USER GUIDE</span>
            <h2 class="sheet-title">💡 このアプリの使い方・学習ガイド</h2>
            <p class="sheet-grammar-note">学年・単元と3つの問題パターンから選んでステップアップ！</p>
          </div>
          <button type="button" class="sheet-close-btn" data-close-sheet="true" aria-label="閉じる">✕</button>
        </div>

        <div class="help-sheet-body">
          <!-- ① 学年と単元の選び方 -->
          <div class="help-card">
            <div class="help-card-header">
              <span class="help-card-icon">🪜</span>
              <h3 class="help-card-title">① 学年・単元を選ぶ（全21ステップ階段）</h3>
              <span class="help-card-pill">未習文法ゼロ</span>
            </div>
            <div class="help-card-body">
              <p>中学3年間の学習順（be動詞から仮定法まで）に沿った<strong>全21ステップの階段カリキュラム</strong>です。</p>
              <p><strong>「未習文法ゼロ」ルール</strong>：各ステップでは、その時点で習っていない新しい文法は一切使われません。「まだ学校で習っていないから読めない…」という心配がなく、自分の学年や習熟度に合わせて安心して挑戦できます！</p>
            </div>
          </div>

          <!-- ② 3つの問題パターン -->
          <div class="help-card">
            <div class="help-card-header">
              <span class="help-card-icon">📑</span>
              <h3 class="help-card-title">② 3つの問題パターンから選べる！</h3>
              <span class="help-card-pill">各単元15本</span>
            </div>
            <div class="help-card-body">
              <p>各単元には、3つのタイプの長文がそれぞれ5本ずつ（合計15本）収録されています：</p>
              <ul class="help-feature-list">
                <li><strong>📖 説明文・物語</strong>：理科・社会（歴史や地理・環境）などの教養テーマやストーリー</li>
                <li><strong>💬 会話文</strong>：学校生活や日常の自然な英語コミュニケーション</li>
                <li><strong>📊 グラフ・表</strong>：高校入試頻出のポスター・アンケート・図表の読み取り</li>
              </ul>
              <p style="margin-top:6px;">単元を選んだ後、上部のタブをタップしてその場で自由に切り替えられます。</p>
            </div>
          </div>

          <!-- ③ 全単語タップ辞書 -->
          <div class="help-card">
            <div class="help-card-header">
              <span class="help-card-icon">🔍</span>
              <h3 class="help-card-title">③ 全単語タップ辞書 ＆ 1文音声・1文翻訳</h3>
              <span class="help-card-pill">準備中ゼロ</span>
            </div>
            <div class="help-card-body">
              <p>長文本文や設問・選択肢の<strong>すべての英単語</strong>は、タップするだけで意味・品詞・発音・例文が右からスライド表示されます。</p>
              <p>また、上部の<strong>「🔊 1文音声」ボタン</strong>をONにすると1文ずつタップして英語音声を聴くことができ、<strong>「🔖 1文翻訳」ボタン</strong>をONにすると分からない1文だけをタップして日本語訳を確認できます！</p>
            </div>
          </div>

          <!-- ④ 即採点＆根拠ハイライト -->
          <div class="help-card">
            <div class="help-card-header">
              <span class="help-card-icon">💡</span>
              <h3 class="help-card-title">④ 即採点 ＆ 本文根拠ハイライト</h3>
              <span class="help-card-pill">鉄は熱いうちに</span>
            </div>
            <div class="help-card-body">
              <p>1問解くごとにその場で正否と詳しい解説が表示されます。</p>
              <p>正否判定と同時に、<strong>本文中の根拠となる文がうっすら光ってハイライト表示</strong>されるため、「どこを読めばよかったのか」が一目で理解できます！</p>
            </div>
          </div>

          <!-- ⑤ サンドイッチ和訳＆全訳 -->
          <div class="help-card">
            <div class="help-card-header">
              <span class="help-card-icon">🥪</span>
              <h3 class="help-card-title">⑤ サンドイッチ和訳 ＆ 全訳で復習</h3>
              <span class="help-card-pill">復習モード</span>
            </div>
            <div class="help-card-body">
              <p>全問解き終わった後は、本文を1文ごとに区切ってすぐ下に日本語訳を表示する<strong>「サンドイッチ和訳」</strong>や、全体の<strong>「日本語全訳」</strong>にワンタップで切り替えてスッキリ復習できます。</p>
            </div>
          </div>

          <!-- ⑥ 毎日の学習継続 -->
          <div class="help-card">
            <div class="help-card-header">
              <span class="help-card-icon">📅</span>
              <h3 class="help-card-title">⑥ ログイン継続 ＆ 学習カレンダー</h3>
              <span class="help-card-pill">継続は力なり</span>
            </div>
            <div class="help-card-body">
              <p>トップ画面には<strong>連続ログイン日数</strong>が表示され、カレンダーをタップすると<strong>その日に挑戦した問題の数</strong>が記録されていきます。</p>
              <p>毎日1問ずつでもコツコツ挑戦して、英語の読解力を着実に伸ばしていきましょう！</p>
            </div>
          </div>
        </div>
      </section>
    `)}renderCalendarSheet(){const e=this.container.querySelector("#step-sheet-host");if(!e||!this.showCalendarModal)return;const s=this.calendarViewingDate.getFullYear(),t=this.calendarViewingDate.getMonth(),a=D(new Date),n=new Date(s,t+1,0).getDate(),o=new Date(s,t,1).getDay(),r=k.getDailyPassageActivity(),c=k.getLoginStats();let h=0;const l=Array.from({length:o},()=>'<div class="calendar-cell is-empty"></div>').join(""),d=Array.from({length:n},(p,m)=>{const g=m+1,f=String(t+1).padStart(2,"0"),y=String(g).padStart(2,"0"),w=`${s}-${f}-${y}`,b=(o+m)%7,v=r[w]||0;h+=v;const x=w===a,A=b===0,N=b===6;return`
        <div class="${["calendar-cell",x?"is-today":"",v>0?"has-activity":"",A?"is-sun":"",N?"is-sat":""].filter(Boolean).join(" ")}">
          <span class="cell-day-num">${g}</span>
          ${v>0?`<span class="cell-count-badge">${v}</span>`:""}
        </div>
      `}).join("");e.innerHTML=`
      <div class="sheet-overlay" data-close-sheet="true"></div>
      <section class="step-bottom-sheet calendar-bottom-sheet" role="dialog" aria-label="学習カレンダー">
        <div class="sheet-handle-bar"></div>
        <div class="sheet-header">
          <div>
            <span class="sheet-step-badge" style="background:#f59e0b">STUDY CALENDAR</span>
            <h2 class="sheet-title">📅 学習記録カレンダー</h2>
            <p class="sheet-grammar-note">🔥 連続 ${c.streakDays} 日ログイン中！ (累計 ${c.totalDays} 日)</p>
          </div>
          <button type="button" class="sheet-close-btn" data-close-sheet="true" aria-label="閉じる">✕</button>
        </div>

        <div class="calendar-sheet-body">
          <div class="calendar-month-bar">
            <button type="button" class="cal-nav-btn" data-cal-nav="prev" aria-label="前月">&lt;</button>
            <div class="calendar-month-title">${s}年 ${t+1}月</div>
            <button type="button" class="cal-nav-btn" data-cal-nav="next" aria-label="次月">&gt;</button>
          </div>

          <div class="calendar-weekdays">
            <span class="weekday-sun">日</span>
            <span>月</span>
            <span>火</span>
            <span>水</span>
            <span>木</span>
            <span>金</span>
            <span class="weekday-sat">土</span>
          </div>

          <div class="calendar-grid">
            ${l}
            ${d}
          </div>

          <p class="calendar-note-text">※数字はその日に挑戦した問題の数です</p>

          <div class="calendar-summary-bar">
            <span>今月の総解答数</span>
            <span class="cal-summary-val">${h} 問</span>
          </div>
        </div>
      </section>
    `}}const we={"isn't":{word:"isn't",pos:"短縮形",posKey:"contraction",meanings:["is not の短縮形（〜ではない）"],forms:{元の形:"is",否定語:"not"},detail:"be動詞 is と not が短縮された形です。主語が三人称単数（he / she / it / 単数名詞）の否定文で使います。",examples:[{en:"He isn't busy today.",ja:"彼は今日忙しくありません。"}]},"aren't":{word:"aren't",pos:"短縮形",posKey:"contraction",meanings:["are not の短縮形（〜ではない）"],forms:{元の形:"are",否定語:"not"},detail:"be動詞 are と not が短縮された形です。主語が you や複数（we / they など）の否定文で使います。",examples:[{en:"They aren't in the classroom now.",ja:"彼らは今、教室にいません。"}]},"wasn't":{word:"wasn't",pos:"短縮形",posKey:"contraction",meanings:["was not の短縮形（〜ではなかった）"],forms:{元の形:"was",現在形:"is"},detail:"be動詞の過去形 was と not の短縮形です。",examples:[{en:"It wasn't cold yesterday.",ja:"昨日は寒くありませんでした。"}]},"weren't":{word:"weren't",pos:"短縮形",posKey:"contraction",meanings:["were not の短縮形（〜ではなかった）"],forms:{元の形:"were",現在形:"are"},detail:"be動詞の過去形 were と not の短縮形です。",examples:[{en:"We weren't tired after the game.",ja:"私たちは試合のあと疲れていませんでした。"}]},"can't":{word:"can't",pos:"短縮形",posKey:"contraction",meanings:["cannot（can not）の短縮形（〜できない、〜のはずがない）"],forms:{元の形:"can",書き言葉:"cannot"},detail:"助動詞 can の否定短縮形です。後ろには動詞の原形を置きます。",examples:[{en:"I can't swim very fast.",ja:"私はあまり速く泳ぐことができません。"}]},"doesn't":{word:"doesn't",pos:"短縮形",posKey:"contraction",meanings:["does not の短縮形（〜しない）"],forms:{元の形:"does",原形:"do"},detail:"三人称単数現在（he / she / it 等）の一般動詞否定文で使う短縮形です。後ろの動詞は原形に戻ります。",examples:[{en:"She doesn't eat breakfast early.",ja:"彼女は朝早く朝食を食べません。"}]},"didn't":{word:"didn't",pos:"短縮形",posKey:"contraction",meanings:["did not の短縮形（〜しなかった）"],forms:{元の形:"did",原形:"do"},detail:"一般動詞の過去形の否定文で使います。後ろの動詞は原形になります。",examples:[{en:"I didn't watch TV last night.",ja:"私は昨夜テレビを見ませんでした。"}]},"won't":{word:"won't",pos:"短縮形",posKey:"contraction",meanings:["will not の短縮形（〜しないつもりだ、〜ないだろう）"],forms:{元の形:"will"},detail:"助動詞 will と not の短縮形です。",examples:[{en:"It won't rain tomorrow.",ja:"明日は雨が降らないでしょう。"}]},"haven't":{word:"haven't",pos:"短縮形",posKey:"contraction",meanings:["have not の短縮形（まだ〜していない、〜したことがない）"],forms:{元の形:"have"},detail:"現在完了形の否定文などで使われる have not の短縮形です。",examples:[{en:"I haven't finished my homework yet.",ja:"私はまだ宿題を終えていません。"}]},"hasn't":{word:"hasn't",pos:"短縮形",posKey:"contraction",meanings:["has not の短縮形（まだ〜していない、〜したことがない）"],forms:{元の形:"has",原形:"have"},detail:"現在完了形（三人称単数主語）の否定文で使われる has not の短縮形です。",examples:[{en:"He hasn't arrived at the station yet.",ja:"彼はまだ駅に到着していません。"}]},"i'm":{word:"I'm",pos:"短縮形",posKey:"contraction",meanings:["I am の短縮形（私は〜です）"],forms:{主語:"I",be動詞:"am"},examples:[{en:"I'm a junior high school student.",ja:"私は中学生です。"}]},"you're":{word:"you're",pos:"短縮形",posKey:"contraction",meanings:["you are の短縮形（あなたは〜です、あなたたちは〜です）"],forms:{主語:"you",be動詞:"are"},examples:[{en:"You're very kind.",ja:"あなたはとても親切ですね。"}]},"he's":{word:"he's",pos:"短縮形",posKey:"contraction",meanings:["he is / he has の短縮形（彼は〜です）"],forms:{主語:"he",be動詞:"is"},examples:[{en:"He's my older brother.",ja:"彼は私の兄です。"}]},"she's":{word:"she's",pos:"短縮形",posKey:"contraction",meanings:["she is / she has の短縮形（彼女は〜です）"],forms:{主語:"she",be動詞:"is"},examples:[{en:"She's good at tennis.",ja:"彼女はテニスが得意です。"}]},"it's":{word:"it's",pos:"短縮形",posKey:"contraction",meanings:["it is / it has の短縮形（それは〜です）"],forms:{主語:"it",be動詞:"is"},detail:"アポストロフィ付きの it's は it is の短縮形です（所有格 its「それの」と区別しましょう）。",examples:[{en:"It's sunny today.",ja:"今日は晴れです。"}]},"we're":{word:"we're",pos:"短縮形",posKey:"contraction",meanings:["we are の短縮形（私たちは〜です）"],forms:{主語:"we",be動詞:"are"},examples:[{en:"We're in the same class.",ja:"私たちは同じクラスです。"}]},"they're":{word:"they're",pos:"短縮形",posKey:"contraction",meanings:["they are の短縮形（彼らは〜です、それらは〜です）"],forms:{主語:"they",be動詞:"are"},examples:[{en:"They're from Australia.",ja:"彼らはオーストラリア出身です。"}]},"that's":{word:"that's",pos:"短縮形",posKey:"contraction",meanings:["that is の短縮形（あれは〜です、それは〜です）"],forms:{指示代名詞:"that",be動詞:"is"},examples:[{en:"That's a great idea!",ja:"それは素晴らしい考えですね！"}]},"what's":{word:"what's",pos:"短縮形",posKey:"contraction",meanings:["what is の短縮形（何ですか）"],forms:{疑問詞:"what",be動詞:"is"},examples:[{en:"What's in your bag?",ja:"あなたのかばんの中には何が入っていますか。"}]},"there's":{word:"there's",pos:"短縮形",posKey:"contraction",meanings:["there is の短縮形（〜がある、〜がいる）"],forms:{語:"there",be動詞:"is"},examples:[{en:"There's a big park near my house.",ja:"私の家の近くに大きな公園があります。"}]},monday:{word:"Monday",pos:"名詞",posKey:"noun",meanings:["月曜日"],examples:[{en:"We have math on Monday.",ja:"私たちは月曜日に数学の授業があります。"}]},tuesday:{word:"Tuesday",pos:"名詞",posKey:"noun",meanings:["火曜日"],examples:[{en:"Our music club meets on Tuesday.",ja:"私たちの音楽部は火曜日に集まります。"}]},wednesday:{word:"Wednesday",pos:"名詞",posKey:"noun",meanings:["水曜日"],examples:[{en:"I go to the library every Wednesday.",ja:"私は毎週水曜日に図書館へ行きます。"}]},thursday:{word:"Thursday",pos:"名詞",posKey:"noun",meanings:["木曜日"],examples:[{en:"She plays basketball on Thursday.",ja:"彼女は木曜日にバスケットボールをします。"}]},friday:{word:"Friday",pos:"名詞",posKey:"noun",meanings:["金曜日"],examples:[{en:"Friday is my favorite day of the week.",ja:"金曜日は私の一番好きな曜日です。"}]},saturday:{word:"Saturday",pos:"名詞",posKey:"noun",meanings:["土曜日"],examples:[{en:"Do you have club practice on Saturday?",ja:"土曜日に部活の練習はありますか。"}]},sunday:{word:"Sunday",pos:"名詞",posKey:"noun",meanings:["日曜日"],examples:[{en:"My family often cooks dinner together on Sunday.",ja:"私の家族は日曜日に一緒に夕食を作ることがよくあります。"}]},lucky:{word:"lucky",pos:"形容詞",posKey:"adj",meanings:["幸運な、運がよい","ラッキー（ペットなどの名前としても使われる）"],forms:{名詞:"luck"},detail:"形容詞「幸運な」。大文字で Lucky と書かれている場合は、犬などの名前（固有名詞）として使われることもあります。",examples:[{en:"You are very lucky today!",ja:"あなたは今日とても運がいいですね！"}]},ms:{word:"Ms.",pos:"名詞",posKey:"noun",meanings:["〜さん、〜先生（女性に対する敬称）"],detail:"女性の名字の前に付ける敬称です（既婚・未婚を問わず使えます）。",examples:[{en:"Ms. Green is our English teacher.",ja:"グリーン先生は私たちの英語の先生です。"}]},mr:{word:"Mr.",pos:"名詞",posKey:"noun",meanings:["〜さん、〜先生（男性に対する敬称）"],detail:"男性の名字の前に付ける敬称です。",examples:[{en:"Mr. Brown teaches music at our school.",ja:"ブラウン先生は私たちの学校で音楽を教えています。"}]},mrs:{word:"Mrs.",pos:"名詞",posKey:"noun",meanings:["〜夫人、〜さん、〜先生（既婚女性に対する敬称）"],examples:[{en:"Mrs. White lives next door.",ja:"ホワイトさんは隣に住んでいます。"}]},mt:{word:"Mt.",pos:"名詞",posKey:"noun",meanings:["〜山（Mount の略）"],examples:[{en:"Mt. Fuji is famous around the world.",ja:"富士山は世界中で有名です。"}]},mio:{word:"Mio",pos:"固有名詞",posKey:"noun",meanings:["ミオ（人名）"],examples:[{en:"Mio can play the guitar very well.",ja:"ミオはとても上手にギターを弾くことができます。"}]},sora:{word:"Sora",pos:"固有名詞",posKey:"noun",meanings:["ソラ（人名）"],examples:[{en:"Sora is in the brass band club.",ja:"ソラは吹奏楽部に所属しています。"}]},haru:{word:"Haru",pos:"固有名詞",posKey:"noun",meanings:["ハル（人名）"],examples:[{en:"Haru likes reading books about space.",ja:"ハルは宇宙についての本を読むのが好きです。"}]},kenta:{word:"Kenta",pos:"固有名詞",posKey:"noun",meanings:["ケンタ（人名）"],examples:[{en:"Kenta plays soccer every day.",ja:"ケンタは毎日サッカーをします。"}]},yuna:{word:"Yuna",pos:"固有名詞",posKey:"noun",meanings:["ユナ（人名）"],examples:[{en:"Yuna is my classmate.",ja:"ユナは私のクラスメートです。"}]},green:{word:"green",pos:"形容詞",posKey:"adj",definitionsByPos:{adj:{posName:"形容詞",meanings:["緑色の、緑豊かな","環境にやさしい"]},noun:{posName:"名詞",meanings:["緑色","グリーン（人名：Ms. Green など）"]}},meanings:["緑色の、緑豊かな","緑色","グリーン（英語圏の姓）"],examples:[{en:"Green leaves use sunlight to make food.",ja:"緑の葉は日光を使って養分を作ります。"}]},dioxide:{word:"dioxide",pos:"名詞",posKey:"noun",meanings:["二酸化物（carbon dioxide で「二酸化炭素」）"],detail:"理科テーマの長文でよく登場する語です。carbon dioxide（二酸化炭素）の形で覚えましょう。",examples:[{en:"Plants take in carbon dioxide from the air.",ja:"植物は空気中から二酸化炭素を取り入れます。"}]},photosynthesis:{word:"photosynthesis",pos:"名詞",posKey:"noun",meanings:["光合成"],detail:"photo（光）＋ synthesis（合成）から成る理科の重要語彙です。植物が光のエネルギーを使ってデンプン（養分）と酸素を作る働きを指します。",examples:[{en:"This process is called photosynthesis.",ja:"この働きは光合成と呼ばれています。"}]},starch:{word:"starch",pos:"名詞",posKey:"noun",meanings:["デンプン（炭水化物の一種）"],detail:"植物が光合成によって葉の中で作り出す養分（デンプン）を指す理科頻出語です。",examples:[{en:"Starch is made in the green leaves of plants.",ja:"デンプンは植物の緑の葉の中で作られます。"}]},sunlight:{word:"sunlight",pos:"名詞",posKey:"noun",meanings:["日光、太陽の光"],forms:{太陽:"sun",光:"light"},examples:[{en:"Plants need water and sunlight.",ja:"植物は水と日光を必要とします。"}]},hi:{word:"hi",pos:"感嘆詞",posKey:"interj",meanings:["やあ、こんにちは（親しい相手へのあいさつ）"],examples:[{en:"Hi, Ken! How are you today?",ja:"やあ、ケン！今日は調子はどう？"}]},hey:{word:"hey",pos:"感嘆詞",posKey:"interj",meanings:["やあ、ねえ、おい（呼びかけや親しいあいさつ）"],examples:[{en:"Hey, look at that rainbow!",ja:"ねえ、あの虹を見て！"}]},bye:{word:"bye",pos:"感嘆詞",posKey:"interj",meanings:["じゃあね、さようなら（goodbye の親しい表現）"],examples:[{en:"Bye! See you tomorrow.",ja:"じゃあね！また明日。"}]},ok:{word:"OK",pos:"形容詞",posKey:"adj",meanings:["わかった、いいよ、大丈夫な"],examples:[{en:"Are you OK?",ja:"大丈夫ですか。"}]},okay:{word:"okay",pos:"形容詞",posKey:"adj",meanings:["わかった、よろしい、大丈夫な（OK と同じ）"],examples:[{en:"Okay, let's start!",ja:"よし、始めよう！"}]},yeah:{word:"yeah",pos:"感嘆詞",posKey:"interj",meanings:["うん、そうだよ（yes のくだけた会話表現）"],examples:[{en:"Yeah, that is a good idea.",ja:"うん、それはいい考えだね。"}]},however:{word:"however",pos:"副詞",posKey:"adv",meanings:["しかしながら、けれども、ところが"],detail:"長文読解で超頻出の「逆接」を表す語です。前後の内容が対比される目印になります！",examples:[{en:"It was cold. However, we enjoyed the game.",ja:"寒かったです。しかしながら、私たちは試合を楽しみました。"}]},therefore:{word:"therefore",pos:"副詞",posKey:"adv",meanings:["それゆえに、したがって、だから"],detail:"長文で「原因 → 結果・結論」を導く重要なつなぎ言葉です。",examples:[{en:"He worked hard, and therefore he passed the test.",ja:"彼は一生懸命努力し、したがってテストに合格しました。"}]},moreover:{word:"moreover",pos:"副詞",posKey:"adv",meanings:["さらに、そのうえ（追加・強調を表す）"],examples:[{en:"Cycling is fun. Moreover, it is good for our health.",ja:"サイクリングは楽しいです。そのうえ、健康にもよいです。"}]},perhaps:{word:"perhaps",pos:"副詞",posKey:"adv",meanings:["もしかすると、たぶん、おそらく"],examples:[{en:"Perhaps she knows the answer.",ja:"もしかすると彼女は答えを知っているかもしれません。"}]},sakura:{word:"Sakura",pos:"固有名詞",posKey:"noun",meanings:["さくら（学校名・地名・人名／桜）"],examples:[{en:"This is Sakura Junior High School.",ja:"こちらはさくら中学校です。"}]},dodgeball:{word:"dodgeball",pos:"名詞",posKey:"noun",meanings:["ドッジボール"],examples:[{en:"Many students enjoy dodgeball in the gym.",ja:"多くの生徒が体育館でドッジボールを楽しみます。"}]},badminton:{word:"badminton",pos:"名詞",posKey:"noun",meanings:["バドミントン"],examples:[{en:"She is in the badminton club.",ja:"彼女はバドミントン部に所属しています。"}]},softball:{word:"softball",pos:"名詞",posKey:"noun",meanings:["ソフトボール"],examples:[{en:"They practice softball on the school ground.",ja:"彼女たちは校庭でソフトボールの練習をします。"}]},chorus:{word:"chorus",pos:"名詞",posKey:"noun",meanings:["合唱、コーラス（chorus club で「合唱部」）"],examples:[{en:"Our class practiced hard for the chorus contest.",ja:"私たちのクラスは合唱コンクールのために一生懸命練習しました。"}]},natto:{word:"natto",pos:"名詞",posKey:"noun",meanings:["納豆（大豆を発酵させた日本の伝統食品）"],examples:[{en:"Many people in Japan eat natto with rice for breakfast.",ja:"日本では多くの人が朝食にご飯と一緒に納豆を食べます。"}]},fungus:{word:"fungus",pos:"名詞",posKey:"noun",meanings:["菌類、カビ・キノコ類（複数形は fungi）"],examples:[{en:"Mushrooms belong to a large group of living things.",ja:"キノコは大きな生物グループに属しています。"}]},fungi:{word:"fungi",pos:"名詞",posKey:"noun",baseWord:"fungus",meanings:["菌類、カビ・キノコ類（fungus の複数形）"],detail:"理科（生物分野）で「分解者」や「発酵」を学ぶ際に登場する重要語です。",examples:[{en:"Some fungi help us make traditional Japanese foods.",ja:"菌類の中には日本の伝統食品を作るのを助けてくれるものもあります。"}]},koji:{word:"koji",pos:"名詞",posKey:"noun",meanings:["麹（こうじ）、麹菌"],detail:"味噌・醤油・酢・日本酒など、日本の伝統的な発酵食品に欠かせない微生物です。",examples:[{en:"Koji is used to make miso and soy sauce.",ja:"麹は味噌や醤油を作るために使われます。"}]},microorganism:{word:"microorganism",pos:"名詞",posKey:"noun",meanings:["微生物（細菌や菌類など、顕微鏡で見る小さな生物）"],detail:"micro（極小の）＋ organism（生物）から成る語です。",examples:[{en:"A microorganism is too small to see with our eyes.",ja:"微生物は小さすぎて肉眼で見ることはできません。"}]},movable:{word:"movable",pos:"形容詞",posKey:"adj",forms:{動詞:"move"},meanings:["動かせる、可動式の（movable type で「活字・活版印刷」）"],detail:"世界史（ルネサンス期）の「グーテンベルクの活版印刷術（movable type printing）」で頻出の表現です。",examples:[{en:"Books spread quickly thanks to movable type.",ja:"活版印刷のおかげで本は急速に広まりました。"}]},reformation:{word:"Reformation",pos:"名詞",posKey:"noun",meanings:["宗教改革（the Reformation：16世紀ヨーロッパのキリスト教改革運動）","改革、刷新"],detail:"1517年にドイツのルターらが始め、活版印刷によってヨーロッパ中に広がった歴史上の大出来事です。",examples:[{en:"Printing technology helped the Reformation spread across Europe.",ja:"印刷技術は宗教改革がヨーロッパ中に広がるのを助けました。"}]},dozen:{word:"dozen",pos:"名詞",posKey:"noun",meanings:["1ダース（12個・12人）","（dozens of 〜 で）何十もの〜、多数の〜"],examples:[{en:"She bought a dozen eggs at the supermarket.",ja:"彼女はスーパーで卵を1ダース（12個）買いました。"}]},tectonic:{word:"tectonic",pos:"形容詞",posKey:"adj",meanings:["地殻構造の（tectonic plate で「地球の表面を覆うプレート・岩盤」）"],detail:"理科（地学：地震・火山）の重要語。日本列島は4つのプレート（tectonic plates）の境界に位置しています。",examples:[{en:"Japan lies where four tectonic plates meet.",ja:"日本は4つのプレートがぶつかり合う場所に位置しています。"}]},oceanic:{word:"oceanic",pos:"形容詞",posKey:"adj",forms:{名詞:"ocean"},meanings:["海洋の（oceanic plate で「海洋プレート」）"],examples:[{en:"An oceanic plate sinks under a continental plate.",ja:"海洋プレートは大陸プレートの下に沈み込みます。"}]},continental:{word:"continental",pos:"形容詞",posKey:"adj",forms:{名詞:"continent"},meanings:["大陸の（continental plate で「大陸プレート」）"],examples:[{en:"The city has a dry continental climate.",ja:"その都市は乾燥した大陸性の気候です。"}]},damper:{word:"damper",pos:"名詞",posKey:"noun",meanings:["制震ダンパー、振動や衝撃を吸収する装置"],examples:[{en:"Modern tall buildings have special dampers inside them.",ja:"現代の高い建物は内部に特別な制震ダンパーを備えています。"}]},iceland:{word:"Iceland",pos:"固有名詞",posKey:"noun",meanings:["アイスランド（北大西洋の島国。火山が多く地熱・水力発電が盛ん）"],examples:[{en:"Iceland uses clean energy from volcanoes and rivers.",ja:"アイスランドは火山や川からのクリーンなエネルギーを利用しています。"}]},hydro:{word:"hydro",pos:"名詞",posKey:"noun",meanings:["水力発電、水力の（hydroelectric power の略）"],detail:"「水（water）」を表す語根で、グラフや資料では「水力発電（Hydro）」の意味でよく使われます。",examples:[{en:"Hydro power uses the force of falling water.",ja:"水力発電は落ちる水の力を利用します。"}]},magma:{word:"magma",pos:"名詞",posKey:"noun",meanings:["マグマ（地下にある高温で溶けた岩石物質）"],detail:"理科（地学）の重要語。地下にあるときは magma（マグマ）、地表に流れ出ると lava（溶岩）と呼ばれます。",examples:[{en:"Underground water is heated by hot magma.",ja:"地下水は高温のマグマによって温められます。"}]},meanwhile:{word:"meanwhile",pos:"副詞",posKey:"adv",meanings:["一方で、その間に（場面の切り替えや対比を表す）"],detail:"長文読解で2つの国や事例を比較するときによく使われる重要なつなぎ言葉です。",examples:[{en:"I cooked rice. Meanwhile, my sister made soup.",ja:"私はご飯を炊きました。その間に、姉はスープを作りました。"}]},denmark:{word:"Denmark",pos:"固有名詞",posKey:"noun",meanings:["デンマーク（北ヨーロッパの国。風力発電や環境政策の先進国）"],examples:[{en:"Denmark produces a lot of electricity from wind power.",ja:"デンマークは風力発電から多くの電力を生み出しています。"}]},westerly:{word:"westerly",pos:"形容詞",posKey:"adj",forms:{名詞:"west"},meanings:["西からの、西寄りの（westerly winds で「偏西風」）"],detail:"地理・理科で超重要！中緯度帯で一年中ほぼ西から東へ吹く風を「偏西風（westerly winds）」と呼びます。",examples:[{en:"Strong westerly winds blow across Europe.",ja:"強い偏西風がヨーロッパを吹き抜けます。"}]},stably:{word:"stably",pos:"副詞",posKey:"adv",forms:{形容詞:"stable"},meanings:["安定して、着実に"],examples:[{en:"The wind blows stably throughout the year.",ja:"風は一年を通して安定して吹きます。"}]},fairtrade:{word:"Fairtrade",pos:"名詞",posKey:"noun",meanings:["フェアトレード（公正な貿易：途上国の生産者を守る取引の仕組み）"],detail:"公民・国際理解の重要テーマ。カカオやコーヒーなどの生産者に適正な価格を支払い、児童労働の防止や自立を支援します。",examples:[{en:"This chocolate has a Fairtrade mark on its package.",ja:"このチョコレートの包みにはフェアトレードのマークが付いています。"}]},cacao:{word:"cacao",pos:"名詞",posKey:"noun",meanings:["カカオ（チョコレートの原料となる熱帯の植物・豆）"],examples:[{en:"Cacao beans are grown in warm countries near the equator.",ja:"カカオ豆は赤道近くの暖かい国々で栽培されています。"}]},haruto:{word:"Haruto",pos:"固有名詞",posKey:"noun",meanings:["ハルト（人名）"],examples:[{en:"Haruto wants to study space science in the future.",ja:"ハルトは将来、宇宙科学を学びたいと思っています。"}]},kibo:{word:"Kibo",pos:"固有名詞",posKey:"noun",meanings:["「きぼう」（国際宇宙ステーションにある日本の実験棟）"],examples:[{en:"Astronauts do science experiments inside Kibo.",ja:"宇宙飛行士たちは「きぼう」の中で科学実験を行います。"}]},module:{word:"module",pos:"名詞",posKey:"noun",meanings:["モジュール、（宇宙ステーションなどの）実験棟・独立区画、部品単位"],examples:[{en:"Kibo is the largest module on the space station.",ja:"「きぼう」は宇宙ステーションで最大の実験棟です。"}]},mei:{word:"Mei",pos:"固有名詞",posKey:"noun",meanings:["メイ（人名）"],examples:[{en:"Mei helped make disaster maps for foreign residents.",ja:"メイは外国人住民のための防災マップ作りを手伝いました。"}]},pictogram:{word:"pictogram",pos:"名詞",posKey:"noun",meanings:["ピクトグラム、絵文字・絵記号（非常口マークなど直感的に意味を表す記号）"],detail:"1964年の東京オリンピックをきっかけに世界へ広まった、言葉の壁を越えるユニバーサルデザインの一つです。",examples:[{en:"Anyone can understand this pictogram at a glance.",ja:"誰でもひと目でこのピクトグラムを理解できます。"}]},furigana:{word:"furigana",pos:"名詞",posKey:"noun",meanings:["ふりがな（漢字に添える読み仮名）"],examples:[{en:"Adding furigana helps children and foreigners read kanji.",ja:"ふりがなを付けることは、子どもや外国人が漢字を読む助けになります。"}]},riku:{word:"Riku",pos:"固有名詞",posKey:"noun",meanings:["リク（人名）"],examples:[{en:"Riku visited Nara on his school trip.",ja:"リクは修学旅行で奈良を訪れました。"}]},todai:{word:"Todai",pos:"固有名詞",posKey:"noun",meanings:["東大（Todai-ji で奈良の「東大寺」）"],detail:"奈良時代に聖武天皇の命によって建てられた大仏で有名なお寺（Todai-ji）です。",examples:[{en:"We saw the Great Buddha at Todai-ji in Nara.",ja:"私たちは奈良の東大寺で大仏を見ました。"}]},ji:{word:"-ji",pos:"名詞",posKey:"noun",meanings:["〜寺（Todai-ji「東大寺」、Horyu-ji「法隆寺」など日本の寺院を表す語）"],examples:[{en:"Horyu-ji is famous for its old wooden buildings.",ja:"法隆寺は古い木造建築で有名です。"}]},shosoin:{word:"Shosoin",pos:"固有名詞",posKey:"noun",meanings:["正倉院（奈良・東大寺にある宝物庫。シルクロードゆかりの品を収蔵）"],detail:"日本史（天平文化）の重要語。シルクロードを通って西アジアや唐から伝わった楽器やガラス器などが保管されています。",examples:[{en:"Many treasures from the Silk Road are kept in the Shosoin.",ja:"シルクロードからの多くの宝物が正倉院に保管されています。"}]},eurasia:{word:"Eurasia",pos:"固有名詞",posKey:"noun",meanings:["ユーラシア（ヨーロッパとアジアを合わせた世界最大の大陸）"],examples:[{en:"The Silk Road connected cities across Eurasia.",ja:"シルクロードはユーラシア大陸各地の都市を結びました。"}]},lute:{word:"lute",pos:"名詞",posKey:"noun",meanings:["リュート、琵琶（びわ）などの弦楽器"],examples:[{en:"This five-stringed lute came from West Asia.",ja:"この五弦の琵琶（リュート）は西アジアから伝わりました。"}]},storehouse:{word:"storehouse",pos:"名詞",posKey:"noun",forms:{"動詞・名詞":"store",家:"house"},meanings:["倉庫、宝物庫、蔵"],examples:[{en:"The wooden storehouse has protected treasures for centuries.",ja:"その木造の宝物庫は何世紀もの間、宝物を守ってきました。"}]},aoi:{word:"Aoi",pos:"固有名詞",posKey:"noun",meanings:["アオイ（人名）"],examples:[{en:"Aoi joined a marine science event last weekend.",ja:"アオイは先週末、海洋科学のイベントに参加しました。"}]},eelgrass:{word:"eelgrass",pos:"名詞",posKey:"noun",meanings:["アマモ（浅い砂地の海底に群生する海草。「海のゆりかご」）"],detail:"小魚の隠れ家になるだけでなく、海中で二酸化炭素を吸収・貯留する「ブルーカーボン（blue carbon）」としても注目されています。",examples:[{en:"Small fish grow safely in eelgrass beds.",ja:"小さな魚たちはアマモ場の中で安全に育ちます。"}]},seafloor:{word:"seafloor",pos:"名詞",posKey:"noun",forms:{海:"sea","床・底":"floor"},meanings:["海底（海の底）"],examples:[{en:"Eelgrass roots hold the sand on the seafloor.",ja:"アマモの根は海底の砂をしっかり押さえます。"}]},ecosystem:{word:"ecosystem",pos:"名詞",posKey:"noun",meanings:["生態系（生物どうしや自然環境が支え合うつながり）"],detail:"理科・環境テーマの長文で最頻出の重要語彙です。",examples:[{en:"Protecting forests is important for the whole ecosystem.",ja:"森林を守ることは生態系全体にとって重要です。"}]},squid:{word:"squid",pos:"名詞",posKey:"noun",meanings:["イカ"],examples:[{en:"Squid lay their eggs on sea plants.",ja:"イカは海草に卵を産みつけます。"}]},fisher:{word:"fisher",pos:"名詞",posKey:"noun",forms:{"動詞・名詞":"fish"},meanings:["漁師、漁業に携わる人（性別を問わない表現）"],examples:[{en:"Local fishers work with students to replant eelgrass.",ja:"地元の漁師たちは生徒と協力してアマモを植え直しています。"}]},daiki:{word:"Daiki",pos:"固有名詞",posKey:"noun",meanings:["ダイキ（人名）"],examples:[{en:"Daiki talked online with students in Australia.",ja:"ダイキはオーストラリアの生徒たちとオンラインで話しました。"}]},sydney:{word:"Sydney",pos:"固有名詞",posKey:"noun",meanings:["シドニー（オーストラリア南東部の都市。南半球に位置する）"],detail:"地理のポイント：日本（東経135度）と経度が近いため時差は1〜2時間と小さいですが、南半球にあるため季節が正反対になります。",examples:[{en:"When it is winter in Tokyo, it is summer in Sydney.",ja:"東京が冬のとき、シドニーは夏です。"}]},liquefied:{word:"liquefied",pos:"形容詞",posKey:"adj",meanings:["液化された（liquefied natural gas で「液化天然ガス（LNG）」）"],examples:[{en:"Japan imports liquefied natural gas by ship.",ja:"日本は船で液化天然ガスを輸入しています。"}]},self:{word:"self",pos:"名詞",posKey:"noun",meanings:["自己、自分自身（self-sufficiency で「自給率・自給自足」）"],examples:[{en:"Japan is working to raise its energy self-sufficiency.",ja:"日本はエネルギー自給率を高めるために取り組んでいます。"}]},sufficiency:{word:"sufficiency",pos:"名詞",posKey:"noun",forms:{形容詞:"sufficient"},meanings:["十分であること、自給（self-sufficiency で「自給・自給率」）"],examples:[{en:"Food self-sufficiency is an important topic in social studies.",ja:"食料自給率は社会科における重要なテーマです。"}]},biomass:{word:"biomass",pos:"名詞",posKey:"noun",meanings:["バイオマス（木くずや家畜の排せつ物など、生物資源から得る再生可能エネルギー）"],examples:[{en:"Biomass energy can be made from wood waste.",ja:"バイオマスエネルギーは木材の廃材から作ることができます。"}]},lng:{word:"LNG",pos:"名詞",posKey:"noun",meanings:["LNG（液化天然ガス：Liquefied Natural Gas の略）"],detail:"天然ガスをマイナス162℃以下に冷やして液体にし、船で大量に運べるようにした火力発電の主要な燃料です。",examples:[{en:"LNG produces less carbon dioxide than coal when burned.",ja:"LNGは燃やしたときに石炭よりも二酸化炭素の排出が少なくなります。"}]},breakdown:{word:"breakdown",pos:"名詞",posKey:"noun",meanings:["内訳（うちわけ）、分類、分解"],detail:"円グラフや帯グラフのタイトルで「Breakdown of 〜（〜の内訳・構成比）」として頻出する語です！",examples:[{en:"This pie chart shows the breakdown of electricity sources.",ja:"この円グラフは電源（発電方法）の内訳を示しています。"}]},refer:{word:"refer",pos:"動詞",posKey:"verb",meanings:["（refer to 〜 で）〜を指す、〜に言及する、〜を参照する"],detail:"長文読解の用語説明で「A refers to B（AとはBのことを指す）」という形で非常によく登場します。",examples:[{en:"This term refers to energy from nature.",ja:"この用語は自然から得られるエネルギーを指します。"}]},basis:{word:"basis",pos:"名詞",posKey:"noun",forms:{"名詞・動詞":"base",形容詞:"basic"},meanings:["基準、基礎、根拠（on a daily basis で「毎日の基準で・日常的に」）"],examples:[{en:"Food self-sufficiency is often measured on a calorie basis.",ja:"食料自給率はカロリーベース（熱量基準）で測られることがよくあります。"}]},seventeen:{word:"seventeen",pos:"名詞",posKey:"noun",meanings:["17（十七）"],examples:[{en:"There are seventeen goals in the SDGs.",ja:"SDGsには17の目標があります。"}]},removal:{word:"removal",pos:"名詞",posKey:"noun",forms:{動詞:"remove"},meanings:["撤去、除去、取り除くこと"],examples:[{en:"The removal of steps made the station easier to use.",ja:"段差の撤去によって、その駅はより使いやすくなりました。"}]},reddish:{word:"reddish",pos:"形容詞",posKey:"adj",forms:{"名詞・形容詞":"red"},meanings:["赤みがかった、赤っぽい（-ish は「〜っぽい」を表す接尾辞）"],examples:[{en:"Mars looks like a reddish star in the night sky.",ja:"火星は夜空で赤みがかった星のように見えます。"}]},moderate:{word:"moderate",pos:"形容詞",posKey:"adj",meanings:["穏やかな、適度な、（気温などが）温暖で極端でない"],examples:[{en:"Earth keeps a moderate temperature thanks to its atmosphere.",ja:"地球は大気のおかげで穏やかな気温を保っています。"}]},comparison:{word:"comparison",pos:"名詞",posKey:"noun",forms:{動詞:"compare"},meanings:["比較、対比"],detail:"表やグラフのタイトルで「Comparison of A and B（AとBの比較）」として頻出します。",examples:[{en:"This table shows a comparison of three planets.",ja:"この表は3つの惑星の比較を示しています。"}]},percentage:{word:"percentage",pos:"名詞",posKey:"noun",forms:{単位:"percent"},meanings:["割合、パーセンテージ、百分率"],examples:[{en:"The percentage of renewable energy is rising.",ja:"再生可能エネルギーの割合は上昇しています。"}]},sub:{word:"Sub-",pos:"形容詞",posKey:"adj",meanings:["〜の下の、〜以南の、副〜（Sub-Saharan Africa で「サハラ砂漠以南のアフリカ」）"],examples:[{en:"Many countries in Sub-Saharan Africa have young populations.",ja:"サハラ砂漠以南のアフリカの多くの国々は若い人口を抱えています。"}]},saharan:{word:"Saharan",pos:"形容詞",posKey:"adj",meanings:["サハラ砂漠の（Sub-Saharan で「サハラ砂漠以南の」）"],examples:[{en:"Clean water projects are expanding in Sub-Saharan regions.",ja:"安全な水のプロジェクトがサハラ以南の地域で広がっています。"}]},ngo:{word:"NGO",pos:"名詞",posKey:"noun",meanings:["NGO（非政府組織：Non-Governmental Organization の略）"],detail:"公民の重要語！政府とは独立した民間の立場で、環境保護・貧困解決・医療支援などの国際協力を行う団体です。",examples:[{en:"Many NGOs build wells and schools in developing countries.",ja:"多くのNGOが開発途上国で井戸や学校を建設しています。"}]},southeast:{word:"Southeast",pos:"名詞",posKey:"noun",forms:{南:"south",東:"east"},meanings:["南東、南東部（Southeast Asia で「東南アジア」）"],examples:[{en:"Rice is the main crop in Southeast Asia.",ja:"東南アジアでは米が主要な農作物です。"}]},sdgs:{word:"SDGs",pos:"名詞",posKey:"noun",meanings:["SDGs（持続可能な開発目標：Sustainable Development Goals）"],detail:"2015年に国連で採択された、2030年までに達成すべき17の国際目標です。",examples:[{en:"Safe drinking water is Goal 6 of the SDGs.",ja:"安全な飲み水はSDGsの目標6です。"}]},waterborne:{word:"waterborne",pos:"形容詞",posKey:"adj",meanings:["水を媒介とする、水で運ばれる（waterborne disease で「水系感染症」）"],examples:[{en:"Clean wells help prevent waterborne diseases.",ja:"清潔な井戸は水を媒介とする病気を防ぐのに役立ちます。"}]},landform:{word:"landform",pos:"名詞",posKey:"noun",forms:{陸地:"land",形:"form"},meanings:["地形（山脈・盆地・扇状地・海岸などの土地の形状）"],examples:[{en:"Rivers and volcanoes create unique landforms.",ja:"川や火山は独特の地形を作り出します。"}]},horyu:{word:"Horyu",pos:"固有名詞",posKey:"noun",meanings:["法隆（Horyu-ji で奈良県の「法隆寺」）"],detail:"7世紀に聖徳太子ゆかりの寺として建てられ、世界最古の木造建築群として1993年に日本で初めて世界文化遺産に登録されました。",examples:[{en:"Horyu-ji was registered as a World Heritage site in 1993.",ja:"法隆寺は1993年に世界遺産に登録されました。"}]},hyogo:{word:"Hyogo",pos:"固有名詞",posKey:"noun",meanings:["兵庫県（近畿地方の県。世界遺産の姫路城などがある）"],examples:[{en:"Himeji Castle is located in Hyogo Prefecture.",ja:"姫路城は兵庫県に位置しています。"}]},nickname:{word:"nickname",pos:"名詞",posKey:"noun",definitionsByPos:{noun:{posName:"名詞",meanings:["あだ名、愛称、通称"]},verb:{posName:"動詞",meanings:["〜に愛称をつける（be nicknamed 〜 で「〜という愛称で呼ばれる」）"]}},meanings:["あだ名、愛称","〜に愛称をつける"],examples:[{en:"The castle has a beautiful nickname.",ja:"その城には美しい愛称があります。"}]},nicknamed:{word:"nicknamed",pos:"動詞",posKey:"verb",baseWord:"nickname",meanings:["〜という愛称がつけられた（nickname の過去形・過去分詞）"],examples:[{en:"Himeji Castle is nicknamed White Heron Castle.",ja:"姫路城は「白鷺城（しらさぎじょう）」という愛称で呼ばれています。"}]},heron:{word:"heron",pos:"名詞",posKey:"noun",meanings:["サギ（水辺にすむ首と足の長い鳥。White Heron で「白鷺（しらさぎ）」）"],examples:[{en:"A white heron stood quietly in the shallow river.",ja:"1羽の白鷺が浅い川の中に静かに立っていました。"}]},nurture:{word:"nurture",pos:"動詞",posKey:"verb",meanings:["〜を育む（はぐくむ）、育てる、養う"],examples:[{en:"Rich forests nurture many kinds of animals and plants.",ja:"豊かな森は多くの種類の動植物を育みます。"}]},shirakawa:{word:"Shirakawa",pos:"固有名詞",posKey:"noun",meanings:["白川（Shirakawa-go で岐阜県の「白川郷」）"],examples:[{en:"Shirakawa-go is famous for its steep thatched roofs.",ja:"白川郷は急勾配の茅葺き屋根で有名です。"}]},gokayama:{word:"Gokayama",pos:"固有名詞",posKey:"noun",meanings:["五箇山（ごかやま：富山県南西部にある合掌造り集落の世界遺産）"],examples:[{en:"Shirakawa-go and Gokayama are located in heavy snowfall areas.",ja:"白川郷と五箇山は豪雪地帯に位置しています。"}]},gifu:{word:"Gifu",pos:"固有名詞",posKey:"noun",meanings:["岐阜県（中部地方の内陸にある県）"],examples:[{en:"Clear rivers flow through the mountains of Gifu.",ja:"澄んだ川が岐阜県の山々を流れています。"}]},toyama:{word:"Toyama",pos:"固有名詞",posKey:"noun",meanings:["富山県（中部・北陸地方の日本海側にある県）"],examples:[{en:"Toyama faces the Sea of Japan.",ja:"富山県は日本海に面しています。"}]},thatched:{word:"thatched",pos:"形容詞",posKey:"adj",meanings:["茅葺き（かやぶき）の、わら葺きの（thatched roof で「茅葺き屋根」）"],examples:[{en:"Villagers work together to replace old thatched roofs.",ja:"村人たちは協力して古い茅葺き屋根を葺き替えます。"}]},gassho:{word:"gassho",pos:"名詞",posKey:"noun",meanings:["合掌（gassho-zukuri で「合掌造り」）"],detail:"手を合わせた形（合掌）に似た急な傾きの屋根を持つ建築様式で、重い雪が自然に滑り落ちる工夫になっています。",examples:[{en:"Traditional gassho-zukuri houses are built without nails.",ja:"伝統的な合掌造りの家々は釘を使わずに建てられています。"}]},zukuri:{word:"-zukuri",pos:"名詞",posKey:"noun",meanings:["〜造り（shinden-zukuri、gassho-zukuri など日本の建築様式を表す語）"],examples:[{en:"Gassho-zukuri roofs are designed for deep snow.",ja:"合掌造りの屋根は深い雪に耐えるよう設計されています。"}]},overtourism:{word:"overtourism",pos:"名詞",posKey:"noun",forms:{超過:"over",観光:"tourism"},meanings:["オーバーツーリズム（観光公害：観光客の集中で地域生活や環境に負荷がかかる問題）"],detail:"近年の高校入試（英語長文・社会科時事問題）で非常に注目されている現代テーマ語彙です！",examples:[{en:"Some historic towns face problems caused by overtourism.",ja:"いくつかの歴史的な町はオーバーツーリズムによる問題に直面しています。"}]},shirakami:{word:"Shirakami",pos:"固有名詞",posKey:"noun",meanings:["白神（Shirakami-Sanchi で青森県・秋田県にまたがる「白神山地」）"],detail:"1993年に屋久島とともに日本で初めて登録された世界自然遺産で、広大なブナの原生林が残っています。",examples:[{en:"Shirakami-Sanchi has untouched beech forests.",ja:"白神山地には手つかずのブナの原生林があります。"}]},sanchi:{word:"-Sanchi",pos:"名詞",posKey:"noun",meanings:["〜山地（Shirakami-Sanchi「白神山地」など）"],examples:[{en:"Shirakami-Sanchi is a natural World Heritage site.",ja:"白神山地は世界自然遺産です。"}]},akita:{word:"Akita",pos:"固有名詞",posKey:"noun",meanings:["秋田県（東北地方の日本海側にある県）"],examples:[{en:"Shirakami-Sanchi lies between Aomori and Akita.",ja:"白神山地は青森県と秋田県にまたがっています。"}]},jomon:{word:"Jomon",pos:"固有名詞",posKey:"noun",meanings:["縄文（Jomon period「縄文時代」、Jomon Sugi「屋久島の縄文杉」）"],examples:[{en:"Jomon Sugi is a very old cedar tree on Yakushima Island.",ja:"縄文杉は屋久島にある非常に古いスギの木です。"}]},sugi:{word:"Sugi",pos:"名詞",posKey:"noun",meanings:["杉（スギ：日本固有の代表的な針葉樹）"],examples:[{en:"Many hikers walk for hours to see Jomon Sugi.",ja:"多くの登山者が縄文杉を見るために何時間も歩きます。"}]},equator:{word:"equator",pos:"名詞",posKey:"noun",meanings:["赤道（地球を北半球と南半球に分ける緯度0度の線）"],examples:[{en:"Countries near the equator are hot all year round.",ja:"赤道近くの国々は一年中暑いです。"}]},buddha:{word:"Buddha",pos:"固有名詞",posKey:"noun",meanings:["仏陀（ぶっだ・釈迦）、仏像（the Great Buddha で「大仏」）"],examples:[{en:"The Great Buddha in Nara is very famous.",ja:"奈良の大仏はとても有名です。"}]},replant:{word:"replant",pos:"動詞",posKey:"verb",forms:{元の動詞:"plant"},meanings:["〜を植え直す、再び植える（re- は「再び」を表す接頭辞）"],examples:[{en:"Volunteers helped replant trees on the mountain.",ja:"ボランティアの人々が山に木を植え直すのを手伝いました。"}]},naha:{word:"Naha",pos:"固有名詞",posKey:"noun",meanings:["那覇（なは：沖縄県の県庁所在地）"],examples:[{en:"Naha is warm even in January.",ja:"那覇は1月でも温暖です。"}]},basin:{word:"basin",pos:"名詞",posKey:"noun",meanings:["流域（basin area で「川の流域面積」）、盆地"],detail:"日本の地理の重要知識：長さが日本一の川は信濃川（Shinano River）、流域面積（basin area）が日本一の川は利根川（Tone River）です。",examples:[{en:"The Tone River has the largest basin area in Japan.",ja:"利根川は日本で最も広い流域面積を持っています。"}]},tone:{word:"tone",pos:"名詞",posKey:"noun",meanings:["音色、口調、トーン","利根（Tone River で関東平野を流れる「利根川」）"],examples:[{en:"The Tone River flows into the Pacific Ocean.",ja:"利根川は太平洋に注ぎます。"}]},washi:{word:"washi",pos:"名詞",posKey:"noun",meanings:["和紙（日本の伝統的な手すきの紙）"],detail:"植物の長い繊維を使って作られる丈夫で長持ちする日本の紙で、ユネスコ無形文化遺産にも登録されています。",examples:[{en:"Traditional washi has lasted for hundreds of years.",ja:"伝統的な和紙は何百年もの間、残ってきました。"}]},ibis:{word:"ibis",pos:"名詞",posKey:"noun",meanings:["トキ（crested ibis：日本の特別天然記念物の鳥）"],examples:[{en:"The crested ibis has returned to the sky of Sado Island.",ja:"トキは佐渡島の空に戻ってきました。"}]},sado:{word:"Sado",pos:"固有名詞",posKey:"noun",meanings:["佐渡（新潟県沖の日本海にある「佐渡島（Sado Island）」）"],detail:"トキの野生復帰の取り組みや、世界文化遺産「佐渡島の金山」で知られる島です。",examples:[{en:"Farmers on Sado Island grow rice with less chemical use.",ja:"佐渡島の農家は化学物質を減らして米を育てています。"}]},hayabusa:{word:"Hayabusa",pos:"固有名詞",posKey:"noun",meanings:["「はやぶさ」（日本の小惑星探査機シリーズ）"],examples:[{en:"Hayabusa brought small rocks back from space.",ja:"「はやぶさ」は宇宙から小さな岩石を持ち帰りました。"}]},amino:{word:"amino",pos:"形容詞",posKey:"adj",meanings:["アミノの（amino acid で「アミノ酸」：タンパク質をつくる基本成分）"],detail:"理科（生物・消化と吸収）の重要語！食物中のタンパク質（protein）は消化酵素によってアミノ酸（amino acids）に分解されます。",examples:[{en:"Scientists found amino acids in the space rocks.",ja:"科学者たちはその宇宙の岩石からアミノ酸を発見しました。"}]},gion:{word:"Gion",pos:"固有名詞",posKey:"noun",meanings:["祇園（京都の地名。Gion Festival で日本三大祭りの一つ「祇園祭」）"],examples:[{en:"The Gion Festival has continued in Kyoto since the ninth century.",ja:"祇園祭は9世紀から京都で続いてきました。"}]},jenner:{word:"Jenner",pos:"固有名詞",posKey:"noun",meanings:["ジェンナー（天然痘の予防接種＝種痘法を開発したイギリスの医師）"],examples:[{en:"Jenner saved many lives with the first vaccine.",ja:"ジェンナーは最初のワクチンによって多くの命を救いました。"}]},pasteur:{word:"Pasteur",pos:"固有名詞",posKey:"noun",meanings:["パスツール（微生物と発酵・感染症の関係を解明したフランスの科学者）"],examples:[{en:"Pasteur studied tiny living things in milk and wine.",ja:"パスツールは牛乳やワインの中の小さな生物を研究しました。"}]},kitasato:{word:"Kitasato",pos:"固有名詞",posKey:"noun",meanings:["北里柴三郎（破傷風の血清療法を確立した日本の近代医学の父）"],detail:"2024年発行の新千円札の肖像としても知られる日本の細菌学者です。",examples:[{en:"Kitasato developed serum therapy to treat serious diseases.",ja:"北里柴三郎は重い病気を治療するための血清療法を開発しました。"}]},serum:{word:"serum",pos:"名詞",posKey:"noun",meanings:["血清（serum therapy で「血清療法」）"],examples:[{en:"This medical serum has saved millions of patients.",ja:"この医療用血清は何百万人もの患者を救ってきました。"}]},resistant:{word:"resistant",pos:"形容詞",posKey:"adj",forms:{動詞:"resist"},meanings:["耐性のある、強い、抵抗力のある（water-resistant「耐水性の」、drug-resistant「薬剤耐性の」）"],examples:[{en:"Some crops are resistant to dry weather.",ja:"農作物の中には乾燥した天候に強いものもあります。"}]},reuse:{word:"reuse",pos:"動詞",posKey:"verb",definitionsByPos:{verb:{posName:"動詞",meanings:["〜を再利用する、繰り返し使う"]},noun:{posName:"名詞",meanings:["リユース、再使用（3Rの一つ）"]}},meanings:["〜を再利用する、繰り返し使う","リユース、再使用"],examples:[{en:"We can clean glass bottles and reuse them.",ja:"私たちはガラスびんを洗って再利用することができます。"}]},upcycling:{word:"upcycling",pos:"名詞",posKey:"noun",meanings:["アップサイクル（不要品に新しいデザインや高い価値を加えて別製品に生まれ変わらせること）"],detail:"単なる原料への再生（リサイクル）より一歩進んだ循環型社会（サーキュラーエコノミー）のキーワードです。",examples:[{en:"Making bags from old banners is a great example of upcycling.",ja:"古い横断幕からバッグを作ることはアップサイクルの素晴らしい例です。"}]},braille:{word:"Braille",pos:"名詞",posKey:"noun",meanings:["点字（目の不自由な人が指先で読む文字システム）"],detail:"19世紀フランスのルイ・ブライユ（Louis Braille）が考案した6点式の点字が世界中で使われています。",examples:[{en:"Station ticket machines have Braille labels for everyone.",ja:"駅の券売機には誰もが使えるよう点字表示が付いています。"}]},shrimp:{word:"shrimp",pos:"名詞",posKey:"noun",meanings:["エビ（小エビ・クルマエビ類）"],examples:[{en:"Many shrimp farms were built along tropical coasts.",ja:"熱帯の海岸沿いに多くのエビ養殖場が作られました。"}]},microplastic:{word:"microplastic",pos:"名詞",posKey:"noun",meanings:["マイクロプラスチック（直径5ミリメートル以下の微細なプラスチック片）"],detail:"紫外線や波の力で細かくなったプラスチック片で、海洋生物や生態系への影響が国際的な環境問題となっています。",examples:[{en:"Scientists are studying how microplastics affect sea fish.",ja:"科学者たちはマイクロプラスチックが海の魚にどう影響するかを研究しています。"}]},wine:{word:"wine",pos:"名詞",posKey:"noun",meanings:["ワイン、ぶどう酒"],examples:[{en:"Grapes are grown in France to make wine.",ja:"フランスではワインを作るためにブドウが栽培されています。"}]},banner:{word:"banner",pos:"名詞",posKey:"noun",meanings:["横断幕、垂れ幕、旗"],examples:[{en:"Students painted a big banner for the sports festival.",ja:"生徒たちは体育祭のために大きな横断幕を描きました。"}]},kuroshio:{word:"Kuroshio",pos:"固有名詞",posKey:"noun",meanings:["黒潮（日本海流：日本の太平洋岸を南から北へ流れる暖流）"],detail:"地理の超重要知識！暖流の黒潮（Kuroshio）と寒流の親潮（Oyashio）がぶつかる東北沖（三陸沖）は「潮目」と呼ばれ、世界有数の好漁場になります。",examples:[{en:"The warm Kuroshio Current brings mild winters to southern coasts.",ja:"暖かい黒潮は南部の沿岸に温暖な冬をもたらします。"}]},oyashio:{word:"Oyashio",pos:"固有名詞",posKey:"noun",meanings:["親潮（千島海流：北から三陸沖へ南下する寒流）"],examples:[{en:"Rich fish grounds form where the Kuroshio and Oyashio meet.",ja:"黒潮と親潮がぶつかる場所には豊かな漁場ができます。"}]},plankton:{word:"plankton",pos:"名詞",posKey:"noun",meanings:["プランクトン（水中を漂う微小な浮遊生物）"],examples:[{en:"Cold ocean currents carry rich nutrients for plankton.",ja:"冷たい海流はプランクトンのための豊かな栄養分を運びます。"}]},nagasaki:{word:"Nagasaki",pos:"固有名詞",posKey:"noun",meanings:["長崎（九州北西部の県・都市。江戸時代の出島での交易や平和祈念で有名）"],examples:[{en:"Nagasaki was an important port for foreign trade in the Edo period.",ja:"長崎は江戸時代において外国貿易の重要な港でした。"}]},dutch:{word:"Dutch",pos:"形容詞",posKey:"adj",definitionsByPos:{adj:{posName:"形容詞",meanings:["オランダの、オランダ人の"]},noun:{posName:"名詞",meanings:["オランダ語、オランダの人々（Dutch studies で「蘭学」）"]}},meanings:["オランダの","オランダ語（Dutch studies で江戸時代の「蘭学」）"],examples:[{en:"Japanese doctors studied Western medicine through Dutch books.",ja:"日本の医師たちはオランダ語の本を通じて西洋医学を学びました。"}]},epicenter:{word:"epicenter",pos:"名詞",posKey:"noun",meanings:["震央（しんおう：地下の震源の真上にあたる地表の地点）"],detail:"理科（地学：地震）の重要語。地下で岩石が破壊された場所が震源（focus / hypocenter）、その真上の地表の地点が震央（epicenter）です。",examples:[{en:"Cities near the epicenter felt strong shaking.",ja:"震央に近い都市は強い揺れを感じました。"}]},intestine:{word:"intestine",pos:"名詞",posKey:"noun",meanings:["腸（small intestine で「小腸」、large intestine で「大腸」）"],detail:"理科（生物：消化と吸収）の重要語。小腸の壁には無数のひだや柔毛があり、表面積を広げて効率よく栄養分を吸収します。",examples:[{en:"Nutrients are absorbed through the wall of the small intestine.",ja:"栄養分は小腸の壁を通って吸収されます。"}]},suffrage:{word:"suffrage",pos:"名詞",posKey:"noun",meanings:["選挙権、参政権（universal suffrage で「普通選挙」）"],detail:"歴史・公民の重要語！納税額や性別による制限をなくし、一定年齢以上のすべての国民に選挙権を認める制度を普通選挙（universal suffrage）といいます。",examples:[{en:"Women gained suffrage in Japan in 1945.",ja:"日本では1945年に女性が参政権を得ました。"}]},hemoglobin:{word:"hemoglobin",pos:"名詞",posKey:"noun",meanings:["ヘモグロビン（赤血球に含まれ、酸素を運ぶ赤い色素タンパク質）"],detail:"理科（生物：血液の成分）の超重要語！酸素が多い場所（肺）で酸素と結びつき、酸素が少ない場所（全身の細胞）で酸素を離す性質があります。",examples:[{en:"Hemoglobin in red blood cells carries oxygen through the body.",ja:"赤血球の中のヘモグロビンは体じゅうに酸素を運びます。"}]},platelet:{word:"platelet",pos:"名詞",posKey:"noun",meanings:["血小板（けっしょうばん：出血したときに血液を固める働きをする成分）"],examples:[{en:"Platelets help our blood stop flowing from a cut.",ja:"血小板は切り傷から血が流れ出るのを止めるのを助けます。"}]},plasma:{word:"plasma",pos:"名詞",posKey:"noun",meanings:["血しょう（栄養分や二酸化炭素・不要物を溶かして運ぶ血液の液体成分）"],detail:"血液の4成分：赤血球（red blood cells）、白血球（white blood cells）、血小板（platelets）、血しょう（plasma）をセットで覚えましょう！",examples:[{en:"Plasma carries nutrients to cells throughout the body.",ja:"血しょうは体じゅうの細胞へ栄養分を運びます。"}]}},C={noun:{label:"名詞",color:"#93c5fd",bg:"rgba(37, 99, 235, 0.22)",border:"rgba(96, 165, 250, 0.45)"},verb:{label:"動詞",color:"#fda4af",bg:"rgba(225, 29, 72, 0.22)",border:"rgba(251, 113, 133, 0.45)"},adj:{label:"形容詞",color:"#6ee7b7",bg:"rgba(5, 150, 105, 0.22)",border:"rgba(52, 211, 153, 0.45)"},adv:{label:"副詞",color:"#d8b4fe",bg:"rgba(124, 58, 237, 0.24)",border:"rgba(192, 132, 252, 0.45)"},pron:{label:"代名詞",color:"#a5b4fc",bg:"rgba(79, 70, 229, 0.24)",border:"rgba(129, 140, 248, 0.45)"},aux:{label:"助動詞",color:"#fcd34d",bg:"rgba(217, 119, 6, 0.24)",border:"rgba(251, 191, 36, 0.45)"},prep:{label:"前置詞",color:"#fdba74",bg:"rgba(234, 88, 12, 0.22)",border:"rgba(251, 146, 60, 0.45)"},conj:{label:"接続詞",color:"#5eead4",bg:"rgba(13, 148, 136, 0.24)",border:"rgba(45, 212, 191, 0.45)"},det:{label:"冠詞・限定詞",color:"#7dd3fc",bg:"rgba(2, 132, 199, 0.22)",border:"rgba(56, 189, 248, 0.45)"},art:{label:"冠詞",color:"#7dd3fc",bg:"rgba(2, 132, 199, 0.22)",border:"rgba(56, 189, 248, 0.45)"},contraction:{label:"短縮形",color:"#f0abfc",bg:"rgba(192, 38, 211, 0.22)",border:"rgba(232, 121, 249, 0.45)"},interj:{label:"感嘆詞",color:"#cbd5e1",bg:"rgba(100, 116, 139, 0.25)",border:"rgba(148, 163, 184, 0.45)"},other:{label:"語句",color:"#cbd5e1",bg:"rgba(100, 116, 139, 0.25)",border:"rgba(148, 163, 184, 0.45)"}},U=new Map;if(Array.isArray(le)){for(const i of le)if(i&&i.word){const e=i.word.trim().toLowerCase();U.has(e)||U.set(e,i)}}function fs(i){return i?String(i).replace(/[’‘`]/g,"'").replace(/^[^a-zA-Z0-9']+|[^a-zA-Z0-9']+$/g,"").trim():""}function Y(i,e){const s=(i||"").toLowerCase();if(C[s])return{key:s,...C[s],label:e||C[s].label};const t=String(e||"");return t.includes("短縮")?{key:"contraction",...C.contraction,label:t||"短縮形"}:t.includes("代名詞")?{key:"pron",...C.pron,label:t}:t.includes("名詞")?{key:"noun",...C.noun,label:t}:t.includes("助動詞")?{key:"aux",...C.aux,label:t}:t.includes("副詞")?{key:"adv",...C.adv,label:t}:t.includes("動詞")?{key:"verb",...C.verb,label:t}:t.includes("形容詞")?{key:"adj",...C.adj,label:t}:t.includes("前置詞")?{key:"prep",...C.prep,label:t}:t.includes("接続詞")?{key:"conj",...C.conj,label:t}:t.includes("冠詞")||t.includes("限定詞")?{key:"det",...C.det,label:t}:t.includes("感嘆")?{key:"interj",...C.interj,label:t}:{key:"other",...C.other,label:t||"語句"}}function J(i,e,s=null){var g,f,y,w;const t=(i.word||e||"").toLowerCase(),a=U.get(t)||(i.baseWord?U.get(i.baseWord.toLowerCase()):null),n=i.posKey||Ye[t]||(a?a.partOfSpeech:"other"),o=i.pos||i.posLabel||((g=C[n])==null?void 0:g.label)||"語句",r=Y(n,o);let c=[];Array.isArray(i.meanings)&&i.meanings.length>0?c=[...i.meanings]:i.meaning?c=[i.meaning]:a&&a.meaning&&(c=[a.meaning]);const h=[];if(i.definitionsByPos&&typeof i.definitionsByPos=="object")for(const[b,v]of Object.entries(i.definitionsByPos))v&&Array.isArray(v.meanings)&&v.meanings.length>0&&h.push({posMeta:Y(b,v.posName),meanings:v.meanings});const l=[];if(Array.isArray(i.examples))for(const b of i.examples)b&&b.en&&l.push({en:b.en,ja:b.ja||""});if(l.length===0&&a&&Array.isArray(a.sentenceQuizzes))for(const b of a.sentenceQuizzes.slice(0,2)){const v=(f=b.options)==null?void 0:f.find(x=>x.isCorrect);v&&b.sentence&&l.push({en:b.sentence.replace(/\(\s*\)/g,v.text),ja:b.translation||""})}const d=[];if(i.baseWord&&i.baseWord.toLowerCase()!==t&&d.push({relation:"原形・基本形",word:i.baseWord}),i.forms&&typeof i.forms=="object")for(const[b,v]of Object.entries(i.forms)){if(!v||b==="notes")continue;const x=String(v).trim();/^[a-zA-Z']+$/.test(x)&&x.toLowerCase()!==t&&(d.some(A=>A.word.toLowerCase()===x.toLowerCase())||d.push({relation:b==="full"?"元の形":b,word:x}))}let p=i.phonetic||"";!p&&i.ipa&&i.ipa.replace(/^\/|\/$/g,"").toLowerCase()!==t&&(p=i.ipa);let m=i.detail||"";return(y=i.forms)!=null&&y.notes&&(m=m?`${m} / ${i.forms.notes}`:i.forms.notes),s&&(m=m?`${s}（${m}）`:s),{found:c.length>0,queriedWord:e,headword:i.word||e,phonetic:p,posMeta:r,meanings:c,definitionsByPos:h,detail:m,relatedForms:d,examples:l,collocations:((w=a==null?void 0:a.collocations)==null?void 0:w.slice(0,2))||[]}}function W(i){if(we[i])return we[i];if(re[i])return re[i];const e=U.get(i);return e?{word:e.word,posKey:e.partOfSpeech,meanings:[e.meaning]}:null}function Se(i){const e=fs(i);if(!e)return null;const s=e.toLowerCase(),t=W(s);if(t)return J(t,e);if(s.endsWith("'s")){const n=s.slice(0,-2),o=W(n);if(o){const r=J(o,e,`「${o.word||n}」の所有格（〜の）または is の短縮形`);return r.relatedForms.unshift({relation:"基本形",word:o.word||n}),r}}if(s.endsWith("s'")){const n=s.slice(0,-1),o=W(n)||W(s.slice(0,-2));if(o){const r=J(o,e,"複数名詞の所有格（〜たちの、〜の）");return r.relatedForms.unshift({relation:"基本形",word:o.word||n}),r}}if(/^\d+(?:[.,]\d+)?%?$/.test(e)){const n=e.endsWith("%");return{found:!0,queriedWord:e,headword:e,phonetic:"",posMeta:Y("noun",n?"割合・数値":"数詞・数値"),meanings:[n?`${e}（パーセント・割合）`:`${e}（数値・数量・年号）`],definitionsByPos:[],detail:n?"英語では percent（パーセント）と読みます。":"グラフや本文中の数値・時刻・年号などを表します。",relatedForms:n?[{relation:"単位",word:"percent"}]:[],examples:[{en:`Look at the number ${e.replace("%","")} in the chart.`,ja:`表の中の「${e.replace("%","")}」という数字を見てください。`}],collocations:[]}}const a=[];s.endsWith("ies")&&s.length>4&&a.push({stem:s.slice(0,-3)+"y",note:"複数形 または 三単現の形"}),s.endsWith("es")&&s.length>3&&a.push({stem:s.slice(0,-2),note:"複数形 または 三単現の形"}),s.endsWith("s")&&!s.endsWith("ss")&&s.length>2&&a.push({stem:s.slice(0,-1),note:"複数形 または 三単現の形"}),s.endsWith("ied")&&s.length>4&&a.push({stem:s.slice(0,-3)+"y",note:"過去形・過去分詞形"}),s.endsWith("ed")&&s.length>3&&(a.push({stem:s.slice(0,-2),note:"過去形・過去分詞形"}),a.push({stem:s.slice(0,-1),note:"過去形・過去分詞形"}),s.length>4&&s[s.length-3]===s[s.length-4]&&a.push({stem:s.slice(0,-3),note:"過去形・過去分詞形"})),s.endsWith("ing")&&s.length>4&&(a.push({stem:s.slice(0,-3),note:"〜ing形（現在分詞・動名詞）"}),a.push({stem:s.slice(0,-3)+"e",note:"〜ing形（現在分詞・動名詞）"}),s.length>5&&s[s.length-4]===s[s.length-5]&&a.push({stem:s.slice(0,-4),note:"〜ing形（現在分詞・動名詞）"})),s.endsWith("er")&&s.length>4&&(a.push({stem:s.slice(0,-2),note:"比較級（より〜）または「〜する人」"}),a.push({stem:s.slice(0,-1),note:"比較級（より〜）"}),s.endsWith("ier")&&a.push({stem:s.slice(0,-3)+"y",note:"比較級（より〜）"})),s.endsWith("est")&&s.length>5&&(a.push({stem:s.slice(0,-3),note:"最上級（最も〜）"}),a.push({stem:s.slice(0,-2),note:"最上級（最も〜）"}),s.endsWith("iest")&&a.push({stem:s.slice(0,-4)+"y",note:"最上級（最も〜）"}));for(const n of a){const o=W(n.stem);if(o){const r=J(o,e,`「${o.word||n.stem}」の${n.note}`);return r.headword=e,r.relatedForms.some(c=>c.word.toLowerCase()===n.stem)||r.relatedForms.unshift({relation:"原形・基本形",word:o.word||n.stem}),r}}return{found:!1,queriedWord:e,headword:e,phonetic:"",posMeta:Y("other","語句"),meanings:[],definitionsByPos:[],detail:"",relatedForms:[],examples:[],collocations:[]}}class ys{constructor(){this.isOpen=!1,this.history=[],this.currentWord=null,this.rootEl=null}ensureMounted(){if(this.rootEl)return;const e=document.createElement("div");e.id="dict-drawer-root",e.className="dict-drawer-root",e.setAttribute("aria-hidden","true"),e.innerHTML=`
      <div class="dict-backdrop" data-action="close-dict"></div>
      <aside class="dict-panel" role="dialog" aria-label="英単語辞書">
        <div class="dict-panel-header">
          <div class="dict-header-left">
            <button type="button" class="dict-back-btn" data-action="dict-back" hidden>
              ← 戻る
            </button>
            <span class="dict-header-badge">📕 タップ辞書</span>
          </div>
          <button type="button" class="dict-close-btn" data-action="close-dict" aria-label="辞書を閉じる">
            ✕ 閉じる
          </button>
        </div>
        <div class="dict-panel-body" id="dict-panel-body"></div>
      </aside>
    `,(document.getElementById("app")||document.body).appendChild(e),this.rootEl=e,e.addEventListener("click",t=>{const a=t.target.closest("[data-action]");if(a){const o=a.dataset.action;if(o==="close-dict"){this.close();return}if(o==="dict-back"){this.goBack();return}if(o==="speak-normal"){j.speak(a.dataset.text,{rate:1});return}if(o==="speak-slow"){j.speakSlow(a.dataset.text);return}if(o==="jump-word"){const r=a.dataset.word;r&&this.open(r,{pushHistory:!0});return}}const n=t.target.closest(".dict-word");n&&n.dataset.word&&(t.stopPropagation(),this.open(n.dataset.word,{pushHistory:!0}))}),document.addEventListener("click",t=>{if(!this.isOpen||!this.rootEl||Date.now()-(this.lastOpenedTime||0)<80)return;const a=this.rootEl.querySelector(".dict-panel");a&&!a.contains(t.target)&&this.close()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.isOpen&&this.close()})}open(e,{pushHistory:s=!1}={}){if(!e)return;this.ensureMounted(),s&&this.currentWord&&this.currentWord.toLowerCase()!==String(e).toLowerCase()?this.history.push(this.currentWord):s||(this.history=[]),this.currentWord=e;const t=Se(e);this.render(t),this.isOpen=!0,this.lastOpenedTime=Date.now(),this.rootEl.classList.add("is-open"),this.rootEl.setAttribute("aria-hidden","false"),j.getAutoPlay()&&(t!=null&&t.headword)&&j.speak(t.headword,{rate:1})}goBack(){if(this.history.length===0)return;const e=this.history.pop();this.currentWord=e;const s=Se(e);this.render(s)}close(){this.rootEl&&(this.isOpen=!1,this.rootEl.classList.remove("is-open"),this.rootEl.setAttribute("aria-hidden","true"))}render(e){const s=this.rootEl.querySelector('[data-action="dict-back"]');s&&(s.hidden=this.history.length===0);const t=this.rootEl.querySelector("#dict-panel-body");if(!t||!e)return;const{posMeta:a}=e,n=e.queriedWord&&e.headword&&e.queriedWord.toLowerCase()!==e.headword.toLowerCase();let o="";e.definitionsByPos&&e.definitionsByPos.length>0?o=e.definitionsByPos.map(d=>`
        <div class="dict-pos-group">
          <span class="dict-pos-badge" style="color:${d.posMeta.color};background:${d.posMeta.bg};border-color:${d.posMeta.border};">
            ${u(d.posMeta.label)}
          </span>
          <ul class="dict-meaning-list">
            ${d.meanings.map(p=>`<li>${u(p)}</li>`).join("")}
          </ul>
        </div>
      `).join(""):e.meanings&&e.meanings.length>0?o=`
        <ul class="dict-meaning-list">
          ${e.meanings.map(d=>`<li>${u(d)}</li>`).join("")}
        </ul>
      `:o=`<p class="dict-meaning-fallback">「${u(e.headword)}」の語彙情報</p>`;const r=e.relatedForms&&e.relatedForms.length>0?`
        <div class="dict-section">
          <div class="dict-section-title">🔗 原形・関連する語形</div>
          <div class="dict-related-chips">
            ${e.relatedForms.map(d=>`
              <button type="button" class="dict-related-chip" data-action="jump-word" data-word="${u(d.word)}">
                <span class="rel-label">${u(d.relation)}:</span>
                <strong>${u(d.word)}</strong> →
              </button>
            `).join("")}
          </div>
        </div>
      `:"",c=e.detail?`
        <div class="dict-detail-box">
          <div class="dict-detail-label">💡 ポイント解説</div>
          <p>${u(e.detail)}</p>
        </div>
      `:"",h=e.collocations&&e.collocations.length>0?`
        <div class="dict-section">
          <div class="dict-section-title">✨ よく出る表現・熟語</div>
          <div class="dict-collocations">
            ${e.collocations.map(d=>`
              <div class="dict-colloc-item">
                <div class="dict-colloc-en">${S(d.en)}</div>
                <div class="dict-colloc-ja">${u(d.ja)}</div>
              </div>
            `).join("")}
          </div>
        </div>
      `:"",l=e.examples&&e.examples.length>0?`
        <div class="dict-section">
          <div class="dict-section-title">📝 例文で確認しよう</div>
          <div class="dict-examples">
            ${e.examples.map(d=>`
              <div class="dict-example-card">
                <div class="dict-example-top">
                  <div class="dict-example-en">${S(d.en,{underlineHint:!0})}</div>
                  <button type="button" class="dict-mini-audio-btn" data-action="speak-normal" data-text="${u(d.en)}" title="例文を読み上げ">
                    🔊
                  </button>
                </div>
                ${d.ja?`<div class="dict-example-ja">${u(d.ja)}</div>`:""}
              </div>
            `).join("")}
          </div>
        </div>
      `:"";t.innerHTML=`
      <div class="dict-head-card">
        <div class="dict-head-top">
          <div>
            ${n?`<div class="dict-queried-sub">本文中の形: <strong>${u(e.queriedWord)}</strong></div>`:""}
            <h2 class="dict-headword">${u(e.headword)}</h2>
            ${e.phonetic?`<div class="dict-phonetic">${u(e.phonetic)}</div>`:""}
          </div>
          <span class="dict-pos-badge dict-pos-badge-lg" style="color:${a.color};background:${a.bg};border-color:${a.border};">
            ${u(a.label)}
          </span>
        </div>

        <div class="dict-audio-row">
          <button type="button" class="dict-audio-btn" data-action="speak-normal" data-text="${u(e.headword)}">
            🔊 発音 (1.0x)
          </button>
          <button type="button" class="dict-audio-btn dict-audio-btn-slow" data-action="speak-slow" data-text="${u(e.headword)}">
            🐢 ゆっくり (0.75x)
          </button>
        </div>
      </div>

      <div class="dict-section">
        <div class="dict-section-title">📖 意味</div>
        ${o}
      </div>

      ${c}
      ${r}
      ${h}
      ${l}
    `,t.scrollTop=0}}const I=new ys,R=["#3b82f6","#06b6d4","#10b981","#f59e0b","#a855f7","#f43f5e"];function vs(i){if(!i)return"";const{chartType:e="table",title:s="",subtitle:t="",unit:a="",headers:n=[],rows:o=[],items:r=[],bullets:c=[],footerNote:h="",subNotice:l=null}=i;let d="";if(e==="bar"){const m=o.map(f=>Number(f[1])||0),g=Math.max(...m,1);d=`
      <div class="chart-bars-wrap">
        ${n.length>=2?`
          <div class="chart-bars-header">
            <span>${S(String(n[0]))}</span>
            <span>${S(String(n[1]))}</span>
          </div>
        `:""}
        ${o.map((f,y)=>{const w=String(f[0]??""),b=Number(f[1])||0,v=Math.max(6,Math.round(b/g*100)),x=R[y%R.length],A=f[2]?String(f[2]):`${b}${a?" "+a:""}`;return`
            <div class="chart-bar-row">
              <div class="chart-bar-label">${S(w)}</div>
              <div class="chart-bar-track">
                <div class="chart-bar-fill" style="width:${v}%;background:${x};"></div>
              </div>
              <div class="chart-bar-value">${S(A)}</div>
            </div>
          `}).join("")}
      </div>
    `}else if(e==="pie"){const m=o.reduce((y,w)=>y+(Number(w[1])||0),0)||100;let g=0;d=`
      <div class="chart-pie-layout">
        <div class="chart-pie-donut" style="background: conic-gradient(${o.map((y,w)=>{const b=Number(y[1])||0,v=g/m*360;g+=b;const x=g/m*360;return`${R[w%R.length]} ${v.toFixed(1)}deg ${x.toFixed(1)}deg`}).join(", ")});">
          <div class="chart-pie-hole">
            <span>${u(a||"%")}</span>
          </div>
        </div>
        <div class="chart-pie-legend">
          ${o.map((y,w)=>{const b=R[w%R.length],v=y[1];return`
              <div class="chart-pie-legend-item">
                <span class="legend-dot" style="background:${b};"></span>
                <span class="legend-name">${S(String(y[0]??""))}</span>
                <strong class="legend-val">${S(`${v}${a||"%"}`)}</strong>
              </div>
            `}).join("")}
        </div>
      </div>
    `}else e==="notice"?d=ke(r,c):d=`
      <div class="chart-table-scroll">
        <table class="chart-table">
          ${n.length>0?`
            <thead>
              <tr>
                ${n.map(m=>`<th>${S(String(m))}</th>`).join("")}
              </tr>
            </thead>
          `:""}
          <tbody>
            ${o.map(m=>`
              <tr>
                ${m.map(g=>`<td>${S(String(g))}</td>`).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;const p=l?`
    <div class="chart-sub-notice">
      ${l.title?`<div class="chart-sub-notice-title">📌 ${S(l.title)}</div>`:""}
      ${ke(l.items||[],l.bullets||[])}
    </div>
  `:"";return`
    <section class="visual-data-card" aria-label="資料・グラフ">
      <div class="visual-data-header">
        <span class="visual-data-badge">📊 資料データ</span>
        ${s?`<h3 class="visual-data-title">${S(s)}</h3>`:""}
        ${t?`<p class="visual-data-subtitle">${S(t)}</p>`:""}
      </div>
      <div class="visual-data-body">
        ${d}
        ${p}
      </div>
      ${h?`<div class="visual-data-footer">※ ${S(h)}</div>`:""}
    </section>
  `}function ke(i=[],e=[]){return`
    <div class="chart-notice-box">
      ${i.length>0?`
        <dl class="chart-notice-dl">
          ${i.map(s=>`
            <div class="chart-notice-row">
              <dt>${S(String(s.label||""))}</dt>
              <dd>${S(String(s.value||""))}</dd>
            </div>
          `).join("")}
        </dl>
      `:""}
      ${e.length>0?`
        <ul class="chart-notice-bullets">
          ${e.map(s=>`<li>${S(String(s))}</li>`).join("")}
        </ul>
      `:""}
    </div>
  `}const $e=["ア","イ","ウ","エ"],xe=["1","2","3","4","5","6"],ws={comprehension:"内容一致",reference:"指示語",fill:"空欄補充",sentence_order:"文の順序（6択）",scramble:"語順並べ替え",chart_read:"資料・グラフ読み取り"};class Ss{constructor({passage:e,container:s,headerEl:t,onBack:a,onNavigatePassage:n}){this.passage=e,this.container=s,this.headerEl=t,this.onBack=a,this.onNavigatePassage=n,this.sentenceSelectMode=!1,this.sentenceTranslateMode=!1,this.translatedSids=new Set,this.speechRate=j.getRate()<=.82?.75:1,this.textZoom120=(()=>{try{return localStorage.getItem("reading_text_zoom_120")==="true"}catch{return!1}})(),this.activeSpeakingSid=null,this.isPlayingAll=!1,this.playAllAborted=!1;const o=k.getInterruptedState(e.id);this.answers=o!=null&&o.answers?{...o.answers}:{},this.scrambleStates={},this.dockCollapsed=!1;const r=(e.questions||[]).findIndex(h=>{var l;return!((l=this.answers[h.qid])!=null&&l.answered)});this.currentQIndex=r!==-1?r:0;const c=k.getPassageStatus(e.id);this.wasPreviouslyCleared=!!(c!=null&&c.completed),this.sandwichMode=!1,this.showFullTranslationModal=!1,this.showCompletionAdModal=!1,this.hasShownCompletionAd=!1,this.pendingGoHome=!1,this.unsubscribeAudio=null,this.initScrambleStates()}initScrambleStates(){for(const e of this.passage.questions||[])e.kind==="scramble"&&Array.isArray(e.words)&&(this.scrambleStates[e.qid]={pool:this.createShuffledPool(e.words),picked:[],dictMode:!1})}createShuffledPool(e){const s=e.map((t,a)=>({id:`w_${a}`,word:t}));if(s.length<=1)return s;for(let t=0;t<6;t++){for(let a=s.length-1;a>0;a--){const n=Math.floor(Math.random()*(a+1));[s[a],s[n]]=[s[n],s[a]]}if(s.map(a=>a.word).join(" ")!==e.join(" "))break}return s}mount(){j.setRate(this.speechRate),this.unsubscribeAudio=j.subscribe(e=>{e==="speakEnd"&&!this.isPlayingAll&&this.activeSpeakingSid&&(this.activeSpeakingSid=null,this.updateSpeakingHighlight())}),this.renderHeader(),this.renderBody(),this.scrollPassageTop(!1)}unmount(){this.stopSpeech(),I.close(),this.unsubscribeAudio&&(this.unsubscribeAudio(),this.unsubscribeAudio=null)}stopSpeech(){this.playAllAborted=!0,this.isPlayingAll=!1,this.activeSpeakingSid=null,j.stop()}scrollPassageTop(e=!0){const s=this.container.querySelector("#passage-scroll-area");s&&s.scrollTo({top:0,behavior:e?"smooth":"auto"})}isAllQuestionsAnswered(){const e=this.passage.questions||[];return e.length>0&&e.every(s=>{var t;return(t=this.answers[s.qid])==null?void 0:t.answered})}canUseReviewTranslation(){return this.isAllQuestionsAnswered()||this.wasPreviouslyCleared}getCorrectCount(){return(this.passage.questions||[]).filter(e=>{var s;return(s=this.answers[e.qid])==null?void 0:s.isCorrect}).length}getFilledBlanks(){const e={};for(const s of this.passage.questions||[]){const t=this.answers[s.qid];if(t!=null&&t.answered){if(s.kind==="fill"&&s.blankKey&&Array.isArray(s.choices))e[s.blankKey]=s.choices[s.answerIndex];else if(s.kind==="sentence_order"&&Array.isArray(s.blankKeys)&&Array.isArray(s.subSentences)){const a={};for(const r of s.subSentences){const c=String(r).match(/^([ア-ンA-Za-z0-9]+)\s*[:：]\s*(.+)$/);c&&(a[c[1]]=c[2])}const o=String(s.choices[s.answerIndex]||"").split(/\s*→\s*/);s.blankKeys.forEach((r,c)=>{const h=o[c];h&&a[h]&&(e[r]=a[h])})}}}return e}renderHeader(){if(!this.headerEl)return;const e=L.find(a=>a.id===this.passage.stepId),s=O.find(a=>a.id===this.passage.grade),t=this.canUseReviewTranslation();this.headerEl.className="app-header reader-header",this.headerEl.innerHTML=`
      <div class="reader-header-top">
        <button type="button" class="reader-back-btn" data-reader-action="back" title="中断して単元一覧へ戻る">
          ← 中断
        </button>
        <div class="reader-header-titles">
          <div class="reader-step-crumb">
            <span class="crumb-grade" style="background:${(s==null?void 0:s.color)||"#3b82f6"}">${u((s==null?void 0:s.shortLabel)||"")}</span>
            <span>Step ${this.passage.step}: ${u((e==null?void 0:e.title)||"")}</span>
          </div>
          <h1 class="reader-main-title">${u(this.passage.title)}</h1>
        </div>
        <button type="button" class="reader-mute-btn" data-reader-action="toggle-sound" title="音声ON/OFF">
          ${j.enabled?"🔊":"🔇"}
        </button>
      </div>

      <div class="reader-toolbar">
        <div class="reader-toolbar-row is-primary-row">
          <button type="button" class="toolbar-chip ${this.isPlayingAll?"is-playing-all":""}" data-reader-action="play-all">
            ${this.isPlayingAll?"⏹ 停止":"▶ 全文再生"}
          </button>

          <button type="button" class="toolbar-chip toolbar-rate-chip" data-reader-action="toggle-rate">
            ${this.speechRate===.75?"🐢 0.75x":"🏃 1.0x"}
          </button>

          <button type="button" class="toolbar-chip ${this.textZoom120?"is-active-zoom":""}" data-reader-action="toggle-text-zoom" title="本文の文字サイズを1.2倍に拡大 / 標準サイズに切り替え">
            🔍 文字1.2倍${this.textZoom120?" ON":""}
          </button>
        </div>

        <div class="reader-toolbar-row is-mode-row">
          <button type="button" class="toolbar-chip ${this.sentenceSelectMode?"is-active-voice":""}" data-reader-action="toggle-sentence-mode">
            🔊 1文音声${this.sentenceSelectMode?" ON":""}
          </button>

          <button type="button" class="toolbar-chip ${this.sentenceTranslateMode?"is-active-translate":""}" data-reader-action="toggle-translate-mode" title="長文を1文ごとに区切り、タップした文だけ日本語訳を表示">
            🔖 1文翻訳${this.sentenceTranslateMode?" ON":""}
          </button>
        </div>

        ${t?`
          <div class="reader-toolbar-row is-review-row">
            <button type="button" class="toolbar-chip ${this.sandwichMode?"is-active-review":""}" data-reader-action="toggle-sandwich">
              🥪 サンドイッチ訳
            </button>
            <button type="button" class="toolbar-chip" data-reader-action="open-full-ja">
              📄 全訳まとめ
            </button>
          </div>
        `:""}
      </div>
    `,this.headerEl.onclick=a=>{const n=a.target.closest("[data-reader-action]");if(!n)return;const o=n.dataset.readerAction;if(o==="back"){if(!this.isAllQuestionsAnswered())k.saveInterruptedPassage(this.passage.id,{answers:this.answers,currentQIndex:this.currentQIndex,totalCount:(this.passage.questions||[]).length});else if(!this.hasShownCompletionAd){this.hasShownCompletionAd=!0,this.pendingGoHome=!0,this.showCompletionAdModal=!0,this.renderCompletionAdModal();return}this.unmount(),this.onBack&&this.onBack()}else if(o==="toggle-sound")j.toggleSound(),this.renderHeader();else if(o==="toggle-sentence-mode")this.sentenceSelectMode=!this.sentenceSelectMode,this.sentenceSelectMode?(this.sentenceTranslateMode=!1,I.close()):this.stopSpeech(),this.renderHeader(),this.renderPassageArea();else if(o==="toggle-translate-mode")this.sentenceTranslateMode=!this.sentenceTranslateMode,this.sentenceTranslateMode&&(this.sentenceSelectMode=!1,this.sandwichMode=!1,this.stopSpeech(),I.close()),this.renderHeader(),this.renderPassageArea(),this.renderQuestionDock();else if(o==="toggle-rate")this.speechRate=this.speechRate===1?.75:1,j.setRate(this.speechRate),this.renderHeader(),this.renderPassageArea();else if(o==="toggle-text-zoom"){this.textZoom120=!this.textZoom120;try{localStorage.setItem("reading_text_zoom_120",this.textZoom120?"true":"false")}catch{}this.renderHeader();const r=this.container.querySelector(".passage-card");r?r.classList.toggle("is-text-zoomed",this.textZoom120):this.renderPassageArea()}else o==="play-all"?this.isPlayingAll?(this.stopSpeech(),this.renderHeader(),this.updateSpeakingHighlight()):this.playAllSentences():o==="toggle-sandwich"?(this.sandwichMode=!this.sandwichMode,this.sandwichMode&&(this.sentenceTranslateMode=!1),this.renderHeader(),this.renderPassageArea(),this.renderQuestionDock()):o==="open-full-ja"&&(this.showFullTranslationModal=!0,this.renderFullTranslationModal())}}renderBody(){this.container.className=`app-main reader-main ${this.dockCollapsed?"is-dock-collapsed":""}`,this.container.innerHTML=`
      <div id="passage-scroll-area" class="passage-scroll-area"></div>
      <div id="question-dock-host" class="question-dock-host"></div>
      <div id="full-ja-modal-host"></div>
      <div id="ad-modal-host"></div>
    `,this.renderPassageArea(),this.renderQuestionDock(),this.bindBodyEvents()}renderPassageArea(){const e=this.container.querySelector("#passage-scroll-area");if(!e)return;const s=e.scrollTop,t=T.find(g=>g.id===this.passage.type),a=this.passage.questions[this.currentQIndex],n=a?this.answers[a.qid]:null,o=new Set(n!=null&&n.answered?a.evidenceSids||[]:[]),r=n!=null&&n.answered?a.evidenceWords||[]:[],c=this.getFilledBlanks(),h=Ce((this.passage.paragraphs||[]).flatMap(g=>g.sentences.map(f=>f.en)).join(" ")).length;let l="";this.sentenceSelectMode?l=`
        <div class="mode-guide-banner is-voice-mode">
          <span>🔊 <strong>1文音声中</strong>：枠をタップで読み上げ (${this.speechRate}x)</span>
          <button type="button" class="banner-mini-btn" data-body-action="exit-sentence-mode">辞書に戻る</button>
        </div>
      `:this.sentenceTranslateMode?l=`
        <div class="mode-guide-banner is-translate-mode">
          <span>🔖 <strong>1文翻訳中</strong>：気になる文をタップするとその1文だけ翻訳</span>
          <button type="button" class="banner-mini-btn is-translate-btn" data-body-action="exit-translate-mode">辞書に戻る</button>
        </div>
      `:this.sandwichMode?l=`
        <div class="mode-guide-banner is-sandwich-mode">
          <span>🥪 <strong>サンドイッチ和訳中</strong>：英単語タップで辞書も開きます</span>
        </div>
      `:l=`
        <div class="mode-guide-banner">
          <span>📕 本文・図表・設問の<strong>すべての英単語</strong>をタップで辞書表示</span>
        </div>
      `;const d=this.passage.visualData?vs(this.passage.visualData):"",p=(this.passage.paragraphs||[]).map(g=>{const f=g.speaker?`<div class="dialogue-speaker"><span class="speaker-pill">${S(g.speaker)}</span></div>`:"";if(this.sandwichMode){const w=(g.sentences||[]).map(b=>{const v=o.has(b.sid),x=this.activeSpeakingSid===b.sid,A=ne(b.en,{highlightWords:v?r:[],filledBlanks:c});return`
            <div class="sandwich-sentence-card ${v?"is-evidence":""} ${x?"is-speaking":""} ${this.sentenceSelectMode?"is-selectable":""}" data-sid="${u(b.sid)}">
              <div class="sandwich-en-row">
                <div class="sandwich-en-text">
                  ${v?`<span class="evidence-inline-tag">💡 問${this.currentQIndex+1}の根拠</span> `:""}
                  ${A}
                </div>
                <button type="button" class="sentence-mini-play-btn" data-body-action="speak-sid" data-sid="${u(b.sid)}" title="この文を読み上げ">
                  🔊
                </button>
              </div>
              <div class="sandwich-ja-text">${u(b.ja)}</div>
              ${b.grammarNote?`<div class="sandwich-grammar-note">📌 ${u(b.grammarNote)}</div>`:""}
            </div>
          `}).join("");return`
          <div class="passage-block is-sandwich ${g.speaker?"is-dialogue-turn":""}">
            ${f}
            <div class="sandwich-cards-stack">${w}</div>
          </div>
        `}if(this.sentenceTranslateMode){const w=(g.sentences||[]).map(b=>{const v=o.has(b.sid),x=this.activeSpeakingSid===b.sid,A=this.translatedSids.has(b.sid),N=ne(b.en,{highlightWords:v?r:[],filledBlanks:c});return`
            <div class="translate-sentence-card ${A?"is-ja-open":""} ${v?"is-evidence":""} ${x?"is-speaking":""}" data-sid="${u(b.sid)}" role="button" tabindex="0" aria-expanded="${A?"true":"false"}">
              <div class="translate-en-row">
                <div class="translate-en-text">
                  ${v?`<span class="evidence-inline-tag">💡問${this.currentQIndex+1}根拠</span>`:""}
                  ${N}
                </div>
                <span class="translate-toggle-pill">${A?"▲ 隠す":"🔖 訳"}</span>
              </div>
              ${A?`<div class="translate-ja-reveal">${u(b.ja)}</div>`:""}
            </div>
          `}).join("");return`
          <div class="passage-block is-translate-block ${g.speaker?"is-dialogue-turn":""}">
            ${f}
            <div class="translate-cards-stack">${w}</div>
          </div>
        `}const y=(g.sentences||[]).map(w=>{const b=o.has(w.sid),v=this.activeSpeakingSid===w.sid,x=ne(w.en,{highlightWords:b?r:[],filledBlanks:c});return`<span class="passage-sentence ${this.sentenceSelectMode?"is-select-box":""} ${b?"is-evidence":""} ${v?"is-speaking":""}" data-sid="${u(w.sid)}">${this.sentenceSelectMode?'<span class="sent-speaker-icon" aria-hidden="true">🔊</span>':""}${b?`<span class="evidence-inline-tag">💡問${this.currentQIndex+1}根拠</span>`:""}${x}</span>`}).join(" ");return g.speaker?`
          <div class="dialogue-row">
            ${f}
            <div class="dialogue-bubble">${y}</div>
          </div>
        `:`<p class="passage-paragraph">${y}</p>`}).join(""),m=Array.isArray(this.passage.notes)&&this.passage.notes.length>0?`
        <div class="passage-notes-box">
          <div class="notes-title">📝 注釈（Notes）</div>
          <ul class="notes-list">
            ${this.passage.notes.map(g=>`
              <li>
                <span class="note-term">${S(g.term,{underlineHint:!0})}</span>
                <span class="note-sep">：</span>
                <span class="note-meaning">${u(g.meaning)}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      `:"";e.innerHTML=`
      ${l}

      <article class="passage-card ${this.textZoom120?"is-text-zoomed":""}">
        <header class="passage-card-header">
          <div class="passage-tags-row">
            <span class="passage-type-tag">${(t==null?void 0:t.icon)||"📖"} ${u((t==null?void 0:t.label)||"")}</span>
            ${this.passage.themeTag?`<span class="passage-theme-tag">🏷️ ${u(this.passage.themeTag)}</span>`:""}
            <span class="passage-wc-tag">${h} words</span>
          </div>
          <h2 class="passage-title-en">${S(this.passage.title)}</h2>
          ${this.canUseReviewTranslation()?`<p class="passage-title-ja">${u(this.passage.titleJa)}</p>`:""}
        </header>

        ${d}

        <div class="passage-body-content ${this.passage.type==="dialogue"?"is-dialogue":""}">
          ${p}
        </div>

        ${m}
      </article>
    `,e.scrollTop=s}updateSpeakingHighlight(){this.container.querySelectorAll("[data-sid]").forEach(s=>{s.dataset.sid===this.activeSpeakingSid?s.classList.add("is-speaking"):s.classList.remove("is-speaking")})}findSentenceBySid(e){for(const s of this.passage.paragraphs||[])for(const t of s.sentences||[])if(t.sid===e)return t;return null}speakSingleSentence(e){const s=this.findSentenceBySid(e);if(!s)return;this.playAllAborted=!0,this.isPlayingAll=!1,this.activeSpeakingSid=e,this.renderHeader(),this.updateSpeakingHighlight();const t=ve(s.en,this.getFilledBlanks());j.speak(t,{rate:this.speechRate,onEnd:()=>{this.activeSpeakingSid===e&&(this.activeSpeakingSid=null,this.updateSpeakingHighlight())}})}async playAllSentences(){const e=(this.passage.paragraphs||[]).flatMap(t=>t.sentences||[]);if(e.length===0)return;this.playAllAborted=!1,this.isPlayingAll=!0,this.renderHeader();const s=this.getFilledBlanks();for(const t of e){if(this.playAllAborted)break;this.activeSpeakingSid=t.sid,this.updateSpeakingHighlight();const a=this.container.querySelector(`.passage-sentence[data-sid="${t.sid}"], .sandwich-sentence-card[data-sid="${t.sid}"], .translate-sentence-card[data-sid="${t.sid}"]`);a&&a.scrollIntoView({behavior:"smooth",block:"nearest"});const n=ve(t.en,s);await new Promise(o=>{j.speak(n,{rate:this.speechRate,onEnd:o,onError:o})})}this.isPlayingAll=!1,this.activeSpeakingSid=null,this.renderHeader(),this.updateSpeakingHighlight()}renderQuestionDock(){const e=this.container.querySelector("#question-dock-host");if(!e)return;this.container.classList.toggle("is-dock-collapsed",this.dockCollapsed);const s=this.passage.questions||[],t=s[this.currentQIndex];if(!t)return;const a=this.answers[t.qid]||null,n=this.isAllQuestionsAnswered(),o=s.map((l,d)=>{const p=this.answers[l.qid],m=p!=null&&p.answered?p.isCorrect?" ⭕":" ❌":"";return`
        <button type="button" class="dock-q-tab ${d===this.currentQIndex?"is-current":""} ${p!=null&&p.answered?p.isCorrect?"is-ok":"is-ng":""}" data-dock-action="select-q" data-q-index="${d}">
          問${d+1}${m}
        </button>
      `}).join("");let r="";t.kind==="scramble"?r=this.renderScrambleQuestion(t,a):r=this.renderChoiceQuestion(t,a);let c="";if(a!=null&&a.answered){const l=this.getCorrectAnswerLabel(t),d=s.findIndex((g,f)=>{var y;return f>this.currentQIndex&&!((y=this.answers[g.qid])!=null&&y.answered)}),p=s.findIndex(g=>{var f;return!((f=this.answers[g.qid])!=null&&f.answered)}),m=d!==-1?d:p;c=`
        <div class="dock-feedback-card ${a.isCorrect?"is-correct":"is-wrong"}">
          <div class="feedback-header-row">
            <div class="feedback-verdict">
              ${a.isCorrect?"⭕ 正解！お見事！":`❌ 惜しい！ 正解：${u(l)}`}
            </div>
            <button type="button" class="scroll-evidence-btn" data-dock-action="scroll-evidence">
              💡 本文の根拠へ ↑
            </button>
          </div>
          <p class="feedback-explanation">${S(t.explanation,{underlineHint:!0})}</p>

          ${m!==-1?`
            <div class="feedback-next-actions">
              <button type="button" class="primary-next-btn" data-dock-action="select-q" data-q-index="${m}">
                次の設問へ（問${m+1}） →
              </button>
            </div>
          `:""}
        </div>
      `}let h="";if(n){const l=Pe(this.passage),d=this.getCorrectCount()===s.length;let p="";l!=null&&l.isAllCompletedEnd?p=`
          <button type="button" class="complete-next-btn is-upcoming" disabled>
            🏆 全21ステップ最終問題クリア！
          </button>
        `:l!=null&&l.passage?p=`
          <button type="button" class="complete-next-btn" data-dock-action="go-next-passage" data-next-id="${u(l.passage.id)}">
            ▶ 次の問題へ（${u(l.label)}） →
          </button>
        `:p=`
          <button type="button" class="complete-next-btn is-upcoming" disabled title="今後のアップデートで収録されます">
            ⏭ 次の問題へ（${u((l==null?void 0:l.label)||"次回")}・準備中）
          </button>
        `,h=`
        <div class="dock-complete-banner">
          <div class="complete-banner-top">
            <span class="complete-trophy">
              ${d?"👑 全問正解！パーフェクト！":`🎉 全${s.length}問完了！（正解 ${this.getCorrectCount()} / ${s.length}）`}
            </span>
          </div>
          <p class="complete-banner-sub">1文ずつのサンドイッチ和訳や全訳で復習してから、次のステップへ進もう！</p>

          <!-- 忍者AdMax 300x250 レクタングル広告枠（完了バナー内インライン） -->
          <div class="dock-ad-card" id="dock-ad-card">
            <div class="dock-ad-header">
              <span class="dock-ad-label">SPONSOR / 広告</span>
              <button type="button" class="dock-ad-close-btn" data-dock-action="hide-dock-ad" aria-label="広告を閉じる">✕ 閉じる</button>
            </div>
            <div class="dock-ad-body">
              <iframe
                srcdoc="&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;meta charset=&quot;utf-8&quot;&gt;&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;&lt;style&gt;* { box-sizing: border-box; } html, body { margin: 0; padding: 0; width: 100%; height: 100%; background: transparent; display: flex; justify-content: center; align-items: center; overflow: hidden; }&lt;/style&gt;&lt;/head&gt;&lt;body&gt;&lt;!-- admax --&gt;&lt;script src=&quot;https://adm.shinobi.jp/s/459e0fef7b870420fd9b2c0bc0da847d&quot;&gt;&lt;/script&gt;&lt;!-- admax --&gt;&lt;/body&gt;&lt;/html&gt;"
                width="300"
                height="250"
                loading="lazy"
                scrolling="no"
                style="border:none; overflow:hidden; width:300px; height:250px; display:block; margin:0 auto; max-width:100%; border-radius:8px; background:rgba(0,0,0,0.25);"
                title="広告"
              ></iframe>
            </div>
          </div>

          <div class="complete-review-btns">
            <button type="button" class="review-action-btn ${this.sandwichMode?"is-active":""}" data-dock-action="toggle-sandwich">
              🥪 ${this.sandwichMode?"サンドイッチ和訳 ON中":"1文ずつサンドイッチ和訳"}
            </button>
            <button type="button" class="review-action-btn" data-dock-action="open-full-ja">
              📄 日本語全訳まとめ
            </button>
          </div>

          <div class="complete-nav-divider"></div>

          <div class="complete-nav-stack">
            ${p}
            <div class="complete-sub-nav-row">
              <button type="button" class="complete-home-btn" data-dock-action="go-home">
                🏠 トップへ戻る
              </button>
              <button type="button" class="review-retry-btn" data-dock-action="retry-all">
                🔄 もう一度解く
              </button>
            </div>
          </div>
        </div>
      `}e.innerHTML=`
      <section class="question-dock ${this.dockCollapsed?"is-collapsed":""}" aria-label="設問パネル">
        <div class="dock-top-bar">
          <div class="dock-q-tabs" role="tablist">
            ${o}
          </div>
          <button type="button" class="dock-collapse-btn" data-dock-action="toggle-collapse" aria-expanded="${!this.dockCollapsed}">
            ${this.dockCollapsed?"▲ 開く":"▼ たたむ"}
          </button>
        </div>

        ${this.dockCollapsed?"":`
          <div class="dock-scroll-body" id="dock-scroll-body">
            <div class="q-header-line">
              <span class="q-kind-badge">${u(ws[t.kind]||"設問")}</span>
              <span class="q-progress-text">第${this.currentQIndex+1}問 / 全${s.length}問</span>
            </div>

            <div class="q-prompt-text">${S(t.prompt,{underlineHint:!0})}</div>

            ${Array.isArray(t.subSentences)&&t.subSentences.length>0?`
              <div class="q-subsentences-box">
                ${t.subSentences.map(l=>`
                  <div class="q-subsentence-item">${S(l,{underlineHint:!0})}</div>
                `).join("")}
              </div>
            `:""}

            ${r}
            ${c}
            ${h}
          </div>
        `}
      </section>
    `}renderChoiceQuestion(e,s){const t=e.kind==="sentence_order"||e.choices&&e.choices.length===6,a=t?xe:$e;return`
      ${(e.choices||[]).some(o=>/[A-Za-z]/.test(o))&&!(s!=null&&s.answered)?`
        <div class="choice-dict-tip">💡 英単語（点線）タップで辞書 ／ 左の記号または枠タップで回答</div>
      `:""}
      <div class="choices-grid ${t?"is-six-grid":""}">
        ${(e.choices||[]).map((o,r)=>{const c=a[r]||String(r+1);let h="";return s!=null&&s.answered&&(r===e.answerIndex?h="is-correct-choice":r===s.selectedIndex?h="is-wrong-choice":h="is-dimmed-choice"),`
            <div class="choice-item-btn ${h}" role="button" tabindex="0" data-dock-action="pick-choice" data-choice-index="${r}" aria-disabled="${!!(s!=null&&s.answered)}">
              <span class="choice-label-pill">${u(c)}</span>
              <span class="choice-text-body">${S(o,{underlineHint:!0})}</span>
              ${s!=null&&s.answered&&r===e.answerIndex?'<span class="choice-mark">⭕</span>':""}
              ${s!=null&&s.answered&&r===s.selectedIndex&&!s.isCorrect?'<span class="choice-mark">❌</span>':""}
            </div>
          `}).join("")}
      </div>
    `}renderScrambleQuestion(e,s){const t=this.scrambleStates[e.qid];if(!t)return"";const a=e.punctuation||".",n=s!=null&&s.answered?s.selectedWords:t.picked.map(o=>o.word);return`
      <div class="scramble-wrap">
        <div class="scramble-toolbar-mini">
          <span class="scramble-instruction">
            ${t.dictMode?"📕 語群の単語をタップすると辞書が開きます":"👆 単語チップをタップして並べよう"}
          </span>
          <button type="button" class="scramble-dict-toggle ${t.dictMode?"is-on":""}" data-dock-action="toggle-scramble-dict">
            📕 辞書モード ${t.dictMode?"ON":"OFF"}
          </button>
        </div>

        <div class="scramble-answer-slot ${s!=null&&s.answered?s.isCorrect?"is-correct":"is-wrong":""}">
          ${s!=null&&s.answered?`
            <div class="scramble-final-sentence">
              ${S(n.join(" "),{underlineHint:!0})}${u(a)}
            </div>
          `:t.picked.length===0?`
            <span class="scramble-placeholder">ここに選んだ単語が並びます…</span>
          `:`
            <div class="scramble-picked-chips">
              ${t.picked.map((o,r)=>`
                <button type="button" class="scramble-chip is-picked" data-dock-action="unpick-word" data-picked-idx="${r}">
                  ${u(o.word)}
                </button>
              `).join("")}
              <span class="scramble-punct">${u(a)}</span>
            </div>
          `}
        </div>

        ${s!=null&&s.answered?"":`
          <div class="scramble-pool-chips">
            ${t.pool.map((o,r)=>`
              <button type="button" class="scramble-chip ${t.dictMode?"is-dict-mode":""}" data-dock-action="pick-word" data-pool-idx="${r}">
                ${u(o.word)}
              </button>
            `).join("")}
          </div>

          <div class="scramble-submit-row">
            <button type="button" class="scramble-reset-btn" data-dock-action="reset-scramble" ${t.picked.length===0?"disabled":""}>
              やり直す
            </button>
            <button type="button" class="scramble-check-btn" data-dock-action="submit-scramble" ${t.pool.length>0?"disabled":""}>
              回答する！
            </button>
          </div>
        `}
      </div>
    `}getCorrectAnswerLabel(e){var n;return e.kind==="scramble"?`${(e.words||[]).join(" ")}${e.punctuation||"."}`:`${(e.kind==="sentence_order"||e.choices&&e.choices.length===6?xe:$e)[e.answerIndex]||""}（${((n=e.choices)==null?void 0:n[e.answerIndex])||""}）`}bindBodyEvents(){this.container.onclick=e=>{const s=this.container.querySelector("#passage-scroll-area");if(s&&s.contains(e.target)){const n=e.target.closest("[data-body-action]");if(n){const o=n.dataset.bodyAction;if(o==="exit-sentence-mode"){this.sentenceSelectMode=!1,this.stopSpeech(),this.renderHeader(),this.renderPassageArea();return}if(o==="exit-translate-mode"){this.sentenceTranslateMode=!1,this.renderHeader(),this.renderPassageArea();return}if(o==="speak-sid"){e.stopPropagation(),this.speakSingleSentence(n.dataset.sid);return}}if(this.sentenceSelectMode){const o=e.target.closest("[data-sid]");if(o&&o.dataset.sid){this.speakSingleSentence(o.dataset.sid);return}}if(this.sentenceTranslateMode){const o=e.target.closest("[data-sid]");if(o&&o.dataset.sid){const r=o.dataset.sid;this.translatedSids.has(r)?this.translatedSids.delete(r):this.translatedSids.add(r),this.renderPassageArea();return}}}const t=e.target.closest(".dict-word");if(t&&t.dataset.word){e.stopPropagation(),I.open(t.dataset.word);return}const a=e.target.closest("[data-dock-action]");if(a){this.handleDockAction(a);return}if(e.target.closest("[data-close-full-ja]")){this.showFullTranslationModal=!1,this.renderFullTranslationModal();return}if(e.target.closest("[data-close-ad-modal]")){this.showCompletionAdModal=!1,this.renderCompletionAdModal(),this.pendingGoHome&&(this.pendingGoHome=!1,this.unmount(),this.onBack&&this.onBack());return}}}handleDockAction(e){var a,n,o,r,c,h;if(e.disabled)return;const s=e.dataset.dockAction,t=this.passage.questions[this.currentQIndex];if(s==="toggle-collapse"){this.dockCollapsed=!this.dockCollapsed,this.renderQuestionDock();return}if(s==="select-q"){const l=Number(e.dataset.qIndex);if(!Number.isNaN(l)&&l>=0&&l<this.passage.questions.length){this.currentQIndex=l,this.dockCollapsed=!1,this.renderPassageArea(),this.renderQuestionDock();const d=this.passage.questions[l];(a=this.answers[d.qid])!=null&&a.answered&&this.scrollToEvidence(d)}return}if(s==="pick-choice"&&t){if((n=this.answers[t.qid])!=null&&n.answered)return;const l=Number(e.dataset.choiceIndex);if(Number.isNaN(l))return;const d=l===t.answerIndex;this.answers[t.qid]={answered:!0,isCorrect:d,selectedIndex:l},this.onAfterAnswerGraded(t,d);return}if(s==="toggle-scramble-dict"&&t){const l=this.scrambleStates[t.qid];l&&(l.dictMode=!l.dictMode,this.renderQuestionDock());return}if(s==="pick-word"&&t){const l=this.scrambleStates[t.qid];if(!l||(o=this.answers[t.qid])!=null&&o.answered)return;const d=Number(e.dataset.poolIdx),p=l.pool[d];if(!p)return;if(l.dictMode){I.open(p.word);return}l.pool.splice(d,1),l.picked.push(p),this.renderQuestionDock();return}if(s==="unpick-word"&&t){const l=this.scrambleStates[t.qid];if(!l||(r=this.answers[t.qid])!=null&&r.answered)return;const d=Number(e.dataset.pickedIdx),p=l.picked[d];if(!p)return;if(l.dictMode){I.open(p.word);return}l.picked.splice(d,1),l.pool.push(p),this.renderQuestionDock();return}if(s==="reset-scramble"&&t){const l=this.scrambleStates[t.qid];if(!l||(c=this.answers[t.qid])!=null&&c.answered)return;l.pool=this.createShuffledPool(t.words),l.picked=[],this.renderQuestionDock();return}if(s==="submit-scramble"&&t){const l=this.scrambleStates[t.qid];if(!l||l.pool.length>0||(h=this.answers[t.qid])!=null&&h.answered)return;const d=l.picked.map(m=>m.word),p=d.join(" ")===(t.words||[]).join(" ");this.answers[t.qid]={answered:!0,isCorrect:p,selectedWords:d},this.onAfterAnswerGraded(t,p);return}if(s==="scroll-evidence"&&t){this.scrollToEvidence(t);return}if(s==="toggle-sandwich"){this.sandwichMode=!this.sandwichMode,this.sandwichMode&&(this.sentenceTranslateMode=!1),this.renderHeader(),this.renderPassageArea(),this.renderQuestionDock(),this.scrollPassageTop(!0);return}if(s==="open-full-ja"){this.showFullTranslationModal=!0,this.renderFullTranslationModal();return}if(s==="go-next-passage"){const l=e.dataset.nextId;l&&this.onNavigatePassage&&(this.unmount(),this.onNavigatePassage(l));return}if(s==="hide-dock-ad"){const l=this.container.querySelector("#dock-ad-card");l&&l.remove();return}if(s==="go-home"){if(this.isAllQuestionsAnswered()&&!this.hasShownCompletionAd){this.hasShownCompletionAd=!0,this.pendingGoHome=!0,this.showCompletionAdModal=!0,this.renderCompletionAdModal();return}this.unmount(),this.onBack&&this.onBack();return}s==="retry-all"&&(this.answers={},this.currentQIndex=0,this.sandwichMode=!1,this.sentenceTranslateMode=!1,this.translatedSids.clear(),this.hasShownCompletionAd=!1,this.showCompletionAdModal=!1,this.pendingGoHome=!1,this.initScrambleStates(),k.saveInterruptedPassage(this.passage.id,{answers:this.answers,currentQIndex:0,totalCount:(this.passage.questions||[]).length}),this.renderHeader(),this.renderPassageArea(),this.renderQuestionDock(),this.renderCompletionAdModal(),this.scrollPassageTop(!0))}onAfterAnswerGraded(e,s){s?j.playPinPon():j.playBubu(),this.isAllQuestionsAnswered()?(k.recordPassageResult(this.passage.id,this.getCorrectCount(),this.passage.questions.length),this.wasPreviouslyCleared=!0,this.hasShownCompletionAd||(this.hasShownCompletionAd=!0,this.showCompletionAdModal=!0)):k.saveInterruptedPassage(this.passage.id,{answers:this.answers,currentQIndex:this.currentQIndex,totalCount:(this.passage.questions||[]).length}),this.renderHeader(),this.renderPassageArea(),this.renderQuestionDock(),this.renderCompletionAdModal();const t=this.container.querySelector("#dock-scroll-body");t&&requestAnimationFrame(()=>{t.scrollTo({top:t.scrollHeight,behavior:"smooth"})}),this.scrollToEvidence(e)}scrollToEvidence(e){var a;const s=(a=e==null?void 0:e.evidenceSids)==null?void 0:a[0];if(!s)return;const t=this.container.querySelector(`[data-sid="${s}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"center"})}renderFullTranslationModal(){const e=this.container.querySelector("#full-ja-modal-host");if(!e)return;if(!this.showFullTranslationModal){e.innerHTML="";return}const s=(this.passage.paragraphs||[]).map(t=>{const a=(t.sentences||[]).map(n=>u(n.ja)).join("");return t.speaker?`
          <div class="full-ja-dialogue-row">
            <span class="full-ja-speaker">${u(t.speaker)}</span>
            <p class="full-ja-para">${a}</p>
          </div>
        `:`<p class="full-ja-para">${a}</p>`}).join("");e.innerHTML=`
      <div class="modal-backdrop" data-close-full-ja="true"></div>
      <section class="full-ja-modal" role="dialog" aria-label="日本語全訳">
        <header class="full-ja-header">
          <div>
            <span class="full-ja-badge">📄 日本語全訳まとめ</span>
            <h2 class="full-ja-title">${u(this.passage.titleJa)}</h2>
            <p class="full-ja-sub">${u(this.passage.title)}</p>
          </div>
          <button type="button" class="sheet-close-btn" data-close-full-ja="true" aria-label="閉じる">✕</button>
        </header>
        <div class="full-ja-body">
          ${s}
        </div>
        <footer class="full-ja-footer">
          <button type="button" class="full-ja-done-btn" data-close-full-ja="true">閉じる</button>
        </footer>
      </section>
    `}closeCompletionAdModal(){this.showCompletionAdModal=!1;const e=this.container.querySelector("#ad-modal-host");e&&(e.innerHTML=""),this.pendingGoHome&&(this.pendingGoHome=!1,this.unmount(),this.onBack&&this.onBack())}renderCompletionAdModal(){const e=this.container.querySelector("#ad-modal-host");if(!e)return;if(!this.showCompletionAdModal){e.innerHTML="";return}const s=this.passage.questions||[],t=this.getCorrectCount(),a=s.length>0&&t===s.length;e.innerHTML=`
      <div class="ad-modal-backdrop" id="ad-modal-backdrop">
        <div class="ad-modal-card" role="dialog" aria-label="学習完了・広告">
          <div class="ad-modal-header">
            <div class="ad-modal-score">
              ${a?"👑 全問正解！パーフェクト！":`🎉 全${s.length}問完了！（正解 ${t} / ${s.length}）`}
            </div>
            <button type="button" class="ad-modal-close-btn" id="ad-modal-close-btn" aria-label="閉じる">✕</button>
          </div>
          <div class="ad-modal-label">SPONSOR / 広告</div>
          <div class="ad-modal-body">
            <iframe
              srcdoc="&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;meta charset=&quot;utf-8&quot;&gt;&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;&lt;style&gt;* { box-sizing: border-box; } html, body { margin: 0; padding: 0; width: 100%; height: 100%; background: transparent; display: flex; justify-content: center; align-items: center; overflow: hidden; }&lt;/style&gt;&lt;/head&gt;&lt;body&gt;&lt;!-- admax --&gt;&lt;script src=&quot;https://adm.shinobi.jp/s/459e0fef7b870420fd9b2c0bc0da847d&quot;&gt;&lt;/script&gt;&lt;!-- admax --&gt;&lt;/body&gt;&lt;/html&gt;"
              width="300"
              height="250"
              loading="lazy"
              scrolling="no"
              style="border:none; overflow:hidden; width:300px; height:250px; display:block; margin:0 auto; max-width:100%; border-radius:8px; background:rgba(0,0,0,0.25);"
              title="広告"
            ></iframe>
          </div>
          <button type="button" class="ad-modal-dismiss-btn" id="ad-modal-dismiss-btn">
            ${this.pendingGoHome?"🏠 トップ画面へ進む →":"解説・和訳を確認する →"}
          </button>
        </div>
      </div>
    `;const n=e.querySelector("#ad-modal-close-btn"),o=e.querySelector("#ad-modal-dismiss-btn"),r=e.querySelector("#ad-modal-backdrop"),c=h=>{h&&(h.preventDefault(),h.stopPropagation()),this.closeCompletionAdModal()};n&&(n.onclick=c),o&&(o.onclick=c),r&&(r.onclick=h=>{h.target===r&&c(h)})}}const Ke=document.querySelector(".app-header"),Te=document.getElementById("main-container");let E=null,G=null;function X(){E&&(E.unmount(),E=null),I.close(),window.location.hash&&history.replaceState(null,"",window.location.pathname+window.location.search),G=new bs({container:Te,headerEl:Ke,onSelectPassage:i=>{se(i)}}),G.mount()}function se(i,e=!0){const s=oe(i);if(!s){X();return}E&&E.unmount(),I.close(),e&&history.pushState({passageId:i},"",`#passage=${encodeURIComponent(i)}`),E=new Ss({passage:s,container:Te,headerEl:Ke,onBack:()=>X(),onNavigatePassage:t=>se(t)}),E.mount()}window.addEventListener("popstate",()=>{const i=window.location.hash.match(/^#passage=(.+)$/);i?se(decodeURIComponent(i[1]),!1):X()});const je=document.getElementById("stage-viewport");je&&je.addEventListener("click",i=>{const e=document.getElementById("app");(typeof i.composedPath=="function"?i.composedPath():[]).includes(e)||e&&e.contains(i.target)||(I.close(),G&&(G.modalStepId||G.showStatsModal||G.showHelpModal||G.showCalendarModal)&&G.closeStepModal(),E&&E.showFullTranslationModal&&(E.showFullTranslationModal=!1,E.renderFullTranslationModal()))});I.ensureMounted();const Ae=window.location.hash.match(/^#passage=(.+)$/);Ae?se(decodeURIComponent(Ae[1]),!1):X();export{ie as W};
