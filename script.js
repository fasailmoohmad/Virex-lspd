const DEFAULT_DATA = {
  rules: [
    { id: 1, number: "01", title: "الالتزام بالتسلسل الإداري", category: "السلوك والانضباط", text: "يلتزم جميع الأفراد بالتوجيهات الإدارية المعتمدة ما دامت متوافقة مع قوانين السيرفر." },
    { id: 2, number: "02", title: "منع استغلال الصلاحيات", category: "السلوك والانضباط", text: "يُمنع استخدام الرتبة أو الصلاحيات لتحقيق منفعة شخصية أو مضايقة الآخرين." },
    { id: 3, number: "03", title: "الزي الرسمي", category: "الزي والمعدات", text: "يجب الالتزام بالزي المحدد للرتبة أو المهمة أثناء الخدمة." },
    { id: 4, number: "04", title: "المحافظة على المعدات", category: "الزي والمعدات", text: "تستخدم المركبات والمعدات الرسمية للمهام المصرح بها فقط." },
    { id: 5, number: "05", title: "تنظيم الاتصالات", category: "الاتصالات", text: "تكون الاتصالات واضحة ومختصرة، وتُعطى الأولوية للبلاغات العاجلة." },
    { id: 6, number: "06", title: "الالتزام بالرول بلاي", category: "الميدان والرول بلاي", text: "يجب الالتزام بقواعد الرول بلاي وعدم استخدام معلومات من خارج اللعبة داخل السيناريو." },
    { id: 7, number: "07", title: "سرية المعلومات", category: "السلوك والانضباط", text: "يُمنع نشر معلومات القطاع الداخلية خارج القنوات المعتمدة." },
    { id: 8, number: "08", title: "رفع التقارير", category: "الميدان والرول بلاي", text: "توثّق الوقائع المهمة وترفع التقارير للمسؤول المباشر عند الحاجة." }
  ],

  ranks: [
    { id: 11, name: "Cadet", duties: "التدرب على الأنظمة والقوانين، والتعرف على الإجراءات الأساسية، وتنفيذ تعليمات المدربين والمسؤولين." },
    { id: 12, name: "Solo Cadet", duties: "تطبيق أساسيات العمل الميداني، والالتزام بالقوانين والتعليمات، وتنفيذ المهام الموكلة إليه تحت الإشراف." },
    { id: 13, name: "Officer |", duties: "تنفيذ الدوريات والمهام الميدانية، والاستجابة للبلاغات، وتطبيق الأنظمة المعتمدة وتوثيق الإجراءات." },
    { id: 14, name: "Officer ||", duties: "تنفيذ المهام الميدانية باستقلالية، ومساندة زملائه، والالتزام بإجراءات العمل ورفع التقارير اللازمة." },
    { id: 15, name: "Officer |||", duties: "تنفيذ المهام المتقدمة، ومساندة الضباط الأقل خبرة، والمساهمة في تنظيم العمل الميداني." },
    { id: 16, name: "Senior Officer", duties: "الإشراف الميداني عند التكليف، وتوجيه الضباط، ومراجعة الإجراءات والتأكد من الالتزام بالأنظمة." },
    { id: 17, name: "Senior Lead Officer", duties: "تنسيق عمل الضباط ميدانيًا، ومتابعة تنفيذ المهام، وتقديم التوجيه ورفع الملاحظات للمسؤولين." },
    { id: 18, name: "Sergeant", duties: "الإشراف على الأفراد والفرق الميدانية، وتوزيع المهام، ومتابعة الأداء والانضباط ورفع التقارير." },
    { id: 19, name: "First Sergeant", duties: "مساندة قيادة الأفراد، ومتابعة أداء الرقباء والفرق، ومعالجة الملاحظات التشغيلية ورفع التوصيات." },
    { id: 20, name: "Staff Sergeant", duties: "متابعة سير العمل اليومي، والإشراف على تنفيذ التعليمات، وتنسيق المهام بين الأفراد والقيادات المباشرة." },
    { id: 21, name: "Lieutenant", duties: "قيادة الفرق أو الوحدات المكلف بها، والإشراف على توزيع المهام، ومتابعة الأداء ورفع التقارير القيادية." },
    { id: 22, name: "First Lieutenant", duties: "مساندة قيادة الوحدة، والإشراف على الضباط والأفراد، ومتابعة الخطط التشغيلية واتخاذ الإجراءات ضمن الصلاحيات." },
    { id: 23, name: "Captain", duties: "قيادة الوحدة أو القسم، واعتماد خطط العمل ضمن الصلاحيات، ومتابعة أداء القيادات والأفراد واتخاذ القرارات الإدارية." }
  ],

  penalties: [
    { id: 21, action: "تنبيه", case: "مخالفة بسيطة أو أولية", details: "تنبيه شفهي أو توثيق ملاحظة." },
    { id: 22, action: "إنذار رسمي", case: "تكرار المخالفة أو عدم الالتزام بالتوجيهات", details: "إنذار رسمي مع توضيح سبب المخالفة." },
    { id: 23, action: "إيقاف مؤقت", case: "مخالفة متوسطة أو تكرار بعد الإنذار", details: "تحدد المدة من قيادة القطاع وفق نظام السيرفر." },
    { id: 24, action: "خفض رتبة", case: "إساءة استخدام الصلاحيات أو إخلال جسيم", details: "بعد مراجعة الأدلة وسماع رد الفرد." },
    { id: 25, action: "فصل من القطاع", case: "مخالفة جسيمة أو تكرار مخالفات خطيرة", details: "بقرار من الجهة المخولة في السيرفر." }
  ],

  announcements: [
    { id: 31, title: "مرحبًا بكم في دليل قطاع LSPD", date: "تعميم ثابت", text: "هذا الموقع مخصص لتنظيم قوانين القطاع ورتبه وتعاميمه. يرجى الرجوع إلى القوانين المحدثة قبل أداء المهام." }
  ]
};

let data = clone(DEFAULT_DATA);
let editMode = false;
let editorState = null;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function toast(message) {
  const element = $("#toast");
  if (!element) return;

  element.textContent = message;
  element.classList.add("show");

  setTimeout(() => {
    element.classList.remove("show");
  }, 2500);
}

function esc(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

async function saveData() {
  const token = sessionStorage.getItem("lspdAdminToken");

  if (!token) {
    toast("سجّل الدخول بصلاحية الإدارة أولًا.");
    return;
  }

  try {
    const response = await fetch("/.netlify/functions/save-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ data })
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.error || "تعذر حفظ التعديلات.");
    }

    render();
    toast("تم إرسال التحديث إلى GitHub.");
  } catch (error) {
    toast(error.message || "تعذر الحفظ. تحقق من إعدادات Netlify.");
  }
}

function render() {
  const searchInput = $("#ruleSearch");
  const categorySelect = $("#ruleCategory");

  if (
    !searchInput ||
    !categorySelect ||
    !$("#rulesGrid") ||
    !$("#ranksBody") ||
    !$("#penaltiesBody")
  ) {
    console.error("بعض عناصر HTML المطلوبة غير موجودة.");
    return;
  }

  const query = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  const rules = data.rules.filter(rule =>
    (category === "الكل" || rule.category === category) &&
    `${rule.title} ${rule.text} ${rule.number} ${rule.category}`
      .toLowerCase()
      .includes(query)
  );

  $("#rulesGrid").innerHTML = rules.map(rule => `
    <article class="rule-card">
      <div class="rule-top">
        <span class="rule-number">RULE ${esc(rule.number)}</span>
        <span class="rule-category">${esc(rule.category)}</span>
      </div>

      <h3>${esc(rule.title)}</h3>
      <p>${esc(rule.text)}</p>

      ${editMode ? `
        <div class="card-actions">
          <button class="mini-btn" data-edit="rule" data-id="${rule.id}">تعديل</button>
          <button class="mini-btn delete" data-delete="rule" data-id="${rule.id}">حذف</button>
        </div>
      ` : ""}
    </article>
  `).join("");

  if ($("#rulesEmpty")) {
    $("#rulesEmpty").classList.toggle("hidden", rules.length !== 0);
  }

  $("#ranksBody").innerHTML = data.ranks.map(rank => `
    <tr>
      <td><strong>${esc(rank.name)}</strong></td>
      <td>${esc(rank.duties)}</td>

      ${editMode ? `
        <td>
          <button class="mini-btn" data-edit="rank" data-id="${rank.id}">تعديل</button>
          <button class="mini-btn delete" data-delete="rank" data-id="${rank.id}">حذف</button>
        </td>
      ` : ""}
    </tr>
  `).join("");

  $("#penaltiesBody").innerHTML = data.penalties.map(penalty => `
    <tr>
      <td><strong>${esc(penalty.action)}</strong></td>
      <td>${esc(penalty.case)}</td>
      <td>${esc(penalty.details)}</td>

      ${editMode ? `
        <td>
          <button class="mini-btn" data-edit="penalty" data-id="${penalty.id}">تعديل</button>
          <button class="mini-btn delete" data-delete="penalty" data-id="${penalty.id}">حذف</button>
        </td>
      ` : ""}
    </tr>
  `).join("");

  if ($("#announcementsList")) {
    $("#announcementsList").innerHTML = data.announcements.map(announcement => `
      <article class="announcement">
        <small>${esc(announcement.date)}</small>
        <h3>${esc(announcement.title)}</h3>
        <p>${esc(announcement.text)}</p>

        ${editMode ? `
          <div class="card-actions">
            <button class="mini-btn" data-edit="announcement" data-id="${announcement.id}">تعديل</button>
            <button class="mini-btn delete" data-delete="announcement" data-id="${announcement.id}">حذف</button>
          </div>
        ` : ""}
      </article>
    `).join("");
  }

  if ($("#ruleCount")) $("#ruleCount").textContent = data.rules.length;
  if ($("#rankCount")) $("#rankCount").textContent = data.ranks.length;
  if ($("#penaltyCount")) $("#penaltyCount").textContent = data.penalties.length;

  $$(".edit-only").forEach(element => {
    element.classList.toggle("hidden", !editMode);
  });

  $$(".edit-column").forEach(element => {
    element.classList.toggle("hidden", !editMode);
  });

  if ($("#adminPanel")) {
    $("#adminPanel").classList.toggle("hidden", !editMode);
  }

  if ($("#editToggle")) {
    $("#editToggle").textContent = editMode ? "إنهاء التعديل" : "وضع التعديل";
    $("#editToggle").classList.toggle("btn-primary", editMode);
  }
}

function openEditor(type, item = null) {
  const fields = {
    rule: [
      ["number", "رقم القانون", "text"],
      ["title", "عنوان القانون", "text"],
      ["category", "التصنيف", "select"],
      ["text", "نص القانون", "textarea"]
    ],
    rank: [
      ["name", "اسم الرتبة", "text"],
      ["duties", "المسؤوليات", "textarea"]
    ],
    penalty: [
      ["action", "الإجراء", "text"],
      ["case", "الحالة / المخالفة", "textarea"],
      ["details", "التفاصيل", "textarea"]
    ],
    announcement: [
      ["title", "عنوان التعميم", "text"],
      ["date", "التاريخ أو الوصف", "text"],
      ["text", "نص التعميم", "textarea"]
    ]
  };

  const titles = {
    rule: item ? "تعديل قانون" : "إضافة قانون",
    rank: item ? "تعديل رتبة" : "إضافة رتبة",
    penalty: item ? "تعديل إجراء" : "إضافة إجراء",
    announcement: item ? "تعديل تعميم" : "إضافة تعميم"
  };

  editorState = {
    type,
    id: item?.id ?? null
  };

  $("#dialogTitle").textContent = titles[type];

  $("#dialogFields").innerHTML = fields[type].map(([key, label, kind]) => {
    const value = item?.[key] ?? (
      key === "category" ? "السلوك والانضباط" : ""
    );

    let input;

    if (kind === "textarea") {
      input = `<textarea id="f_${key}" required>${esc(value)}</textarea>`;
    } else if (kind === "select") {
      const categories = [
        "السلوك والانضباط",
        "الزي والمعدات",
        "الاتصالات",
        "الميدان والرول بلاي"
      ];

      input = `<select id="f_${key}">
        ${categories.map(option => `
          <option ${value === option ? "selected" : ""}>${option}</option>
        `).join("")}
      </select>`;
    } else {
      input = `<input id="f_${key}" type="text" value="${esc(value)}" required>`;
    }

    return `
      <div class="field">
        <label for="f_${key}">${label}</label>
        ${input}
      </div>
    `;
  }).join("");

  $("#editorDialog").showModal();
}

$("#editorForm").addEventListener("submit", event => {
  if (event.submitter?.value === "cancel") return;

  event.preventDefault();

  const { type, id } = editorState;

  const keys = {
    rule: ["number", "title", "category", "text"],
    rank: ["name", "duties"],
    penalty: ["action", "case", "details"],
    announcement: ["title", "date", "text"]
  }[type];

  const item = {};

  keys.forEach(key => {
    item[key] = $("#f_" + key).value.trim();
  });

  if (!keys.every(key => item[key])) {
    toast("عبّئ جميع الحقول أولًا.");
    return;
  }

  const collection = {
    rule: "rules",
    rank: "ranks",
    penalty: "penalties",
    announcement: "announcements"
  }[type];

  if (id !== null) {
    const index = data[collection].findIndex(entry => entry.id === id);

    if (index >= 0) {
      data[collection][index] = {
        ...data[collection][index],
        ...item
      };
    }
  } else {
    item.id = Date.now();

    if (type === "rule" && !item.number) {
      item.number = String(data.rules.length + 1).padStart(2, "0");
    }

    data[collection].push(item);
  }

  $("#editorDialog").close();
  saveData();
});

document.addEventListener("click", event => {
  const editButton = event.target.closest("[data-edit]");
  const deleteButton = event.target.closest("[data-delete]");

  if (editButton) {
    const type = editButton.dataset.edit;

    const collection = {
      rule: "rules",
      rank: "ranks",
      penalty: "penalties",
      announcement: "announcements"
    }[type];

    const item = data[collection].find(
      entry => entry.id === Number(editButton.dataset.id)
    );

    if (item) openEditor(type, item);
  }

  if (deleteButton) {
    const type = deleteButton.dataset.delete;

    const collection = {
      rule: "rules",
      rank: "ranks",
      penalty: "penalties",
      announcement: "announcements"
    }[type];

    if (confirm("متأكد أنك تبي تحذف هذا العنصر؟")) {
      data[collection] = data[collection].filter(
        entry => entry.id !== Number(deleteButton.dataset.id)
      );

      saveData();
    }
  }
});

async function adminLogin() {
  const password = prompt("أدخل كلمة مرور الإدارة:");

  if (password === null || !password) return;

  try {
    const response = await fetch("/.netlify/functions/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ password })
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || !result.token) {
      throw new Error(result.error || "كلمة المرور غير صحيحة.");
    }

    sessionStorage.setItem("lspdAdminToken", result.token);
    document.body.classList.add("admin-authenticated");

    if ($("#editToggle")) {
      $("#editToggle").setAttribute("aria-hidden", "false");
    }

    toast("تم تسجيل الدخول للإدارة.");
  } catch (error) {
    toast(error.message || "تعذر تسجيل الدخول.");
  }
}

function restoreAdminSession() {
  if (sessionStorage.getItem("lspdAdminToken")) {
    document.body.classList.add("admin-authenticated");

    if ($("#editToggle")) {
      $("#editToggle").setAttribute("aria-hidden", "false");
    }
  }
}

if ($("#editToggle")) {
  $("#editToggle").addEventListener("click", () => {
    const token = sessionStorage.getItem("lspdAdminToken");

    if (!token) {
      adminLogin();
      return;
    }

    editMode = !editMode;
    render();

    if (editMode) toast("وضع التعديل مفعّل.");
  });
}

document.addEventListener("keydown", event => {
  if (
    event.ctrlKey &&
    event.shiftKey &&
    event.key.toLowerCase() === "l"
  ) {
    event.preventDefault();
    adminLogin();
  }
});

if ($("#addRule")) {
  $("#addRule").addEventListener("click", () => openEditor("rule"));
}

if ($("#addRank")) {
  $("#addRank").addEventListener("click", () => openEditor("rank"));
}

if ($("#addPenalty")) {
  $("#addPenalty").addEventListener("click", () => openEditor("penalty"));
}

if ($("#addAnnouncement")) {
  $("#addAnnouncement").addEventListener("click", () => openEditor("announcement"));
}

if ($("#ruleSearch")) {
  $("#ruleSearch").addEventListener("input", render);
}

if ($("#ruleCategory")) {
  $("#ruleCategory").addEventListener("change", render);
}

if ($("#menuToggle")) {
  $("#menuToggle").addEventListener("click", () => {
    $("#nav").classList.toggle("open");
  });
}

$$(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    $$("#nav .nav-link").forEach(element => {
      element.classList.remove("active");
    });

    link.classList.add("active");

    if ($("#nav")) {
      $("#nav").classList.remove("open");
    }
  });
});

function exportData() {
  const blob = new Blob(
    [JSON.stringify(data, null, 2)],
    { type: "application/json" }
  );

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = "LSPD-backup.json";
  anchor.click();

  URL.revokeObjectURL(url);
  toast("تم تنزيل نسخة احتياطية.");
}

if ($("#exportBtn")) {
  $("#exportBtn").addEventListener("click", exportData);
}

if ($("#importBtn") && $("#importFile")) {
  $("#importBtn").addEventListener("click", () => {
    $("#importFile").click();
  });
}

if ($("#importFile")) {
  $("#importFile").addEventListener("change", async event => {
    const file = event.target.files[0];

    if (!file) return;

    try {
      const importedData = JSON.parse(await file.text());

      if (
        !Array.isArray(importedData.rules) ||
        !Array.isArray(importedData.ranks) ||
        !Array.isArray(importedData.penalties) ||
        !Array.isArray(importedData.announcements)
      ) {
        throw new Error("Invalid LSPD data");
      }

      data = importedData;
      saveData();
      toast("تم استيراد البيانات.");
    } catch (error) {
      toast("الملف غير صالح أو ليس نسخة LSPD.");
    }

    event.target.value = "";
  });
}

if ($("#resetBtn")) {
  $("#resetBtn").addEventListener("click", () => {
    if (confirm("سيتم استعادة البيانات الافتراضية. هل أنت متأكد؟")) {
      data = clone(DEFAULT_DATA);
      saveData();
    }
  });
}

if ($("#year")) {
  $("#year").textContent = new Date().getFullYear();
}

async function initSite() {
  restoreAdminSession();

  try {
    const response = await fetch(
      "/site-data.json?ts=" + Date.now(),
      { cache: "no-store" }
    );

    if (response.ok) {
      const remoteData = await response.json();

      if (
        remoteData &&
        Array.isArray(remoteData.rules) &&
        Array.isArray(remoteData.ranks) &&
        Array.isArray(remoteData.penalties) &&
        Array.isArray(remoteData.announcements)
      ) {
        data = remoteData;
      }
    }
  } catch (error) {
    console.warn(
      "تعذر تحميل site-data.json، سيتم استخدام البيانات الافتراضية.",
      error
    );
  }

  render();

  if (new URLSearchParams(location.search).get("admin") === "1") {
    history.replaceState({}, "", location.pathname + location.hash);

    if (!sessionStorage.getItem("lspdAdminToken")) {
      await adminLogin();
    }
  }
}

initSite();
