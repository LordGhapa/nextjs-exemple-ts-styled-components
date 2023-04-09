export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
}

export default function Home({ todos }) {
  return (
    <div>
      {todos.length === 0 ? (
        <div>Loading...</div>
      ) : (
        todos.map((todo) => (
          <p key={todo.id}>
            <p>
              {todo.id}:{todo.title}
            </p>
          </p>
        ))
      )}
    </div>
  );
}
