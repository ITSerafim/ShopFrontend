import { routes } from "./routes.js";

import createForm from "./form.js";

const cardsCount = [1, 2, 3];

const _routes = document.querySelector("#routes");
const _cards = document.querySelector("#cards");
const _form = document.querySelector("#form");

const createRouteItem = ({ link, text }) => `
<li class="text-xl">
    <a href="#${link}" class="hover:text-yellow-500">${text}</a>
</li>
`;

const createCard = () => `
    <div class="flex flex-col justify-center items-center gap-8 w-[450] border p-4">
        <img
            src="assets/images/FirstOutsideAsset.jpg"
            alt="Outside_Asset"
        />
            <p class="text-center">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
            </p>
            <button type="button" class="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black  p-4 rounded">
                Отправить заявку.
            </button>
    </div>
`;

routes.forEach((route) => {
  _routes.appendChild(stringToHtml(createRouteItem(route), "li"));
});

cardsCount.forEach((card) => {
  _cards.appendChild(stringToHtml(createCard(), "div"));
});

_form.appendChild(stringToHtml(createForm(), "form"));

function stringToHtml(string, selector) {
  return new DOMParser()
    .parseFromString(string, "text/html")
    .querySelector(selector);
}
