const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.author');
const generateBtn = document.getElementById('generate-btn');
const authorSelect = document.getElementById('author-select');
const fontSelect = document.getElementById('font-select');
const timerDisplay = document.getElementById('timer');
const resetTimerBtn = document.getElementById('reset-timer');
const toggleTimerBtn = document.getElementById('toggle-timer');
const timerCondition = document.getElementById('timer-condition');
const conditionValueGroup = document.getElementById('condition-value-group');
const conditionValue = document.getElementById('condition-value');

const quotes = {
    lebron: [
        "I'm going to be the first billionaire athlete.",
        "I'm not going to be the next Michael Jordan, I'm going to be the first LeBron James.",
        "I'm not a role model. I'm not trying to be a role model. I'm just trying to be myself.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day."
    ],
    mcdavid: [
        "I just try to be the best player I can be every night.",
        "You have to be ready to play every single night in this league.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day."
    ],
    jd: [
        "The American dream is not dead, it's just different.",
        "We need to rebuild the American dream for the working class.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day."
    ],
    jobs: [
        "The only way to do great work is to love what you do.",
        "Innovation distinguishes between a leader and a follower.",
        "Stay hungry, stay foolish.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day."
    ],
    einstein: [
        "In the middle of difficulty lies opportunity.",
        "Imagination is more important than knowledge.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day."
    ],
    mandela: [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "It always seems impossible until it's done.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day."
    ],
    lky: [
        "I am often accused of interfering in the private lives of citizens. Yes, if I did not, had I not done that, we wouldn't be here today.",
        "I have never been over concerned or obsessed with opinion polls or popularity polls. I think a leader who is, is a weak leader.",
        "If you can't force your people to follow you, their hearts must be with you.",
        "I always tried to be correct, not politically correct.",
        "The task of the leaders must be to provide or create for them a strong framework within which they can learn, work hard, be productive and be rewarded accordingly.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day.",
        "I'm not a perfect person. I'm not a perfect player. I'm not a perfect father. I'm not a perfect husband. I'm not a perfect son. I'm not a perfect friend. I'm not a perfect teammate. I'm not a perfect leader. I'm not a perfect role model. I'm not a perfect human being. I'm not a perfect anything. I'm just trying to be the best version of myself every day."
    ]
};

const wingdingsMap = {
    'a': '✌', 'b': '☺', 'c': '☻', 'd': '♥', 'e': '♦', 'f': '♣', 'g': '♠',
    'h': '•', 'i': '◘', 'j': '○', 'k': '◙', 'l': '♂', 'm': '♀', 'n': '♪',
    'o': '♫', 'p': '☼', 'q': '►', 'r': '◄', 's': '↕', 't': '‼', 'u': '¶',
    'v': '§', 'w': '▬', 'x': '↨', 'y': '↑', 'z': '↓', ' ': ' ', '.': '●',
    ',': '◆', '!': '■', '?': '▲', "'": '▼', '"': '◄', '-': '►'
};

function convertToWingdings(text) {
    return text.toLowerCase().split('').map(char => wingdingsMap[char] || char).join('');
}

function getRandomQuote(author) {
    if (author === 'all') {
        const authors = Object.keys(quotes);
        const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
        const authorQuotes = quotes[randomAuthor];
        const quote = authorQuotes[Math.floor(Math.random() * authorQuotes.length)];
        return { quote, author: randomAuthor };
    } else {
        const authorQuotes = quotes[author];
        const quote = authorQuotes[Math.floor(Math.random() * authorQuotes.length)];
        return { quote, author };
    }
}

function formatAuthorName(author) {
    const authorMap = {
        'lebron': 'LeBron James',
        'mcdavid': 'Connor McDavid',
        'jd': 'JD Vance',
        'jobs': 'Steve Jobs',
        'einstein': 'Albert Einstein',
        'mandela': 'Nelson Mandela',
        'lky': 'Lee Kuan Yew'
    };
    return authorMap[author] || author;
}

function changeFont() {
    const selectedFont = fontSelect.value;
    quoteElement.style.fontFamily = selectedFont;
    authorElement.style.fontFamily = selectedFont;
    if (selectedFont === 'Wingdings') {
        const currentText = quoteElement.textContent;
        quoteElement.textContent = convertToWingdings(currentText);
        const currentAuthorText = authorElement.textContent;
        authorElement.textContent = convertToWingdings(currentAuthorText);
    }
}

let timerInterval;
let startTime;
let isTimerRunning = false;

// Timer functions
function startTimer() {
    if (!isTimerRunning) {
        startTime = Date.now();
        isTimerRunning = true;
        timerInterval = setInterval(updateTimer, 10);
        toggleTimerBtn.textContent = 'Stop Timer';
    }
}

function stopTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        toggleTimerBtn.textContent = 'Start Timer';
    }
}

function resetTimer() {
    stopTimer();
    timerDisplay.textContent = '00:00:00';
}

function toggleTimer() {
    if (isTimerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function updateTimer() {
    const elapsed = Date.now() - startTime;
    const hours = Math.floor(elapsed / 3600000);
    const minutes = Math.floor((elapsed % 3600000) / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const milliseconds = Math.floor((elapsed % 1000) / 10);

    timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
}

// Timer condition handling
function checkTimerCondition(quote, author, font) {
    const condition = timerCondition.value;
    const value = conditionValue.value.toLowerCase();

    if (condition === 'none') return false;

    switch (condition) {
        case 'author':
            return author.toLowerCase() === value;
        case 'quote':
            return quote.toLowerCase().includes(value);
        case 'font':
            return font.toLowerCase() === value;
        default:
            return false;
    }
}

// Event listeners for timer controls
resetTimerBtn.addEventListener('click', resetTimer);
toggleTimerBtn.addEventListener('click', toggleTimer);
timerCondition.addEventListener('change', () => {
    conditionValueGroup.style.display = timerCondition.value === 'none' ? 'none' : 'flex';
});

// Event listener for hotkeys
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    
    // Prevent default behavior for space key
    if (key === ' ') {
        e.preventDefault();
    }
    
    switch (key) {
        case ' ':
            generateQuote();
            break;
        case 'r':
            resetTimer();
            break;
        case 't':
            toggleTimer();
            break;
    }
});

function generateQuote() {
    const selectedAuthor = authorSelect.value;
    const selectedFont = fontSelect.value;
    
    const { quote, author } = getRandomQuote(selectedAuthor);
    
    quoteElement.textContent = quote;
    authorElement.textContent = `- ${formatAuthorName(author)}`;
    
    if (selectedFont === 'Wingdings') {
        quoteElement.textContent = convertToWingdings(quote);
        authorElement.textContent = convertToWingdings(`- ${formatAuthorName(author)}`);
    }

    // Check timer condition
    if (checkTimerCondition(quote, author, selectedFont)) {
        stopTimer();
    }
}

function generateQuotes() {
    const selectedAuthor = authorSelect.value;
    const selectedFont = fontSelect.value;
    
    // Start timer if condition is set
    if (timerCondition.value !== 'none') {
        startTimer();
    }
    
    quoteElement.textContent = quote;
    authorElement.textContent = `- ${formatAuthorName(author)}`;
    
    if (selectedFont === 'Wingdings') {
        quoteElement.textContent = convertToWingdings(quote);
        authorElement.textContent = convertToWingdings(`- ${formatAuthorName(author)}`);
    }

    // Check timer condition
    if (checkTimerCondition(quote, author, selectedFont)) {
        stopTimer();
    }
}

generateBtn.addEventListener('click', generateQuotes);
fontSelect.addEventListener('change', changeFont);
authorSelect.addEventListener('change', generateQuotes);

// Generate initial quotes
generateQuote(); 