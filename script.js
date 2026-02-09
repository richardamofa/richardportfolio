
/* JavaScript */
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      nav.classList.toggle("active");
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        if (navBar.classList.contains('active')) {
        navBar.classList.remove('active');
        }
      }
      });
    });

    const lines = [
      "I build fast, accessible frontends.",
      "I build reliable backends and APIs.",
      "I design and structure websites and mobile apps for development.",
      "Let's build something great together!."
    ];
    const typedEl = document.getElementById('typed-target');
    let iLine = 0, iChar = 0, forward = true;

    function typeTick(){
      const line = lines[iLine];
      if(forward){
        typedEl.textContent = line.slice(0, ++iChar);
        if(iChar === line.length){ forward=false; setTimeout(typeTick, 1200); return }
      } else {
        typedEl.textContent = line.slice(0, --iChar);
        if(iChar === 0){ forward=true; iLine = (iLine+1) % lines.length; }
      }
      setTimeout(typeTick, forward ? 60 : 24);
    }
    typeTick();

    
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('a.nav-link');

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('reveal');
          // highlight nav
          const id = entry.target.getAttribute('id');
          navLinks.forEach(a=>{
            a.classList.toggle('active', a.getAttribute('href') === '#'+id);
          });
        }
      });
    }, { threshold: 0.18 });

    sections.forEach(s => obs.observe(s));


    const fills = document.querySelectorAll('.fill');
    function revealSkillBars(){
      fills.forEach(f=>{
        const val = f.dataset.fill || '0%';
        f.style.width = val;
      });
    }
    // on first reveal of skills section
    const skillsSection = document.getElementById('skills');
    const skillsObserver = new IntersectionObserver((entries, o)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ revealSkillBars(); o.disconnect(); }
      })
    }, {threshold:0.25});
    if(skillsSection) skillsObserver.observe(skillsSection);


    const tests = ['testimonial-1','testimonial-2', 'testimonial-3', 'testimonial-4'];
    let tIndex = 0;
    function showTest(i){
      tests.forEach(id=>{
        document.getElementById(id).style.display = (id === tests[i]) ? 'block' : 'none';
      });
    }
    document.getElementById('next-test').addEventListener('click', ()=>{ tIndex = (tIndex+1)%tests.length; showTest(tIndex); });
    document.getElementById('prev-test').addEventListener('click', ()=>{ tIndex = (tIndex-1+tests.length)%tests.length; showTest(tIndex); });


    const updateActiveByScroll = () => {
      const fromTop = window.scrollY + 80;
      document.querySelectorAll('a.nav-link').forEach(link=>{
        const section = document.querySelector(link.getAttribute('href'));
        if(!section) return;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        link.classList.toggle('active', fromTop >= top && fromTop < bottom);
      });
    };
    window.addEventListener('scroll', updateActiveByScroll, {passive:true});
    updateActiveByScroll();

    //getFullyear copy right 2025
    //document.getElementById('year').textContent = new Date().getFullYear();

        
  emailjs.init("YOUR_PUBLIC_KEY");

  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this
    ).then(() => {
      alert("Message sent successfully!");
    }, (error) => {
      alert("Failed to send message");
    });
  });


  // back to top
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });