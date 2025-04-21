import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  acceptTerms: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    acceptTerms: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailtoLink = `mailto:example@example.com?subject=Free Offer Request&body=${encodeURIComponent(
      `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}`
    )}`;

    window.location.href = mailtoLink;

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      acceptTerms: false,
    });
  };

  return (
    <section
      id="contact"
      className="p-8 bg-white rounded-3xl shadow-lg max-w-lg mx-auto text-[var(--color-text)]"
    >
      <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center mb-2">
        Claim a Free Offer Today
      </h2>
      <p className="text-center text-base mb-6">
        Receive your Free offer in as little as 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border-2 border-[var(--color-accent)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border-2 border-[var(--color-accent)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border-2 border-[var(--color-accent)] rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border-2 border-[var(--color-accent)] rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
        <textarea
          name="address"
          placeholder="Property Address"
          value={formData.address}
          onChange={handleChange}
          rows={2}
          required
          className="border-2 border-[var(--color-accent)] rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        ></textarea>

        <label className="flex items-start space-x-2 text-sm">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={handleChange}
            required
            className="mt-1 accent-[var(--color-primary)]"
          />
          <span>
            By submitting this form and signing up for texts, you consent to
            receive marketing text messages from Blue and Brown LLC at the
            number provided. Msg & data rates may apply. Consent is not a
            condition of purchase. Read our{" "}
            <a href="#" className="text-[var(--color-accent)] underline">
              Privacy Policy
            </a>{" "}
            &{" "}
            <a href="#" className="text-[var(--color-accent)] underline">
              Terms of Services
            </a>
            .
          </span>
        </label>

        <button
          type="submit"
          className="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 cursor-pointer hover:bg-[var(--color-accent)] transition duration-300"
        >
          Claim Your Offer
        </button>
      </form>
    </section>
  );
}
