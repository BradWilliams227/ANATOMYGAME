'use strict';

// ANAT-OOPS! Prototype v1. Entirely client-side; no dependencies or network calls.
// These are educator-review DRAFTS, not validated assessment questions.
const QUESTIONS = [
  {
    id: 'q1-triceps', scene: 'triceps', sceneLabel: 'GARAGE DISASTER', caption: 'Jack has skipped arm day. Again.',
    difficulty: 'LEVEL 1 · WARM UP',
    text: 'Jack needs to extend his elbows to push a car upwards. Which muscle is the primary elbow extensor?',
    answer: 'Triceps brachii',
    accepted: ['triceps brachii', 'triceps', 'triceps muscle'],
    explanation: 'Triceps brachii is the principal extensor of the elbow. It inserts onto the olecranon of the ulna and is supplied by the radial nerve.'
  },
  {
    id: 'q2-olecranon', scene: 'olecranon', sceneLabel: 'THE ELBOW INCIDENT', caption: 'Pip has found the sharpest corner.',
    difficulty: 'LEVEL 2 · THE BASICS',
    text: 'Pip bangs the point of their elbow on a table. Which bony projection of the ulna forms this point?',
    answer: 'Olecranon',
    accepted: ['olecranon', 'olecranon process', 'olecranon of the ulna', 'olecranon of ulna', 'olecranon process of ulna', 'olecranon process of the ulna'],
    explanation: 'The olecranon is the proximal projection of the ulna that forms the palpable point of the elbow. It is also the site of triceps insertion.'
  },
  {
    id: 'q3-fibular', scene: 'fibular', sceneLabel: 'PIRATE FOOT TROUBLE', caption: 'Captain Noodle may need a new boot.',
    difficulty: 'LEVEL 3 · CONNECT THE DOTS',
    text: 'After an injury at the neck of the fibula, Captain Noodle develops foot drop. Which nerve is most likely injured?',
    answer: 'Common fibular nerve',
    accepted: ['common fibular nerve', 'common peroneal nerve', 'common fibular', 'common peroneal'],
    explanation: 'The common fibular (peroneal) nerve winds superficially around the fibular neck. Injury can weaken ankle dorsiflexion and cause foot drop.'
  },
  {
    id: 'q4-laryngeal', scene: 'laryngeal', sceneLabel: 'OPERA NIGHT CHAOS', caption: 'Diva Bot is not hitting the high notes.',
    difficulty: 'LEVEL 4 · CLINICAL CLUES',
    text: 'After thyroid surgery, Diva Bot is hoarse and one true vocal fold cannot abduct or adduct. Which nerve was most likely injured?',
    answer: 'Recurrent laryngeal nerve',
    accepted: ['recurrent laryngeal nerve', 'recurrent laryngeal', 'inferior laryngeal nerve'],
    explanation: 'The recurrent laryngeal nerve supplies nearly all intrinsic laryngeal muscles, including the muscles moving the vocal folds. It is vulnerable during thyroid surgery; the cricothyroid is supplied by the external branch of the superior laryngeal nerve.'
  },
  {
    id: 'q5-hepatorenal', scene: 'hepatorenal', sceneLabel: 'ULTRASOUND OOPS', caption: 'A blob of fluid is playing hide-and-seek.',
    difficulty: 'LEVEL 5 · PUT IT TOGETHER',
    text: 'During a FAST scan of a supine patient, free fluid is seen between the liver and right kidney. Name this peritoneal recess.',
    answer: 'Hepatorenal recess (Morison’s pouch)',
    accepted: ['hepatorenal recess', 'hepatorenal pouch', 'hepatorenal space', 'morisons pouch', 'morison pouch', 'morisons recess', 'morison recess', 'morrisons pouch', 'morrison pouch', 'morrisons recess', 'morrison recess', 'morisons space', 'morrisons space'],
    explanation: 'The hepatorenal recess, or Morison’s pouch, lies between the liver and right kidney. In a supine patient, it is a dependent part of the upper peritoneal cavity where free fluid may collect.'
  },
  {
    id: 'q6-medulla', scene: 'medulla', sceneLabel: 'CAPTAIN CORTEX', caption: 'The neural navigation system is glitching.',
    difficulty: 'LEVEL 6 · BOSS BRAIN',
    text: 'A patient has reduced pain and temperature sensation on the LEFT face and RIGHT body, dysphagia and LEFT limb ataxia. Which side and region of the brainstem is affected?',
    answer: 'Left lateral medulla',
    accepted: ['left lateral medulla', 'left dorsolateral medulla', 'left lateral medulla oblongata', 'left dorsolateral medulla oblongata', 'left lateral medullary region', 'left lateral aspect of the medulla', 'left side of lateral medulla', 'left posterolateral medulla', 'left posterolateral medulla oblongata'],
    explanation: 'A left lateral medullary lesion can affect the ipsilateral spinal trigeminal pathways (left face), contralateral spinothalamic fibres (right body), nucleus ambiguus (swallowing) and inferior cerebellar peduncle (left ataxia). This is a classic lateral medullary pattern.'
  }
];

const svg = (body) => `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><ellipse cx="240" cy="326" rx="181" ry="17" fill="#292446" opacity=".13"/>${body}</svg>`;
const sparkle = (x, y, color = '#fff') => `<path class="success-spark" d="M${x} ${y-17} L${x+6} ${y-5} L${x+20} ${y} L${x+6} ${y+5} L${x} ${y+17} L${x-6} ${y+5} L${x-20} ${y} L${x-6} ${y-5} Z" fill="${color}" stroke="#282344" stroke-width="3"/>`;

// Each static, original SVG has a different cartoon staging. CSS supplies motion.
const SCENES = {
  triceps: svg(`
    <path d="M30 319 H452" stroke="#282344" stroke-width="5" stroke-linecap="round"/>
    <g class="car-lift">
      <rect x="73" y="108" width="329" height="90" rx="19" fill="#ff8a9a" stroke="#282344" stroke-width="7"/>
      <path d="M150 108 L192 61 H295 L340 108Z" fill="#f8f8fa" stroke="#282344" stroke-width="7"/>
      <path d="M200 68 L173 106 M293 67 L321 107" stroke="#282344" stroke-width="5"/>
      <circle cx="133" cy="195" r="33" fill="#292344"/><circle cx="133" cy="195" r="17" fill="#fff7e8"/>
      <circle cx="345" cy="195" r="33" fill="#292344"/><circle cx="345" cy="195" r="17" fill="#fff7e8"/>
      <rect x="80" y="140" width="35" height="10" rx="5" fill="#ffe99b"/><rect x="363" y="140" width="32" height="10" rx="5" fill="#ffe99b"/>
    </g>
    <path d="M169 236 L136 207 L133 181 M307 236 L332 207 L338 181" stroke="#282344" stroke-width="18" stroke-linecap="round" fill="none"/>
    <path d="M171 236 L139 211 L134 183 M303 236 L333 211 L339 182" stroke="#f5be95" stroke-width="12" stroke-linecap="round" fill="none"/>
    <rect x="182" y="229" width="114" height="78" rx="29" fill="#ffca64" stroke="#282344" stroke-width="6"/>
    <rect x="190" y="226" width="98" height="25" rx="10" fill="#7f67d9" stroke="#282344" stroke-width="5"/>
    <circle cx="239" cy="179" r="53" fill="#f5be95" stroke="#282344" stroke-width="7"/>
    <path d="M191 161 Q184 121 232 119 Q279 118 288 162" fill="#514565" stroke="#282344" stroke-width="6"/>
    <rect x="196" y="125" width="85" height="20" rx="7" fill="#d6f26e" stroke="#282344" stroke-width="5"/>
    <ellipse cx="220" cy="183" rx="6" ry="9" fill="#282344"/><ellipse cx="256" cy="183" rx="6" ry="9" fill="#282344"/>
    <path d="M224 212 Q238 199 254 212" stroke="#282344" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path class="sweat" d="M288 181 Q310 204 290 212 Q276 203 288 181Z" fill="#7cdded"/>
    <path d="M207 303 L195 322 M270 303 L282 322" stroke="#282344" stroke-width="13" stroke-linecap="round"/>
    ${sparkle(93, 77, '#d5f37c')}${sparkle(390, 64, '#fff')}
  `),
  olecranon: svg(`
    <rect x="296" y="161" width="160" height="30" rx="7" fill="#ffbd80" stroke="#282344" stroke-width="6"/>
    <path d="M322 191 L309 321 M428 191 L440 321" stroke="#282344" stroke-width="10" stroke-linecap="round"/>
    <path d="M90 322 H458" stroke="#282344" stroke-width="5"/>
    <g class="wobble">
      <ellipse cx="191" cy="180" rx="85" ry="106" fill="#7ed8da" stroke="#282344" stroke-width="8"/>
      <path d="M153 106 Q193 83 229 104" fill="none" stroke="#dcfffa" stroke-width="11" stroke-linecap="round"/>
      <circle cx="168" cy="162" r="9" fill="#282344"/><circle cx="211" cy="162" r="9" fill="#282344"/>
      <ellipse cx="189" cy="196" rx="13" ry="16" fill="#282344"/><ellipse cx="188" cy="193" rx="6" ry="4" fill="white"/>
      <ellipse cx="137" cy="197" rx="18" ry="10" fill="#ff9bb1"/><ellipse cx="245" cy="197" rx="18" ry="10" fill="#ff9bb1"/>
    </g>
    <path d="M124 231 L81 264 L99 289 M258 230 L295 202 L330 202" fill="none" stroke="#282344" stroke-width="20" stroke-linejoin="round" stroke-linecap="round"/>
    <path d="M124 231 L81 264 L99 289 M258 230 L295 202 L330 202" fill="none" stroke="#7ed8da" stroke-width="13" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="296" cy="202" r="9" fill="#ff8c9e" stroke="#282344" stroke-width="4"/>
    <path d="M158 273 L150 307 M218 273 L228 307" stroke="#282344" stroke-width="18" stroke-linecap="round"/>
    <path d="M137 312 H165 M218 312 H246" stroke="#282344" stroke-width="17" stroke-linecap="round"/>
    <path class="blink-star" d="M302 126 L310 144 L329 150 L310 158 L302 178 L294 158 L275 150 L294 144Z" fill="#fff171" stroke="#282344" stroke-width="4"/>
    <text x="333" y="111" font-size="23" font-weight="900" fill="#282344" transform="rotate(9 333 111)">BONK!</text>
    ${sparkle(81, 116, '#fff')}
  `),
  fibular: svg(`
    <path d="M42 320 H440" stroke="#282344" stroke-width="6"/>
    <path d="M43 131 Q111 80 167 132" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="12 14"/>
    <g class="floaty"><rect x="67" y="51" width="160" height="60" rx="15" fill="#fff9e4" stroke="#282344" stroke-width="5"/><text x="90" y="89" fill="#282344" font-size="22" font-weight="900">FOOT DROP?!</text></g>
    <path d="M228 180 Q190 213 206 264 L200 298" fill="none" stroke="#282344" stroke-width="27" stroke-linecap="round"/>
    <path d="M228 180 Q190 213 206 264 L200 298" fill="none" stroke="#ebcda3" stroke-width="18" stroke-linecap="round"/>
    <path d="M267 188 Q310 236 297 273 L310 297" fill="none" stroke="#282344" stroke-width="27" stroke-linecap="round"/>
    <path d="M267 188 Q310 236 297 273 L310 297" fill="none" stroke="#ebcda3" stroke-width="18" stroke-linecap="round"/>
    <path d="M169 285 Q194 279 214 292 L233 314 Q235 332 217 334 L167 331 Q147 318 169 285Z" fill="#7a65d7" stroke="#282344" stroke-width="6"/>
    <path class="wobble" d="M285 289 Q317 280 333 298 L345 329 Q347 339 330 339 L286 337 Q271 325 285 289Z" fill="#7a65d7" stroke="#282344" stroke-width="6"/>
    <rect x="172" y="126" width="124" height="88" rx="37" fill="#f9f3dc" stroke="#282344" stroke-width="7"/>
    <circle cx="237" cy="89" r="54" fill="#f0d1ac" stroke="#282344" stroke-width="7"/>
    <path d="M182 87 Q185 18 243 27 Q288 28 294 90 L278 77 L199 81Z" fill="#292344" stroke="#292344" stroke-width="5"/>
    <path d="M197 38 L284 48 L289 76 L196 69Z" fill="#f16f8e" stroke="#282344" stroke-width="5"/>
    <circle cx="213" cy="94" r="7" fill="#282344"/><circle cx="256" cy="94" r="7" fill="#282344"/>
    <path d="M221 120 Q238 110 252 121" fill="none" stroke="#282344" stroke-width="5" stroke-linecap="round"/>
    <path d="M179 153 L142 196 L118 181 M296 149 L339 192 L357 168" fill="none" stroke="#282344" stroke-width="19" stroke-linecap="round"/>
    <path d="M179 153 L142 196 L118 181 M296 149 L339 192 L357 168" fill="none" stroke="#f0d1ac" stroke-width="12" stroke-linecap="round"/>
    <path d="M348 152 L368 170 L350 188 L331 169Z" fill="#ffd96c" stroke="#282344" stroke-width="4"/>
    ${sparkle(381, 105, '#fff')}
  `),
  laryngeal: svg(`
    <path d="M35 320 H448" stroke="#282344" stroke-width="5"/>
    <path d="M38 23 L70 110 L106 38 M372 38 L409 110 L445 25" fill="none" stroke="#fff2a8" stroke-width="18" opacity=".75"/>
    <path d="M49 36 H428" stroke="#282344" stroke-width="9"/>
    <path d="M66 36 L90 106 L104 35 M370 35 L390 100 L412 36" fill="none" stroke="#282344" stroke-width="4"/>
    <circle cx="226" cy="165" r="67" fill="#8dd8ff" stroke="#282344" stroke-width="8"/>
    <path d="M192 121 H262 Q271 124 270 137 L266 146 H188 L184 132Z" fill="#ff84a3" stroke="#282344" stroke-width="5"/>
    <rect x="183" y="82" width="84" height="45" rx="12" fill="#b2f15c" stroke="#282344" stroke-width="6"/>
    <rect x="196" y="99" width="60" height="16" rx="7" fill="#282344"/>
    <circle cx="201" cy="157" r="7" fill="#282344"/><circle cx="248" cy="157" r="7" fill="#282344"/>
    <path d="M201 191 Q229 182 253 194" fill="none" stroke="#282344" stroke-width="6" stroke-linecap="round"/>
    <rect x="179" y="235" width="97" height="75" rx="19" fill="#aa9bf5" stroke="#282344" stroke-width="7"/>
    <path d="M187 248 L159 279 M274 247 L310 226" fill="none" stroke="#282344" stroke-width="19" stroke-linecap="round"/>
    <path d="M187 248 L159 279 M274 247 L310 226" fill="none" stroke="#8dd8ff" stroke-width="12" stroke-linecap="round"/>
    <path d="M205 309 L198 324 M251 309 L255 324" stroke="#282344" stroke-width="12" stroke-linecap="round"/>
    <rect x="329" y="188" width="24" height="40" rx="12" fill="#fef4d8" stroke="#282344" stroke-width="5"/>
    <path d="M341 226 L341 315 M315 315 H365" stroke="#282344" stroke-width="8" stroke-linecap="round"/>
    <path class="sing-note" d="M305 90 V55 L331 49 V85 M305 89 Q285 82 287 98 Q303 109 305 89 M331 85 Q312 78 314 94 Q329 106 331 85" fill="#f8709a" stroke="#282344" stroke-width="4"/>
    <path class="sing-note" d="M107 169 V133 L130 129 V165 M107 166 Q90 160 91 177 Q107 187 107 166 M130 165 Q112 159 114 176 Q129 185 130 165" fill="#f8709a" stroke="#282344" stroke-width="4" style="animation-delay:.5s"/>
    ${sparkle(103, 86, '#ffe57b')}${sparkle(372, 120, '#ffe57b')}
  `),
  hepatorenal: svg(`
    <rect x="68" y="53" width="347" height="262" rx="20" fill="#fffdf5" stroke="#282344" stroke-width="7"/>
    <rect x="89" y="78" width="305" height="210" rx="13" fill="#2f3559" stroke="#282344" stroke-width="5"/>
    <path d="M116 102 Q162 87 221 118 Q278 144 345 111 Q357 176 314 195 Q262 220 183 177 Q143 172 118 147Z" fill="#d4a4ff" stroke="#f2deff" stroke-width="6"/>
    <path d="M216 236 Q197 198 245 197 Q299 193 320 224 Q328 261 298 276 Q243 289 216 236Z" fill="#ffbb93" stroke="#ffd9c7" stroke-width="6"/>
    <path class="liquid" d="M184 195 Q206 187 219 198 Q242 187 261 194 Q238 211 220 213 Q199 215 184 195Z" fill="#75e5fc" stroke="#fff" stroke-width="4"/>
    <path d="M122 160 Q153 183 189 179 M253 236 Q274 224 305 238" fill="none" stroke="#fff" stroke-width="4" opacity=".65"/>
    <text x="122" y="125" font-size="17" font-weight="900" fill="#282344">LIVER</text>
    <text x="239" y="263" font-size="14" font-weight="900" fill="#282344">RIGHT KIDNEY</text>
    <rect x="180" y="297" width="123" height="20" rx="10" fill="#282344"/>
    <path d="M235 317 V332" stroke="#282344" stroke-width="8"/>
    <path class="floaty" d="M368 10 Q405 -7 430 32 Q444 60 420 75 Q377 81 365 48 Q351 25 368 10Z" fill="#8ce6ec" stroke="#282344" stroke-width="5"/>
    <circle cx="386" cy="30" r="4" fill="#282344"/><circle cx="411" cy="32" r="4" fill="#282344"/>
    <path d="M391 48 Q404 58 416 47" fill="none" stroke="#282344" stroke-width="4"/>
    ${sparkle(116, 56, '#fff')}
  `),
  medulla: svg(`
    <path d="M45 321 H438" stroke="#282344" stroke-width="5"/>
    <g class="ship-rock">
      <path d="M84 245 H394 L351 308 H134Z" fill="#ffad76" stroke="#282344" stroke-width="8" stroke-linejoin="round"/>
      <path d="M128 245 L146 204 H332 L357 245Z" fill="#fff7e7" stroke="#282344" stroke-width="7"/>
      <path d="M235 207 V68" stroke="#282344" stroke-width="10"/>
      <path d="M240 80 L349 164 L239 164Z" fill="#fb749f" stroke="#282344" stroke-width="6"/>
      <path d="M227 87 L131 177 L227 177Z" fill="#e0cf82" stroke="#282344" stroke-width="6"/>
      <rect x="191" y="182" width="92" height="69" rx="24" fill="#9e83e9" stroke="#282344" stroke-width="6"/>
      <path d="M205 219 L175 232 M279 218 L309 234" stroke="#282344" stroke-width="17" stroke-linecap="round"/>
      <circle cx="235" cy="155" r="48" fill="#a5f2dc" stroke="#282344" stroke-width="7"/>
      <path d="M191 143 Q206 114 234 108 Q259 109 280 141" fill="none" stroke="#282344" stroke-width="7"/>
      <path d="M200 118 H274 L290 134 H184Z" fill="#f9d663" stroke="#282344" stroke-width="5"/>
      <circle cx="220" cy="157" r="6" fill="#282344"/><circle cx="251" cy="157" r="6" fill="#282344"/>
      <path d="M225 180 Q239 167 249 179" fill="none" stroke="#282344" stroke-width="4"/>
      <path d="M228 251 L219 272 M258 251 L271 272" stroke="#282344" stroke-width="10" stroke-linecap="round"/>
    </g>
    <path d="M68 281 Q92 265 114 282 Q140 292 165 282 M314 284 Q350 267 380 284 Q408 294 432 282" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/>
    <path class="blink-star" d="M81 115 L101 94 L112 120 L98 133 L119 148 L82 164 L93 140 L66 136Z" fill="#fff06d" stroke="#282344" stroke-width="5"/>
    <path class="blink-star" d="M375 93 L391 72 L401 94 L394 110 L408 124 L378 135 L384 114 L358 112Z" fill="#fff06d" stroke="#282344" stroke-width="5"/>
    <text x="334" y="59" font-size="20" font-weight="900" fill="#282344" transform="rotate(9 334 59)">SOS!</text>
    ${sparkle(120, 56, '#fff')}${sparkle(425, 203, '#d2f17e')}
  `)
};

const DAILY_SECONDS = 25;
const MAX_POINTS_PER_QUESTION = 1000;
const WRONG_GUESS_COOLDOWN_MS = 650;
const NEXT_QUESTION_DELAY_MS = 1200;
const TIMEOUT_REVEAL_DELAY_MS = 2200; // A longer learning moment for unanswered questions.
const DAILY_STORAGE_PREFIX = 'anat-oops:v1:daily:'; // keep legacy day results accessible

const $ = (id) => document.getElementById(id);
const elements = {
  landing: $('landingScreen'), game: $('gameScreen'), results: $('resultsScreen'),
  dailyButton: $('dailyButton'), demoButton: $('demoButton'), savedNote: $('savedNote'),
  demoSeconds: $('demoSeconds'), modeLabel: $('modeLabel'),
  questionNumber: $('questionNumber'), runningScore: $('runningScore'),
  stageProgress: $('stageProgress'), sceneColumn: document.querySelector('.scene-column'),
  sceneLabel: $('sceneLabel'), sceneSurface: $('sceneSurface'), sceneFootnote: $('sceneFootnote'),
  sceneFeedback: $('sceneFeedback'), difficultyLabel: $('difficultyLabel'),
  timerRing: $('timerRing'), timerValue: $('timerValue'), questionText: $('questionText'),
  resolutionPanel: $('resolutionPanel'), resolutionStatus: $('resolutionStatus'),
  resolutionAnswer: $('resolutionAnswer'), resolutionNote: $('resolutionNote'),
  answerForm: $('answerForm'), answerInput: $('answerInput'), submitButton: $('submitButton'),
  inputFeedback: $('inputFeedback'), attemptCount: $('attemptCount'),
  resultsTitle: $('resultsTitle'), resultsMessage: $('resultsMessage'), finalScore: $('finalScore'),
  correctCount: $('correctCount'), resultsMode: $('resultsMode'), resultsDate: $('resultsDate'),
  breakdownList: $('breakdownList'), replayButton: $('replayButton'), homeButton: $('homeButton')
};

let gameState = null;
let animationFrame = null;
let advanceTimeout = null;
let guessCooldownTimeout = null;

function localDayKey() {
  const d = new Date();
  // Player-local day, not a synchronised worldwide challenge (intentional MVP limitation).
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function readSavedDaily() {
  try {
    const stored = JSON.parse(localStorage.getItem(DAILY_STORAGE_PREFIX + localDayKey()));
    if (stored && stored.mode === 'daily' && stored.date === localDayKey() &&
        Array.isArray(stored.answers) && stored.answers.length === QUESTIONS.length &&
        stored.answers.every((a) => typeof a.correct === 'boolean' &&
          Number.isFinite(a.score) && a.score >= 0 && a.score <= MAX_POINTS_PER_QUESTION &&
          Number.isFinite(a.elapsed) && a.elapsed >= 0 && Number.isInteger(a.wrongGuesses) && a.wrongGuesses >= 0 &&
          (a.attempts === undefined || (Array.isArray(a.attempts) &&
            a.attempts.every((attempt) => attempt && typeof attempt.text === 'string' &&
              typeof attempt.accepted === 'boolean' && Number.isFinite(attempt.elapsed)))) &&
          (a.draftAtTimeout === undefined || a.draftAtTimeout === null ||
            typeof a.draftAtTimeout === 'string'))) return stored;
  } catch { /* localStorage may be unavailable in some file:// or privacy contexts */ }
  return null;
}

function saveDaily(snapshot) {
  try {
    localStorage.setItem(DAILY_STORAGE_PREFIX + snapshot.date, JSON.stringify(snapshot));
    return true;
  } catch { return false; }
}

function normaliseAnswer(answer) {
  return answer.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('en-GB').replace(/[‘’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
}

function isAccepted(question, answer) {
  const candidate = normaliseAnswer(answer);
  return question.accepted.some((accepted) => normaliseAnswer(accepted) === candidate);
}

function clearPending() {
  if (animationFrame !== null) cancelAnimationFrame(animationFrame);
  if (advanceTimeout !== null) clearTimeout(advanceTimeout);
  if (guessCooldownTimeout !== null) clearTimeout(guessCooldownTimeout);
  animationFrame = advanceTimeout = guessCooldownTimeout = null;
}

function showScreen(name) {
  elements.landing.hidden = name !== 'landing';
  elements.game.hidden = name !== 'game';
  elements.results.hidden = name !== 'results';
  document.body.classList.toggle('in-game', name === 'game');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function updateLanding() {
  const saved = readSavedDaily();
  elements.dailyButton.textContent = saved ? "VIEW TODAY'S RESULTS ↗" : "PLAY TODAY'S SIX ↗";
  elements.savedNote.textContent = saved
    ? "Today's attempt is saved in this browser. Replay as often as you like in demo mode."
    : 'No account. No downloads. Just anatomy and questionable decisions.';
}

function start(mode) {
  clearPending();
  if (mode === 'daily') {
    const saved = readSavedDaily();
    if (saved) { showResults(saved); return; }
  }
  const selected = Number(elements.demoSeconds.value);
  const duration = mode === 'daily' ? DAILY_SECONDS : ([20, 25, 30, 45].includes(selected) ? selected : DAILY_SECONDS);
  gameState = { mode, duration, index: 0, answers: [], wrongGuesses: 0,
    attempts: [], draftEdited: false, running: false, waiting: false,
    startedAt: 0, deadline: 0, cooldownUntil: 0 };
  elements.modeLabel.textContent = mode === 'daily' ? 'DAILY CHALLENGE' : 'REPLAYABLE DEMO';
  showScreen('game');
  renderQuestion();
}

function renderQuestion() {
  clearPending();
  const s = gameState;
  if (!s || s.index >= QUESTIONS.length) { finishGame(); return; }
  const q = QUESTIONS[s.index];
  s.wrongGuesses = 0;
  s.attempts = [];
  s.draftEdited = false;
  s.cooldownUntil = 0;
  s.waiting = false;
  s.running = true;
  elements.sceneColumn.className = 'scene-column';
  elements.sceneColumn.dataset.scene = q.scene;
  elements.sceneSurface.innerHTML = SCENES[q.scene]; // trusted developer-authored SVG only
  elements.sceneSurface.setAttribute('aria-label', `Illustration of: ${q.sceneLabel.toLowerCase()}`);
  elements.sceneFeedback.textContent = '';
  elements.sceneFeedback.className = 'scene-feedback';
  elements.resolutionPanel.hidden = true;
  elements.resolutionPanel.className = 'resolution-panel';
  elements.answerForm.hidden = false;
  elements.sceneLabel.textContent = q.sceneLabel;
  elements.sceneFootnote.textContent = q.caption;
  elements.difficultyLabel.textContent = q.difficulty;
  elements.questionText.textContent = q.text;
  elements.questionNumber.textContent = String(s.index + 1);
  elements.runningScore.textContent = s.answers.reduce((sum, a) => sum + a.score, 0).toLocaleString('en-GB');
  elements.attemptCount.textContent = '0 WRONG GUESSES';
  elements.inputFeedback.textContent = 'Press ENTER or tap the arrow to submit.';
  elements.inputFeedback.className = 'input-feedback';
  elements.answerInput.value = '';
  elements.answerInput.disabled = false;
  elements.submitButton.disabled = false;
  [...elements.stageProgress.children].forEach((dot, i) => {
    dot.className = 'stage-dot' + (i < s.index ? ' done' : i === s.index ? ' active' : '');
  });
  elements.timerRing.classList.remove('urgent');
  s.startedAt = performance.now();
  s.deadline = s.startedAt + (s.duration * 1000);
  updateTimer(s.duration);
  animationFrame = requestAnimationFrame(tick);
  // Focus is helpful for keyboard play, but avoid opening the soft keyboard automatically on mobile.
  if (window.matchMedia('(pointer: fine)').matches) elements.answerInput.focus({ preventScroll: true });
}

function updateTimer(remainingSeconds) {
  const s = gameState;
  if (!s) return;
  const safeRemaining = Math.max(0, remainingSeconds);
  elements.timerValue.textContent = safeRemaining.toFixed(1);
  elements.timerRing.style.setProperty('--time-left', `${Math.max(0, Math.min(100, safeRemaining / s.duration * 100))}%`);
  elements.timerRing.classList.toggle('urgent', safeRemaining <= 8);
}

function tick(now) {
  const s = gameState;
  if (!s || !s.running) return;
  const remaining = Math.max(0, (s.deadline - now) / 1000);
  updateTimer(remaining);
  if (remaining <= 0) { resolveQuestion(false, now); return; }
  animationFrame = requestAnimationFrame(tick);
}

function handleAnswer(event) {
  event.preventDefault();
  const s = gameState;
  if (!s || !s.running || s.waiting) return;
  const now = performance.now();
  // The deadline is authoritative, even if a submit and animation frame arrive together.
  if (now >= s.deadline) { resolveQuestion(false, now); return; }
  if (now < s.cooldownUntil) return;
  const response = elements.answerInput.value; // Preserve the original submitted text.
  if (!response.trim()) return;
  const q = QUESTIONS[s.index];
  const accepted = isAccepted(q, response);
  s.attempts.push({ text: response, accepted,
    elapsed: Math.min(s.duration, Math.max(0, (now - s.startedAt) / 1000)) });
  s.draftEdited = false; // An unchanged rejected response is not a new timeout draft.
  if (accepted) { resolveQuestion(true, now); return; }
  s.wrongGuesses += 1;
  elements.attemptCount.textContent = `${s.wrongGuesses} WRONG ${s.wrongGuesses === 1 ? 'GUESS' : 'GUESSES'}`;
  elements.inputFeedback.textContent = 'Not quite! Try another anatomical answer before time runs out.';
  elements.inputFeedback.className = 'input-feedback wrong';
  // Selecting instead of clearing makes a spelling correction or full retry easier.
  elements.answerInput.select();
  s.cooldownUntil = now + WRONG_GUESS_COOLDOWN_MS;
  elements.submitButton.disabled = true;
  guessCooldownTimeout = setTimeout(() => {
    guessCooldownTimeout = null;
    if (gameState === s && s.running) elements.submitButton.disabled = false;
  }, WRONG_GUESS_COOLDOWN_MS);
}

function resolveQuestion(correct, now) {
  const s = gameState;
  if (!s || !s.running) return; // One resolution and one transition per question.
  s.running = false;
  s.waiting = true;
  clearPending();
  const q = QUESTIONS[s.index];
  const elapsed = Math.min(s.duration, Math.max(0, (now - s.startedAt) / 1000));
  const remaining = Math.max(0, s.duration - elapsed);
  const score = correct ? Math.round(350 + 650 * remaining / s.duration) : 0;
  // A draft is only unsubmitted if it was edited since the last submitted attempt.
  // This avoids reporting the selected, rejected input as a second answer at timeout.
  const draftAtTimeout = !correct && s.draftEdited && elements.answerInput.value.trim()
    ? elements.answerInput.value : null;
  s.answers.push({ id: q.id, questionText: q.text, correctAnswer: q.answer,
    explanation: q.explanation, correct, score, elapsed, wrongGuesses: s.wrongGuesses,
    attempts: s.attempts.map((attempt) => ({ ...attempt })), draftAtTimeout });

  elements.answerInput.disabled = true;
  elements.submitButton.disabled = true;
  elements.answerForm.hidden = true;
  elements.resolutionStatus.textContent = correct ? '✓ CORRECT!' : "⏱ TIME'S UP!";
  elements.resolutionAnswer.textContent = q.answer;
  elements.resolutionNote.textContent = correct
    ? `+${score} points. Nice save!` : 'Remember this answer — you can review it after the round.';
  elements.resolutionPanel.className = 'resolution-panel ' + (correct ? 'correct' : 'timeout');
  elements.resolutionPanel.hidden = false;
  elements.sceneColumn.classList.add(correct ? 'success' : 'timeout');
  elements.sceneFeedback.textContent = correct ? `SAVED! +${score}` : "TIME'S UP!";
  elements.sceneFeedback.className = 'scene-feedback visible' + (correct ? '' : ' fail');
  elements.runningScore.textContent = s.answers.reduce((sum, a) => sum + a.score, 0).toLocaleString('en-GB');
  updateTimer(correct ? remaining : 0);
  advanceTimeout = setTimeout(() => {
    advanceTimeout = null;
    if (gameState !== s || !s.waiting) return;
    s.index += 1;
    if (s.index === QUESTIONS.length) finishGame(); else renderQuestion();
  }, correct ? NEXT_QUESTION_DELAY_MS : TIMEOUT_REVEAL_DELAY_MS);
}

function finishGame() {
  clearPending();
  if (!gameState) return;
  const snapshot = { schemaVersion: 2, mode: gameState.mode, date: localDayKey(), duration: gameState.duration,
    answers: gameState.answers.map((item) => ({ ...item })) };
  if (snapshot.mode === 'daily') saveDaily(snapshot);
  showResults(snapshot);
}

function addReviewRow(parent, label, value, type = '', note = '') {
  const row = document.createElement('div');
  row.className = 'review-row' + (type ? ` ${type}` : '');
  const labelNode = document.createElement('span');
  labelNode.className = 'review-label';
  labelNode.textContent = label;
  const valueNode = document.createElement('span');
  valueNode.className = 'review-value';
  valueNode.textContent = value; // Never interpret user answers as HTML.
  row.append(labelNode, valueNode);
  if (note) {
    const noteNode = document.createElement('span');
    noteNode.className = 'review-note';
    noteNode.textContent = note;
    row.append(noteNode);
  }
  parent.append(row);
}

function showResults(snapshot) {
  clearPending();
  gameState = null;
  const correct = snapshot.answers.filter((a) => a.correct).length;
  const score = snapshot.answers.reduce((sum, a) => sum + a.score, 0);
  const message = correct === 6 ? ['ANATOMY LEGEND!', 'Six spectacular saves. Your cortex deserves a trophy.']
    : correct >= 4 ? ['NICELY BONED!', 'Most of the chaos was averted. The others were educational.']
    : correct >= 2 ? ['CHAOTIC GOOD!', 'A few heroes were rescued. Your anatomy arc continues.']
    : ['WHAT AN ADVENTURE!', 'The characters had questions. Now you have explanations.'];
  elements.resultsTitle.textContent = message[0];
  elements.resultsMessage.textContent = message[1];
  elements.finalScore.textContent = score.toLocaleString('en-GB');
  elements.correctCount.innerHTML = `${correct} <small>/ 6</small>`; // integer computed from local results
  elements.resultsMode.textContent = snapshot.mode === 'daily' ? 'DAILY' : 'DEMO';
  elements.resultsDate.textContent = snapshot.mode === 'daily' ? snapshot.date : `${snapshot.duration}-SECOND TIMER`;
  elements.breakdownList.replaceChildren();

  snapshot.answers.forEach((a, index) => {
    // Saved question content takes precedence so an old result survives future bank edits.
    const q = QUESTIONS.find((item) => item.id === a.id);
    const card = document.createElement('article');
    card.className = `breakdown-item${a.correct ? '' : ' missed'}`;
    const number = document.createElement('div');
    number.className = 'result-number';
    number.textContent = `Q${index + 1}`;
    const details = document.createElement('div');
    details.className = 'result-details';
    const title = document.createElement('h3');
    title.textContent = a.questionText || (q && q.text) || 'Earlier anatomy question';
    const meta = document.createElement('div');
    meta.className = 'result-meta';
    meta.textContent = `${a.correct ? '✓ CORRECT' : '⏱ TIME EXPIRED'} · ${a.elapsed.toFixed(1)}s · ${a.wrongGuesses} wrong ${a.wrongGuesses === 1 ? 'guess' : 'guesses'}`;
    details.append(title, meta);

    const review = document.createElement('div');
    review.className = 'answer-review';
    const attempts = Array.isArray(a.attempts) ? a.attempts : [];
    if (attempts.length) {
      attempts.forEach((attempt, attemptIndex) => {
        addReviewRow(review,
          attempts.length === 1 ? 'YOUR SUBMITTED ANSWER' : `YOUR ANSWER ${attemptIndex + 1}`,
          attempt.text, attempt.accepted ? 'accepted' : 'incorrect',
          attempt.accepted ? '✓ Accepted' : '✕ Incorrect');
      });
    } else if (a.attempts === undefined) {
      addReviewRow(review, 'YOUR ANSWER', 'Not recorded in this earlier game version.', 'muted');
    } else {
      addReviewRow(review, 'YOUR SUBMITTED ANSWER', 'No answer submitted (time expired).', 'muted');
    }
    if (typeof a.draftAtTimeout === 'string' && a.draftAtTimeout.trim()) {
      addReviewRow(review, 'STILL TYPING AT TIMEOUT', a.draftAtTimeout, 'draft', 'Not submitted');
    }
    addReviewRow(review, 'CORRECT ANSWER', a.correctAnswer || (q && q.answer) || 'Unavailable', 'answer');
    details.append(review);
    const explanation = document.createElement('p');
    explanation.className = 'review-explanation';
    explanation.textContent = a.explanation || (q && q.explanation) || 'Explanation unavailable for this earlier question.';
    details.append(explanation);

    const points = document.createElement('div');
    points.className = 'result-points';
    points.textContent = `+${a.score.toLocaleString('en-GB')}`;
    const pointsLabel = document.createElement('small');
    pointsLabel.textContent = 'POINTS';
    points.append(pointsLabel);
    card.append(number, details, points);
    elements.breakdownList.append(card);
  });
  updateLanding();
  showScreen('results');
}

function goHome() {
  clearPending();
  gameState = null;
  updateLanding();
  showScreen('landing');
}

// Dismiss the visible asset warning only after the entire controller initialises.
const assetWarning = document.getElementById('assetWarning');
if (getComputedStyle(document.querySelector('.hero')).display === 'grid') {
  assetWarning.hidden = true;
} else {
  assetWarning.textContent = '⚠ styles.css was not loaded. Keep styles.css beside index.html, or open PLAY-ANAT-OOPS.html instead (the standalone version).';
}
// For debugging in the browser console, inspect gameState with a breakpoint in game.js.
// No global shortcuts are supplied that would accidentally bypass the daily lock.
elements.dailyButton.addEventListener('click', () => start('daily'));
elements.demoButton.addEventListener('click', () => start('demo'));
elements.replayButton.addEventListener('click', () => start('demo'));
elements.homeButton.addEventListener('click', goHome);
elements.answerForm.addEventListener('submit', handleAnswer);
elements.answerInput.addEventListener('input', () => {
  if (gameState && gameState.running) gameState.draftEdited = true;
});
updateLanding();
if (new URLSearchParams(window.location.search).get('demo') === '1') start('demo');
