function createParticle(){

  const particle =
  document.createElement('div');

  particle.style.position='absolute';

  particle.style.width='8px';

  particle.style.height='8px';

  particle.style.borderRadius='50%';

  particle.style.background='#53f7ff';

  particle.style.boxShadow=
  '0 0 20px #53f7ff';

  particle.style.left=
  Math.random()*window.innerWidth+'px';

  particle.style.top=
  window.innerHeight+'px';

  document.body.appendChild(particle);

  let y = window.innerHeight;

  const move = setInterval(()=>{

    y -= 2;

    particle.style.top = y+'px';

    if(y < -20){

      clearInterval(move);

      particle.remove();

    }

  },16);

}

setInterval(createParticle,400);
