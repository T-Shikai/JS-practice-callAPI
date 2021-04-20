// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// 関数
const addUsers = (user) => {
  const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
}

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

const listUsers = async () => {
  const users = await getUsers();
  users.forEach(addUsers);
};

// イベント
window.addEventListener("load", listUsers);
button.addEventListener("click", listUsers);