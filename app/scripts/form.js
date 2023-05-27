function createFormControl(id, text) {
  return `
      <input
        type="text"
        id="${id}"
        placeholder="${text}"
        class="border p-4 rounded"
      />
`;
}

export default function createForm() {
  return `
      <form class="flex flex-col gap-5 p-8 border rounded">
          ${createFormControl("username", "Ваше имя")}
          ${createFormControl("phone", "Телефон")}
          ${createFormControl("message", "Сообщение")}
          <button type="button" class="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black  p-4 rounded">
              Отправить заявку.
          </button>
          <small class="w-[350] text-center text-gray-500">
            Нажимая кнопку "Отправить", вы соглашаетесь на обработку персональных
            данных!
          </small>
      </form>
`;
}
