import { useState } from "react";

function App() {
  // 1. 할 일 목록 배열
  const [todos, setTodos] = useState([]);

  // 2. 입력창 상태
  const [text, setText] = useState("");

  // 3. 할 일 추가 함수
  const addTodo = () => {
    if (text.trim() === "") return; // 빈 값 입력되면 함수종료

    const newTodo = {
      id: Date.now(),      // 고유 id 생성
      text: text           // 입력한 내용 저장
    };

    setTodos((prev) => [...prev, newTodo]); // 기존 배열 + 새 데이터
    setText(""); // 입력창 초기화
  };

  // 4. 삭제 함수 (id 기준)
  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((todo) => todo.id !== id)
    );
  };

  // 5. 전체 삭제
  const allDelete = () => setTodos([]);

  return (
    <div>
      <h3>
        오늘 /공부할꺼
        <br />
        (feat. 집가기전에 반드시!!)
      </h3>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTodo}>추가</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>

      <button onClick={allDelete}>모두삭제</button>
    </div>
  );
}

export default App;