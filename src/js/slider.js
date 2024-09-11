let showMoreBtn = document.querySelector(".show-more-btn p");
let additionalBlocks = document.querySelector(".services-block__additional-blocks");
let showMoreBtnTechnology = document.querySelector(".show-more-btn-technology");
let additionalBlocksTechnology = document.querySelector(".services-block__technology--additional-container");

showMoreBtn.addEventListener('click', () => {
  if (showMoreBtn.innerText === "Показать все") {
    additionalBlocks.classList.add('show-additional-blocks');
    showMoreBtn.innerHTML = `<div class="show-more-btn" style="margin-left: 0; cursor: pointer;">
      <p><img src="img/close.svg">Скрыть</p>
    </div>`;
  } else if (showMoreBtn.innerText === "Скрыть") {
    showMoreBtn.innerHTML = `<div class="show-more-btn" style="margin-left: 0">
      <p><img src="img/expand.svg">Показать все</p>
    </div>`;
      
    additionalBlocks.classList.remove('show-additional-blocks');
  }
});

showMoreBtnTechnology.addEventListener('click', () => {
    if (showMoreBtnTechnology.innerText === "Показать все") {
      additionalBlocksTechnology.classList.add('show-additional-blocks--technology');
      showMoreBtnTechnology.innerHTML = `<div class="show-more-btn-technology" style="margin-left: 0; cursor: pointer;">
        <p><img src="img/close.svg">Скрыть</p>
      </div>`;
    } else if (showMoreBtnTechnology.innerText === "Скрыть") {
      showMoreBtnTechnology.innerHTML = `<div class="show-more-btn-technology" style="margin-left: 0">
        <p><img src="img/expand.svg">Показать все</p>
      </div>`;
        
      additionalBlocksTechnology.classList.remove('show-additional-blocks--technology');
    }
  });