const API = 'https://dummyjson.com/recipes';
let recipes = [];
let visible = [];

const cardsEl = document.getElementById('cards');
const searchEl = document.getElementById('search');
const filterEl = document.getElementById('filter');
const sortEl = document.getElementById('sort');
const layoutGridBtn = document.getElementById('layoutGrid');
const layoutListBtn = document.getElementById('layoutList');

async function loadRecipes(){
  try{
    const res = await fetch(API + '/');
    const data = await res.json();
    recipes = data.recipes || [];
    visible = [...recipes];
    populateFilter();
    renderCards(visible);
  }catch(e){
    cardsEl.innerHTML = `<div class="placeholder">Failed to load recipes</div>`;
    console.error(e);
  }
}

function getImage(r){
  return r.image || (r.images && r.images[0]) || 'https://via.placeholder.com/400x240?text=No+Image';
}

function renderCards(list){
  if(!list || list.length===0){
    cardsEl.innerHTML = `<div class="placeholder">No recipes match your search/filter</div>`;
    return;
  }
  cardsEl.innerHTML = list.map(r=>`
    <article class="card" data-id="${r.id}">
      <img src="${getImage(r)}" alt="${(r.title||'Recipe').replace(/"/g,'')}">
      <div class="card-body">
        <div class="card-title">${r.title||'Untitled'}</div>
        <div class="card-meta">${r.servings? r.servings+' servings' : ''} ${r.cuisine? ' • '+r.cuisine : ''}</div>
        <div class="card-actions">
          <div class="pill">ID: ${r.id}</div>
          <a class="muted" href="#" onclick="void(0)">View</a>
        </div>
      </div>
    </article>
  `).join('');
}

function populateFilter(){
  const set = new Set();
  recipes.forEach(r=>{
    const val = r.cuisine || r.category || r.dishType || 'Other';
    set.add(val);
  });
  // clear
  filterEl.innerHTML = `<option value="all">All Cuisines</option>` + [...set].map(v=>`<option value="${v}">${v}</option>`).join('');
}

function applyFilters(){
  const q = (searchEl.value||'').trim().toLowerCase();
  const f = filterEl.value;
  const s = sortEl.value;
  visible = recipes.filter(r=>{
    let match = true;
    if(f && f!=='all'){
      const val = r.cuisine || r.category || r.dishType || 'Other';
      match = match && (val+'' === f+'' );
    }
    if(q){
      const hay = (r.title||'') + ' ' + (r.ingredients? r.ingredients.join(' '): '') + ' ' + (r.description||'');
      match = match && hay.toLowerCase().includes(q);
    }
    return match;
  });

  if(s === 'title-asc') visible.sort((a,b)=> (a.title||'').localeCompare(b.title||''));
  if(s === 'title-desc') visible.sort((a,b)=> (b.title||'').localeCompare(a.title||''));
  if(s === 'id-desc') visible.sort((a,b)=> b.id - a.id);
  if(s === 'id-asc') visible.sort((a,b)=> a.id - b.id);

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

// initial load
loadRecipes();
