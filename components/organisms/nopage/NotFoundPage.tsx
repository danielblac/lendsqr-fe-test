"use client";
import Header from "@/components/organisms/header/Header";
import Image from "next/image";
import Link from "next/link";

function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="not-found">
        <h2>Oopss!!</h2>
        <Image
          src="/images/not-found-new.svg"
          alt="not found"
          width={400}
          height={250}
          className="not-found-img"
        />
        <p>
          The treasure map seems to have gone astray. Let's find your
          destination together
        </p>

        <Link href="/">
          <button>Return to Home Page</button>
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
