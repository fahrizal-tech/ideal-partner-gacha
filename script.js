/* ========================================================
   IDEAL PARTNER GACHA - JAVASCRIPT ENGINE
   Natural Palette (White, Blue, Black) • Zero AI-Slop
   ======================================================== */

(() => {
  'use strict';

  // --- SUBTLE AUDIO CONTROLLER (Web Audio API) ---
  class SoundManager {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) this.ctx = new AudioContextClass();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }

    tick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.02);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.02);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.02);
    }

    lockChime() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(640, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    }

    completionChime() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0.09, this.ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + idx * 0.08);
        osc.stop(this.ctx.currentTime + idx * 0.08 + 0.38);
      });
    }
  }

  // --- EXPANDED DATA DICTIONARY ---
  const DATA = {
    gender: [
      { text: 'Male', val: 'Male', type: 'male' },
      { text: 'Female', val: 'Female', type: 'female' }
    ],

    name: [
      // 20 Short Male Names with Initials
      { text: 'A. Alex', val: 'A. Alex', gender: 'male' },
      { text: 'B. Ben', val: 'B. Ben', gender: 'male' },
      { text: 'C. Cole', val: 'C. Cole', gender: 'male' },
      { text: 'D. Dan', val: 'D. Dan', gender: 'male' },
      { text: 'E. Eric', val: 'E. Eric', gender: 'male' },
      { text: 'F. Finn', val: 'F. Finn', gender: 'male' },
      { text: 'G. Gabe', val: 'G. Gabe', gender: 'male' },
      { text: 'H. Hugo', val: 'H. Hugo', gender: 'male' },
      { text: 'I. Ian', val: 'I. Ian', gender: 'male' },
      { text: 'J. Jack', val: 'J. Jack', gender: 'male' },
      { text: 'K. Kai', val: 'K. Kai', gender: 'male' },
      { text: 'L. Leo', val: 'L. Leo', gender: 'male' },
      { text: 'M. Max', val: 'M. Max', gender: 'male' },
      { text: 'N. Noah', val: 'N. Noah', gender: 'male' },
      { text: 'O. Owen', val: 'O. Owen', gender: 'male' },
      { text: 'P. Paul', val: 'P. Paul', gender: 'male' },
      { text: 'R. Ryan', val: 'R. Ryan', gender: 'male' },
      { text: 'S. Sam', val: 'S. Sam', gender: 'male' },
      { text: 'T. Toby', val: 'T. Toby', gender: 'male' },
      { text: 'Z. Zack', val: 'Z. Zack', gender: 'male' },

      // 20 Short Female Names with Initials
      { text: 'A. Ava', val: 'A. Ava', gender: 'female' },
      { text: 'B. Bea', val: 'B. Bea', gender: 'female' },
      { text: 'C. Chloe', val: 'C. Chloe', gender: 'female' },
      { text: 'D. Dana', val: 'D. Dana', gender: 'female' },
      { text: 'E. Emma', val: 'E. Emma', gender: 'female' },
      { text: 'F. Faye', val: 'F. Faye', gender: 'female' },
      { text: 'G. Grace', val: 'G. Grace', gender: 'female' },
      { text: 'H. Hope', val: 'H. Hope', gender: 'female' },
      { text: 'I. Ivy', val: 'I. Ivy', gender: 'female' },
      { text: 'J. Jade', val: 'J. Jade', gender: 'female' },
      { text: 'K. Kira', val: 'K. Kira', gender: 'female' },
      { text: 'L. Luna', val: 'L. Luna', gender: 'female' },
      { text: 'M. Mia', val: 'M. Mia', gender: 'female' },
      { text: 'N. Nora', val: 'N. Nora', gender: 'female' },
      { text: 'O. Olive', val: 'O. Olive', gender: 'female' },
      { text: 'P. Piper', val: 'P. Piper', gender: 'female' },
      { text: 'R. Ruby', val: 'R. Ruby', gender: 'female' },
      { text: 'S. Sara', val: 'S. Sara', gender: 'female' },
      { text: 'T. Tara', val: 'T. Tara', gender: 'female' },
      { text: 'Z. Zoe', val: 'Z. Zoe', gender: 'female' }
    ],

    age: [
      { text: '18 y/o', val: '18 Years Old' },
      { text: '21 y/o', val: '21 Years Old' },
      { text: '23 y/o', val: '23 Years Old' },
      { text: '25 y/o', val: '25 Years Old' },
      { text: '27 y/o', val: '27 Years Old' },
      { text: '30 y/o', val: '30 Years Old' },
      { text: '34 y/o', val: '34 Years Old' },
      { text: '39 y/o', val: '39 Years Old' },
      { text: '45 y/o', val: '45 Years Old' },
      { text: '52 y/o', val: '52 Years Old' },
      { text: '60 y/o', val: '60 Years Old' },
      { text: '68 y/o', val: '68 Years Old' },
      { text: '76 y/o', val: '76 Years Old' },
      { text: '85 y/o', val: '85 Years Old' },
      { text: '92 y/o', val: '92 Years Old' },
      { text: '97 y/o', val: '97 Years Old' },
      { text: '100 y/o', val: '100 Years Old' }
    ],

    zodiac: [
      { text: 'Aries', val: 'Aries' },
      { text: 'Taurus', val: 'Taurus' },
      { text: 'Gemini', val: 'Gemini' },
      { text: 'Cancer', val: 'Cancer' },
      { text: 'Leo', val: 'Leo' },
      { text: 'Virgo', val: 'Virgo' },
      { text: 'Libra', val: 'Libra' },
      { text: 'Scorpio', val: 'Scorpio' },
      { text: 'Sagittarius', val: 'Sagittarius' },
      { text: 'Capricorn', val: 'Capricorn' },
      { text: 'Aquarius', val: 'Aquarius' },
      { text: 'Pisces', val: 'Pisces' }
    ],

    height: [
      { text: '130 cm', val: '130 cm' },
      { text: '142 cm', val: '142 cm' },
      { text: '150 cm', val: '150 cm' },
      { text: '158 cm', val: '158 cm' },
      { text: '164 cm', val: '164 cm' },
      { text: '170 cm', val: '170 cm' },
      { text: '175 cm', val: '175 cm' },
      { text: '180 cm', val: '180 cm' },
      { text: '186 cm', val: '186 cm' },
      { text: '194 cm', val: '194 cm' },
      { text: '205 cm', val: '205 cm' },
      { text: '218 cm', val: '218 cm' },
      { text: '232 cm', val: '232 cm' },
      { text: '250 cm', val: '250 cm' }
    ],

    weight: [
      { text: '40 kg', val: '40 kg' },
      { text: '46 kg', val: '46 kg' },
      { text: '52 kg', val: '52 kg' },
      { text: '58 kg', val: '58 kg' },
      { text: '65 kg', val: '65 kg' },
      { text: '72 kg', val: '72 kg' },
      { text: '80 kg', val: '80 kg' },
      { text: '90 kg', val: '90 kg' },
      { text: '102 kg', val: '102 kg' },
      { text: '115 kg', val: '115 kg' },
      { text: '128 kg', val: '128 kg' },
      { text: '140 kg', val: '140 kg' },
      { text: '150 kg', val: '150 kg' }
    ],

    job: [
      { text: 'Doctor', val: 'Doctor' },
      { text: 'Pilot', val: 'Pilot' },
      { text: 'Chef', val: 'Chef' },
      { text: 'Lawyer', val: 'Lawyer' },
      { text: 'Artist', val: 'Artist' },
      { text: 'Nurse', val: 'Nurse' },
      { text: 'Writer', val: 'Writer' },
      { text: 'Driver', val: 'Driver' },
      { text: 'Teacher', val: 'Teacher' },
      { text: 'Banker', val: 'Banker' },
      { text: 'Engineer', val: 'Engineer' },
      { text: 'Police', val: 'Police' },
      { text: 'Model', val: 'Model' },
      { text: 'Trader', val: 'Trader' },
      { text: 'Architect', val: 'Architect' },
      { text: 'Designer', val: 'Designer' },
      { text: 'Actor', val: 'Actor' },
      { text: 'Scientist', val: 'Scientist' },
      { text: 'Barista', val: 'Barista' },
      { text: 'Athlete', val: 'Athlete' }
    ],

    salary: [
      { text: '$10/mo', val: '$10 / month' },
      { text: '$35/mo', val: '$35 / month' },
      { text: '$90/mo', val: '$90 / month' },
      { text: '$250/mo', val: '$250 / month' },
      { text: '$600/mo', val: '$600 / month' },
      { text: '$1,200/mo', val: '$1,200 / month' },
      { text: '$2,500/mo', val: '$2,500 / month' },
      { text: '$4,800/mo', val: '$4,800 / month' },
      { text: '$8,500/mo', val: '$8,500 / month' },
      { text: '$15,000/mo', val: '$15,000 / month' },
      { text: '$30,000/mo', val: '$30,000 / month' },
      { text: '$75,000/mo', val: '$75,000 / month' },
      { text: '$150,000/mo', val: '$150,000 / month' },
      { text: '$500,000/mo', val: '$500,000 / month' },
      { text: '$1,000,000/mo', val: '$1,000,000 / month' }
    ],

    personality: [
      { text: 'INTJ', val: 'INTJ' },
      { text: 'INTP', val: 'INTP' },
      { text: 'ENTJ', val: 'ENTJ' },
      { text: 'ENTP', val: 'ENTP' },
      { text: 'INFJ', val: 'INFJ' },
      { text: 'INFP', val: 'INFP' },
      { text: 'ENFJ', val: 'ENFJ' },
      { text: 'ENFP', val: 'ENFP' },
      { text: 'ISTJ', val: 'ISTJ' },
      { text: 'ISFJ', val: 'ISFJ' },
      { text: 'ESTJ', val: 'ESTJ' },
      { text: 'ESFJ', val: 'ESFJ' },
      { text: 'ISTP', val: 'ISTP' },
      { text: 'ISFP', val: 'ISFP' },
      { text: 'ESTP', val: 'ESTP' },
      { text: 'ESFP', val: 'ESFP' }
    ]
  };

  const STAGES = [
    { key: 'gender', title: 'Gender' },
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
    { key: 'zodiac', title: 'Zodiac' },
    { key: 'height', title: 'Height' },
    { key: 'weight', title: 'Weight' },
    { key: 'job', title: 'Occupation' },
    { key: 'salary', title: 'Salary' },
    { key: 'personality', title: 'MBTI' }
  ];

  // --- APPLICATION STATE ---
  const state = {
    activeStageIndex: 0,
    isRunning: false,
    isFast: false,
    locked: {
      gender: null,
      name: null,
      age: null,
      zodiac: null,
      height: null,
      weight: null,
      job: null,
      salary: null,
      personality: null
    },
    results: {
      gender: null,
      name: null,
      age: null,
      zodiac: null,
      height: null,
      weight: null,
      job: null,
      salary: null,
      personality: null
    }
  };

  // --- DOM REFERENCES ---
  const sound = new SoundManager();
  const soundToggle = document.getElementById('soundToggle');
  const soundLabel = document.getElementById('soundLabel');
  const speedToggle = document.getElementById('speedToggle');
  const speedLabel = document.getElementById('speedLabel');

  const ropeContainer = document.getElementById('ropeContainer');
  const ropeLineFill = document.getElementById('ropeLineFill');
  const ropeSliderKnob = document.getElementById('ropeSliderKnob');
  const statusMessage = document.getElementById('statusMessage');
  const lockedCountText = document.getElementById('lockedCountText');
  const executeBtn = document.getElementById('executeBtn');
  const executeBtnText = document.getElementById('executeBtnText');

  // Modal references
  const profileModal = document.getElementById('profileModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const rerollModalBtn = document.getElementById('rerollModalBtn');
  const downloadCardBtn = document.getElementById('downloadCardBtn');
  const exportCanvas = document.getElementById('exportCanvas');

  const cardPrimaryTitle = document.getElementById('cardPrimaryTitle');
  const cardSecondaryTitle = document.getElementById('cardSecondaryTitle');
  const cardResName = document.getElementById('cardResName');
  const cardResGenderAge = document.getElementById('cardResGenderAge');
  const cardResZodiac = document.getElementById('cardResZodiac');
  const cardResPhysical = document.getElementById('cardResPhysical');
  const cardResJob = document.getElementById('cardResJob');
  const cardResSalary = document.getElementById('cardResSalary');
  const cardResPersonality = document.getElementById('cardResPersonality');

  // --- CONTROLS LISTENERS ---
  soundToggle.addEventListener('click', () => {
    sound.init();
    const isEnabled = sound.toggle();
    soundLabel.textContent = isEnabled ? 'Sound: On' : 'Sound: Off';
    soundToggle.classList.toggle('active', isEnabled);
    if (isEnabled) sound.lockChime();
  });

  speedToggle.addEventListener('click', () => {
    state.isFast = !state.isFast;
    speedToggle.classList.toggle('active', state.isFast);
    speedLabel.textContent = state.isFast ? 'Fast Mode: On' : 'Fast Mode: Off';
    sound.tick();
  });

  // --- ROPE POSITIONING (HORIZONTAL ALIGNMENT) ---
  function updateRopeTrack(index) {
    if (index < 0 || index >= STAGES.length) return;

    const unit = document.getElementById(`unit-${STAGES[index].key}`);
    if (unit) {
      const centerX = unit.offsetLeft + (unit.offsetWidth / 2);
      ropeSliderKnob.style.left = `${centerX}px`;
    }

    const fillPercent = (index / (STAGES.length - 1)) * 100;
    ropeLineFill.style.width = `${fillPercent}%`;

    // Update Stage Classes
    STAGES.forEach((s, idx) => {
      const el = document.getElementById(`unit-${s.key}`);
      el.classList.remove('active');
      if (idx < index) {
        el.classList.add('completed');
      } else if (idx === index) {
        el.classList.add('active');
        el.classList.remove('completed');
      } else {
        el.classList.remove('completed');
      }
    });
  }

  window.addEventListener('load', () => {
    setTimeout(() => updateRopeTrack(0), 100);
  });
  window.addEventListener('resize', () => {
    updateRopeTrack(state.activeStageIndex);
  });

  // --- LOCKING SYSTEM ---
  function toggleAttributeLock(key) {
    if (!state.results[key]) return;

    if (state.locked[key]) {
      state.locked[key] = null;
    } else {
      state.locked[key] = state.results[key];
      sound.lockChime();
    }
    syncLockUI();
  }

  function syncLockUI() {
    let count = 0;
    STAGES.forEach((s) => {
      const unit = document.getElementById(`unit-${s.key}`);
      const btn = unit.querySelector('.bubble-lock-toggle');
      const isLocked = !!state.locked[s.key];

      if (isLocked) {
        count++;
        unit.classList.add('is-locked');
        btn.title = 'Unlock attribute';
      } else {
        unit.classList.remove('is-locked');
        btn.title = 'Lock attribute';
      }
    });

    lockedCountText.textContent = `${count} attribute${count === 1 ? '' : 's'} locked`;
  }

  document.querySelectorAll('.bubble-lock-toggle').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.getAttribute('data-key');
      toggleAttributeLock(key);
    });
  });

  // --- GACHA CORE LOGIC ---
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getAvailablePool(key) {
    if (key === 'name') {
      const g = state.results.gender?.val;
      if (g === 'Male') {
        return DATA.name.filter(item => item.gender === 'male');
      } else if (g === 'Female') {
        return DATA.name.filter(item => item.gender === 'female');
      }
      return [...DATA.name];
    }
    return [...DATA[key]];
  }

  function spinUnit(key, onDone) {
    const pool = getAvailablePool(key);
    const duration = state.isFast ? 400 : 950;
    const intervalMs = state.isFast ? 35 : 50;
    const startTime = Date.now();

    const ticker = document.getElementById(`ticker-${key}`);
    const tagVal = document.getElementById(`val-${key}`);
    const unit = document.getElementById(`unit-${key}`);

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const sample = getRandomItem(pool);

      ticker.textContent = sample.text;
      tagVal.textContent = sample.val || sample.text;
      sound.tick();

      if (elapsed >= duration) {
        clearInterval(timer);

        const chosen = state.locked[key] || getRandomItem(pool);
        state.results[key] = chosen;

        ticker.textContent = chosen.text;
        tagVal.textContent = chosen.val || chosen.text;
        unit.classList.add('filled');

        sound.lockChime();
        onDone(chosen);
      }
    }, intervalMs);
  }

  function executeRun() {
    if (state.isRunning) return;
    state.isRunning = true;
    executeBtn.disabled = true;
    executeBtnText.textContent = 'Processing Sequence...';
    statusMessage.textContent = 'Sequence in progress';

    // Reset unlocked fields
    STAGES.forEach((s) => {
      if (!state.locked[s.key]) {
        state.results[s.key] = null;
        document.getElementById(`val-${s.key}`).textContent = '—';
        document.getElementById(`ticker-${s.key}`).textContent = '...';
        document.getElementById(`unit-${s.key}`).classList.remove('filled');
      }
    });

    state.activeStageIndex = 0;
    stepTo(0);
  }

  function stepTo(index) {
    if (index >= STAGES.length) {
      completeRun();
      return;
    }

    state.activeStageIndex = index;
    const current = STAGES[index];

    updateRopeTrack(index);

    // Auto-scroll track on smartphone/tablet so active bubble is centered
    const ropeScrollWrapper = document.getElementById('ropeScrollWrapper');
    const unit = document.getElementById(`unit-${current.key}`);
    if (ropeScrollWrapper && unit && ropeScrollWrapper.scrollWidth > ropeScrollWrapper.clientWidth) {
      const scrollTarget = unit.offsetLeft - (ropeScrollWrapper.clientWidth / 2) + (unit.offsetWidth / 2);
      ropeScrollWrapper.scrollTo({ left: Math.max(0, scrollTarget), behavior: 'smooth' });
    }

    statusMessage.textContent = `Station ${index + 1} of ${STAGES.length}: ${current.title}`;

    const travelTime = state.isFast ? 180 : 320;

    setTimeout(() => {
      spinUnit(current.key, () => {
        syncLockUI();
        const nextTime = state.isFast ? 150 : 250;
        setTimeout(() => {
          stepTo(index + 1);
        }, nextTime);
      });
    }, travelTime);
  }

  // --- COMPLETION & MODAL POPUP ---
  function completeRun() {
    state.isRunning = false;
    executeBtn.disabled = false;
    executeBtnText.textContent = 'Start Gacha';
    statusMessage.textContent = 'Completed';

    const res = state.results;

    cardPrimaryTitle.textContent = `${res.name?.val || 'Partner'}, ${res.age?.val || '25'}`;
    cardSecondaryTitle.textContent = `${res.job?.val || 'Professional'} • ${res.zodiac?.val || 'Zodiac'} • ${res.salary?.val || '$5,000 / month'}`;

    cardResName.textContent = res.name?.val || 'Not specified';
    cardResGenderAge.textContent = `${res.gender?.val || 'Not specified'}, ${res.age?.val || '25 Years Old'}`;
    cardResZodiac.textContent = res.zodiac?.val || 'Not specified';
    cardResPhysical.textContent = `${res.height?.val || '175 cm'} / ${res.weight?.val || '65 kg'}`;
    cardResJob.textContent = res.job?.val || 'Not specified';
    cardResSalary.textContent = res.salary?.val || 'Not specified';
    cardResPersonality.textContent = res.personality?.val || 'Not specified';

    sound.completionChime();

    // Trigger popup modal
    setTimeout(() => {
      profileModal.classList.add('open');
      profileModal.setAttribute('aria-hidden', 'false');
    }, 350);
  }

  // --- MODAL CONTROLS ---
  closeModalBtn.addEventListener('click', () => {
    profileModal.classList.remove('open');
    profileModal.setAttribute('aria-hidden', 'true');
  });

  profileModal.addEventListener('click', (e) => {
    if (e.target === profileModal) {
      profileModal.classList.remove('open');
      profileModal.setAttribute('aria-hidden', 'true');
    }
  });

  rerollModalBtn.addEventListener('click', () => {
    profileModal.classList.remove('open');
    profileModal.setAttribute('aria-hidden', 'true');
    setTimeout(executeRun, 200);
  });

  // --- CLEAN CANVAS IMAGE EXPORT ---
  downloadCardBtn.addEventListener('click', () => {
    renderCanvasExport();
  });

  function renderCanvasExport() {
    const canvas = exportCanvas;
    const ctx = canvas.getContext('2d');
    const width = 760;
    const height = 860;
    canvas.width = width;
    canvas.height = height;

    // Solid Natural Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Border
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, width - 40, height - 40);

    // Header Badge
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(50, 45, 130, 28);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('PARTNER PROFILE', 115, 59);

    // Title & Subtitle
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 26px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(cardPrimaryTitle.textContent, 50, 115);

    ctx.fillStyle = '#64748b';
    ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(cardSecondaryTitle.textContent, 50, 142);

    // Separator line
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, 170);
    ctx.lineTo(width - 50, 170);
    ctx.stroke();

    // Table of Specifications
    const items = [
      { key: 'Name', val: cardResName.textContent },
      { key: 'Gender & Age', val: cardResGenderAge.textContent },
      { key: 'Zodiac Sign', val: cardResZodiac.textContent },
      { key: 'Physical Build', val: cardResPhysical.textContent },
      { key: 'Occupation', val: cardResJob.textContent },
      { key: 'Monthly Salary', val: cardResSalary.textContent },
      { key: 'Personality (MBTI)', val: cardResPersonality.textContent }
    ];

    let startY = 195;
    items.forEach((item, index) => {
      // Row box
      ctx.fillStyle = index % 2 === 0 ? '#f8fafc' : '#ffffff';
      ctx.fillRect(50, startY, width - 100, 56);
      ctx.strokeStyle = '#e2e8f0';
      ctx.strokeRect(50, startY, width - 100, 56);

      // Key
      ctx.fillStyle = '#64748b';
      ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.key, 70, startY + 28);

      // Val
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(item.val, width - 70, startY + 28);

      startY += 68;
    });

    // Footer
    ctx.textAlign = 'center';
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Generated via Ideal Partner Gacha', width / 2, 795);

    // Download trigger
    const link = document.createElement('a');
    link.download = `partner-profile-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    sound.lockChime();
  }

  // --- START ACTION LISTENER ---
  executeBtn.addEventListener('click', () => {
    sound.init();
    executeRun();
  });
})();
