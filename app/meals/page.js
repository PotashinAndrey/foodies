import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Meals Page</h1>
      <div style={{ textAlign: "center" }}>
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="/meals/share">Share</Link>
        </p>
        <p>
          <Link href="/meals/pasta">Pasta</Link>
        </p>
        <p>
          <Link href="/meals/pelmeni">Pelmeni</Link>
        </p>
      </div>
    </main>
  );
}
