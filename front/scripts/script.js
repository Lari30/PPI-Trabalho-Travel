document.addEventListener('DOMContentLoaded', () => {
    async function loadPackages() {
        const response = await fetch('/api/packages');
        const packages = await response.json();
        document.getElementById('packages').innerHTML = packages.map(p => 
            `<li><a href='/package.html?id=${p.id}'>${p.name}</a> - R$ ${p.price},00</li>`
        ).join('');
    }
    loadPackages();
});
