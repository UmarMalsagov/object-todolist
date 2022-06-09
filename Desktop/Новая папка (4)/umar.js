const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: true,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.print(i));
    }
  },

  add: function (text) {
    return todoList.items.unshift({
      text: text,
      completed: false,
    });
  },

  remove: function (index) {
    todoList.items.splice(index, 1);
  },

  print: function (index) {
    if (todoList.items[index].completed === true) {
      return `[x] ${todoList.items[index].text}`;
    } else {
      return `[ ] ${todoList.items[index].text}`;
    }
  },

  complete: function (index) {
    this.items[index].completed = true;
  },
};

todoList.complete(1);
todoList.printAll();
