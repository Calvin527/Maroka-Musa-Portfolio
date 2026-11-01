"use strict";
const portfolioProjects = {
  "taxi-move": {
    "name": "TAXI MOVE",
    "chip": "Full-stack · Mobility",
    "blurb": "A full-stack taxi demand and dispatch platform connecting passenger check-ins, geofenced waiting spots, and driver availability.",
    "bullets": [
      "Built REST APIs and role-based workflows using Django REST Framework and JWT.",
      "Designed PostgreSQL data models for requests, routes, drivers, and trips.",
      "Deployed frontend and backend on Render using Neon PostgreSQL."
    ],
    "stack": [
      "React",
      "Django REST Framework",
      "PostgreSQL",
      "JWT",
      "Leaflet",
      "Render"
    ],
    "impact": "Deployed full-stack system with location-aware passenger and dispatch workflows.",
    "demo": "https://taxi-move.onrender.com/",
    "code": "https://github.com/Calvin527/taxi-move-system"
  },
  "makgobelo-lodge": {
    "name": "Makgobelo Lodge",
    "chip": "Full-stack · Hospitality",
    "blurb": "A lodge reservation system with room discovery, booking validation, secure accounts, and administration tools.",
    "bullets": [
      "Implemented authentication, email verification, and admin/user permissions.",
      "Developed date validation to prevent overlapping room bookings.",
      "Built admin workflows for rooms, users, bookings, and notifications."
    ],
    "stack": [
      "Python",
      "Flask",
      "Neon PostgreSQL",
      "HTML",
      "CSS"
    ],
    "impact": "Designed around real reservation rules and staff administration needs.",
    "demo": "https://realworld-bnb-system.onrender.com/"
  },
  "realtime-meetings": {
    "name": "Real-Time Meeting Discussion",
    "chip": "Realtime · Collaboration",
    "blurb": "An internal discussion application for live communication, meeting records, and downloadable recaps.",
    "bullets": [
      "Implemented real-time messaging with WebSockets and Socket.IO.",
      "Added participant presence, mentions, replies, and duplicate-name prevention.",
      "Supported persistent discussions, shared files, voice notes, and meeting recaps."
    ],
    "stack": [
      "Node.js",
      "Express",
      "Socket.IO",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "impact": "Connects live collaboration with saved meeting records.",
    "demo": "https://real-time-meeting-discussion.onrender.com/"
  },
  "northern-sotho-asr": {
    "name": "Northern Sotho Speech Recognition",
    "chip": "AI Research · Speech",
    "blurb": "Fine-tuned a multilingual speech model for Northern Sotho transcription as part of an Honours research project.",
    "bullets": [
      "Adapted XLS-R 300M to the NCHLT Northern Sotho speech corpus.",
      "Applied audio processing, transcript normalization, and CTC fine-tuning.",
      "Evaluated using WER, CER, and real-time factor analysis."
    ],
    "stack": [
      "Python",
      "PyTorch",
      "Hugging Face",
      "XLS-R 300M",
      "Librosa"
    ],
    "impact": "22.78% test WER and 5.86% CER on unseen speech data.",
    "code": "https://github.com/Calvin527/northern-sotho-asr-xlsr"
  },
  "waste-classification": {
    "name": "Waste Image Classification",
    "chip": "AI · Computer Vision",
    "blurb": "A binary image classifier that distinguishes organic and recyclable waste using transfer learning.",
    "bullets": [
      "Used an ImageNet-pretrained VGG16 CNN with TensorFlow/Keras.",
      "Applied data augmentation, feature extraction, and layer fine-tuning.",
      "Evaluated classification with accuracy, precision, recall, and F1-score."
    ],
    "stack": [
      "Python",
      "TensorFlow",
      "Keras",
      "VGG16",
      "scikit-learn"
    ],
    "impact": "80% accuracy for the feature-extraction model on the evaluation subset.",
    "code": "https://github.com/Calvin527/waste-classification-transfer-learning"
  },
  "cloud-systems": {
    "name": "Cloud OS Simulation",
    "chip": "Systems · Engineering",
    "blurb": "A cloud operating systems simulation exploring resource scheduling, synchronization, and workload behaviour.",
    "bullets": [
      "Designed simulated dynamic allocation of virtual machine resources.",
      "Explored concurrency control using synchronization mechanisms.",
      "Analysed CPU utilization, memory use, and system response under loads."
    ],
    "stack": [
      "C#",
      ".NET",
      "PostgreSQL",
      "Operating Systems"
    ],
    "impact": "Demonstrates systems-level problem solving and performance analysis."
  }
};
const menuToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  const opened = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!opened));
  menuToggle.setAttribute('aria-label', opened ? 'Open navigation' : 'Close navigation');
  navLinks?.classList.toggle('is-open', !opened);
});
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation');
}));

// Screenshot placeholders automatically disappear when a file is added to assets/projects/.
// This also works with the website opened locally as file:///.../index.html.
document.querySelectorAll('[data-photo-area]').forEach(area => {
  const img = area.querySelector('img');
  if (!img) return;
  const showImage = () => area.classList.add('has-image');
  const showFallback = () => area.classList.remove('has-image');
  img.addEventListener('load', showImage);
  img.addEventListener('error', showFallback);
  if (img.complete) (img.naturalWidth > 0 ? showImage : showFallback)();
});

const filters = [...document.querySelectorAll('.filter-btn')];
const projectCards = [...document.querySelectorAll('.project-card')];
function filterProjects(value) {
  filters.forEach(button => {
    const selected = button.dataset.filter === value;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  projectCards.forEach(card => card.hidden = value !== 'all' && card.dataset.category !== value);
}
filters.forEach(btn => btn.addEventListener('click', () => filterProjects(btn.dataset.filter)));

const dialog = document.getElementById('case-dialog');
const text = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
function appendPill(container, name) {
  const el = document.createElement('span'); el.textContent = name; container.appendChild(el);
}
function appendLink(container, url, label) {
  if (!url) return;
  const a = document.createElement('a');
  a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
  a.className = 'btn btn-outline'; a.textContent = label + ' ↗'; container.appendChild(a);
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const p = portfolioProjects[button.dataset.project]; if (!p || !dialog) return;
  text('dialog-category', p.chip.toUpperCase());
  text('dialog-title', p.name);
  text('dialog-description', p.blurb);
  text('dialog-impact', p.impact);
  const list = document.getElementById('dialog-bullets');
  list.replaceChildren();
  p.bullets.forEach(detail => { const li = document.createElement('li'); li.textContent = detail; list.appendChild(li); });
  const tech = document.getElementById('dialog-tech'); tech.replaceChildren();
  p.stack.forEach(tag => appendPill(tech, tag));
  const links = document.getElementById('dialog-links'); links.replaceChildren();
  appendLink(links, p.demo, 'Open live demo'); appendLink(links, p.code, 'View repository');
  if (!p.demo && !p.code) appendLink(links, 'https://github.com/Calvin527', 'Visit GitHub profile');
  dialog.showModal();
}));
dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
