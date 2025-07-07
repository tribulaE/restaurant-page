import pizzaImage from './images/food.jpg';

export default function loadMenu() {
    const content = document.getElementById('content');
     content.innerHTML = '';


     const imagePanel = document.createElement('div')
     imagePanel.classList.add('panel');
     const img = document.createElement('img');
     img.src = pizzaImage
     img.alt = 'HARD WORKING CHEIF RIGHT THERE';
     img.style.maxWidth = '100%';
     img.style.borderRadius = '8px';
     imagePanel.appendChild(img);


     const mainPanel = document.createElement('div');
     mainPanel.classList.add('panel');
     mainPanel.innerHTML = `
        <h2>Main Dishes<h2>
        <ul>
            <li> Pizza - $10</li>
            <li> Burger - $8</li>
            <li> Pasta - $12</li>
        </ul>
     `;

    const sidePanel = document.createElement('div');
    sidePanel.classList.add('panel');
    sidePanel.innerHTML = `
     <h2>Side Dishes<h2>
        <ul>
            <li> Salad - $5</li>
            <li> Fries - $4</li>
            <li> Breadsticks - $3</li>
        </ul>
    `

    content.appendChild(imagePanel);
    content.appendChild(mainPanel);
    content.appendChild(sidePanel);

}