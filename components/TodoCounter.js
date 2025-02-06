class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = 0; // number of completed todos
    this._total = todos.length;
    this._completedTodos = todos.filter((todo) => todo.completed).length;
    this._updateText();
  }

  updateCompleted = (increment) => {
    if (increment) {
      this._completed++;
    } else {
      this._completed--;
    }

    this._updateText();
  };

  updateTotal(increment) {
    if (increment) {
      this._total++;
    } else {
      this._total--;
    }
    this._updateText();
  }
  _updateText(increment) {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
