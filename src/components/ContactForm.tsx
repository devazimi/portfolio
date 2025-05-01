import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FormEvent } from "react";

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

interface EmailJSResponse {
    text: string;
}

const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_xl83yuo",
            "template_im6f60c",
            form.current!,
            "PvtgcMbZMhE_EKdHi"
        )
        .then(
            (result: EmailJSResponse) => {
                console.log(result.text);
                alert("پیام با موفقیت ارسال شد!");
            },
            (error: EmailJSResponse) => {
                console.log(error.text);
                alert("ارسال پیام با خطا مواجه شد!");
            }
        );
};

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="نام شما"
        className="w-full p-2 rounded bg-gray-800 text-white"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="ایمیل شما"
        className="w-full p-2 rounded bg-gray-800 text-white"
        required
      />
      <textarea
        name="message"
        placeholder="پیامتون رو بنویسید..."
        className="w-full p-2 rounded bg-gray-800 text-white"
        rows={5}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        ارسال پیام
      </button>
    </form>
  );
}
