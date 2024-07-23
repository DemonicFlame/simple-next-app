import Image from "next/image";
import Users from "./users/page";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Users />
      <Link href="/new">NewUsers</Link>
      <ProductCard />
    </div>
  );
}
