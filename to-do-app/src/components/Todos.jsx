import { useState } from "react";
import { useEffect } from "react";
export default function Todos() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [newtodo, setNewtodo] = useState("");
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    function handleSubmit(event) {
        event.preventDefault();
        if (!newtodo.trim()) return;

        const todoObject = {
            id: Date.now(),
            text: newtodo,
            isEditing: false,
            editText: newtodo,
        };

        setTodos((prev) => [...prev, todoObject]);
        setNewtodo("");
    }

    function toggleEditMode(id) {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
            ),
        );
    }

    function handleEditTextChange(id, value) {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, editText: value } : todo,
            ),
        );
    }

    function handleSaveEdit(event, id) {
        event.preventDefault();
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id
                    ? { ...todo, text: todo.editText, isEditing: false }
                    : todo,
            ),
        );
    }

    function handleRemove(id) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col gap-6">
                {/* Header and Todo List Section */}
                {todos.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl font-semibold tracking-tight text-zinc-100 border-b border-zinc-800 pb-3">
                            Your Latest Todos
                        </h1>
                        <ul className="flex flex-col gap-3">
                            {todos.map((todo) => {
                                return (
                                    <li
                                        key={todo.id}
                                        className="bg-zinc-800/40 border border-zinc-800/80 rounded-xl p-4 transition-colors duration-200 hover:bg-zinc-800/60"
                                    >
                                        {todo.isEditing ? (
                                            /* Editing View */
                                            <form
                                                onSubmit={(e) =>
                                                    handleSaveEdit(e, todo.id)
                                                }
                                                className="flex items-center gap-2 w-full"
                                            >
                                                <input
                                                    type="text"
                                                    value={todo.editText}
                                                    onChange={(e) =>
                                                        handleEditTextChange(
                                                            todo.id,
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="flex-1 bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-1.5 text-sm text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors"
                                                    autoFocus
                                                />
                                                <button
                                                    type="submit"
                                                    className="text-xs bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-medium px-3 py-2 rounded-lg transition-colors"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        toggleEditMode(todo.id)
                                                    }
                                                    className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 font-medium px-3 py-2 rounded-lg transition-colors"
                                                >
                                                    Cancel
                                                </button>
                                            </form>
                                        ) : (
                                            /* Normal View */
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-sm font-medium text-zinc-300 break-all">
                                                    {todo.text}
                                                </span>
                                                <div className="flex items-center gap-1.5 shrink-0">
                                                    <button
                                                        onClick={() =>
                                                            toggleEditMode(
                                                                todo.id,
                                                            )
                                                        }
                                                        className="text-xs text-zinc-400 hover:text-zinc-200 px-2.5 py-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleRemove(
                                                                todo.id,
                                                            )
                                                        }
                                                        className="text-xs text-red-400/80 hover:text-red-400 px-2.5 py-1.5 rounded-lg hover:bg-red-950/30 transition-colors"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    <div className="text-center py-6 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/50">
                        <h1 className="text-sm font-medium text-zinc-500">
                            No Todos Available
                        </h1>
                    </div>
                )}

                {/* Add Item Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 mt-2 border-t border-zinc-800/60 pt-4"
                >
                    <label
                        htmlFor="todoitem"
                        className="text-xs font-bold uppercase tracking-wider text-zinc-500"
                    >
                        Add Item
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            id="todoitem"
                            name="todoitem"
                            value={newtodo}
                            onChange={(e) => setNewtodo(e.target.value)}
                            placeholder="What needs to be done?"
                            className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
                        />
                        <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-medium px-4 rounded-xl transition-all duration-200 active:scale-[0.98] text-sm whitespace-nowrap shadow-sm">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
