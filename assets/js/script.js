if(screen.width <= 768) {

  let tiktok = document.getElementById('tiktok_top');
  let instagram = document.getElementById('instagram_top');
  let facebook = document.getElementById('facebook_top');

  tiktok.setAttribute('src','assets/images/tiktok_mob.webp');
  instagram.setAttribute('src','assets/images/instagram_mob.webp');
  facebook.setAttribute('src','assets/images/facebook_mob.webp');

  let footer = document.querySelector('footer');
  let email_f = document.getElementById('email_footer');

  footer.setAttribute('style',"background-image:url('assets/images/mob/footer.webp');");
  email_f.setAttribute('src','assets/images/mob/email.webp');


  let green = document.querySelector('section.green');

  green.setAttribute('style',"background-image:url('assets/images/mob/greenBack.webp');");

}
if(screen.width < 768) {
  
  let social = document.querySelector('section.social');
  let yellow = document.querySelector('section.yellow');

  social.setAttribute('style',"background-image:url('assets/images/mob/backBlue.webp');");
  yellow.setAttribute('style',"background-image:url('assets/images/mob/fundo-amarelo.webp');");

}
/*
if(screen.width >= 768) {
  let blue = document.querySelectorAll('.scrol .card.blue');
  let yellow = document.querySelectorAll('.scrol .card.yellow');

  blue.forEach((e) => {
    e.style.height = '140px';
  });

  yellow.forEach((el) => {
    el.style.height = '140px';
  });
}*/