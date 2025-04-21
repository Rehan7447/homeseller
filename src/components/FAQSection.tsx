"use client";
import { useState } from "react";
import FAQItem from "./FAQItem";

const faqData = [
  {
    question: "What kind of properties do you buy?",
    answer:
      "We buy a wide variety of properties, including houses, condos, townhomes, and more. We are interested in properties in any condition, whether they need repairs or are move-in ready.",
  },
  {
    question: "How does the selling process work with Local Home Buyers?",
    answer:
      "Our process is simple: contact us, receive a fair offer, and get paid quickly. No hidden fees, no stress.",
  },
  {
    question: "What are the advantages of selling to Local Home Buyers?",
    answer:
      "You avoid realtor fees, long waiting times, and costly repairs. We offer fair, fast cash deals.",
  },
  {
    question: "Do you buy properties in any condition?",
    answer:
      "Yes, we buy properties as-is, whether they are in perfect shape or need significant repairs.",
  },
  {
    question: "How quickly can I sell my house to you?",
    answer:
      "In many cases, we can close in as little as 7-14 days depending on your schedule.",
  },
  {
    question: "Is there any cost to get an offer from you?",
    answer: "No, our offers are completely free and come with no obligation.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 bg-[var(--color-background-light)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
          FAQs
        </h2>
        <p className="text-xl text-[var(--color-text)] mb-12">
          Frequently Asked Questions
        </p>

        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={activeIndex === index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          />
        ))}

        <div className="mt-12 flex justify-center">
          <button className="bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white font-bold py-3 px-8 rounded-full transition-all cursor-pointer shadow-lg">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
