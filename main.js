// 單字資料庫
const wordDatabase = [
    { word: 'a', meaning: '一個；一種', options: ['一個；一種', '兩個', '三個', '許多'] },
    { word: 'able', meaning: '能夠；有能力的', options: ['能夠；有能力的', '無能的', '虛弱的', '笨拙的'] },
    { word: 'about', meaning: '關於；大約', options: ['關於；大約', '確切地', '完全地', '絕對地'] },
    { word: 'above', meaning: '在...之上；上面', options: ['在...之上；上面', '在...之下', '在...之間', '在...之內'] },
    { word: 'across', meaning: '穿過；橫越', options: ['穿過；橫越', '沿著', '圍繞', '朝向'] },
    { word: 'act', meaning: '行動；表演', options: ['行動；表演', '休息', '思考', '等待'] },
    { word: 'action', meaning: '行動；動作', options: ['行動；動作', '靜止', '想法', '夢想'] },
    { word: 'activity', meaning: '活動', options: ['活動', '休息', '睡眠', '沉默'] },
    { word: 'add', meaning: '增加；添加', options: ['增加；添加', '減少', '移除', '刪除'] },
    { word: 'address', meaning: '地址；致詞', options: ['地址；致詞', '電話', '姓名', '年齡'] },
    { word: 'adult', meaning: '成人', options: ['成人', '兒童', '嬰兒', '青少年'] },
    { word: 'afraid', meaning: '害怕的', options: ['害怕的', '勇敢的', '冷靜的', '開心的'] },
    { word: 'after', meaning: '在...之後', options: ['在...之後', '在...之前', '現在', '同時'] },
    { word: 'afternoon', meaning: '下午', options: ['下午', '上午', '晚上', '凌晨'] },
    { word: 'again', meaning: '再次', options: ['再次', '從不', '永遠', '最後'] },
    { word: 'against', meaning: '反對；對抗', options: ['反對；對抗', '支持', '贊同', '幫助'] },
    { word: 'age', meaning: '年齡', options: ['年齡', '身高', '體重', '時間'] },
    { word: 'ago', meaning: '以前', options: ['以前', '現在', '將來', '永遠'] },
    { word: 'agree', meaning: '同意', options: ['同意', '反對', '懷疑', '否認'] },
    { word: 'air', meaning: '空氣', options: ['空氣', '水', '土地', '火'] },
    { word: 'airplane', meaning: '飛機', options: ['飛機', '汽車', '船', '火車'] },
    { word: 'airport', meaning: '機場', options: ['機場', '車站', '港口', '公園'] },
    { word: 'all', meaning: '全部的；所有的', options: ['全部的；所有的', '部分的', '少量的', '一些'] },
    { word: 'allow', meaning: '允許', options: ['允許', '禁止', '拒絕', '否決'] },
    { word: 'almost', meaning: '幾乎；差不多', options: ['幾乎；差不多', '完全', '一點也不', '絕對'] },
    { word: 'alone', meaning: '單獨的', options: ['單獨的', '群體的', '熱鬧的', '擁擠的'] },
    { word: 'along', meaning: '沿著', options: ['沿著', '穿過', '越過', '環繞'] },
    { word: 'already', meaning: '已經', options: ['已經', '尚未', '從不', '永遠不'] },
    { word: 'also', meaning: '也；同樣', options: ['也；同樣', '相反', '不同', '獨特'] },
    { word: 'always', meaning: '總是；一直', options: ['總是；一直', '從不', '偶爾', '很少'] },
    { word: 'am', meaning: '是（用於第一人稱）', options: ['是（用於第一人稱）', '不是', '將是', '曾是'] },
    { word: 'among', meaning: '在...之中', options: ['在...之中', '在...之外', '在...之上', '在...之下'] },
    { word: 'amount', meaning: '數量', options: ['數量', '質量', '大小', '形狀'] },
    { word: 'an', meaning: '一個（用於母音音節前）', options: ['一個（用於母音音節前）', '多個', '全部', '所有'] },
    { word: 'and', meaning: '和；以及', options: ['和；以及', '或者', '但是', '因為'] },
    { word: 'angry', meaning: '生氣的', options: ['生氣的', '開心的', '平靜的', '悲傷的'] },
    { word: 'animal', meaning: '動物', options: ['動物', '植物', '礦物', '物品'] },
    { word: 'another', meaning: '另一個', options: ['另一個', '相同的', '這個', '那個'] },
    { word: 'answer', meaning: '答案；回答', options: ['答案；回答', '問題', '疑問', '猜測'] },
    { word: 'any', meaning: '任何的', options: ['任何的', '特定的', '某個', '這個'] },
    { word: 'anyone', meaning: '任何人', options: ['任何人', '沒有人', '某人', '每個人'] },
    { word: 'anything', meaning: '任何事物', options: ['任何事物', '沒有東西', '某物', '一切'] },
    { word: 'anywhere', meaning: '任何地方', options: ['任何地方', 'nowhere', '某處', '每處'] },
    { word: 'appear', meaning: '出現；顯現', options: ['出現；顯現', '消失', '隱藏', '遮蔽'] },
    { word: 'apple', meaning: '蘋果', options: ['蘋果', '香蕉', '橘子', '葡萄'] },
    { word: 'area', meaning: '區域；地區', options: ['區域；地區', '時間', '速度', '重量'] },
    { word: 'arm', meaning: '手臂', options: ['手臂', '腿', '頭', '腳'] },
    { word: 'around', meaning: '在...周圍；大約', options: ['在...周圍；大約', '遠離', '直接', '精確'] },
    { word: 'arrive', meaning: '到達', options: ['到達', '離開', '停留', '等待'] },
    { word: 'art', meaning: '藝術', options: ['藝術', '科學', '運動', '商業'] },
    { word: 'as', meaning: '如同；像...一樣', options: ['如同；像...一樣', '不同於', '反對', '區別於'] },
    { word: 'ask', meaning: '詢問；請求', options: ['詢問；請求', '回答', '命令', '拒絕'] },
    { word: 'asleep', meaning: '睡著的', options: ['睡著的', '清醒的', '活躍的', '疲倦的'] },
    { word: 'at', meaning: '在（地點）；在（時間）', options: ['在（地點）；在（時間）', '離開', '遠離', '朝向'] },
    { word: 'attack', meaning: '攻擊', options: ['攻擊', '防守', '和平', '撤退'] },
    { word: 'attention', meaning: '注意；關注', options: ['注意；關注', '忽視', '分心', '走神'] },
    { word: 'aunt', meaning: '阿姨；姑姑', options: ['阿姨；姑姑', '叔叔', '哥哥', '姐姐'] },
    { word: 'autumn', meaning: '秋天', options: ['秋天', '春天', '夏天', '冬天'] },
    { word: 'away', meaning: '離開', options: ['離開', '靠近', '到達', '停留'] }
];

let currentWordIndex = 0;
let timer = null;
let timeLeft = 10;
let isAnswered = false;
let usedWords = [];
let correctCount = 0;
let totalAnswered = 0;

const wordElement = document.getElementById('current-word');
const timerElement = document.getElementById('timer');
const optionsContainer = document.getElementById('options');
const resultElement = document.getElementById('result');
const startButton = document.getElementById('start-btn');
const speakButton = document.getElementById('speak-btn');
const scoreElement = document.createElement('div');
scoreElement.id = 'score';
document.querySelector('#exam-container').insertBefore(scoreElement, resultElement);

// 語音合成設置
const speechSynthesis = window.speechSynthesis;

// 開始測驗
function startExam() {
    usedWords = [];
    correctCount = 0;
    totalAnswered = 0;
    startButton.style.display = 'none';
    updateScore();
    showNextWord();
}

// 更新分數
function updateScore() {
    scoreElement.textContent = `得分：${correctCount}/${totalAnswered}`;
}

// 獲取隨機單字
function getRandomWord() {
    let availableWords = wordDatabase.filter(word => !usedWords.includes(word));
    if (availableWords.length === 0) {
        usedWords = [];
        availableWords = wordDatabase;
    }
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = availableWords[randomIndex];
    usedWords.push(selectedWord);
    return selectedWord;
}

// 顯示下一個單字
function showNextWord() {
    isAnswered = false;
    const currentWord = getRandomWord();
    wordElement.textContent = currentWord.word;
    
    optionsContainer.innerHTML = '';
    
    const shuffledOptions = [...currentWord.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, currentWord.meaning));
        optionsContainer.appendChild(button);
    });

    resetTimer();
    startTimer();
}

// 檢查答案
function checkAnswer(selectedOption, correctAnswer) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timer);

    const buttons = optionsContainer.getElementsByClassName('option-btn');
    for (let button of buttons) {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption && selectedOption !== correctAnswer) {
            button.classList.add('wrong');
        }
        button.disabled = true;
    }

    totalAnswered++;
    if (selectedOption === correctAnswer) {
        correctCount++;
        resultElement.textContent = '答對了！';
    } else {
        resultElement.textContent = '答錯了！正確答案是：' + correctAnswer;
    }
    
    updateScore();
    
    setTimeout(() => {
        resultElement.textContent = '';
        showNextWord();
    }, 2000);
}

// 重置計時器
function resetTimer() {
    timeLeft = 10;
    timerElement.textContent = timeLeft;
}

// 開始計時
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (!isAnswered) {
                const currentWord = wordDatabase.find(w => w.word === wordElement.textContent);
                checkAnswer('', currentWord.meaning);
            }
        }
    }, 1000);
}

// 播放單字發音
function speakWord() {
    const utterance = new SpeechSynthesisUtterance(wordElement.textContent);
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
}

// 事件監聽器
startButton.addEventListener('click', startExam);
speakButton.addEventListener('click', speakWord);
