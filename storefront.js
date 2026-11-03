(()=>{
const cards=[...document.querySelectorAll('.stationery-product')];
const search=document.getElementById('product-search');
const filters=[...document.querySelectorAll('input[name="category"]')];
function updateProducts(){const term=search.value.trim().toLowerCase();const category=filters.find(f=>f.checked)?.value||'all';let count=0;cards.forEach(card=>{const visible=(category==='all'||card.dataset.category===category)&&card.textContent.toLowerCase().includes(term);card.hidden=!visible;if(visible)count++});document.getElementById('result-count').textContent=`${count} ${count===1?'product':'products'}`;document.getElementById('empty-products').hidden=count!==0;document.querySelectorAll('.store-collection').forEach(section=>section.hidden=![...section.querySelectorAll('.stationery-product')].some(card=>!card.hidden))}
search.addEventListener('input',updateProducts);filters.forEach(f=>f.addEventListener('change',updateProducts));
const saved=new Set();document.querySelectorAll('[data-save]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();const id=link.dataset.save;if(saved.has(id)){saved.delete(id);link.textContent='♡ Save'}else{saved.add(id);link.textContent='♥ Saved'}document.getElementById('quote-count').textContent=saved.size}));

})();
