window.addEventListener('load',()=>{

  setTimeout(()=>{

    document.getElementById(
      'loadingScreen'
    ).style.opacity='0';

    setTimeout(()=>{

      document.getElementById(
        'loadingScreen'
      ).remove();

    },1500);

  },2500);

});
