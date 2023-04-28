import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-text">Details</label>
      <input
        id="task-text"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <label htmlFor="task-category">Category</label>
      <select
        id="task-category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
