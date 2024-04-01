//create
const popularGrid = document.createElement("div");
const tourItem = document.createElement("div");
const tourType = document.createElement("span");
const tourTitle = document.createElement("h3");
tourTitle.textContent = "Обзорная по Сочи (из Адлера)";
const detailDiv = document.createElement("div");
const description = document.createElement("p");
const button = document.createElement("button");

//styling
popularGrid.classList.add("popular_grid");
tourItem.classList.add("tour_item");
detailDiv.classList.add("detail");
button.classList.add("btn");

tourType.innerHTML = "Автобусный тур";
description.innerHTML =
  'Приглашаем вас на экскурсию "Обзорная по Большому Сочи": Экскурсия начнется с подъёма на гору Большой Ахун - это высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...';
button.innerHTML = "Подробнее";

tourItem.style.backgroundImage = "url(./Rectangle\\ 13.png)";
//append
tourItem.append(tourType);
tourItem.append(tourTitle);
tourItem.append(detailDiv);
tourItem.append(description);
tourItem.append(button);
popularGrid.append(tourItem);
document.body.append(popularGrid);
