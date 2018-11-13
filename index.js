
let main = document.getElementById('mainMenu');

nameText = 'M.Kennedy';

brandName.innerText = nameText;



Menu.addEventListener('click', togglerClass);

function togglerClass () {
  if(dropMenu.style.display === 'none'){
    dropMenu.style.display = 'flex';
    mainMenu.style.background = 'linear-gradient(45deg, #ff9800, #E1306C, #23A6D5, #23DFAB)';
    mainMenu.style.backgroundSize= '400% 400%';
    secondDash.style.transform = 'translate(-40px)';
    secondDash.style.transition = 'transform ease 0.8s';
    firstDash.style.left = '2px';
    firstDash.style.transformOrigin = '2px';
    firstDash.style.transform = 'rotate(45deg)';
    firstDash.style.transition = 'transform ease 0.8s';
    thirdDash.style.left = '2px';
    thirdDash.style.transformOrigin = '2px';
    thirdDash.style.transform = 'rotate(-45deg)';
    thirdDash.style.transition = 'transform ease 0.8s';

}else {
  dropMenu.style.display = 'none';
  secondDash.style.transform = 'translate(0px)';
  secondDash.style.transition = 'transform ease 0.8s';
  firstDash.style.left = '2px';
  firstDash.style.transformOrigin = '2px';
  firstDash.style.transform = 'rotate(0deg)';
  firstDash.style.transition = 'transform ease 0.8s';
  thirdDash.style.left = '2px';
  thirdDash.style.transformOrigin = '2px';
  thirdDash.style.transform = 'rotate(0deg)';
  thirdDash.style.transition = 'transform ease 0.8s';
  mainMenu.style.background = '#88888800';
}
}


  scroller.addEventListener('click', scrollHero);

function scrollHero() {
  if (scrollY < 1000) {
    contactSection.scrollIntoView({behavior:'smooth'});
    scrollImage.style.transform = 'rotate(0deg)';
    scrollImage.style.transition = 'transform .5s ease';
  }else {
    hero.scrollIntoView({behavior:'smooth'});
    scrollImage.style.transform = 'rotate(180deg)';
    scrollImage.style.transition = 'transform .5s ease';
  }
}

home.addEventListener('click', scrollHome);
about.addEventListener('click', scrollAbout);
portfolio.addEventListener('click', scrollPortfolio);
contact.addEventListener('click', scrollContact);
main.appendChild(dropMenu);


function closeDropMenu(){
  dropMenu.style.display = 'none';
  secondDash.style.transform = 'translate(0px)';
  secondDash.style.transition = 'transform ease 0.8s';
  firstDash.style.left = '2px';
  firstDash.style.transformOrigin = '2px';
  firstDash.style.transform = 'rotate(0deg)';
  firstDash.style.transition = 'transform ease 0.8s';
  thirdDash.style.left = '2px';
  thirdDash.style.transformOrigin = '2px';
  thirdDash.style.transform = 'rotate(0deg)';
  thirdDash.style.transition = 'transform ease 0.8s';
  main.style.background = '#88888800';
}

  function scrollHome() {
    closeDropMenu()
    hero.scrollIntoView({behavior:'smooth'});
  }

  function scrollAbout() {
    closeDropMenu()
    aboutSection.scrollIntoView({behavior:'smooth'})
  }

  function scrollPortfolio() {
    closeDropMenu()
    portfolioSection.scrollIntoView({behavior:'smooth'})
  }

  function scrollContact() {
    closeDropMenu()
    contactSection.scrollIntoView({behavior:'smooth'})
  }
