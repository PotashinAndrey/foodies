import Link from "next/link";

export default function MealsSharePage() {
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Meals Share Page</h1>
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
