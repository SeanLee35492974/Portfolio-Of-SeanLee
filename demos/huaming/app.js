(() => {
  "use strict";

  const DISTRICTS = [
    {
      id: "garden",
      name: "百草花园",
      symbol: "草",
      caption: "草木、花果与自然生长",
      accent: "#4b9f72",
      soft: "#e1f3e8",
    },
    {
      id: "weather",
      name: "山海气象局",
      symbol: "云",
      caption: "山川海月与四时晴雨",
      accent: "#5477bd",
      soft: "#e7edfb",
    },
    {
      id: "flavor",
      name: "烟火补给站",
      symbol: "饮",
      caption: "熟悉滋味与日常甜意",
      accent: "#d88445",
      soft: "#faeadc",
    },
    {
      id: "animal",
      name: "萌兽公园",
      symbol: "兽",
      caption: "飞鸟游鱼与可爱伙伴",
      accent: "#36966d",
      soft: "#ddf1e7",
    },
    {
      id: "academy",
      name: "风雅书院",
      symbol: "书",
      caption: "诗意典故与东方意趣",
      accent: "#7667b7",
      soft: "#ebe8f8",
    },
    {
      id: "world",
      name: "世界来客港",
      symbol: "航",
      caption: "来自世界的名字与想象",
      accent: "#2782b9",
      soft: "#def1fa",
    },
    {
      id: "neighbor",
      name: "老友街坊",
      symbol: "邻",
      caption: "一听就亲切的日常称呼",
      accent: "#bd6074",
      soft: "#f7e3e8",
    },
    {
      id: "ideas",
      name: "奇思妙想站",
      symbol: "想",
      caption: "脑洞、趣梗与独特表达",
      accent: "#756fc3",
      soft: "#eceafb",
    },
  ];

  const ROUTES = [
    { id: "repeat", name: "叠叠线", accent: "#7667b7" },
    { id: "little", name: "小字线", accent: "#2d84b5" },
    { id: "big", name: "大字线", accent: "#d77a3f" },
    { id: "a", name: "阿字线", accent: "#36966d" },
    { id: "old", name: "老字线", accent: "#647889" },
    { id: "neighbor", name: "街坊线", accent: "#bd6074" },
  ];

  const DAILY_TASKS = [
    {
      title: "交换一个花名故事",
      description: "找一位今天还没聊过的同事，问问对方的花名从哪里来。",
      action: "完成暗号：听完故事后，用三个词复述你记住的内容。",
    },
    {
      title: "寻找同园区居民",
      description: "看看自己的花名属于哪个园区，再找到一位同园区的伙伴。",
      action: "完成暗号：一起说出你们园区最像哪一种乐园设施。",
    },
    {
      title: "发起一次随机问候",
      description: "从花名索引里随机遇见一个花名，把它当成今天认识新同事的提示。",
      action: "完成暗号：用对方的花名开启一句自然的问候。",
    },
    {
      title: "给花名写一句介绍",
      description: "用一句不超过十五个字的话，介绍自己的花名。",
      action: "完成暗号：让一位同事听完后，猜猜你属于哪个主题园区。",
    },
    {
      title: "收集一组反差花名",
      description: "找到两个气质完全不同、放在一起却很有趣的花名。",
      action: "完成暗号：为这组花名起一个双人组合名称。",
    },
    {
      title: "发现一条命名线路",
      description: "从小字线、大字线、阿字线、叠叠线里任选一条，找到三位居民。",
      action: "完成暗号：把三个花名连成一句有趣的话。",
    },
    {
      title: "推荐今日花名",
      description: "从乐园里选一个让你印象深刻的花名，分享给身边的同事。",
      action: "完成暗号：说出你喜欢它的一个具体理由。",
    },
  ];

  const ASSET_PATHS = {
    map: "./assets/lingdong-nickname-park-map.webp",
    day: "./assets/resident-card-day.webp",
    neon: "./assets/resident-card-neon.webp",
  };

  function getAssetUrl(key) {
    return window.LINGDONG_ASSETS?.[key] || ASSET_PATHS[key];
  }

  const WORLD_NAMES = new Set([
    "迪恩", "布鲁斯", "贾马尔", "路易", "源治", "格蕾斯", "德鲁", "穆雷",
    "山姆", "玛莎", "格鲁特", "布莱克", "温迪", "利奥", "凯文", "杰森",
    "丹妮", "肖恩", "卡卡", "伊东", "朱振心", "李星云", "傅诗淇", "郎博文",
  ]);

  const ANIMAL_NAMES = new Set([
    "锦鲤", "鹿鸣", "兔叽", "大牛", "大橘", "游龙", "虹猫", "威龙", "卧龙",
    "小鱼", "乌鸫", "文雀", "喵啾", "御猫", "鲤鱼", "黑豹", "宝鱼", "喵黎",
    "海星", "章鱼", "大熊", "白羊", "海绵", "乌鸫", "龙葵", "阿龙", "曜辰",
  ]);

  const FLAVOR_NAMES = new Set([
    "益达", "芝士", "橙子", "芒果", "可乐", "粉皮", "金豆", "橘柚", "土豆",
    "西瓜", "旺仔", "栗子", "七喜", "姜丝", "葡萄", "海胆", "有米", "年糕",
    "橘子", "佳多宝", "三七", "麦禾", "麦芒", "竹叶青", "糖糖", "六六",
    "五千", "大包", "大胖", "青弥", "咕噜噜",
  ]);

  const WORKSHOP_NAMES = new Set([
    "无心", "奋斗", "艺潇", "九垓", "大疆", "匠工", "桀桀", "噗噗", "遗忘",
    "漂带", "余数", "奇点", "赛博", "十七", "小旋风", "五千", "一金", "元气辉",
    "智多星", "六一", "推土机", "彬美式", "鬼谷", "张刚", "一 一", "夕寸",
    "拾畫", "何帅帅", "乐逗", "简单", "三皮", "西就", "五千", "九星",
  ]);

  const GARDEN_PATTERN =
    /松|枫|桐|竹|禾|花|葵|梅|荷|兰|芍药|鸢尾|杜若|苍术|半夏|重楼|南星|青松|麦芒|东篱|橘柚|龙葵|无尽夏|田野|乔木|盛开|青宥|云苓|云衫/;

  const WEATHER_PATTERN =
    /云|雨|晴|阳|风|月|山|川|海|江|汐|溪|泉|夏|露|潮|浪|星|白露|井泉|沐|清欢/;

  const rawNicknames = Array.isArray(window.LINGDONG_NICKNAMES)
    ? window.LINGDONG_NICKNAMES.filter((name) => typeof name === "string" && name.trim())
    : [];

  const counts = new Map();
  rawNicknames.forEach((name) => {
    const cleanName = name.trim();
    counts.set(cleanName, (counts.get(cleanName) || 0) + 1);
  });

  function getRoutes(name) {
    const routes = [];
    const chars = Array.from(name.replace(/\s/g, ""));
    if (chars.some((char, index) => index > 0 && char === chars[index - 1])) routes.push("repeat");
    if (name.startsWith("小")) routes.push("little");
    if (name.startsWith("大")) routes.push("big");
    if (name.startsWith("阿")) routes.push("a");
    if (name.startsWith("老") || name.includes("老李")) routes.push("old");
    if (/(哥|姐|工|仔)$/.test(name)) routes.push("neighbor");
    return routes;
  }

  function getDistrictId(name) {
    if (WORLD_NAMES.has(name)) return "world";
    if (ANIMAL_NAMES.has(name) || /猫|兔|牛|羊|鱼|鲤|豹|熊|鸟|雀|鸫|龙|喵|章鱼/.test(name)) {
      return "animal";
    }
    if (FLAVOR_NAMES.has(name)) return "flavor";
    if (GARDEN_PATTERN.test(name)) return "garden";
    if (WEATHER_PATTERN.test(name)) return "weather";
    if (/^(小|大|阿|老)/.test(name) || /(哥|姐|工|仔)$/.test(name)) return "neighbor";
    if (WORKSHOP_NAMES.has(name) || /[一二三四五六七八九十]|机|赛博|点|数/.test(name)) {
      return "ideas";
    }
    return "academy";
  }

  const nicknames = Array.from(counts.entries()).map(([name, count], index) => ({
    id: index + 1,
    name,
    count,
    districtId: getDistrictId(name),
    routeIds: getRoutes(name),
  }));

  const districtById = new Map(DISTRICTS.map((district) => [district.id, district]));
  const routeById = new Map(ROUTES.map((route) => [route.id, route]));

  const state = {
    activeScreen: "park",
    districtId: "all",
    routeId: "all",
    query: "",
    visitedOnly: false,
    visibleLimit: 60,
    selectedNickname: null,
    activeDialogDistrictId: null,
    cardTheme: "day",
    guessRound: 1,
    guessTarget: null,
    guessMistakes: 0,
    guessAnswered: false,
  };

  const VISITED_KEY = "lingdong-nickname-city-visited-v1";
  const EXPLORED_DISTRICTS_KEY = "lingdong-nickname-park-explored-v1";
  const REWARDS_KEY = "lingdong-nickname-park-rewards-v2";
  const initialRewards = {
    stars: 0,
    streak: 0,
    answeredNames: [],
    dailyCompleted: [],
    activeSkin: "day",
  };
  let visited = loadVisited();
  let exploredDistricts = loadExploredDistricts();
  let rewards = loadRewards();
  let toastTimer = null;

  const elements = {
    recordCount: document.getElementById("recordCount"),
    uniqueCount: document.getElementById("uniqueCount"),
    trailCount: document.getElementById("trailCount"),
    exploredCount: document.getElementById("exploredCount"),
    sidebarExploredCount: document.getElementById("sidebarExploredCount"),
    exploreProgressBar: document.getElementById("exploreProgressBar"),
    exploreProgressCopy: document.getElementById("exploreProgressCopy"),
    headerStars: document.getElementById("headerStars"),
    gamesStars: document.getElementById("gamesStars"),
    rewardStars: document.getElementById("rewardStars"),
    rewardProgressBar: document.getElementById("rewardProgressBar"),
    parkMapArt: document.getElementById("parkMapArt"),
    districtLayer: document.getElementById("districtLayer"),
    districtFilters: document.getElementById("districtFilters"),
    routeFilters: document.getElementById("routeFilters"),
    nicknameGrid: document.getElementById("nicknameGrid"),
    search: document.getElementById("nicknameSearch"),
    searchBox: document.querySelector(".search-box"),
    resultSummary: document.getElementById("resultSummary"),
    activeFilterSummary: document.getElementById("activeFilterSummary"),
    loadMoreButton: document.getElementById("loadMoreButton"),
    loadMoreWrap: document.querySelector(".load-more-wrap"),
    emptyState: document.getElementById("emptyState"),
    passportCanvas: document.getElementById("passportCanvas"),
    passportImage: document.getElementById("passportImage"),
    districtDialog: document.getElementById("districtDialog"),
    districtDialogIcon: document.getElementById("districtDialogIcon"),
    districtDialogTitle: document.getElementById("districtDialogTitle"),
    districtDialogCaption: document.getElementById("districtDialogCaption"),
    districtDialogSearch: document.getElementById("districtDialogSearch"),
    districtDialogSummary: document.getElementById("districtDialogSummary"),
    districtNameList: document.getElementById("districtNameList"),
    dialogListEmpty: document.getElementById("dialogListEmpty"),
    guessStreak: document.getElementById("guessStreak"),
    guessRoundLabel: document.getElementById("guessRoundLabel"),
    guessClueDistrict: document.getElementById("guessClueDistrict"),
    guessClueLength: document.getElementById("guessClueLength"),
    guessClueRoute: document.getElementById("guessClueRoute"),
    guessOptions: document.getElementById("guessOptions"),
    guessFeedback: document.getElementById("guessFeedback"),
    guessFeedbackTitle: document.getElementById("guessFeedbackTitle"),
    guessFeedbackCopy: document.getElementById("guessFeedbackCopy"),
    dailyMonthDay: document.getElementById("dailyMonthDay"),
    dailyWeekday: document.getElementById("dailyWeekday"),
    dailyTaskTitle: document.getElementById("dailyTaskTitle"),
    dailyTaskDescription: document.getElementById("dailyTaskDescription"),
    dailyTaskAction: document.getElementById("dailyTaskAction"),
    dailyTaskStatus: document.getElementById("dailyTaskStatus"),
    completeDailyButton: document.getElementById("completeDailyButton"),
    neonSkinReward: document.getElementById("neonSkinReward"),
    dreamCardReward: document.getElementById("dreamCardReward"),
    toggleNeonSkinButton: document.getElementById("toggleNeonSkinButton"),
    useDreamCardButton: document.getElementById("useDreamCardButton"),
    residentSearch: document.getElementById("residentSearch"),
    residentSearchResults: document.getElementById("residentSearchResults"),
    residentEmptyPreview: document.getElementById("residentEmptyPreview"),
    selectedResidentName: document.getElementById("selectedResidentName"),
    selectedResidentDistrict: document.getElementById("selectedResidentDistrict"),
    dreamThemeOption: document.getElementById("dreamThemeOption"),
    dreamThemeStatus: document.getElementById("dreamThemeStatus"),
    downloadPassportButton: document.getElementById("downloadPassportButton"),
    sharePassportButton: document.getElementById("sharePassportButton"),
    toast: document.getElementById("toast"),
  };

  function loadVisited() {
    try {
      const saved = JSON.parse(localStorage.getItem(VISITED_KEY) || "[]");
      return new Set(Array.isArray(saved) ? saved : []);
    } catch {
      return new Set();
    }
  }

  function saveVisited() {
    try {
      localStorage.setItem(VISITED_KEY, JSON.stringify(Array.from(visited)));
    } catch {
      // 浏览器禁用本地存储时，足迹仅保留到页面关闭。
    }
  }

  function loadExploredDistricts() {
    try {
      const saved = JSON.parse(localStorage.getItem(EXPLORED_DISTRICTS_KEY) || "[]");
      return new Set(Array.isArray(saved) ? saved.filter((id) => DISTRICTS.some((district) => district.id === id)) : []);
    } catch {
      return new Set();
    }
  }

  function saveExploredDistricts() {
    try {
      localStorage.setItem(EXPLORED_DISTRICTS_KEY, JSON.stringify(Array.from(exploredDistricts)));
    } catch {
      // 浏览器禁用本地存储时，探索进度仅保留到页面关闭。
    }
  }

  function loadRewards() {
    try {
      const saved = JSON.parse(localStorage.getItem(REWARDS_KEY) || "{}");
      return {
        ...initialRewards,
        ...saved,
        stars: Math.max(0, Number(saved.stars) || 0),
        streak: Math.max(0, Number(saved.streak) || 0),
        answeredNames: Array.isArray(saved.answeredNames) ? saved.answeredNames : [],
        dailyCompleted: Array.isArray(saved.dailyCompleted) ? saved.dailyCompleted : [],
        activeSkin: saved.activeSkin === "neon" ? "neon" : "day",
      };
    } catch {
      return { ...initialRewards };
    }
  }

  function saveRewards() {
    try {
      localStorage.setItem(REWARDS_KEY, JSON.stringify(rewards));
    } catch {
      // 浏览器禁用本地存储时，奖励进度仅保留到页面关闭。
    }
  }

  function normalize(value) {
    return String(value || "")
      .replace(/\s+/g, "")
      .toLocaleLowerCase("zh-CN");
  }

  function getDistrictCount(districtId) {
    return nicknames
      .filter((item) => item.districtId === districtId)
      .reduce((total, item) => total + item.count, 0);
  }

  function getRouteCount(routeId) {
    return nicknames.filter((item) => item.routeIds.includes(routeId)).length;
  }

  function makeFilterChip({ id, name, count, accent, active, onClick }) {
    const button = document.createElement("button");
    button.className = `filter-chip${active ? " is-active" : ""}`;
    button.type = "button";
    button.dataset.id = id;
    button.style.setProperty("--chip-accent", accent || "#024fa6");
    button.setAttribute("aria-pressed", String(active));
    button.append(document.createTextNode(name));
    const badge = document.createElement("span");
    badge.textContent = String(count);
    button.append(badge);
    button.addEventListener("click", onClick);
    return button;
  }

  function renderMap() {
    elements.districtLayer.replaceChildren();
    DISTRICTS.forEach((district) => {
      const button = document.createElement("button");
      button.className = `district-button${state.districtId === district.id ? " is-active" : ""}${exploredDistricts.has(district.id) ? " is-explored" : ""}`;
      button.type = "button";
      button.dataset.district = district.id;
      button.style.setProperty("--accent", district.accent);
      button.style.setProperty("--accent-soft", district.soft);
      button.setAttribute("aria-label", `浏览${district.name}街区，${getDistrictCount(district.id)}条记录`);

      const symbol = document.createElement("span");
      symbol.className = "district-symbol";
      symbol.textContent = district.symbol;

      const copy = document.createElement("span");
      copy.className = "district-copy";
      const title = document.createElement("strong");
      title.textContent = district.name;
      const count = document.createElement("small");
      count.textContent = `${getDistrictCount(district.id)} 位居民`;
      copy.append(title, count);
      button.append(symbol, copy);

      button.addEventListener("click", () => {
        openDistrictDialog(district.id);
      });
      elements.districtLayer.append(button);
    });
  }

  function renderFilters() {
    elements.districtFilters.replaceChildren();
    elements.districtFilters.append(
      makeFilterChip({
        id: "all",
        name: "全部街区",
        count: nicknames.length,
        accent: "#024fa6",
        active: state.districtId === "all",
        onClick: () => {
          state.districtId = "all";
          state.visitedOnly = false;
          state.visibleLimit = 60;
          renderAll();
        },
      }),
    );

    DISTRICTS.forEach((district) => {
      elements.districtFilters.append(
        makeFilterChip({
          id: district.id,
          name: district.name,
          count: nicknames.filter((item) => item.districtId === district.id).length,
          accent: district.accent,
          active: state.districtId === district.id,
          onClick: () => {
            state.districtId = district.id;
            state.visitedOnly = false;
            state.visibleLimit = 60;
            renderAll();
          },
        }),
      );
    });

    elements.routeFilters.replaceChildren();
    elements.routeFilters.append(
      makeFilterChip({
        id: "all",
        name: "全部线路",
        count: nicknames.length,
        accent: "#024fa6",
        active: state.routeId === "all",
        onClick: () => {
          state.routeId = "all";
          state.visibleLimit = 60;
          renderAll();
        },
      }),
    );

    ROUTES.forEach((route) => {
      elements.routeFilters.append(
        makeFilterChip({
          id: route.id,
          name: route.name,
          count: getRouteCount(route.id),
          accent: route.accent,
          active: state.routeId === route.id,
          onClick: () => {
            state.routeId = route.id;
            state.visibleLimit = 60;
            renderAll();
          },
        }),
      );
    });
  }

  function getFilteredNicknames() {
    const query = normalize(state.query);
    return nicknames.filter((item) => {
      if (state.districtId !== "all" && item.districtId !== state.districtId) return false;
      if (state.routeId !== "all" && !item.routeIds.includes(state.routeId)) return false;
      if (state.visitedOnly && !visited.has(item.name)) return false;
      if (query && !normalize(item.name).includes(query)) return false;
      return true;
    });
  }

  function createNicknameCard(item) {
    const district = districtById.get(item.districtId);
    const card = document.createElement("button");
    card.className = "nickname-card";
    card.type = "button";
    card.style.setProperty("--card-accent", district.accent);
    card.setAttribute(
      "aria-label",
      `打开${item.name}的花名通行证，所属${district.name}${item.count > 1 ? `，${item.count}位同名` : ""}`,
    );

    const top = document.createElement("span");
    top.className = "card-topline";
    const districtLabel = document.createElement("span");
    districtLabel.textContent = district.name;
    top.append(districtLabel);
    if (item.count > 1) {
      const duplicateBadge = document.createElement("b");
      duplicateBadge.textContent = `${item.count} 位同名`;
      top.append(duplicateBadge);
    }

    const title = document.createElement("h3");
    title.textContent = item.name;

    const routeWrap = document.createElement("span");
    routeWrap.className = "card-route";
    if (item.routeIds.length) {
      item.routeIds.forEach((routeId) => {
        const route = document.createElement("span");
        route.textContent = routeById.get(routeId).name;
        routeWrap.append(route);
      });
    } else {
      const free = document.createElement("span");
      free.className = "no-route";
      free.textContent = "自由换乘";
      routeWrap.append(free);
    }

    card.append(top, title, routeWrap);
    card.addEventListener("click", () => openPassport(item));
    return card;
  }

  function renderCards() {
    const filtered = getFilteredNicknames();
    const visible = filtered.slice(0, state.visibleLimit);
    const fragment = document.createDocumentFragment();
    visible.forEach((item) => fragment.append(createNicknameCard(item)));
    elements.nicknameGrid.replaceChildren(fragment);

    elements.emptyState.hidden = filtered.length > 0;
    elements.nicknameGrid.hidden = filtered.length === 0;
    elements.loadMoreWrap.hidden = filtered.length === 0 || visible.length >= filtered.length;

    const recordTotal = filtered.reduce((total, item) => total + item.count, 0);
    elements.resultSummary.textContent = `找到 ${filtered.length} 个花名 · ${recordTotal} 条居民记录`;

    const districtName = state.districtId === "all" ? "全部街区" : districtById.get(state.districtId).name;
    const routeName = state.routeId === "all" ? "全部线路" : routeById.get(state.routeId).name;
    const parts = [districtName, routeName];
    if (state.visitedOnly) parts.push("我的足迹");
    if (state.query) parts.push(`搜索“${state.query}”`);
    elements.activeFilterSummary.textContent = parts.join(" · ");
  }

  function renderTrail() {
    if (elements.trailCount) elements.trailCount.textContent = String(visited.size);
    elements.exploredCount.textContent = String(exploredDistricts.size);
    elements.sidebarExploredCount.textContent = String(exploredDistricts.size);
    elements.exploreProgressBar.style.width = `${(exploredDistricts.size / DISTRICTS.length) * 100}%`;
    elements.exploreProgressCopy.textContent = exploredDistricts.size === DISTRICTS.length
      ? "八个园区已全部点亮，完整乐园已收入你的游园记录。"
      : exploredDistricts.size
        ? `已经点亮 ${exploredDistricts.size} 个园区，还剩 ${DISTRICTS.length - exploredDistricts.size} 个等待发现。`
        : "点亮第一个园区，收下你的探索印记。";
  }

  function renderAll() {
    renderMap();
    renderFilters();
    renderCards();
    renderTrail();
  }

  function clearFilters() {
    state.districtId = "all";
    state.routeId = "all";
    state.query = "";
    state.visitedOnly = false;
    state.visibleLimit = 60;
    elements.search.value = "";
    elements.searchBox.classList.remove("has-value");
    renderAll();
  }

  function showToast(message) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2600);
  }

  function setScreen(screenId, options = {}) {
    if (!["park", "games", "resident"].includes(screenId)) return;
    state.activeScreen = screenId;
    document.body.dataset.activeScreen = screenId;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      document.body.dataset.parkSkin === "neon" ? "#061b2f" : "#edf6fd",
    );
    document.querySelectorAll("[data-screen-panel]").forEach((panel) => {
      const active = panel.dataset.screenPanel === screenId;
      panel.hidden = !active;
      panel.classList.toggle("is-active", active);
    });
    document.querySelectorAll("[data-screen]").forEach((button) => {
      const active = button.dataset.screen === screenId;
      button.classList.toggle("is-active", active);
      if (button.closest("nav")) button.setAttribute("aria-current", active ? "page" : "false");
    });
    if (!options.preserveScroll) window.scrollTo({ top: 0, behavior: "smooth" });
    try {
      history.replaceState(null, "", `#${screenId}`);
    } catch {
      // 本地文件模式可能禁止修改地址，不影响页面切换。
    }
    if (screenId === "resident") renderResidentSearch();
    if (screenId === "games" && options.focusDaily) {
      window.setTimeout(() => document.getElementById("dailyTaskCard").scrollIntoView({ behavior: "smooth", block: "center" }), 160);
    }
  }

  function addStars(amount, reason) {
    const before = rewards.stars;
    rewards.stars += amount;
    saveRewards();
    renderRewards();
    showToast(`+${amount} 名堂星 · ${reason}`);
    if (before < 30 && rewards.stars >= 30) {
      window.setTimeout(() => showToast("霓虹梦境夜游模式已解锁"), 900);
    } else if (before < 60 && rewards.stars >= 60) {
      window.setTimeout(() => showToast("星夜限定居民卡已解锁"), 900);
    }
  }

  function renderRewards() {
    const stars = rewards.stars;
    [elements.headerStars, elements.gamesStars, elements.rewardStars].forEach((element) => {
      element.textContent = String(stars);
    });
    elements.guessStreak.textContent = String(rewards.streak);
    elements.rewardProgressBar.style.width = `${Math.min(100, (stars / 60) * 100)}%`;

    const neonUnlocked = stars >= 30;
    const cardUnlocked = stars >= 60;
    document.querySelector(".mark-30").classList.toggle("is-earned", neonUnlocked);
    document.querySelector(".mark-60").classList.toggle("is-earned", cardUnlocked);
    elements.neonSkinReward.classList.toggle("is-unlocked", neonUnlocked);
    elements.dreamCardReward.classList.toggle("is-unlocked", cardUnlocked);

    elements.toggleNeonSkinButton.disabled = !neonUnlocked;
    elements.toggleNeonSkinButton.setAttribute(
      "aria-pressed",
      String(neonUnlocked && rewards.activeSkin === "neon"),
    );
    elements.toggleNeonSkinButton.textContent = neonUnlocked
      ? rewards.activeSkin === "neon" ? "切回白昼模式" : "启用全园夜游"
      : `还差 ${30 - stars} 星`;

    elements.useDreamCardButton.disabled = !cardUnlocked;
    elements.useDreamCardButton.textContent = cardUnlocked ? "使用限定卡面" : `还差 ${60 - stars} 星`;
    elements.dreamThemeOption.classList.toggle("is-locked", !cardUnlocked);
    elements.dreamThemeStatus.textContent = cardUnlocked ? "已解锁" : "60 星解锁";
    applyParkSkin();
  }

  function applyParkSkin() {
    const canUseNeon = rewards.stars >= 30;
    const skin = canUseNeon && rewards.activeSkin === "neon" ? "neon" : "day";
    if (skin !== rewards.activeSkin) rewards.activeSkin = skin;
    document.body.dataset.parkSkin = skin;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      skin === "neon" ? "#061b2f" : "#edf6fd",
    );
    elements.parkMapArt.src = getAssetUrl(skin === "neon" ? "neon" : "map");
    elements.residentEmptyPreview.style.backgroundImage = `url("${getAssetUrl(skin === "neon" ? "neon" : "day")}")`;
  }

  function toggleParkSkin() {
    if (rewards.stars < 30) return;
    rewards.activeSkin = rewards.activeSkin === "neon" ? "day" : "neon";
    saveRewards();
    renderRewards();
    showToast(rewards.activeSkin === "neon" ? "霓虹梦境全园夜游已开启" : "已切回白昼模式");
  }

  function getTodayKey() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getDaySeed() {
    return Number(getTodayKey().replaceAll("-", ""));
  }

  function renderDailyTask() {
    const today = new Date();
    const dateFormatter = new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit" });
    const weekFormatter = new Intl.DateTimeFormat("zh-CN", { weekday: "long" });
    const task = DAILY_TASKS[getDaySeed() % DAILY_TASKS.length];
    const completed = rewards.dailyCompleted.includes(getTodayKey());
    elements.dailyMonthDay.textContent = dateFormatter.format(today).replaceAll("/", ".");
    elements.dailyWeekday.textContent = weekFormatter.format(today);
    elements.dailyTaskTitle.textContent = task.title;
    elements.dailyTaskDescription.textContent = task.description;
    elements.dailyTaskAction.textContent = task.action;
    elements.completeDailyButton.disabled = completed;
    elements.completeDailyButton.textContent = completed ? "今日奖励已领取" : "完成任务并领取";
    elements.dailyTaskStatus.textContent = completed ? "明天再来，任务局会派送新的小任务。" : "每天只能领取一次奖励。";
  }

  function completeDailyTask() {
    const todayKey = getTodayKey();
    if (rewards.dailyCompleted.includes(todayKey)) return;
    rewards.dailyCompleted.push(todayKey);
    saveRewards();
    addStars(15, "今日任务完成");
    renderDailyTask();
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  }

  function pickGuessTarget() {
    const eligible = nicknames.filter((item) => item.name.replace(/\s/g, "").length >= 2);
    const unseen = eligible.filter((item) => !rewards.answeredNames.includes(item.name));
    const pool = unseen.length >= 4 ? unseen : eligible;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function getRouteClue(item) {
    if (item.routeIds.length) {
      return `它会经过：${item.routeIds.map((routeId) => routeById.get(routeId).name).join("、")}`;
    }
    const first = Array.from(item.name.replace(/\s/g, ""))[0] || "";
    return `它的首字是“${first}”`;
  }

  function renderGuessRound() {
    const target = pickGuessTarget();
    if (!target) return;
    state.guessTarget = target;
    state.guessMistakes = 0;
    state.guessAnswered = false;
    elements.guessFeedback.hidden = true;
    elements.guessRoundLabel.textContent = `第 ${state.guessRound} 题`;

    const district = districtById.get(target.districtId);
    const charLength = Array.from(target.name.replace(/\s/g, "")).length;
    elements.guessClueDistrict.textContent = `它住在${district.name}`;
    elements.guessClueLength.textContent = `这个花名有 ${charLength} 个字`;
    elements.guessClueRoute.textContent = getRouteClue(target);

    const sameLength = nicknames.filter((item) => item.name !== target.name && Array.from(item.name.replace(/\s/g, "")).length === charLength);
    const otherOptions = shuffle(sameLength).slice(0, 3);
    if (otherOptions.length < 3) {
      const fallbacks = shuffle(nicknames.filter((item) => item.name !== target.name && !otherOptions.includes(item)));
      otherOptions.push(...fallbacks.slice(0, 3 - otherOptions.length));
    }
    const options = shuffle([target, ...otherOptions]);
    elements.guessOptions.replaceChildren();
    options.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "guess-option";
      button.textContent = item.name;
      button.addEventListener("click", () => answerGuess(button, item));
      elements.guessOptions.append(button);
    });
  }

  function answerGuess(button, item) {
    if (state.guessAnswered) return;
    if (item.name !== state.guessTarget.name) {
      state.guessMistakes += 1;
      rewards.streak = 0;
      saveRewards();
      renderRewards();
      button.classList.add("is-wrong");
      button.disabled = true;
      showToast("不是这个花名，再看一眼线索");
      return;
    }

    state.guessAnswered = true;
    button.classList.add("is-correct");
    elements.guessOptions.querySelectorAll("button").forEach((option) => {
      option.disabled = true;
      if (option.textContent === state.guessTarget.name) option.classList.add("is-correct");
    });
    const alreadyRewarded = rewards.answeredNames.includes(state.guessTarget.name);
    const amount = alreadyRewarded ? 0 : state.guessMistakes ? 5 : 10;
    const starsBeforeAnswer = rewards.stars;
    if (!alreadyRewarded) rewards.answeredNames.push(state.guessTarget.name);
    rewards.streak += 1;
    if (amount) rewards.stars += amount;
    saveRewards();
    renderRewards();

    elements.guessFeedback.hidden = false;
    elements.guessFeedbackTitle.textContent = state.guessMistakes ? "找到啦！" : "一眼猜中！";
    elements.guessFeedbackCopy.textContent = alreadyRewarded
      ? `答案是“${state.guessTarget.name}”，这道题此前已经领过奖励。`
      : `答案是“${state.guessTarget.name}”，获得 ${amount} 名堂星。`;
    if (amount) {
      showToast(`+${amount} 名堂星 · 花名猜猜看`);
      if (starsBeforeAnswer < 30 && rewards.stars >= 30) {
        window.setTimeout(() => showToast("霓虹梦境夜游模式已解锁"), 900);
      } else if (starsBeforeAnswer < 60 && rewards.stars >= 60) {
        window.setTimeout(() => showToast("星夜限定居民卡已解锁"), 900);
      }
    }
  }

  function nextGuessRound() {
    state.guessRound += 1;
    renderGuessRound();
  }

  function randomEncounter() {
    const pool = getFilteredNicknames();
    const candidates = pool.length ? pool : nicknames;
    const item = candidates[Math.floor(Math.random() * candidates.length)];
    if (item) openPassport(item);
  }

  function openDialog(dialog) {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closeDialog(dialog) {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  function getDistrictNicknames(districtId, query = "") {
    const normalizedQuery = normalize(query);
    return nicknames.filter(
      (item) => item.districtId === districtId && (!normalizedQuery || normalize(item.name).includes(normalizedQuery)),
    );
  }

  function renderDistrictDialogList() {
    const districtId = state.activeDialogDistrictId;
    if (!districtId) return;
    const district = districtById.get(districtId);
    const query = elements.districtDialogSearch.value.trim();
    const items = getDistrictNicknames(districtId, query);
    const recordTotal = items.reduce((total, item) => total + item.count, 0);
    const fragment = document.createDocumentFragment();

    items.forEach((item) => {
      const button = document.createElement("button");
      button.className = "district-name-button";
      button.type = "button";
      button.textContent = item.name;
      button.setAttribute("aria-label", `打开${item.name}的花名居民卡`);
      if (item.count > 1) {
        const duplicate = document.createElement("small");
        duplicate.textContent = `${item.count} 位同名`;
        button.append(duplicate);
      }
      button.addEventListener("click", () => {
        closeDialog(elements.districtDialog);
        openPassport(item);
      });
      fragment.append(button);
    });

    elements.districtNameList.replaceChildren(fragment);
    elements.districtNameList.hidden = items.length === 0;
    elements.dialogListEmpty.hidden = items.length > 0;
    elements.districtDialogSummary.textContent = query
      ? `找到 ${items.length} 个花名 · ${recordTotal} 条居民记录`
      : `${district.name}共有 ${items.length} 个花名 · ${recordTotal} 条居民记录`;
  }

  function openDistrictDialog(districtId) {
    const district = districtById.get(districtId);
    if (!district) return;
    state.activeDialogDistrictId = districtId;
    exploredDistricts.add(districtId);
    saveExploredDistricts();
    elements.districtDialog.style.setProperty("--dialog-accent", district.accent);
    elements.districtDialog.style.setProperty("--dialog-soft", district.soft);
    elements.districtDialogIcon.textContent = district.symbol;
    elements.districtDialogTitle.textContent = district.name;
    elements.districtDialogCaption.textContent = district.caption;
    elements.districtDialogSearch.value = "";
    renderDistrictDialogList();
    renderMap();
    renderTrail();
    if (!rewards.answeredNames.includes(`district:${districtId}`)) {
      rewards.answeredNames.push(`district:${districtId}`);
      saveRewards();
      addStars(2, `探索${district.name}`);
    }
    openDialog(elements.districtDialog);
  }

  function viewActiveDistrict() {
    const districtId = state.activeDialogDistrictId;
    if (!districtId) return;
    state.districtId = districtId;
    state.routeId = "all";
    state.query = "";
    state.visitedOnly = false;
    state.visibleLimit = 60;
    elements.search.value = "";
    elements.searchBox.classList.remove("has-value");
    closeDialog(elements.districtDialog);
    renderAll();
    document.getElementById("directory").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function roundRect(ctx, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + width, y, x + width, y + height, r);
    ctx.arcTo(x + width, y + height, x, y + height, r);
    ctx.arcTo(x, y + height, x, y, r);
    ctx.arcTo(x, y, x + width, y, r);
    ctx.closePath();
  }

  function fitText(ctx, text, maxWidth, startSize, minSize, weight = 800) {
    let size = startSize;
    while (size > minSize) {
      ctx.font = `${weight} ${size}px ${getComputedStyle(document.body).fontFamily}`;
      if (ctx.measureText(text).width <= maxWidth) break;
      size -= 4;
    }
    return size;
  }

  function loadImage(source) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = source;
    });
  }

  async function drawPassport(item) {
    const canvas = elements.passportCanvas;
    const ctx = canvas.getContext("2d");
    const district = districtById.get(item.districtId);
    const width = canvas.width;
    const height = canvas.height;
    const dreamTheme = state.cardTheme === "dream" && rewards.stars >= 60;
    const assetPath = getAssetUrl(dreamTheme ? "neon" : "day");

    ctx.clearRect(0, 0, width, height);
    try {
      const background = await loadImage(assetPath);
      const imageRatio = background.width / background.height;
      const canvasRatio = width / height;
      let sourceX = 0;
      let sourceY = 0;
      let sourceWidth = background.width;
      let sourceHeight = background.height;
      if (imageRatio > canvasRatio) {
        sourceWidth = background.height * canvasRatio;
        sourceX = (background.width - sourceWidth) / 2;
      } else {
        sourceHeight = background.width / canvasRatio;
        sourceY = (background.height - sourceHeight) / 2;
      }
      ctx.drawImage(background, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, width, height);
    } catch {
      ctx.fillStyle = dreamTheme ? "#062a40" : "#eaf5fd";
      ctx.fillRect(0, 0, width, height);
    }

    const ink = dreamTheme ? "#f3fbff" : "#153f65";
    const muted = dreamTheme ? "rgba(226,244,255,0.68)" : "#64819a";
    const panel = dreamTheme ? "rgba(5,35,53,0.77)" : "rgba(250,253,255,0.84)";
    const border = dreamTheme ? "rgba(235,196,111,0.42)" : "rgba(2,79,166,0.16)";

    ctx.fillStyle = panel;
    roundRect(ctx, 82, 92, 916, 676, 42);
    ctx.fill();
    ctx.strokeStyle = border;
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.textAlign = "left";
    ctx.fillStyle = ink;
    ctx.font = `850 31px ${getComputedStyle(document.body).fontFamily}`;
    ctx.fillText("凌动花名乐园", 130, 158);
    ctx.fillStyle = muted;
    ctx.font = `700 18px ${getComputedStyle(document.body).fontFamily}`;
    ctx.fillText(dreamTheme ? "星夜限定居民卡" : "白昼乐园居民卡", 130, 193);

    ctx.fillStyle = dreamTheme ? "rgba(239,195,100,0.18)" : district.soft;
    roundRect(ctx, 783, 125, 157, 52, 26);
    ctx.fill();
    ctx.fillStyle = dreamTheme ? "#f5cf79" : district.accent;
    ctx.font = `800 17px ${getComputedStyle(document.body).fontFamily}`;
    ctx.textAlign = "center";
    ctx.fillText(dreamTheme ? "限定卡面" : "居民卡", 861, 158);

    ctx.textAlign = "left";
    ctx.fillStyle = muted;
    ctx.font = `700 21px ${getComputedStyle(document.body).fontFamily}`;
    ctx.fillText("从今天起，请叫我", 130, 302);

    const nameFontSize = fitText(ctx, item.name, 810, item.name.length <= 3 ? 156 : 132, 76, 850);
    ctx.fillStyle = ink;
    ctx.font = `850 ${nameFontSize}px ${getComputedStyle(document.body).fontFamily}`;
    ctx.fillText(item.name, 122, 460);

    const routeNames = item.routeIds.length
      ? item.routeIds.map((routeId) => routeById.get(routeId).name)
      : ["自由换乘"];
    ctx.fillStyle = dreamTheme ? "rgba(50,154,178,0.22)" : district.soft;
    roundRect(ctx, 130, 528, 295, 64, 20);
    ctx.fill();
    ctx.fillStyle = dreamTheme ? "#8ceaff" : district.accent;
    ctx.font = `800 23px ${getComputedStyle(document.body).fontFamily}`;
    ctx.textAlign = "center";
    ctx.fillText(`${district.symbol} · ${district.name}`, 278, 570);

    ctx.font = `700 22px ${getComputedStyle(document.body).fontFamily}`;
    const routeText = routeNames.join(" · ");
    const routeWidth = Math.min(430, ctx.measureText(routeText).width + 52);
    ctx.fillStyle = dreamTheme ? "rgba(255,255,255,0.09)" : "rgba(2,79,166,0.07)";
    roundRect(ctx, 446, 528, routeWidth, 64, 20);
    ctx.fill();
    ctx.fillStyle = ink;
    ctx.textAlign = "left";
    ctx.fillText(routeText, 472, 570);

    ctx.fillStyle = muted;
    ctx.font = `700 17px ${getComputedStyle(document.body).fontFamily}`;
    ctx.fillText("居民编号", 130, 675);
    ctx.fillText("主题园区", 580, 675);
    ctx.fillStyle = ink;
    ctx.font = `800 29px ${getComputedStyle(document.body).fontFamily}`;
    ctx.fillText(`NO. ${String(item.id).padStart(3, "0")}`, 130, 718);
    ctx.fillText(district.name, 580, 718);

    ctx.fillStyle = dreamTheme ? "rgba(4,27,44,0.62)" : "rgba(250,253,255,0.8)";
    roundRect(ctx, 118, 1092, 844, 132, 30);
    ctx.fill();
    ctx.strokeStyle = border;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = ink;
    ctx.font = `750 28px ${getComputedStyle(document.body).fontFamily}`;
    ctx.textAlign = "center";
    ctx.fillText("每个花名，都是认识彼此的一条新路。", width / 2, 1148);
    ctx.fillStyle = muted;
    ctx.font = `650 19px ${getComputedStyle(document.body).fontFamily}`;
    ctx.fillText(item.count > 1 ? `乐园里有 ${item.count} 位“${item.name}”` : "欢迎成为花名乐园居民", width / 2, 1190);

    ctx.textAlign = "left";
    ctx.fillStyle = dreamTheme ? "rgba(232,246,255,0.74)" : "#486c8c";
    ctx.font = `700 17px ${getComputedStyle(document.body).fontFamily}`;
    ctx.fillText("内部文化体验版 · 仅展示花名", 120, 1291);
    ctx.textAlign = "right";
    ctx.fillText("2026", 960, 1291);

    elements.passportImage.src = canvas.toDataURL("image/png");
    elements.residentEmptyPreview.hidden = true;
  }

  async function selectResident(item, options = {}) {
    state.selectedNickname = item;
    visited.add(item.name);
    saveVisited();
    renderTrail();
    elements.selectedResidentName.textContent = item.name;
    elements.selectedResidentDistrict.textContent = districtById.get(item.districtId).name;
    elements.downloadPassportButton.disabled = false;
    elements.sharePassportButton.disabled = false;
    renderResidentSearch();
    await drawPassport(item);
    if (!options.stayOnScreen) setScreen("resident");
  }

  function openPassport(item) {
    selectResident(item);
  }

  function renderResidentSearch() {
    const query = normalize(elements.residentSearch.value);
    const pool = query
      ? nicknames.filter((item) => normalize(item.name).includes(query)).slice(0, 20)
      : nicknames.slice(0, 12);
    elements.residentSearchResults.replaceChildren();
    if (!pool.length) {
      const empty = document.createElement("p");
      empty.className = "resident-search-empty";
      empty.textContent = "没有找到这个花名，换一个关键词试试。";
      elements.residentSearchResults.append(empty);
      return;
    }
    pool.forEach((item) => {
      const button = document.createElement("button");
      button.className = `resident-result${state.selectedNickname?.name === item.name ? " is-active" : ""}`;
      button.type = "button";
      button.textContent = item.name;
      button.addEventListener("click", () => selectResident(item, { stayOnScreen: true }));
      elements.residentSearchResults.append(button);
    });
  }

  function setCardTheme(theme) {
    if (theme === "dream" && rewards.stars < 60) {
      showToast(`再获得 ${60 - rewards.stars} 名堂星即可解锁星夜卡面`);
      setScreen("games");
      window.setTimeout(() => document.querySelector(".rewards-section").scrollIntoView({ behavior: "smooth", block: "start" }), 160);
      return;
    }
    state.cardTheme = theme === "dream" ? "dream" : "day";
    document.querySelectorAll("[data-card-theme]").forEach((button) => {
      const active = button.dataset.cardTheme === state.cardTheme;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (state.selectedNickname) drawPassport(state.selectedNickname);
  }

  function randomResident() {
    const item = nicknames[Math.floor(Math.random() * nicknames.length)];
    if (item) selectResident(item, { stayOnScreen: state.activeScreen === "resident" });
  }

  function downloadPassport() {
    if (!state.selectedNickname) return;
    const anchor = document.createElement("a");
    anchor.href = elements.passportCanvas.toDataURL("image/png");
    anchor.download = `凌动花名乐园-${state.selectedNickname.name}-居民卡.png`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    showToast("居民卡已保存，可在下载内容中查看");
  }

  function sharePassport() {
    if (!state.selectedNickname) return;
    if (!navigator.share) {
      downloadPassport();
      return;
    }

    elements.passportCanvas.toBlob(async (blob) => {
      if (!blob) return;
      const file = new File([blob], `凌动花名乐园-${state.selectedNickname.name}-居民卡.png`, {
        type: "image/png",
      });
      try {
        if (navigator.canShare?.({ files: [file] })) {
          await navigator.share({
            title: "我的花名居民卡",
            text: `欢迎来到凌动花名乐园，从今天起，请叫我${state.selectedNickname.name}。`,
            files: [file],
          });
        } else {
          await navigator.share({
            title: "我的花名居民卡",
            text: `欢迎来到凌动花名乐园，从今天起，请叫我${state.selectedNickname.name}。`,
          });
        }
      } catch (error) {
        if (error?.name !== "AbortError") showToast("分享没有完成，可以长按居民卡保存");
      }
    }, "image/png");
  }

  function bindEvents() {
    ["randomButton", "toolbarRandomButton"].forEach((id) => {
      document.getElementById(id).addEventListener("click", randomEncounter);
    });

    document.getElementById("searchJumpButton").addEventListener("click", () => {
      document.getElementById("directory").scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => elements.search.focus(), 450);
    });

    document.getElementById("exploreProgressButton").addEventListener("click", () => {
      if (!exploredDistricts.size) {
        showToast("点击任意园区，留下第一枚探索印记吧");
        return;
      }
      showToast(`已经探索 ${exploredDistricts.size} 个园区，再去发现 ${DISTRICTS.length - exploredDistricts.size} 个吧`);
    });

    elements.search.addEventListener("input", (event) => {
      state.query = event.target.value.trim();
      state.visibleLimit = 60;
      elements.searchBox.classList.toggle("has-value", Boolean(state.query));
      renderCards();
    });
    document.getElementById("clearSearchButton").addEventListener("click", () => {
      state.query = "";
      elements.search.value = "";
      elements.searchBox.classList.remove("has-value");
      renderCards();
      elements.search.focus();
    });
    document.getElementById("clearFiltersButton").addEventListener("click", clearFilters);
    document.getElementById("emptyResetButton").addEventListener("click", clearFilters);
    elements.loadMoreButton.addEventListener("click", () => {
      state.visibleLimit += 60;
      renderCards();
    });

    document.getElementById("privacyButton").addEventListener("click", () => {
      setScreen("park");
      window.setTimeout(() => document.querySelector(".city-note").scrollIntoView({ behavior: "smooth", block: "center" }), 160);
      showToast("当前版本只展示花名，不含真实姓名、部门和人事信息");
    });

    document.querySelectorAll("[data-screen]").forEach((button) => {
      button.addEventListener("click", () => {
        setScreen(button.dataset.screen, { focusDaily: button.dataset.gameFocus === "daily" });
      });
    });

    document.querySelectorAll("[data-screen-link]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        setScreen(link.dataset.screenLink);
      });
    });

    document.getElementById("nextGuessButton").addEventListener("click", nextGuessRound);
    elements.completeDailyButton.addEventListener("click", completeDailyTask);
    elements.toggleNeonSkinButton.addEventListener("click", toggleParkSkin);
    elements.useDreamCardButton.addEventListener("click", () => {
      setScreen("resident");
      setCardTheme("dream");
    });

    elements.residentSearch.addEventListener("input", renderResidentSearch);
    document.getElementById("randomResidentButton").addEventListener("click", randomResident);
    document.querySelectorAll("[data-card-theme]").forEach((button) => {
      button.addEventListener("click", () => setCardTheme(button.dataset.cardTheme));
    });

    elements.districtDialogSearch.addEventListener("input", renderDistrictDialogList);
    document.getElementById("viewDistrictButton").addEventListener("click", viewActiveDistrict);
    elements.districtDialog.addEventListener("click", (event) => {
      if (event.target === elements.districtDialog) closeDialog(elements.districtDialog);
    });

    elements.downloadPassportButton.addEventListener("click", downloadPassport);
    elements.sharePassportButton.addEventListener("click", sharePassport);
  }

  function initialize() {
    if (elements.recordCount) elements.recordCount.textContent = String(rawNicknames.length);
    if (elements.uniqueCount) elements.uniqueCount.textContent = String(nicknames.length);
    if (!rawNicknames.length) {
      elements.resultSummary.textContent = "花名数据尚未载入";
      showToast("花名数据没有载入，请检查 nicknames.js");
      return;
    }
    document.querySelectorAll("[data-image-asset]").forEach((image) => {
      image.src = getAssetUrl(image.dataset.imageAsset);
    });
    elements.residentEmptyPreview.style.backgroundImage = `url("${getAssetUrl("day")}")`;
    bindEvents();
    renderAll();
    renderRewards();
    renderDailyTask();
    renderGuessRound();
    renderResidentSearch();
    const initialHash = window.location.hash.replace("#", "");
    if (["park", "games", "resident"].includes(initialHash)) {
      setScreen(initialHash, { preserveScroll: true });
    } else {
      setScreen("park", { preserveScroll: true });
    }
  }

  initialize();
})();
