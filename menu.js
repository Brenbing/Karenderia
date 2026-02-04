// ===============================
// Menu Management – Student 2
// ===============================

const menuData = {
    riceMeals: [
        { id: 'rm1', name: 'Adobong Manok', description: 'Chicken in soy sauce and vinegar', price: 65 },
        { id: 'rm2', name: 'Sinigang na Baboy', description: 'Pork in tamarind soup', price: 75 },
        { id: 'rm3', name: 'Bicol Express', description: 'Spicy pork in coconut milk', price: 70 }
    ],
    beverages: [
        { id: 'bv1', name: 'Coke', description: '330ml Coca-Cola', price: 25 },
        { id: 'bv2', name: 'Iced Tea', description: 'Fresh brewed iced tea', price: 20 }
    ],
    snacks: [
        { id: 'sn1', name: 'Lumpiang Shanghai', description: '5 pcs spring rolls', price: 40 },
        { id: 'sn2', name: 'Kwek-Kwek', description: '6 pcs quail eggs', price: 30 }
    ],
    desserts: [
        { id: 'ds1', name: 'Halo-Halo', description: 'Mixed fruits & shaved ice', price: 55 }
    ]
};

function createMenuItem(item) {
    return `
        <div class="menu-item">
            <div class="menu-item-info">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-description">${item.description}</div>
            </div>
            <div class="menu-item-price">₱${item.price.toFixed(2)}</div>
        </div>
    `;
}

function displayMenu(items, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = items.map(createMenuItem).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    displayMenu(menuData.riceMeals, 'rice-meals');
    displayMenu(menuData.beverages, 'beverages');
    displayMenu(menuData.snacks, 'snacks');
    displayMenu(menuData.desserts, 'desserts');
});

// Export for Order Management (Student 3)
window.menuData = menuData;
