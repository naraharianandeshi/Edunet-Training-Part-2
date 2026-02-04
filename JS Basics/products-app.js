const API = 'https://dummyjson.com/products';
let products = [];
let visible = [];

const cardsEl = document.getElementById('cards');
const searchEl = document.getElementById('search');
const filterEl = document.getElementById('filter');
const sortEl = document.getElementById('sort');
const layoutGridBtn = document.getElementById('layoutGrid');
const layoutListBtn = document.getElementById('layoutList');

async function loadProducts(){
  try{
    const res = await fetch(API);
    const data = await res.json();
    products = data.products || [];
    visible = [...products];
    populateFilter();
    renderCards(visible);
  }catch(e){
    cardsEl.innerHTML = `<div class="placeholder">Failed to load products</div>`;
    console.error(e);
  }
}

function getImage(p){
  return p.thumbnail || (p.images && p.images[0]) || 'https://via.placeholder.com/400x240?text=No+Image';
}

function renderCards(list){
  if(!list || list.length===0){
    cardsEl.innerHTML = `<div class="placeholder">No products match your search/filter</div>`;
    return;
  }
  cardsEl.innerHTML = list.map(p=>`
    <article class="card" data-id="${p.id}">
      <img src="${getImage(p)}" alt="${(p.title||'Product').replace(/"/g,'')}">
      <div class="card-body">
        <div class="card-title">${p.title||'Untitled'}</div>
        <div class="card-meta">
          <span class="price">$${(p.price||0).toFixed(2)}</span>
          ${p.rating ? '<span class="rating">⭐ '+p.rating.toFixed(1)+'</span>' : ''}
        </div>
        <div class="card-actions">
          <div class="pill">${p.category||'General'}</div>
          <div class="pill">${p.brand||'Brand'}</div>
        </div>
      </div>
    </article>
  `).join('');
}

function populateFilter(){
  const set = new Set();
  products.forEach(p=>{
    const val = p.category || 'Other';
    set.add(val);
  });
  filterEl.innerHTML = `<option value="all">All Categories</option>` + [...set].map(v=>`<option value="${v}">${v}</option>`).join('');
}

function applyFilters(){
  const q = (searchEl.value||'').trim().toLowerCase();
  const f = filterEl.value;
  const s = sortEl.value;
  visible = products.filter(p=>{
    let match = true;
    if(f && f!=='all'){
      match = match && (p.category === f);
    }
    if(q){
      const hay = (p.title||'') + ' ' + (p.brand||'') + ' ' + (p.description||'') + ' ' + (p.category||'');
      match = match && hay.toLowerCase().includes(q);
    }
    return match;
  });

  if(s === 'title-asc') visible.sort((a,b)=> (a.title||'').localeCompare(b.title||''));
  if(s === 'title-desc') visible.sort((a,b)=> (b.title||'').localeCompare(a.title||''));
  if(s === 'price-asc') visible.sort((a,b)=> (a.price||0) - (b.price||0));
  if(s === 'price-desc') visible.sort((a,b)=> (b.price||0) - (a.price||0));
  if(s === 'rating-desc') visible.sort((a,b)=> (b.rating||0) - (a.rating||0));

  renderCards(visible);
}

// Layout toggles
layoutGridBtn && layoutGridBtn.addEventListener('click', ()=>{
  cardsEl.classList.remove('list');
  layoutGridBtn.classList.add('active'); layoutListBtn.classList.remove('active');
});
layoutListBtn && layoutListBtn.addEventListener('click', ()=>{
  cardsEl.classList.add('list');
  layoutListBtn.classList.add('active'); layoutGridBtn.classList.remove('active');
});

// Event listeners
searchEl && searchEl.addEventListener('input', ()=> applyFilters());
filterEl && filterEl.addEventListener('change', ()=> applyFilters());
sortEl && sortEl.addEventListener('change', ()=> applyFilters());

// Initial load
loadProducts();
