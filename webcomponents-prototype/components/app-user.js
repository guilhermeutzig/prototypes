class User extends HTMLElement {

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }

  set user(user) {
    this.root.innerHTML = `
      <style>
        div {
          padding-bottom: 20px;
          margin-bottom: 20px;
          font-family: Arial;
          border-bottom: 1px solid #f1f1f1;
        }
        h1 {
          font-size: 24px;
          margin: 0 0 10px;
        }
        p {
          font-size: 16px;
          margin: 0;
        }
      </style>
      <div>
        <h1>${user.name}</h1>
        <p>Idade: ${user.age}</p>
      </div>
    `;
  }

}

customElements.define('app-user', User)