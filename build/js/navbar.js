window.onscroll = () => {
    const nav = document.querySelector('#menu');
    if(this.scrollY <= 10) nav.classList.remove("scroll") ; else nav.classList.add("scroll");
  };