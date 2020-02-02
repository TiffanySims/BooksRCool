import { elements } from "./base";

export const clearbook = () => {
  elements.book.innerHTML = "";
};

export const renderbook = (book, isLiked) => {
  const markup = `
        <figure class="book__fig">
            <img src="${book.img}" alt="${book.title}" class="book__img">
            <h1 class="book__title">
                <span>${book.title}</span>
            </h1>
        </figure>

        <div class="book__details">
            <div class="book__info">
                <svg class="book__info-icon">
                    <use href="img/icons.svg#icon-book"></use>
                </svg>
                <span class="book__info-data book__info-data--minutes"></span>
                <span class="book__info-text">${book.page}</span>
            </div>
            
            <div class="book__info">
                <svg class="book__info-icon">
                    <use href="img/icons.svg#icon-star-full"></use>
                </svg>
                <span class="book__info-data book__info-data--minutes"></span>
                <span class="book__info-text">${
                  book.rating ? `${book.rating}/5` : "Not Rated"
                }</span>
            </div>
            <div class="book__info">
                <svg class="book__info-icon">
                    <use href="img/icons.svg#icon-calendar"></use>
                </svg>
                <span class="book__info-data book__info-data--people"></span>
                <span class="book__info-text">${book.date}</span>

                

            </div>
            
            <button class="book__love">
                <svg class="header__likes">
                    <use href="img/icons.svg#icon-heart${
                      isLiked ? "" : "-outlined"
                    }"></use>
                </svg>
            </button>
        </div>

        <div class="book__ingredients">
        
            <p class = "book__category">${book.category}</p>

           <p>${book.description}</p>
        </div>

        <div class="book__directions">
            <h2 class="heading-2">Get This Book</h2>
           
            <a class="btn-small book__btn" href="${book.url}" target="_blank">
                <span>Buy Now</span>
                <svg class="search__icon">
                    <use href="img/icons.svg#icon-triangle-right"></use>
                </svg>

            </a>
        </div>
    `;
  elements.book.insertAdjacentHTML("afterbegin", markup);
};
