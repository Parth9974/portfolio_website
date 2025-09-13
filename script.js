  window.onload = () => {
    window.scrollTo(0, 0); // Force scroll to top on reload
  };    
     const typed = new Typed(".element", {
            strings: ["a Web Developer", "a Programmer", "exploring Problem Solving", "a Tech Enthusiast"],
            typeSpeed: 50,
            backSpeed: 40,
            loop: true
        });

        const observer=new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            console.log(entry);
            if(entry.isIntersecting){
              entry.target.classList.add('show');
            }
            else{
              entry.target.classList.remove('show');
            }
          });
        });
const hidden=document.querySelectorAll('.hidden');
hidden.forEach((el)=>observer.observe(el));
