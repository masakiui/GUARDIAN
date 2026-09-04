/*
  GUARDIAN β版
  求人データ
*/

const jobs = [
  {
    id: 1,
    facility: "ひかりこども園",
    jobType: "保育士",
    employment: "正社員",
    salary: "月給 210,000円〜",
    location: "岡山市南区",
    workingHours: "7:00〜19:00の間でシフト制",

    atmosphere:
      "職員同士で相談しやすく、子ども一人ひとりに向き合うことを大切にしている職場です。",

    good:
      "先輩職員に相談しやすいところです。",

    difficult:
      "行事前は準備が多く、忙しくなる時期があります。",

    suitable:
      "子どもとじっくり関わりたい方に向いています。",

    phone: "090-XXXX-XXXX",

    phoneAvailable: true,

    application: true
  },

  {
    id: 2,
    facility: "みどり保育園",
    jobType: "保育士",
    employment: "パート",
    salary: "時給 1,200円〜",
    location: "岡山市北区",
    workingHours: "8:00〜17:00",

    atmosphere:
      "比較的少人数の職場で、職員同士のコミュニケーションを大切にしています。",

    good:
      "勤務時間について相談しやすいところです。",

    difficult:
      "時間帯によって忙しさに差があります。",

    suitable:
      "家庭との両立を考えている方にも向いています。",

    phone: null,

    phoneAvailable: false,

    application: true
  },

  {
    id: 3,
    facility: "そらの園",
    jobType: "調理師",
    employment: "正社員",
    salary: "月給 190,000円〜",
    location: "岡山市南区",
    workingHours: "8:00〜17:00",

    atmosphere:
      "子どもたちの食事を通して成長を支えることを大切にしています。",

    good:
      "子どもたちから直接『おいしかった』と言ってもらえることがあります。",

    difficult:
      "大量調理のため、時間管理が重要です。",

    suitable:
      "食を通して子どもたちを支えたい方に向いています。",

    phone: "090-XXXX-XXXX",

    phoneAvailable: true,

    application: true
  }
];


/*
  DOM
*/

const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");
const jobTypeFilter = document.getElementById("jobTypeFilter");
const searchButton = document.getElementById("searchButton");

const modal = document.getElementById("jobModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");


/*
  求人一覧表示
*/

function renderJobs(data) {

  jobList.innerHTML = "";

  if (data.length === 0) {

    jobList.innerHTML = `
      <div class="job-card">
        <h3>求人が見つかりませんでした</h3>
        <p class="job-meta">
          条件を変更してもう一度検索してください。
        </p>
      </div>
    `;

    return;
  }


  data.forEach(job => {

    const card = document.createElement("article");

    card.className = "job-card";

    card.innerHTML = `
      <span class="job-tag">${job.jobType}</span>

      <h3>${job.facility}</h3>

      <p class="job-meta">
        ${job.employment} ・ ${job.location}
      </p>

      <p class="job-meta">
        勤務時間：${job.workingHours}
      </p>

      <p class="job-salary">
        ${job.salary}
      </p>
    `;

    card.addEventListener("click", () => {
      openJob(job);
    });

    jobList.appendChild(card);
  });
}


/*
  求人詳細
*/

function openJob(job) {

  let phoneArea = "";

  if (job.phoneAvailable && job.phone) {

    phoneArea = `
      <a
        href="tel:${job.phone}"
        onclick="return confirmPhone()"
      >
        電話で問い合わせる
      </a>

      <p style="font-size:12px; margin-top:10px;">
        電話でお問い合わせの際は、
        冒頭に「GUARDIANを見て」とお伝えください。
      </p>
    `;

  } else {

    phoneArea = `
      <p>
        この施設では電話による問い合わせを受け付けていません。
      </p>
    `;
  }


  const applicationArea = job.application
    ? `
      <a href="#" onclick="applyJob(event, '${job.facility}')">
        この求人に応募する
      </a>
    `
    : "";


  modalBody.innerHTML = `

    <span class="job-tag">
      ${job.jobType}
    </span>

    <h2>${job.facility}</h2>


    <div class="modal-section">

      <h3>求人情報</h3>

      <p>
        雇用形態：${job.employment}
      </p>

      <p>
        給与：${job.salary}
      </p>

      <p>
        勤務地：${job.location}
      </p>

      <p>
        勤務時間：${job.workingHours}
      </p>

    </div>


    <div class="modal-section">

      <h3>職場の雰囲気</h3>

      <p>
        ${job.atmosphere}
      </p>

    </div>


    <div class="modal-section">

      <h3>匿名職員の声</h3>

      <p>
        <strong>良かったこと</strong><br>
        ${job.good}
      </p>

      <br>

      <p>
        <strong>大変なこと</strong><br>
        ${job.difficult}
      </p>

      <br>

      <p>
        <strong>こんな人に向いています</strong><br>
        ${job.suitable}
      </p>

    </div>


    <div class="modal-section">

      <h3>お問い合わせ</h3>

      ${phoneArea}

    </div>


    <div class="modal-actions">

      ${applicationArea}

      <a
        href="mailto:example@example.com?subject=GUARDIANについてのお問い合わせ"
      >
        問い合わせフォーム
      </a>

    </div>

  `;


  modal.classList.add("active");
}


/*
  電話確認
*/

function confirmPhone() {

  return confirm(
    "電話でお問い合わせの際は、\n\n" +
    "「GUARDIANを見て、求人についてお伺いしたいのですが」\n\n" +
    "と最初にお伝えください。\n\n" +
    "電話を開始しますか？"
  );
}


/*
  応募
*/

function applyJob(event, facility) {

  event.preventDefault();

  alert(
    `${facility}への応募機能はβ版では準備中です。\n\n` +
    "正式版では応募フォームを実装します。"
  );
}


/*
  検索
*/

function searchJobs() {

  const keyword =
    searchInput.value
      .trim()
      .toLowerCase();

  const type =
    jobTypeFilter.value;


  const filtered =
    jobs.filter(job => {

      const text =
        `${job.facility} ${job.jobType} ${job.location}`
          .toLowerCase();

      const keywordMatch =
        keyword === "" ||
        text.includes(keyword);

      const typeMatch =
        type === "" ||
        job.jobType === type;

      return keywordMatch && typeMatch;

    });


  renderJobs(filtered);
}


/*
  イベント
*/

searchButton.addEventListener(
  "click",
  searchJobs
);


searchInput.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {
      searchJobs();
    }

  }
);


closeModal.addEventListener(
  "click",
  () => {
    modal.classList.remove("active");
  }
);


modal.addEventListener(
  "click",
  event => {

    if (event.target === modal) {
      modal.classList.remove("active");
    }

  }
);


/*
  初期表示
*/

renderJobs(jobs);
