// const menuBtn = document.querySelector('#menu-btn');
// const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

// // show menu in mobile version
// menuBtn.addEventListener('click', () => {
//   menu.style.display = 'block';
//   menuBtn.style.display = 'none';
//   closeBtn.style.display = 'inline-block';
// })
//
// // hide menu in mobile version
// closeBtn.addEventListener('click', () => {
//   menu.style.display = 'block';
//   menuBtn.style.display = 'none';
//   closeBtn.style.display = 'inline-block';
// })

const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItem();
    link.classList.add('active');
  })
})

// read more ABOUT
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
  readMoreContent.classList.toggle('show-content');
  if(readMoreContent.classList.contains('show-content')) {
    readMoreBtn.textContent = "Show less";
  } else {
    readMoreBtn.textContent = "Show more";
    }
})

// show/hide skills
const skillItems = document.querySelectorAll('.skills .skill');

skillItems.forEach(skill => {
  skill.querySelector('.head').addEventListener('click', () => {
    skill.querySelector('.items').classList.toggle('show-items');
  })
})
