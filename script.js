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

  // --- EXPANDED DATA DICTIONARY (Fun Ranges: Age to 200, Height to 300cm, Weight to 300kg) ---
  const DATA = {
    gender: [
      { text: 'Male', val: 'Male', type: 'male' },
      { text: 'Female', val: 'Female', type: 'female' }
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
      { text: 'Software Engineer', val: 'Software Engineer' },
      { text: 'Medical Doctor', val: 'Medical Doctor' },
      { text: 'Commercial Pilot', val: 'Commercial Pilot' },
      { text: 'Architect', val: 'Architect' },
      { text: 'Quantum Physicist', val: 'Quantum Physicist' },
      { text: 'Deep Sea Archaeologist', val: 'Deep Sea Archaeologist' },
      { text: 'Astronaut Trainee', val: 'Astronaut Trainee' },
      { text: 'Lighthouse Keeper', val: 'Lighthouse Keeper' },
      { text: 'Master Blacksmith', val: 'Master Blacksmith' },
      { text: 'Private Island Caretaker', val: 'Private Island Caretaker' },
      { text: 'Antique Book Collector', val: 'Antique Book Collector' },
      { text: 'Formula 1 Mechanic', val: 'Formula 1 Mechanic' },
      { text: 'Wildlife Photographer', val: 'Wildlife Photographer' },
      { text: 'High-Stakes Sommelier', val: 'High-Stakes Sommelier' },
      { text: 'Botanical Explorer', val: 'Botanical Explorer' },
      { text: 'Medieval Historian', val: 'Medieval Historian' },
      { text: 'Art Restorer', val: 'Art Restorer' },
      { text: 'Chess Grandmaster', val: 'Chess Grandmaster' },
      { text: 'Submarine Navigator', val: 'Submarine Navigator' },
      { text: 'Meteorite Hunter', val: 'Meteorite Hunter' }
    ],

    hobby: [
      { text: 'Astrophotography', val: 'Astrophotography' },
      { text: 'Extreme Mountaineering', val: 'Extreme Mountaineering' },
      { text: 'High-Altitude Skydiving', val: 'High-Altitude Skydiving' },
      { text: 'Playing Classical Cello', val: 'Playing Classical Cello' },
      { text: 'Collecting Rare Minerals', val: 'Collecting Rare Minerals' },
      { text: 'Bonsai Cultivation', val: 'Bonsai Cultivation' },
      { text: 'Beach Metal Detecting', val: 'Beach Metal Detecting' },
      { text: 'Cave Scuba Diving', val: 'Cave Scuba Diving' },
      { text: 'Sourdough Fermentation', val: 'Sourdough Fermentation' },
      { text: 'Mechanical Clock Craft', val: 'Mechanical Clock Craft' },
      { text: 'Motorcycle Restoration', val: 'Motorcycle Restoration' },
      { text: 'Deep Sea Fishing', val: 'Deep Sea Fishing' },
      { text: 'Urban Exploration', val: 'Urban Exploration' },
      { text: 'Mystery Writing', val: 'Writing Mystery Novels' },
      { text: 'Falconry Training', val: 'Falconry Training' },
      { text: 'Antique Restoration', val: 'Antique Restoration' }
    ],

    personality: [
      { text: 'Empathetic & Warm', val: 'Empathetic & Warm' },
      { text: 'Stoic & Immovable', val: 'Stoic & Immovable' },
      { text: 'Quietly Brilliant', val: 'Quietly Brilliant' },
      { text: 'Boundlessly Optimistic', val: 'Boundlessly Optimistic' },
      { text: 'Chronically Sarcastic', val: 'Chronically Sarcastic' },
      { text: 'Fiercely Protective', val: 'Fiercely Protective' },
      { text: 'Highly Philosophical', val: 'Highly Philosophical' },
      { text: 'Eccentric & Curious', val: 'Eccentric & Curious' },
      { text: 'Methodical & Precise', val: 'Methodical & Precise' },
      { text: 'Gentle & Patient', val: 'Gentle & Patient' },
      { text: 'Fearless & Direct', val: 'Fearless & Direct' },
      { text: 'Unpredictably Creative', val: 'Unpredictably Creative' }
    ]
  };

  const STAGES = [
    { key: 'gender', title: 'Gender' },
    { key: 'age', title: 'Age' },
    { key: 'height', title: 'Height' },
    { key: 'weight', title: 'Weight' },
    { key: 'job', title: 'Occupation' },
    { key: 'hobby', title: 'Hobby' },
    { key: 'personality', title: 'Personality' }
  ];

  // --- APPLICATION STATE ---
  const state = {
    activeStageIndex: 0,
    isRunning: false,
    isFast: false,
    locked: {
      gender: null,
      age: null,
      height: null,
      weight: null,
      job: null,
      hobby: null,
      personality: null
    },
    results: {
      gender: null,
      age: null,
      height: null,
      weight: null,
      job: null,
      hobby: null,
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
  const cardResGenderAge = document.getElementById('cardResGenderAge');
  const cardResPhysical = document.getElementById('cardResPhysical');
  const cardResJob = document.getElementById('cardResJob');
  const cardResHobby = document.getElementById('cardResHobby');
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
    // Only "Any" mode - draws equally from the full dataset
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

    statusMessage.textContent = `Station ${index + 1} of 7: ${current.title}`;

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

    cardPrimaryTitle.textContent = `${res.gender?.val || 'Partner'}, ${res.age?.val || '25'}`;
    cardSecondaryTitle.textContent = `${res.job?.val || 'Professional'} • ${res.hobby?.val || 'General Interests'}`;

    cardResGenderAge.textContent = `${res.gender?.val || 'Not specified'}, ${res.age?.val || '25 Years Old'}`;
    cardResPhysical.textContent = `${res.height?.val || '175 cm'} / ${res.weight?.val || '65 kg'}`;
    cardResJob.textContent = res.job?.val || 'Not specified';
    cardResHobby.textContent = res.hobby?.val || 'Not specified';
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
    const height = 800;
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
    ctx.fillRect(50, 50, 130, 28);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('PARTNER PROFILE', 115, 64);

    // Title & Subtitle
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(cardPrimaryTitle.textContent, 50, 125);

    ctx.fillStyle = '#64748b';
    ctx.font = '500 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(cardSecondaryTitle.textContent, 50, 155);

    // Separator line
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50, 185);
    ctx.lineTo(width - 50, 185);
    ctx.stroke();

    // Table of Specifications
    const items = [
      { key: 'Gender & Age', val: cardResGenderAge.textContent },
      { key: 'Physical Build', val: cardResPhysical.textContent },
      { key: 'Occupation', val: cardResJob.textContent },
      { key: 'Hobby', val: cardResHobby.textContent },
      { key: 'Personality', val: cardResPersonality.textContent }
    ];

    let startY = 225;
    items.forEach((item, index) => {
      // Row box
      ctx.fillStyle = index % 2 === 0 ? '#f8fafc' : '#ffffff';
      ctx.fillRect(50, startY, width - 100, 60);
      ctx.strokeStyle = '#e2e8f0';
      ctx.strokeRect(50, startY, width - 100, 60);

      // Key
      ctx.fillStyle = '#64748b';
      ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.key, 70, startY + 30);

      // Val
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(item.val, width - 70, startY + 30);

      startY += 75;
    });

    // Footer
    ctx.textAlign = 'center';
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Generated via Ideal Partner Gacha', width / 2, 720);

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
