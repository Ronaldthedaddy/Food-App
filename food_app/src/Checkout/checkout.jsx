import React from "react";
import "./checkout.css";
import Sidebar from "../Sidebar/Sidebarr";
import Navbar from "../Navbar/Navbar";

const checkout = () => {
  return (
    <main className="servicewhole">
      <article className="sidebar2">
        <Sidebar />

        <section className="navin">
          <Navbar />
        </section>
      </article>
    </main>
  );
};

export default checkout;
