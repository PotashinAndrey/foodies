export default function ExactMealPage({ params }) {
  const { meal } = params;

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Meal {meal} Page</h1>
    </main>
  );
}
