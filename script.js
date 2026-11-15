const tg = window.Telegram.WebApp;
tg.expand();

// Адрес бэкенда на Railway
const API_URL = "https://defwork2-production.up.railway.app/api";

// Данные пользователя из Telegram
const tgUser = tg.initDataUnsafe && tg.initDataUnsafe.user ? tg.initDataUnsafe.user : { id: "test_user_123", username: "Player", first_name: "Player" };
const telegramId = tgUser.id.toString();
let username = '@' + (tgUser.username || tgUser.first_name || "Player");

const farmTypes = [
    { icon: "🎨", name: "Правка верстки на фрилансе", income: 12, baseCost: 150 },
    { icon: "🤖", name: "Написание простого TG-бота", income: 55, baseCost: 1200 },
    { icon: "🛒", name: "Разработка интернет-магазина", income: 220, baseCost: 6500 },
    { icon: "⚡", name: "Создание Telegram Web App", income: 850, baseCost: 30000 },
    { icon: "🔒", name: "Аудит безопасности контракта", income: 3200, baseCost: 140000 },
    { icon: "📱", name: "Мобильное приложение iOS/Android", income: 12000, baseCost: 650000 },
    { icon: "🧠", name: "Интеграция LLM-ассистента в SaaS", income: 45000, baseCost: 3000000 },
    { icon: "🌐", name: "Создание криптобиржи «под ключ»", income: 160000, baseCost: 14000000 },
    { icon: "🚀", name: "Разработка блокчейн-сети L1", income: 600000, baseCost: 60000000 },
    { icon: "🛡️", name: "Киберзащитный комплекс", income: 2200000, baseCost: 250000000 },
    { icon: "🛰️", name: "Орбитальный софт связи", income: 8500000, baseCost: 1000000000 },
    { icon: "🌌", name: "Нейросетевая сингулярность", income: 35000000, baseCost: 4500000000 }
];

let businessList = [
    { id: 'tg_channel', icon: "📢", name: "Telegram-канал", baseCost: 5000, baseIncome: 80, level: 0, costMult: 1.35, workers: 0, adBudget: 0, efficiency: 100 },
    { id: 'tovarka', icon: "📦", name: "Товарка (WB / Озон)", baseCost: 20000, baseIncome: 280, level: 0, costMult: 1.35, workers: 0, adBudget: 0, efficiency: 100 },
    { id: 'courses', icon: "🎓", name: "Онлайн-академия", baseCost: 75000, baseIncome: 950, level: 0, costMult: 1.4, workers: 0, adBudget: 0, efficiency: 100 },
    { id: 'youtube', icon: "🎬", name: "Американский YouTube", baseCost: 250000, baseIncome: 3200, level: 0, costMult: 1.4, workers: 0, adBudget: 0, efficiency: 100 },
    { id: 'prod', icon: "🤝", name: "Продюсерский центр", baseCost: 900000, baseIncome: 11000, level: 0, costMult: 1.45, workers: 0, adBudget: 0, efficiency: 100 },
    { id: 'saas', icon: "☁️", name: "Облачный SaaS-сервис", baseCost: 3500000, baseIncome: 40000, level: 0, costMult: 1.45, workers: 0, adBudget: 0, efficiency: 100 },
    { id: 'it', icon: "🏢", name: "IT-корпорация", baseCost: 15000000, baseIncome: 160000, level: 0, costMult: 1.5, workers: 0, adBudget: 0, efficiency: 100 },
    { id: 'fund', icon: "🏛️", name: "Венчурный фонд", baseCost: 60000000, baseIncome: 650000, level: 0, costMult: 1.5, workers: 0, adBudget: 0, efficiency: 100 }
];

let clickUpgradesList = [
    { id: 'click_1', icon: "⌨️", name: "Мембранная клавиатура", powerBonus: 1, cost: 80, mult: 1.35 },
    { id: 'click_2', icon: "🖱️", name: "Эргономичная мышь", powerBonus: 3, cost: 450, mult: 1.4 },
    { id: 'click_3', icon: "💻", name: "Ноутбук с быстрым SSD", powerBonus: 10, cost: 2500, mult: 1.4 },
    { id: 'click_4', icon: "🌈", name: "Механика с RGB-подсветкой", powerBonus: 35, cost: 12000, mult: 1.45 },
    { id: 'click_5', icon: "🖥️", name: "Двойной 4K монитор", powerBonus: 100, cost: 55000, mult: 1.45 },
    { id: 'click_6', icon: "🤖", name: "ИИ-ассистент разработчика", powerBonus: 350, cost: 240000, mult: 1.5 },
    { id: 'click_7', icon: "🗄️", name: "Домашняя серверная стойка", powerBonus: 1200, cost: 1100000, mult: 1.5 },
    { id: 'click_8', icon: "🧬", name: "Нейроинтерфейс ввода кода", powerBonus: 4500, cost: 5000000, mult: 1.55 }
];

let investStocks = [
    { id: 'apple', icon: "🍏", name: "Apple Inc.", price: 10000, owned: 0, dividend: 60 },
    { id: 'google', icon: "🌐", name: "Alphabet (Google)", price: 20000, owned: 0, dividend: 130 },
    { id: 'tesla', icon: "⚡", name: "Tesla Motors", price: 40000, owned: 0, dividend: 280 },
    { id: 'nvidia', icon: "🎮", name: "NVIDIA Corp", price: 85000, owned: 0, dividend: 650 },
    { id: 'msft', icon: "🪟", name: "Microsoft Corp", price: 160000, owned: 0, dividend: 1300 },
    { id: 'amzn', icon: "📦", name: "Amazon.com", price: 320000, owned: 0, dividend: 2800 },
    { id: 'meta', icon: "♾️", name: "Meta Platforms", price: 650000, owned: 0, dividend: 6000 },
    { id: 'yndx', icon: "🔴", name: "Yandex N.V.", price: 1300000, owned: 0, dividend: 13000 },
    { id: 'spacex', icon: "🚀", name: "SpaceX Private", price: 2800000, owned: 0, dividend: 30000 }
];

let investCrypto = [
    { id: 'btc', icon: "₿", name: "Bitcoin (BTC)", price: 1500000, owned: 0, volatility: 0.14 },
    { id: 'eth', icon: "💠", name: "Ethereum (ETH)", price: 120000, owned: 0, volatility: 0.16 },
    { id: 'ton', icon: "💎", name: "TON Coin", price: 3500, owned: 0, volatility: 0.22 },
    { id: 'meme', icon: "🐕", name: "DogeMeme Coin", price: 100, owned: 0, volatility: 0.35 },
    { id: 'sol', icon: "☀️", name: "Solana (SOL)", price: 14000, owned: 0, volatility: 0.24 },
    { id: 'xrp', icon: "✖️", name: "Ripple (XRP)", price: 550, owned: 0, volatility: 0.20 },
    { id: 'ada', icon: "🔵", name: "Cardano (ADA)", price: 420, owned: 0, volatility: 0.21 },
    { id: 'avax', icon: "🔺", name: "Avalanche (AVAX)", price: 3200, owned: 0, volatility: 0.25 },
    { id: 'dot', icon: "🟣", name: "Polkadot (DOT)", price: 850, owned: 0, volatility: 0.23 },
    { id: 'link', icon: "🔗", name: "Chainlink (LINK)", price: 1600, owned: 0, volatility: 0.24 },
    { id: 'ltc', icon: "🥈", name: "Litecoin (LTC)", price: 7500, owned: 0, volatility: 0.18 },
    { id: 'shib', icon: "🦊", name: "Shiba Inu (SHIB)", price: 25, owned: 0, volatility: 0.40 },
    { id: 'pepe', icon: "🐸", name: "Pepe Coin (PEPE)", price: 15, owned: 0, volatility: 0.45 },
    { id: 'not', icon: "🪙", name: "Notcoin (NOT)", price: 60, owned: 0, volatility: 0.38 }
];

const skinTypes = [
    { id: 0, icon: "💠", name: "Классический Neon", cost: 0, background: "linear-gradient(135deg, #38bdf8, #6366f1)", shadow: "0 0 35px rgba(56, 189, 248, 0.4)" },
    { id: 1, icon: "🥇", name: "Золотой Слиток", cost: 10000, background: "linear-gradient(135deg, #facc15, #ca8a04)", shadow: "0 0 35px rgba(250, 204, 21, 0.45)" },
    { id: 2, icon: "💎", name: "Бриллиантовый Дзен", cost: 50000, background: "linear-gradient(135deg, #22d3ee, #0284c7)", shadow: "0 0 35px rgba(34, 211, 238, 0.5)" },
    { id: 3, icon: "🐂", name: "Кровавый Бык", cost: 250000, background: "linear-gradient(135deg, #ef4444, #991b1b)", shadow: "0 0 35px rgba(239, 68, 68, 0.5)" },
    { id: 4, icon: "🟩", name: "Киберпанк Матрица", cost: 1000000, background: "linear-gradient(135deg, #4ade80, #166534)", shadow: "0 0 40px rgba(74, 222, 128, 0.55)" },
    { id: 5, icon: "👑", name: "Королевский Пурпур", cost: 5000000, background: "linear-gradient(135deg, #c084fc, #6b21a8)", shadow: "0 0 40px rgba(192, 132, 252, 0.55)" }
];

const achievementsList = [
    { id: 'taps_50', icon: "👆", title: 'Разомнуть пальцы', desc: 'Сделать 50 тапов по экрану', reward: 2500, check: (s) => s.totalTaps >= 50 },
    { id: 'taps_500', icon: "⌨️", title: 'Мастер клавиатуры', desc: 'Сделать 500 тапов', reward: 25000, check: (s) => s.totalTaps >= 500 },
    { id: 'earn_10k', icon: "💵", title: 'Первые деньги', desc: 'Заработать всего 10 000 ₽', reward: 15000, check: (s) => s.totalEarned >= 10000 },
    { id: 'earn_1m', icon: "💰", title: 'Миллионер в IT', desc: 'Заработать всего 1 000 000 ₽', reward: 250000, check: (s) => s.totalEarned >= 1000000 },
    { id: 'buy_first_biz', icon: "🏢", title: 'Предприниматель', desc: 'Купить любой бизнес или контракт', reward: 10000, check: (s) => s.farmsOwned.some(count => count > 0) || s.businesses.some(b => b.level > 0) },
    { id: 'buy_skin', icon: "🎨", title: 'Стильный терминал', desc: 'Купить кастомный скин кнопки', reward: 30000, check: (s) => s.unlockedSkins.length > 1 }
];

let state = {
    balance: 300,
    passiveIncome: 0,
    clickPower: 1,
    clickUpgrades: clickUpgradesList,
    stocks: investStocks,
    crypto: investCrypto,
    farmsOwned: new Array(farmTypes.length).fill(0),
    farmCosts: farmTypes.map(f => f.baseCost),
    businesses: businessList,
    unlockedSkins: [0],
    currentSkinId: 0,
    totalEarned: 300,
    totalTaps: 0,
    lastDailyClaim: 0,
    claimedAchievements: []
};

if (localStorage.getItem('defWorkV3')) {
    try {
        const saved = JSON.parse(localStorage.getItem('defWorkV3'));
        state = { ...state, ...saved };
        if (!state.farmsOwned || state.farmsOwned.length < farmTypes.length) state.farmsOwned = new Array(farmTypes.length).fill(0);
        if (!state.businesses) state.businesses = businessList;
        if (!state.clickUpgrades) state.clickUpgrades = clickUpgradesList;
        if (!state.stocks || state.stocks.length < investStocks.length) state.stocks = investStocks;
        if (!state.crypto || state.crypto.length < investCrypto.length) state.crypto = investCrypto;
        if (!state.unlockedSkins) state.unlockedSkins = [0];
    } catch (e) { console.error(e); }
}

const userDisplayEl = document.getElementById('user-display');
if (userDisplayEl) {
    userDisplayEl.innerText = username;
}

function saveState() {
    localStorage.setItem('defWorkV3', JSON.stringify(state));
}

// --- СИНХРОНИЗАЦИЯ С СЕРВЕРОМ (SUPABASE + RAILWAY) ---
async function syncWithServer() {
    try {
        const response = await fetch(`${API_URL}/sync`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                telegramId,
                username,
                balance: state.balance,
                totalEarned: state.totalEarned,
                clickPower: state.clickPower
            })
        });
        const data = await response.json();
        if (data.success && data.user) {
            if (data.user.balance > state.balance) {
                state.balance = data.user.balance;
                state.totalEarned = data.user.totalEarned;
                state.clickPower = data.user.clickPower || state.clickPower;
                updateUI();
                saveState();
            }
        }
    } catch (e) {
        console.log("Сервер недоступен, работаем локально", e);
    }
}

setInterval(syncWithServer, 15000);

function openProfileModal() {
    const profileModal = document.getElementById('profile-modal');
    if (profileModal) profileModal.style.display = 'flex';
    if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
}

function closeProfileModal() {
    const profileModal = document.getElementById('profile-modal');
    if (profileModal) profileModal.style.display = 'none';
}

const tapButton = document.getElementById('tap-button');
if (tapButton) {
    tapButton.addEventListener('click', () => {
        state.balance += state.clickPower;
        state.totalEarned += state.clickPower;
        state.totalTaps++;
        if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
        updateUI();
    });
}

function updateRankUI() {
    const rankTitle = document.getElementById('rank-title-display');
    const progressBar = document.getElementById('rank-progress-bar');
    const counterDisplay = document.getElementById('rank-counter-display');
    if (!rankTitle || !progressBar || !counterDisplay) return;

    let rankName = "Junior Фрилансер 💻";
    let currentMin = 25000;
    let nextMilestone = 250000;
    let earned = state.totalEarned;

    if (earned < 25000) {
        rankName = "Новичок-кликер 💀";
        currentMin = 0;
        nextMilestone = 25000;
    } else if (earned < 250000) {
        rankName = "Junior Фрилансер 💻";
        currentMin = 25000;
        nextMilestone = 250000;
    } else if (earned < 2500000) {
        rankName = "Middle Разработчик ⚡";
        currentMin = 250000;
        nextMilestone = 2500000;
    } else if (earned < 25000000) {
        rankName = "Senior Архитектор 🏛️";
        currentMin = 2500000;
        nextMilestone = 25000000;
    } else {
        rankName = "IT-Магнат DefWork 🌌";
        currentMin = 25000000;
        nextMilestone = 25000000;
    }

    let progressInLevel = earned - currentMin;
    let levelSpan = nextMilestone - currentMin;
    let percent = levelSpan > 0 ? (progressInLevel / levelSpan) * 100 : 100;
    percent = Math.min(100, Math.max(0, percent));

    rankTitle.innerText = rankName;
    progressBar.style.width = percent + '%';

    if (earned >= 25000000) {
        counterDisplay.innerText = `MAX (${earned.toLocaleString()} ₽)`;
    } else {
        counterDisplay.innerText = `${earned.toLocaleString()} / ${nextMilestone.toLocaleString()} ₽`;
    }
}

function buyClickUpgrade(upgradeId) {
    let up = state.clickUpgrades.find(u => u.id === upgradeId);
    if (!up) return;
    if (state.balance >= up.cost) {
        state.balance -= up.cost;
        state.clickPower += up.powerBonus;
        up.cost = Math.floor(up.cost * up.mult);
        saveState();
        renderClickUpgrades();
        updateUI();
        if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred('medium');
    } else {
        alert('Не хватает рублей для улучшения!');
    }
}

function renderClickUpgrades() {
    const container = document.getElementById('click-upgrades-container');
    if (!container) return;
    container.innerHTML = state.clickUpgrades.map(up => `
        <div class="card">
            <div class="card-left">
                <div class="icon-box orange">${up.icon}</div>
                <div class="card-info">
                    <h4>${up.name}</h4>
                    <p style="color: var(--accent-green);">⚡ +${up.powerBonus.toLocaleString()} к силе клика</p>
                </div>
            </div>
            <button class="btn btn-green" onclick="buyClickUpgrade('${up.id}')">${up.cost.toLocaleString()} ₽</button>
        </div>
    `).join('');
}

function recalculatePassiveIncome() {
    let total = 0;
    farmTypes.forEach((farm, idx) => total += farm.income * state.farmsOwned[idx]);
    state.businesses.forEach(biz => {
        if (biz.level > 0) {
            let base = biz.baseIncome * biz.level * Math.pow(1.3, biz.level - 1);
            let workerMultiplier = 1 + (biz.workers * 0.2);
            let adMultiplier = biz.adBudget > 0 ? 1.6 : 1.0;
            total += Math.floor(base * workerMultiplier * adMultiplier);
        }
    });
    state.stocks.forEach(stock => total += stock.owned * stock.dividend);
    state.passiveIncome = Math.floor(total);
}

setInterval(() => {
    state.crypto.forEach(c => {
        let changePercent = (Math.random() * (c.volatility * 2) - (c.volatility * 0.8));
        c.price = Math.max(5, Math.floor(c.price * (1 + changePercent)));
    });
    renderCrypto();
}, 15000);

setInterval(() => {
    recalculatePassiveIncome();
    state.balance += state.passiveIncome;
    state.totalEarned += state.passiveIncome;
    updateUI();
    saveState();
}, 1000);

function handleSkinAction(skinId) {
    const skin = skinTypes.find(s => s.id === skinId);
    if (!skin) return;
    if (state.unlockedSkins.includes(skinId)) {
        state.currentSkinId = skinId;
        renderSkins();
        applySkinStyle();
        saveState();
    } else if (state.balance >= skin.cost) {
        state.balance -= skin.cost;
        state.unlockedSkins.push(skinId);
        state.currentSkinId = skinId;
        renderSkins();
        applySkinStyle();
        renderAchievements();
        updateUI();
        saveState();
    } else {
        alert('Не хватает рублей для покупки скина!');
    }
}

function applySkinStyle() {
    const skin = skinTypes.find(s => s.id === state.currentSkinId);
    const tapBtn = document.getElementById('tap-button');
    if (tapBtn && skin) {
        tapBtn.style.background = skin.background;
        tapBtn.style.boxShadow = skin.shadow;
    }
}

function renderSkins() {
    const container = document.getElementById('skins-container');
    if (!container) return;
    container.innerHTML = skinTypes.map(skin => {
        const isUnlocked = state.unlockedSkins.includes(skin.id);
        const isEquipped = state.currentSkinId === skin.id;
        return `
            <div class="card" style="border-color: ${isEquipped ? 'var(--accent-blue)' : 'var(--card-border)'};">
                <div class="card-left">
                    <div class="icon-box" style="background: ${skin.background}; color: #fff;">${skin.icon}</div>
                    <div class="card-info">
                        <h4>${skin.name}</h4>
                        <p>${isEquipped ? '✅ Установлен' : (isUnlocked ? '🔓 В коллекции' : '🔒 Заблокирован')}</p>
                    </div>
                </div>
                <button class="${isEquipped ? 'btn btn-disabled' : (isUnlocked ? 'btn btn-green' : 'btn')}" ${isEquipped ? 'disabled' : ''} onclick="handleSkinAction(${skin.id})">
                    ${isEquipped ? 'Активен' : (isUnlocked ? 'Надеть' : skin.cost.toLocaleString() + ' ₽')}
                </button>
            </div>
        `;
    }).join('');
}

function tradeStock(stockId, action) {
    let stock = state.stocks.find(s => s.id === stockId);
    if (!stock) return;
    if (action === 'buy') {
        let actualCost = Math.floor(stock.price * 1.01);
        if (state.balance >= actualCost) {
            state.balance -= actualCost;
            stock.owned++;
            recalculatePassiveIncome();
            renderStocks();
            updateUI();
            saveState();
        } else alert('Не хватает рублей!');
    } else if (action === 'sell') {
        if (stock.owned > 0) {
            state.balance += Math.floor(stock.price * 0.99);
            stock.owned--;
            recalculatePassiveIncome();
            renderStocks();
            updateUI();
            saveState();
        } else alert('Нет акций в портфеле!');
    }
}

function tradeCrypto(cryptoId, action) {
    let c = state.crypto.find(item => item.id === cryptoId);
    if (!c) return;
    if (action === 'buy') {
        let actualCost = Math.floor(c.price * 1.01);
        if (state.balance >= actualCost) {
            state.balance -= actualCost;
            c.owned++;
            renderCrypto();
            updateUI();
            saveState();
        } else alert('Не хватает рублей!');
    } else if (action === 'sell') {
        if (c.owned > 0) {
            state.balance += Math.floor(c.price * 0.99);
            c.owned--;
            renderCrypto();
            updateUI();
            saveState();
        } else alert('Нет монет в кошельке!');
    }
}

function renderStocks() {
    const container = document.getElementById('invest-stocks-container');
    if (!container) return;
    container.innerHTML = state.stocks.map(stock => `
        <div class="card">
            <div class="card-left">
                <div class="icon-box blue">${stock.icon}</div>
                <div class="card-info">
                    <h4>${stock.name}</h4>
                    <p>💵 ${stock.price.toLocaleString()} ₽ • <span style="color: var(--accent-blue);">${stock.owned} шт. (+${stock.dividend.toLocaleString()} ₽/с)</span></p>
                </div>
            </div>
            <div style="display: flex; gap: 4px;">
                <button class="btn btn-green" style="padding: 6px 10px;" onclick="tradeStock('${stock.id}', 'buy')">+</button>
                <button class="btn btn-red" style="padding: 6px 10px;" onclick="tradeStock('${stock.id}', 'sell')" ${stock.owned === 0 ? 'disabled' : ''}>−</button>
            </div>
        </div>
    `).join('');
}

function renderCrypto() {
    const container = document.getElementById('invest-crypto-container');
    if (!container) return;
    container.innerHTML = state.crypto.map(c => `
        <div class="card">
            <div class="card-left">
                <div class="icon-box gold">${c.icon}</div>
                <div class="card-info">
                    <h4>${c.name}</h4>
                    <p>📊 ${c.price.toLocaleString()} ₽ • <span style="color: var(--accent-green);">${c.owned} шт.</span></p>
                </div>
            </div>
            <div style="display: flex; gap: 4px;">
                <button class="btn btn-green" style="padding: 6px 10px;" onclick="tradeCrypto('${c.id}', 'buy')">+</button>
                <button class="btn btn-red" style="padding: 6px 10px;" onclick="tradeCrypto('${c.id}', 'sell')" ${c.owned === 0 ? 'disabled' : ''}>−</button>
            </div>
        </div>
    `).join('');
}

function buyInitialBusiness(bizId) {
    let biz = state.businesses.find(b => b.id === bizId);
    if (!biz || biz.level > 0) return;
    if (state.balance >= biz.baseCost) {
        state.balance -= biz.baseCost;
        biz.level = 1;
        recalculatePassiveIncome();
        renderBusinesses();
        renderMyBusinesses();
        updateUI();
        saveState();
    } else alert('Не хватает капитала для открытия!');
}

function upgradeBusinessLevel(bizId) {
    let biz = state.businesses.find(b => b.id === bizId);
    if (!biz || biz.level === 0) return;
    let currentCost = Math.floor(biz.baseCost * Math.pow(biz.costMult, biz.level));
    if (state.balance >= currentCost) {
        state.balance -= currentCost;
        biz.level++;
        recalculatePassiveIncome();
        renderMyBusinesses();
        updateUI();
        saveState();
    } else alert('Не хватает средств на расширение!');
}

function hireWorker(bizId) {
    let biz = state.businesses.find(b => b.id === bizId);
    if (!biz) return;
    let cost = Math.floor(biz.baseCost * 0.15 * (biz.workers + 1));
    if (state.balance >= cost) {
        state.balance -= cost;
        biz.workers++;
        recalculatePassiveIncome();
        renderMyBusinesses();
        updateUI();
        saveState();
    } else alert(`Нужно: ${cost.toLocaleString()} ₽`);
}

function investAdBudget(bizId) {
    let biz = state.businesses.find(b => b.id === bizId);
    if (!biz) return;
    let cost = Math.floor(biz.baseCost * 0.25);
    if (state.balance >= cost) {
        state.balance -= cost;
        biz.adBudget = 1;
        recalculatePassiveIncome();
        renderMyBusinesses();
        updateUI();
        saveState();
    } else alert(`Нужно: ${cost.toLocaleString()} ₽`);
}

function renderBusinesses() {
    const container = document.getElementById('business-container');
    if (!container) return;
    let sortedBiz = [...state.businesses].sort((a, b) => a.baseCost - b.baseCost);
    container.innerHTML = sortedBiz.map(biz => {
        let isBought = biz.level > 0;
        return `
            <div class="card">
                <div class="card-left">
                    <div class="icon-box blue">${biz.icon}</div>
                    <div class="card-info">
                        <h4>${biz.name}</h4>
                        <p style="color: var(--accent-green);">⚡ +${biz.baseIncome.toLocaleString()} ₽/сек</p>
                    </div>
                </div>
                <button class="btn ${isBought ? 'btn-disabled' : 'btn-green'}" ${isBought ? 'disabled' : ''} onclick="buyInitialBusiness('${biz.id}')">
                    ${isBought ? 'Куплено ✓' : biz.baseCost.toLocaleString() + ' ₽'}
                </button>
            </div>
        `;
    }).join('');
}

function renderMyBusinesses() {
    const container = document.getElementById('my-business-container');
    if (!container) return;
    let activeBiz = state.businesses.filter(b => b.level > 0);
    if (activeBiz.length === 0) {
        container.innerHTML = `<div style="font-size: 13px; color: var(--text-muted); text-align: center; padding: 24px;">🏢 У вас пока нет активных компаний.</div>`;
        return;
    }
    container.innerHTML = activeBiz.map(biz => {
        let upgradeCost = Math.floor(biz.baseCost * Math.pow(biz.costMult, biz.level));
        let workerCost = Math.floor(biz.baseCost * 0.15 * (biz.workers + 1));
        let adCost = Math.floor(biz.baseCost * 0.25);
        let currentIncome = Math.floor((biz.baseIncome * biz.level * Math.pow(1.3, biz.level - 1)) * (1 + biz.workers * 0.2) * (biz.adBudget > 0 ? 1.6 : 1.0));

        return `
            <div class="card" style="flex-direction: column; align-items: stretch;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="card-left">
                        <div class="icon-box purple">${biz.icon}</div>
                        <div class="card-info">
                            <h4>${biz.name} <span style="color: var(--accent-blue);">[Ур. ${biz.level}]</span></h4>
                            <p>👷 Штат: ${biz.workers} (+${biz.workers * 20}%) • ${biz.adBudget > 0 ? '📣 Реклама активна' : 'Без рекламы'}</p>
                        </div>
                    </div>
                    <span style="font-size: 12px; font-weight: 700; color: var(--accent-green);">+${currentIncome.toLocaleString()} ₽/с</span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 8px;">
                    <button class="btn btn-green" style="width: 100%;" onclick="upgradeBusinessLevel('${biz.id}')">⬆️ Расширить (${upgradeCost.toLocaleString()} ₽)</button>
                    <div style="display: flex; gap: 6px;">
                        <button class="btn" style="flex: 1;" onclick="hireWorker('${biz.id}')">👷 Найм (${workerCost.toLocaleString()} ₽)</button>
                        <button class="btn" style="flex: 1; background: linear-gradient(135deg, #c084fc, #7e22ce);" onclick="investAdBudget('${biz.id}')" ${biz.adBudget > 0 ? 'disabled' : ''}>
                            ${biz.adBudget > 0 ? '📣 Реклама работает' : `📣 Реклама (${adCost.toLocaleString()} ₽)`}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function buyFarm(index) {
    const currentCost = state.farmCosts[index];
    if (state.balance >= currentCost) {
        state.balance -= currentCost;
        state.farmsOwned[index]++;
        state.farmCosts[index] = Math.floor(currentCost * 1.15);
        recalculatePassiveIncome();
        renderFarms();
        updateUI();
        saveState();
    } else alert('Не хватает рублей!');
}

function openDailyChest() {
    const now = Date.now();
    if (now - state.lastDailyClaim < 86400000) {
        let timeLeft = Math.ceil((86400000 - (now - state.lastDailyClaim)) / 3600000);
        alert(`Рано! Сундук будет доступен через ${timeLeft} ч.`);
        return;
    }

    let bonus = Math.max(1000, Math.floor(state.balance * 0.10));
    state.lastDailyClaim = now;
    state.balance += bonus;
    state.totalEarned += bonus;
    updateUI();
    saveState();

    startBalancedCaseAnimation("🎁 Ежедневный сундук", [bonus * 0.5, bonus, bonus * 1.5, bonus * 2, bonus * 5], 1);
}

const casesList = [
    { id: 'c1', name: "Стажёрский кейс", type: 'rub', price: 1000, rewards: [200, 500, 1500, 4000, 15000], icon: "📦" },
    { id: 'c2', name: "Фриланс кейс", type: 'rub', price: 7500, rewards: [1500, 4000, 12000, 35000, 120000], icon: "💼" },
    { id: 'c3', name: "Бизнес кейс", type: 'rub', price: 50000, rewards: [10000, 25000, 80000, 250000, 900000], icon: "🏢" },
    { id: 'c4', name: "Магнат кейс", type: 'rub', price: 300000, rewards: [60000, 150000, 500000, 1500000, 6000000], icon: "🏛️" },
    { id: 'c5', name: "Сингулярность кейс", type: 'rub', price: 2000000, rewards: [400000, 1000000, 3500000, 10000000, 40000000], icon: "🌌" },

    { id: 's1', name: "Стартовые Звезды ⭐", type: 'star', price: 5, rewards: [5000, 15000, 50000, 200000, 1000000], icon: "⭐" },
    { id: 's2', name: "Бронзовый Star-кейс", type: 'star', price: 25, rewards: [30000, 90000, 300000, 1200000, 6000000], icon: "🌟" },
    { id: 's3', name: "Серебряный Star-кейс", type: 'star', price: 100, rewards: [150000, 450000, 1500000, 6000000, 30000000], icon: "💫" },
    { id: 's4', name: "Золотой Star-кейс", type: 'star', price: 500, rewards: [800000, 2500000, 8000000, 35000000, 180000000], icon: "👑" },
    { id: 's5', name: "Кейс Дурова ⭐", type: 'star', price: 2000, rewards: [4000000, 12000000, 40000000, 180000000, 1000000000], icon: "💎" }
];

function renderCasesShop() {
    const container = document.getElementById('cases-shop-container');
    if (!container) return;
    container.innerHTML = casesList.map(c => `
        <div class="card">
            <div class="card-left">
                <div class="icon-box ${c.type === 'star' ? 'gold' : 'blue'}">${c.icon}</div>
                <div class="card-info">
                    <h4>${c.name}</h4>
                    <p>Мин: ${c.rewards[0].toLocaleString()} ₽ • Макс: <span style="color: var(--accent-green);">${c.rewards[4].toLocaleString()} ₽</span></p>
                </div>
            </div>
            <button class="btn ${c.type === 'star' ? 'btn-green' : ''}" onclick="openShopCase('${c.id}')">
                ${c.price.toLocaleString()} ${c.type === 'star' ? '⭐' : '₽'}
            </button>
        </div>
    `).join('');
}

function openShopCase(caseId) {
    let c = casesList.find(item => item.id === caseId);
    if (!c) return;

    if (c.type === 'rub') {
        if (state.balance < c.price) {
            alert('Не хватает рублей для покупки кейса!');
            return;
        }
        state.balance -= c.price;
    } else {
        let confirmBuy = confirm(`Купить кейс "${c.name}" за ${c.price} ⭐?`);
        if (!confirmBuy) return;
    }

    let rand = Math.random() * 100;
    let prizeIndex = 0;

    if (rand < 2) prizeIndex = 4;
    else if (rand < 10) prizeIndex = 3;
    else if (rand < 25) prizeIndex = 2;
    else if (rand < 55) prizeIndex = 1;
    else prizeIndex = 0;

    let prize = c.rewards[prizeIndex];

    state.balance += prize;
    state.totalEarned += prize;
    updateUI();
    saveState();

    startBalancedCaseAnimation(c.name, c.rewards, prizeIndex);
}

function startCaseAnimation(caseTitle, possibleRewards, winningPrize) {
    startBalancedCaseAnimation(caseTitle, possibleRewards, possibleRewards.indexOf(winningPrize));
}

function startBalancedCaseAnimation(caseTitle, possibleRewards, winningIndexInRewards) {
    const modal = document.getElementById('case-modal');
    const titleEl = document.getElementById('case-modal-title');
    const track = document.getElementById('roulette-track');
    const resultEl = document.getElementById('case-win-result');
    const closeBtn = document.getElementById('case-close-btn');

    if (!modal || !titleEl || !track || !resultEl || !closeBtn) return;

    titleEl.innerText = caseTitle;
    resultEl.innerText = "";
    closeBtn.style.display = "none";
    modal.style.display = "flex";

    let winningPrize = possibleRewards[winningIndexInRewards];
    let winningIndex = 20;
    let trackItems = [];

    for (let i = 0; i < 40; i++) {
        if (i === winningIndex) {
            trackItems.push(winningPrize);
        } else {
            let randIdx = Math.floor(Math.random() * possibleRewards.length);
            trackItems.push(possibleRewards[randIdx]);
        }
    }

    track.innerHTML = trackItems.map(val => `
        <div class="roulette-item">
            <span style="font-size: 16px;">💰</span>
            <span style="margin-top: 4px; font-size: 11px;">+${val >= 1000 ? (val/1000) + 'k' : val}</span>
        </div>
    `).join('');

    track.style.transition = 'none';
    track.style.transform = 'translateX(0px)';

    setTimeout(() => {
        const itemWidth = 75; 
        const itemGap = 10;   
        const itemStep = itemWidth + itemGap;
        
        const windowWidth = track.parentElement.clientWidth;
        let targetOffset = (windowWidth / 2) - (winningIndex * itemStep) - (itemWidth / 2);

        track.style.transition = 'transform 4s cubic-bezier(0.08, 0.82, 0.15, 1)';
        track.style.transform = `translateX(${targetOffset}px)`;

        if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');

        setTimeout(() => {
            let profitClass = winningPrize >= 1000 ? 'color: var(--accent-green);' : 'color: var(--accent-red);';
            resultEl.innerHTML = `<span style="${profitClass}">Вы выиграли: +${winningPrize.toLocaleString()} ₽!</span>`;
            closeBtn.style.display = "block";
        }, 4100);
    }, 50);
}

function closeCaseModal() {
    const caseModal = document.getElementById('case-modal');
    if (caseModal) caseModal.style.display = 'none';
}

function claimAchievement(id, reward) {
    if (state.claimedAchievements.includes(id)) return;
    state.claimedAchievements.push(id);
    state.balance += reward;
    state.totalEarned += reward;
    renderAchievements();
    updateUI();
    saveState();
}

function renderFarms() {
    const container = document.getElementById('farms-container');
    if (!container) return;
    container.innerHTML = farmTypes.map((farm, index) => `
        <div class="card">
            <div class="card-left">
                <div class="icon-box green">${farm.icon}</div>
                <div class="card-info">
                    <h4>${farm.name} <span style="color: var(--text-muted);">(${state.farmsOwned[index]})</span></h4>
                    <p style="color: var(--accent-green);">⚡ +${farm.income.toLocaleString()} ₽/сек</p>
                </div>
            </div>
            <button class="btn" onclick="buyFarm(${index})">${state.farmCosts[index].toLocaleString()} ₽</button>
        </div>
    `).join('');
}

function renderAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container) return;
    container.innerHTML = achievementsList.map(ach => {
        const isClaimed = state.claimedAchievements.includes(ach.id);
        const isCompleted = ach.check(state);
        return `
            <div class="card">
                <div class="card-left">
                    <div class="icon-box gold">${ach.icon}</div>
                    <div class="card-info">
                        <h4>${ach.title}</h4>
                        <p>${ach.desc} • <span style="color: var(--accent-blue); font-weight: 700;">+${ach.reward.toLocaleString()} ₽</span></p>
                    </div>
                </div>
                <button class="${isClaimed ? 'btn btn-disabled' : (isCompleted ? 'btn btn-green' : 'btn btn-disabled')}" ${isCompleted && !isClaimed ? `onclick="claimAchievement('${ach.id}', ${ach.reward})"` : 'disabled'}>
                    ${isClaimed ? 'Получено ✓' : (isCompleted ? 'Забрать' : '🔒')}
                </button>
            </div>
        `;
    }).join('');
}

// --- РЕАЛЬНЫЙ ГЛОБАЛЬНЫЙ ТОП ИЗ БАЗЫ ДАННЫХ ---
async function renderLeaderboard() {
    const container = document.getElementById('leaderboard-list');
    if (!container) return;

    container.innerHTML = `<div style="text-align:center; color: var(--text-muted); padding: 20px;">Загрузка топа из базы...</div>`;

    try {
        const response = await fetch(`${API_URL}/leaderboard`);
        const leaders = await response.json();
        
        const medals = ["🥇", "🥈", "🥉"];
        container.innerHTML = leaders.map((l, i) => `
            <div class="history-item" style="border-color: ${l.username === username ? 'var(--accent-blue)' : 'var(--card-border)'};">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 18px;">${medals[i] || `#${i+1}`}</span>
                    <span>👨‍💻 ${l.username}</span>
                </div>
                <span style="color: var(--accent-green);">${Math.floor(l.totalEarned).toLocaleString()} ₽</span>
            </div>
        `).join('');
    } catch (e) {
        container.innerHTML = `<div style="text-align:center; color: var(--accent-red); padding: 20px;">Ошибка загрузки топа</div>`;
    }
}

function switchEarnTab(type) {
    document.getElementById('earn-switcher-stack').style.display = 'none';
    document.getElementById('earn-main-title').style.display = 'none';
    document.getElementById('earn-back-btn').style.display = 'inline-flex';
    ['business', 'my_business', 'farms', 'investments', 'click_upgrades'].forEach(t => {
        const el = document.getElementById('earn-' + t);
        if (el) el.style.display = t === type ? 'block' : 'none';
    });
    if (type === 'business') renderBusinesses();
    if (type === 'my_business') renderMyBusinesses();
    if (type === 'farms') renderFarms();
    if (type === 'click_upgrades') renderClickUpgrades();
    if (type === 'investments') { renderStocks(); renderCrypto(); }
}

function closeEarnSubMenu() {
    document.getElementById('earn-switcher-stack').style.display = 'flex';
    document.getElementById('earn-main-title').style.display = 'block';
    document.getElementById('earn-back-btn').style.display = 'none';
    ['business', 'my_business', 'farms', 'investments', 'click_upgrades'].forEach(t => {
        const el = document.getElementById('earn-' + t);
        if (el) el.style.display = 'none';
    });
}

function updateUI() {
    const balanceDisplay = document.getElementById('balance-display');
    const passiveDisplay = document.getElementById('passive-display');
    const clickPowerDisplay = document.getElementById('click-power-display');

    if (balanceDisplay) balanceDisplay.innerText = Math.floor(state.balance).toLocaleString();
    if (passiveDisplay) passiveDisplay.innerText = `⚡ +${Math.floor(state.passiveIncome).toLocaleString()} ₽/сек`;
    if (clickPowerDisplay) clickPowerDisplay.innerText = state.clickPower.toLocaleString();
    
    updateRankUI();
    renderAchievements();
}

function switchTab(tabId, btn) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const targetTab = document.getElementById('tab-' + tabId);
    if (targetTab) targetTab.classList.add('active');
    if (btn) btn.classList.add('active');
    
    if (tabId === 'earn') closeEarnSubMenu();
    if (tabId === 'leaderboard') renderLeaderboard();
    if (tabId === 'skins') renderSkins();
    if (tabId === 'cases') renderCasesShop();
}

window.onload = async () => {
    // Первичная синхронизация прогресса с базой данных при открытии игры
    await syncWithServer();

    recalculatePassiveIncome();
    renderFarms();
    renderBusinesses();
    renderMyBusinesses();
    renderClickUpgrades();
    renderStocks();
    renderCrypto();
    renderSkins();
    renderAchievements();
    renderCasesShop();
    applySkinStyle();
    updateUI();
};