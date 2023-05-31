import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Your message was sent successfully");
        },
        (error) => {
          toast.error("We could not send your message");
        }
      );
    e.target.reset();
  };

  return (
    <form
      className="form-group col-6 m-auto mt-5"
      ref={form}
      onSubmit={sendEmail}
    >
      <label className="">Name</label>
      <input className="form-control" type="text" name="user_name" />
      <label>Email</label>
      <input className="form-control" type="email" name="user_email" />
      <label>Message</label>
      <textarea className="form-control" name="message" />
      <input className="btn" type="submit" value="Send" />
      <ToastContainer />
    </form>
  );
}
