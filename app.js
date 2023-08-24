// Sample data for teas
const teas = [
    { name: "Sencha", description: "A popular green tea", price: "$10" },
    { name: "Gyokuro", description: "A premium shade-grown tea", price: "$20" }
];

// Populate the tea list
const teaList = document.getElementById('tea-list');
teas.forEach(tea => {
    const listItem = document.createElement('li');
    listItem.textContent = `${tea.name} - ${tea.description} - ${tea.price}`;
    teaList.appendChild(listItem);
});
