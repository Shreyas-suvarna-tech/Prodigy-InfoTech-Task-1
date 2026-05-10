/* =====================
   Menu Data
========================*/
const menuData = {
  coffee: [
    { emoji: '☕', name: 'Signature Espresso', desc: 'Rich double shot, velvety crema', price: '₹120' },
    { emoji: '🥛', name: 'Cortado',            desc: 'Equal parts espresso and warm milk', price: '₹150' },
    { emoji: '🫖', name: 'Flat White',          desc: 'Silky microfoam, intense roast', price: '₹170' },
    { emoji: '☕', name: 'Filter Kaapi',        desc: 'Traditional South Indian drip brew', price: '₹90' },
  ],
  tea: [
    { emoji: '🍵', name: 'Masala Chai',   desc: 'Ginger, cardamom & fresh milk', price: '₹80' },
    { emoji: '🌿', name: 'Green Sencha',  desc: 'Japanese loose leaf, lightly sweet', price: '₹110' },
    { emoji: '🍋', name: 'Lemon Ginger', desc: 'Fresh lemon, ginger, honey', price: '₹100' },
    { emoji: '🌸', name: 'Rose Oolong',  desc: 'Floral oolong, dried rose petals', price: '₹130' },
  ],
  bites: [
    { emoji: '🥐', name: 'Butter Croissant',   desc: 'Flaky, golden, baked fresh daily', price: '₹95' },
    { emoji: '🍰', name: 'Hazelnut Brownie',    desc: 'Fudgy centres, crunchy tops', price: '₹110' },
    { emoji: '🥪', name: 'Club Sandwich',       desc: 'Toasted, chicken, fresh veggies', price: '₹190' },
    { emoji: '🧁', name: 'Cardamom Muffin',     desc: 'House blend spice, soft crumb', price: '₹105' },
  ],
  cold: [
    { emoji: '🧋', name: 'Cold Brew',       desc: '18-hour steeped, black or milky', price: '₹160' },
    { emoji: '🍦', name: 'Affogato',        desc: 'Vanilla scoop drowned in espresso', price: '₹200' },
    { emoji: '🥤', name: 'Mango Lassi',     desc: 'Alphonso mango, hung curd', price: '₹140' },
    { emoji: '🧊', name: 'Iced Matcha Latte', desc: 'Ceremonial grade, oat milk', price: '₹180' },
  ]
};

/* =====================
   Render Menu Cards
========================*/
function renderMenu(category) {
  const grid = document.getElementById('menuGrid');
  const items = menuData[category];

  grid.innerHTML = items.map(item => `
    <div class="menu-card">
      <div class="menu-img">${item.emoji}</div>
      <div class="menu-body">
        <div class="menu-name">${item.name}</div>
        <div class="menu-desc">${item.desc}</div>
        <div class="menu-price">${item.price}</div>
      </div>
    </div>
  `).join('');
}

/* =====================
   Menu Tab Switching
========================*/
document.getElementById('menuTabs').addEventListener('click', function (e) {
  const tab = e.target.closest('.tab');
  if (!tab) return;

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');

  renderMenu(tab.dataset.cat);
});

/* =====================
   Navbar Scroll Effect
========================*/
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* =====================
   Mobile Nav Toggle
========================*/
document.getElementById('navToggle').addEventListener('click', function () {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('open');
});

/* Close mobile nav when a link is clicked */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* =====================
   Smooth Scroll Helper
   (used by hero buttons)
========================*/
function scrollTo(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

/* =====================
   Init
========================*/
renderMenu('coffee');
