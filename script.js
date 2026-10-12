const DEFAULT_DATA = {
  rules: [
     {id:1, number:"01", title:"الالتزام بالتسلسل الإداري", category:"السلوك والانضباط", text:"يلتزم جميع الأفراد بالتوجيهات الإدارية المعتمدة ما دامت متوافقة مع قوانين السيرفر."},
    {id:2, number:"02", title:"منع استغلال الصلاحيات", category:"السلوك والانضباط", text:"يُمنع استخدام الرتبة أو الصلاحيات لتحقيق منفعة شخصية أو مضايقة الآخرين."},
    {id:3, number:"03", title:"الزي الرسمي", category:"الزي والمعدات", text:"يجب الالتزام بالزي المحدد للرتبة أو المهمة أثناء الخدمة."},
    {id:4, number:"04", title:"المحافظة على المعدات", category:"الزي والمعدات", text:"تستخدم المركبات والمعدات الرسمية للمهام المصرح بها فقط."},
    {id:5, number:"05", title:"تنظيم الاتصالات", category:"الاتصالات", text:"تكون الاتصالات واضحة ومختصرة، وتُعطى الأولوية للبلاغات العاجلة."},
    {id:6, number:"06", title:"الالتزام بالرول بلاي", category:"الميدان والرول بلاي", text:"يجب الالتزام بقواعد الرول بلاي وعدم استخدام معلومات من خارج اللعبة داخل السيناريو."},
    {id:7, number:"07", title:"سرية المعلومات", category:"السلوك والانضباط", text:"يُمنع نشر معلومات القطاع الداخلية خارج القنوات المعتمدة."},
    {id:8, number:"08", title:"رفع التقارير", category:"الميدان والرول بلاي", text:"توثّق الوقائع المهمة وترفع التقارير للمسؤول المباشر عند الحاجة."}
  ],
 
ranks: [
    {
        id: 11,
        name: "Cadet",
        duties: "التدرب على الأنظمة والقوانين، والتعرف على الإجراءات الأساسية، وتنفيذ تعليمات المدربين والمسؤولين."
    },
    {
        id: 12,
        name: "Solo Cadet",
        duties: "تطبيق أساسيات العمل الميداني، والالتزام بالقوانين والتعليمات، وتنفيذ المهام الموكلة إليه من تحت الإشراف."
    },
    {
        id: 13,
        name: "Officer |",
        duties: "تنفيذ الدوريات والمهام الميدانية، والاستجابة للبلاغات، وتطبيق الأنظمة المعتمدة وتوثيق الإجراءات."
    },
    {
        id: 14,
        name: "Officer ||",
        duties: "تنفيذ المهام الميدانية باستقلالية، ومساندة زملائه، والالتزام بإجراءات العمل ورفع التقارير اللازمة."
    },
    {
        id: 15,
        name: "Officer |||",
        duties: "تنفيذ المهام المتقدمة، ومساندة الضباط الأقل خبرة، والمساهمة في تنظيم العمل الميداني."
    },
    {
        id: 16,
        name: "Senior Officer",
        duties: "الإشراف الميداني عند التكليف، وتوجيه الضباط، ومراجعة الإجراءات والتأكد من الالتزام بالأنظمة."
    },
    {
        id: 17,
        name: "Senior Lead Officer",
        duties: "تنسيق عمل الضباط ميدانيًا، ومتابعة تنفيذ المهام، وتقديم التوجيه ورفع الملاحظات للمسؤولين."
    },
    {
        id: 18,
        name: "Sergeant",
        duties: "الإشراف على الأفراد والفرق الميدانية، وتوزيع المهام، ومتابعة الأداء والانضباط ورفع التقارير."
    },
    {
        id: 19,
        name: "First Sergeant",
        duties: "مساندة قيادة الأفراد، ومتابعة أداء الرقباء والفرق، ومعالجة الملاحظات التشغيلية ورفع التوصيات."
    },
    {
        id: 20,
        name: "Staff Sergeant",
        duties: "متابعة سير العمل اليومي، والإشراف على تنفيذ التعليمات، وتنسيق المهام بين الأفراد والقيادات المباشرة."
    },
    {
        id: 21,
        name: "Lieutenant",
        duties: "قيادة الفرق أو الوحدات المكلف بها، والإشراف على توزيع المهام، ومتابعة الأداء ورفع التقارير القيادية."
    },
    {
        id: 22,
        name: "First Lieutenant",
        duties: "مساندة قيادة الوحدة، والإشراف على الضباط والأفراد، ومتابعة الخطط التشغيلية واتخاذ الإجراءات ضمن الصلاحيات."
    },
    {
        id: 23,
        name: "Captain",
        duties: "قيادة الوحدة أو القسم، واعتماد خطط العمل ضمن الصلاحيات، ومتابعة أداء القيادات والأفراد واتخاذ القرارات الإدارية."
    }
  ],
  penalties: [
    {id:21, action:"تنبيه", case:"  	مخالفة بسيطة أو أولية ", details:"تنبيه شفهي أو توثيق ملاحظة."},
    {id:22, action:"إنذار رسمي", case:"تكرار المخالفة أو عدم الالتزام بالتوجيهات", details:"إنذار رسمي مع توضيح سبب المخالفة."},
    {id:23, action:"إيقاف مؤقت", case:"مخالفة متوسطة أو تكرار بعد الإنذار", details:"تحدد المدة من قيادة القطاع وفق نظام السيرفر."},
    {id:24, action:"خفض رتبة", case:"إساءة استخدام الصلاحيات أو إخلال جسيم", details:"بعد مراجعة الأدلة وسماع رد الفرد."},
    {id:25, action:"فصل من القطاع", case:"مخالفة جسيمة أو تكرار مخالفات خطيرة", details:"بقرار من الجهة المخولة في السيرفر."}
  ],
  announcements: [
    {id:31, title:"مرحبًا بكم في دليل قطاع LSPD", date:"تعميم ثابت", text:"هذا الموقع مخصص لتنظيم قوانين القطاع ورتبه وتعاميمه. يرجى الرجوع إلى القوانين المحدثة قبل أداء المهام."}
  ]
};
let data = clone(DEFAULT_DATA);
let editMode = false;
let editorState = null;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
function clone(x){ return JSON.parse(JSON.stringify(x)); }
function loadData(){ try { const raw=localStorage.getItem("lspdSiteData"); return raw?JSON.parse(raw):clone(DEFAULT_DATA); } catch(e){ return clone(DEFAULT_DATA); } }
async function saveData(){
  const token = sessionStorage.getItem("lspdAdminToken");
  if(!token){ toast("سجّل الدخول بصلاحية الإدارة أولًا."); return; }
  try{
    const response = await fetch("/.netlify/functions/save-data", {
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},
      body:JSON.stringify({data})
    });
    const result = await response.json().catch(()=>({}));
    if(!response.ok) throw new Error(result.error || "تعذر حفظ التعديلات.");
    render();
    toast("تم إرسال التحديث إلى GitHub وسيُنشر الموقع تلقائيًا خلال قليل.");
  }catch(error){
    toast(error.message || "تعذر الحفظ. تأكد من إعدادات Netlify والاتصال.");
  }
}
function toast(msg){ const el=$("#toast"); el.textContent=msg; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),2500); }
function esc(s){ return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function render(){
  const q=($("#ruleSearch").value||"").trim().toLowerCase(), cat=$("#ruleCategory").value;
  const rules=data.rules.filter(r=>(cat==="الكل"||r.category===cat)&&`${r.title} ${r.text} ${r.number} ${r.category}`.toLowerCase().includes(q));
  $("#rulesGrid").innerHTML=rules.map(r=>`<article class="rule-card"><div class="rule-top"><span class="rule-number">RULE ${esc(r.number)}</span><span class="rule-category">${esc(r.category)}</span></div><h3>${esc(r.title)}</h3><p>${esc(r.text)}</p>${editMode?`<div class="card-actions"><button class="mini-btn" data-edit="rule" data-id="${r.id}">تعديل</button><button class="mini-btn delete" data-delete="rule" data-id="${r.id}">حذف</button></div>`:""}</article>`).join("");
  $("#rulesEmpty").classList.toggle("hidden",rules.length!==0);
  $("#ranksBody").innerHTML=data.ranks.map(r=>`<tr><td><strong>${esc(r.name)}</strong></td><td>${esc(r.duties)}</td>${editMode?`<td><button class="mini-btn" data-edit="rank" data-id="${r.id}">تعديل</button> <button class="mini-btn delete" data-delete="rank" data-id="${r.id}">حذف</button></td>`:""}</tr>`).join("");
  $("#penaltiesBody").innerHTML=data.penalties.map(p=>`<tr><td><strong>${esc(p.action)}</strong></td><td>${esc(p.case)}</td><td>${esc(p.details)}</td>${editMode?`<td><button class="mini-btn" data-edit="penalty" data-id="${p.id}">تعديل</button> <button class="mini-btn delete" data-delete="penalty" data-id="${p.id}">حذف</button></td>`:""}</tr>`).join("");
  $("#announcementsList").innerHTML=data.announcements.map(a=>`<article class="announcement"><small>${esc(a.date)}</small><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p>${editMode?`<div class="card-actions"><button class="mini-btn" data-edit="announcement" data-id="${a.id}">تعديل</button><button class="mini-btn delete" data-delete="announcement" data-id="${a.id}">حذف</button></div>`:""}</article>`).join("");
  $("#ruleCount").textContent=data.rules.length; $("#rankCount").textContent=data.ranks.length; $("#penaltyCount").textContent=data.penalties.length;
  $$(".edit-only").forEach(e=>e.classList.toggle("hidden",!editMode));
  $$(".edit-column").forEach(e=>e.classList.toggle("hidden",!editMode));
  $("#adminPanel").classList.toggle("hidden",!editMode);
  $("#editToggle").textContent=editMode?"إنهاء التعديل":"وضع التعديل";
  $("#editToggle").classList.toggle("btn-primary",editMode);
}
function openEditor(type,item=null){
  const fields={
    rule:[["number","رقم القانون","text"],["title","عنوان القانون","text"],["category","التصنيف","select"],["text","نص القانون","textarea"]],
    rank:[["name","اسم الرتبة","text"],["duties","المسؤوليات","textarea"]],
    penalty:[["action","الإجراء","text"],["case","الحالة / المخالفة","textarea"],["details","التفاصيل","textarea"]],
    announcement:[["title","عنوان التعميم","text"],["date","التاريخ أو الوصف","text"],["text","نص التعميم","textarea"]]
  };
  const titles={rule:item?"تعديل قانون":"إضافة قانون",rank:item?"تعديل رتبة":"إضافة رتبة",penalty:item?"تعديل إجراء":"إضافة إجراء",announcement:item?"تعديل تعميم":"إضافة تعميم"};
  editorState={type,id:item?.id??null};
  $("#dialogTitle").textContent=titles[type];
  $("#dialogFields").innerHTML=fields[type].map(([key,label,kind])=>{
    const value=item?.[key]??(key==="category"?"السلوك والانضباط":"");
    let input=kind==="textarea"?`<textarea id="f_${key}" required>${esc(value)}</textarea>`:kind==="select"?`<select id="f_${key}">${["السلوك والانضباط","الزي والمعدات","الاتصالات","الميدان والرول بلاي"].map(c=>`<option ${value===c?"selected":""}>${c}</option>`).join("")}</select>`:`<input id="f_${key}" type="text" value="${esc(value)}" required>`;
    return `<div class="field"><label for="f_${key}">${label}</label>${input}</div>`;
  }).join("");
  $("#editorDialog").showModal();
}
$("#editorForm").addEventListener("submit",e=>{
  if(e.submitter?.value==="cancel") return;
  e.preventDefault();
  const {type,id}=editorState;
  const keys={rule:["number","title","category","text"],rank:["name","duties"],penalty:["action","case","details"],announcement:["title","date","text"]}[type];
  const item={}; keys.forEach(k=>item[k]=$("#f_"+k).value.trim());
  if(!keys.every(k=>item[k])){toast("عبّئ جميع الحقول أولًا.");return;}
  const collection={rule:"rules",rank:"ranks",penalty:"penalties",announcement:"announcements"}[type];
  if(id!==null){const i=data[collection].findIndex(x=>x.id===id); if(i>=0)data[collection][i]={...data[collection][i],...item};}
  else {item.id=Date.now();if(type==="rule"&&!item.number)item.number=String(data.rules.length+1).padStart(2,"0");data[collection].push(item);}
  $("#editorDialog").close();saveData();
});
document.addEventListener("click",e=>{
  const edit=e.target.closest("[data-edit]"), del=e.target.closest("[data-delete]");
  if(edit){const type=edit.dataset.edit, collection={rule:"rules",rank:"ranks",penalty:"penalties",announcement:"announcements"}[type];openEditor(type,data[collection].find(x=>x.id===Number(edit.dataset.id))); }
  if(del){const type=del.dataset.delete, collection={rule:"rules",rank:"ranks",penalty:"penalties",announcement:"announcements"}[type];if(confirm("متأكد أنك تبي تحذف هذا العنصر؟")){data[collection]=data[collection].filter(x=>x.id!==Number(del.dataset.id));saveData();}}
});
async function adminLogin(){
  const password = prompt("أدخل كلمة مرور الإدارة:");
  if(password === null || !password) return;
  try{
    const response = await fetch("/.netlify/functions/admin-login", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({password})
    });
    const result = await response.json().catch(()=>({}));
    if(!response.ok || !result.token) throw new Error(result.error || "كلمة المرور غير صحيحة.");
    sessionStorage.setItem("lspdAdminToken", result.token);
    document.body.classList.add("admin-authenticated");
    $("#editToggle").setAttribute("aria-hidden","false");
    toast("تم تسجيل الدخول للإدارة.");
  }catch(error){
    toast(error.message || "تعذر تسجيل الدخول.");
  }
}
function restoreAdminSession(){
  if(sessionStorage.getItem("lspdAdminToken")){
    document.body.classList.add("admin-authenticated");
    $("#editToggle").setAttribute("aria-hidden","false");
  }
}
$("#editToggle").addEventListener("click",()=>{
  const token = sessionStorage.getItem("lspdAdminToken");
  if(!token){ adminLogin(); return; }
  editMode=!editMode;
  render();
  if(editMode) toast("وضع التعديل مفعّل.");
});
document.addEventListener("keydown",e=>{
  if(e.ctrlKey && e.shiftKey && e.key.toLowerCase()==="l"){
    e.preventDefault();
    adminLogin();
  }
});
$("#addRule").addEventListener("click",()=>openEditor("rule"));
$("#addRank").addEventListener("click",()=>openEditor("rank"));
$("#addPenalty").addEventListener("click",()=>openEditor("penalty"));
$("#addAnnouncement").addEventListener("click",()=>openEditor("announcement"));
$("#ruleSearch").addEventListener("input",render);$("#ruleCategory").addEventListener("change",render);
$("#menuToggle").addEventListener("click",()=>$("#nav").classList.toggle("open"));
$$(".nav-link").forEach(a=>a.addEventListener("click",()=>{$$("#nav .nav-link").forEach(x=>x.classList.remove("active"));a.classList.add("active");$("#nav").classList.remove("open");}));
$("#exportBtn").addEventListener("click",exportData);
function exportData(){const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="LSPD-backup.json";a.click();URL.revokeObjectURL(url);toast("تم تنزيل نسخة احتياطية.");}
$("#importBtn").addEventListener("click",()=>$("#importFile").click());
$("#importFile").addEventListener("change",async e=>{const f=e.target.files[0];if(!f)return;try{const d=JSON.parse(await f.text());if(!d.rules||!d.ranks||!d.penalties||!d.announcements)throw new Error();data=d;saveData();toast("تم استيراد البيانات.");}catch(err){toast("الملف غير صالح أو ليس نسخة LSPD.");}e.target.value="";});
$("#resetBtn").addEventListener("click",()=>{if(confirm("سيتم حذف تعديلاتك الحالية واستعادة البيانات الافتراضية. هل أنت متأكد؟")){data=clone(DEFAULT_DATA);saveData();}});
$("#year").textContent=new Date().getFullYear();
async function initSite(){
  restoreAdminSession();
  try{
    const response = await fetch("/site-data.json?ts="+Date.now(), {cache:"no-store"});
    if(response.ok){
      const remoteData = await response.json();
      if(remoteData && Array.isArray(remoteData.rules) && Array.isArray(remoteData.ranks) &&
         Array.isArray(remoteData.penalties) && Array.isArray(remoteData.announcements)){
        data = remoteData;
      }
    }
  }catch(error){
    console.warn("Could not load published site data; using built-in defaults.", error);
  }
  render();
  if(new URLSearchParams(location.search).get("admin")==="1"){
    history.replaceState({}, "", location.pathname + location.hash);
    if(!sessionStorage.getItem("lspdAdminToken")) await adminLogin();
  }
}
initSite();
