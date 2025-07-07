import homeImage from './images/home.jpg';

export default function loadHome() {
     const content = document.getElementById('content');
     content.innerHTML = '';

     const welcomePanel = document.createElement('div');
     welcomePanel.classList.add('panel');
     welcomePanel.innerHTML = `
        <h2>Welcome to Our Reastaurant<h2>
        <p>We serve the best food in town. Come and taste it!</p>
     `;

     const hoursPanel = document.createElement('div');
     hoursPanel.classList.add('panel');
     hoursPanel.innerHTML = `
        <h2>Hours</h2>
        <ul>
            <li>Monday - Friday: 8am - 10pm</li>
            <li>Saturday - Sunday: 9am - 11pm</li>
        </ul>
     `;

     const locationPanel = document.createElement('div');
     locationPanel.classList.add('panel');
     locationPanel.innerHTML = `
        <h2>Location</h2>
        <p>123 Food Street, Flavor Town</p>
     `
   
      const imagePanel = document.createElement('div')
          imagePanel.classList.add('panel');
          const img = document.createElement('img');
          img.src = homeImage
          img.alt = 'home';
          img.style.maxWidth = '100%';
          img.style.borderRadius = '8px';
          imagePanel.appendChild(img);

     content.appendChild(welcomePanel);
     content.appendChild(hoursPanel);
     content.appendChild(locationPanel);
     content.appendChild(imagePanel)
}