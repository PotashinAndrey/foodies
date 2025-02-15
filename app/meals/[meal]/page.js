import Link from "next/link";

export default function ExactMealPage({ params }) {
  const { meal } = params;

  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Meal {meal} Page</h1>
      <div style={{ textAlign: "center" }}>
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/meals">Meals</Link>
        </p>
      </div>
    </main>
  );
}
