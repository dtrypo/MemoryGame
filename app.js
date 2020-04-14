const icons = [
  {
    name: '500px',
    icon: '<i class="fab fa-500px"></i>'
  },
  {
    name: 'accessible-icon',
    icon: '<i class="fab fa-accessible-icon"></i>'
  },
  {
    name: 'accusoft',
    icon: '<i class="fab fa-accusoft"></i>'
  },
  {
    name: 'acquisitions-incorporated',
    icon: '<i class="fab fa-acquisitions-incorporated"></i>'
  },
  {
    name: 'ad',
    icon: '<i class="fas fa-ad"></i>'
  },
  {
    name: 'adjust',
    icon: '<i class="fas fa-adjust"></i>'
  },
  {
    name: 'adobe',
    icon: '<i class="fab fa-adobe"></i>'
  },
  {
    name: 'airbnb',
    icon: '<i class="fab fa-airbnb"></i>'
  },
  {
    name: 'affiliatetheme',
    icon: '<i class="fab fa-affiliatetheme"></i>'
  },
  {
    name: 'air-freshener',
    icon: '<i class="fas fa-air-freshener"></i>'
  },
  {
    name: 'algolia',
    icon: '<i class="fab fa-algolia"></i>'
  },
  {
    name: 'amazon-pay',
    icon: '<i class="fab fa-amazon-pay"></i>'
  },
  {
    name: 'apple',
    icon: '<i class="fab fa-apple"></i>'
  }
]

const unique = Math.round(Math.random() * 12);

icons.forEach((element, index) => {
  if (index !== unique) {
    icons.push(element);
  }
});

const tiles = document.querySelectorAll('.grid-item');

tiles.forEach((element, index) => {
  element.draggable = true;
  element.id = icons[index].name;
});

let checkChoices1 = '';
let e1 = '';

tiles.forEach(element => {
  element.addEventListener('click', (e) => {
    let icon = icons.find(o => o.name === e.target.id);

    e.target.innerHTML = icon.icon;

    setTimeout(() => {
      e.target.innerHTML = ''
    }, 500);

    setTimeout(() => {
      if (checkChoices1 !== '') {
        if (checkChoices1 === icon.icon) {
          e.target.innerHTML = icon.icon;
          e1.target.innerHTML = icon.icon;
          checkChoices1 = '';
          e1 = '';
        } else {
          checkChoices1 = '';
          e1 = '';
        }
      } else {
        checkChoices1 = icon.icon;
        e1 = e;
      }
    }, 500);
  });
});


