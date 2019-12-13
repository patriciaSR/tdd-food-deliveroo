const mockIdsArray = ['a', 'b', 'c', 'd', 'e'];

const listElements = mockIdsArray.map((id) => `
    <li id ="${id}">
      <button>Click me!</button>
      <p class="food__counter">2</p>
    </li>
  `).join('');

export { mockIdsArray, listElements };
