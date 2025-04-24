interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: FAQItemProps) {
  return (
    <div
      onClick={onClick}
      className={`border-2 rounded-2xl mb-4 cursor-pointer overflow-hidden transition-colors ${
        isOpen
          ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
          : "bg-white border-[var(--color-accent)] text-[var(--color-text)]"
      }`}
    >
      <div className="flex justify-between items-center p-4">
        <h3 className="text-lg font-semibold text-left">{question}</h3>
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] p-4" : "grid-rows-[0fr] p-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-left text-[var(--color-text)] bg-white p-4 rounded-xl shadow">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
