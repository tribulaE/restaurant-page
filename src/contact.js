import contactImage from './images/contact.jpg'

export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';
   
    const imagePanel = document.createElement('div');
    imagePanel.classList.add('panel');
    const img = document.createElement('img');
    img.src = contactImage;
    img.alt = 'Contact us';
    img.style.maxWidth = '100%';
    img.style.borderRadius = '8px';
    imagePanel.appendChild(img);


    const infoPanel = document.createElement('div');
    infoPanel.classList.add('panel');
    infoPanel.innerHTML = `
        <h2>Contact Us</h2>
        <p> Phone: (555) 123-4567</p>
        <p> Email: contact@restaurant.com</p>
        <p> Address: 123 Flavor Street, Foodie City</p>
    `

    content.appendChild(imagePanel);
    content.appendChild(infoPanel);

}