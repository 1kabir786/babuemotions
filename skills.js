function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }
  
  
  function search() {
    let input = document.getElementById('searchBar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('card');
  
  for (i = 0; i < x.length; i++) { 
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
    }
    else {
        x[i].style.display="list-item";                 
    }
  }
  }
  
  
  
  function toggleAudio() {
    const audioBtn = document.querySelector(".audio-btn");
    const searchBar = document.getElementById("searchBar");
  
    if (audioBtn.classList.contains("active")) {
      // Stop audio recording or processing here
      audioBtn.classList.remove("active");
      searchBar.removeAttribute("disabled");
    } else {
      // Start audio recording or processing here
      audioBtn.classList.add("active");
      searchBar.setAttribute("disabled", "disabled");
    }
  }
  const audioButton = document.querySelector(".audio-btn");
  audioButton.addEventListener("click", toggleAudio);
  
  
  const searchBar = document.getElementById('searchBar');
  
  searchBar.addEventListener('input', () => {
      const searchTerm = searchBar.value.toLowerCase();
      const content = document.querySelectorAll('.content');
  
      content.forEach(content => {
          const elementsToHighlight = content.querySelectorAll('h3, p, article');
  
          elementsToHighlight.forEach(element => {
              const elementText = element.textContent.toLowerCase();
              if (elementText.includes(searchTerm)) {
                  highlightText(element, searchTerm);
              } else {
                  unhighlightText(element);
              }
          });
      });
  });
  
  function highlightText(element, searchTerm) {
      const regex = new RegExp(searchTerm, 'gi');
      const highlightedText = element.textContent.replace(regex, match => `<span class="highlight">${match}</span>`);
      element.innerHTML = highlightedText;
  }
  
  function unhighlightText(element) {
      element.innerHTML = element.textContent;
  }
  