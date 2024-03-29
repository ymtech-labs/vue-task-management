const storageKey = "tasks-vue-compo-api";
let tasks = []; //a la place de la bdd

function create(task) {
  if (tasks === null) {
    tasks = [];
  }
  tasks = [task, ...tasks];
  save();
}

function read() {
  tasks = retrieveTasks();
  return tasks;
}

function updateTask(task) {
  const index = tasks.findIndex((t) => t.id === task.id);
  console.log("index", index);
  if (index === -1) {
    return;
  }
  tasks[index] = task;
  save();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  save();
}

function convertCase(temporalityKebabCase) {
  let result;
  switch (temporalityKebabCase) {
    case "short-term":
      result = "court terme";
      break;
    case "medium-term":
      result = "moyen terme";
      break;
    case "long-term":
      result = "long terme";
      break;
    default:
      result = temporalityKebabCase;
      break;
  }
  return result;
}

//Gestion du localStorage
function save() {
  localStorage.setItem(storageKey, JSON.stringify(tasks));
}

function retrieveTasks() {
  const fromLocalStorage = localStorage.getItem(storageKey);
  return JSON.parse(fromLocalStorage);
}

export default {
  create,
  read,
  updateTask,
  deleteTask,
  convertCase,
};
