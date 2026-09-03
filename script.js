/*
GUARDIAN βテスト版
求人データ
*/

const jobs = [
  {
    id: 1,
    facility: "ひかりこども園",
    jobType: "保育士",
employment: "正社員",
    salary: "月給　21,000円～",
    location: ”岡山市南区”,
    workingHours: "7:00~19:00の間でシフト制",

    
atmosphere:
  "職員同士で相談しやすく、子供一人ひとりに向き合うことを大切にしている職場です。",

    good:
      "先輩職員に相談しやすいところです。",

    difficult:
      "行事前は準備が多く、忙しくなる時期があります。",

    suitable:
      "子供とじっくり関わりたい方に向いてます。"

    phone: "090-0000-0000",

  phoneAvailadle: true,

application: true
},

{
  id: 2,
    facility: "みどり保育園",
  jobType: "保育士",
    employment: "パート",
    salary: "時給　1,200円～",
    location: "岡山県北区",
    workingHours: "8:00~17:00",

    atmosphere:
  "比較的少人数で、職員同士のコミュニケーションを大切にしています。",

    good:
  "勤務時間について相談しやすいところです。",
  
    difficult:
  "時間帯によって忙しさに差があります。",

    suitable:
  "家庭との両立を考えている方にも向いています。",

    phone: null,

    phonAvailable: false,

    application: true
},

{
  id: 3
      facility: "そらの園",
  jobType: "調理師",
    employment: "正社員",
    salary: "月給　190,000円～",
    location: "岡山県南区",
    workingHours: "8:00~17:00",

    atmosphere:
  "子どもたちの食事を通して成長を支えることを大切にしています。",

    good:
  "子供たちから直接『おいしかった』と言ってもらえることがあります。",
  
    difficult:
  "大量調理のため、時間管理が重要です。",

    suitable:
  "食を通して子供たちを支えたい方に向いています。",

    phone: "090-1111-1111",

    phonAvailable: true,

    application: true
}
];


/*
dom
*/

const jobList = document.getElementById("jobList");
const searchInput = document.getElementById("searchInput");
const jobTypeFilter = document.getElementById("jobTypeFilter");
const searchButton = document.getElementById("searchButton");

const modal = document.getElementById("jobmodal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");


/*
求人一覧表示
*/

function renderjobs(data) {

jobList.innerHTML = "";

if (data.length === 0) {

  jobList.innerHTML =`
  <div class=""job-card">
  <h3>求人が見つかりませんでした</h3>
  <p class="job-meta">
  条件を変更してもう一度検索してください。
  </p>
  </div>
  `;

  
