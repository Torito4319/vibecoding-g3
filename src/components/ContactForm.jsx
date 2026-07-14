"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const INITIAL_FORM = {
  nombre: "",
  apellido: "",
  correo: "",
  telefono: "",
  industria: "",
  comentarios: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  const { heading, subheading, form: formConfig, schedulingUrl, schedulingCta } = siteConfig.contact;
  const { labels, placeholders } = formConfig;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!form.nombre.trim()) {
      newErrors.nombre = "Por favor escribe tu nombre.";
    }
    if (!form.apellido.trim()) {
      newErrors.apellido = "Por favor escribe tu apellido.";
    }
    if (!form.correo.trim()) {
      newErrors.correo = "Por favor escribe tu correo.";
    } else if (!isValidEmail(form.correo)) {
      newErrors.correo = "Ese correo no parece valido. Ejemplo: nombre@correo.com";
    }
    if (!form.telefono.trim()) {
      newErrors.telefono = "Por favor escribe tu telefono.";
    }
    if (!form.industria.trim()) {
      newErrors.industria = "Por favor indica tu industria.";
    }
    if (!form.comentarios.trim()) {
      newErrors.comentarios = "Por favor escribe tus comentarios.";
    }
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || formConfig.errorMessage);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(INITIAL_FORM);
      setErrors({});
    } catch {
      setServerError(formConfig.errorMessage);
      setStatus("error");
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition ${
      errors[field] ? "border-rose-200 bg-rose-50/70" : "border-gray-300"
    }`;

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600">
            {subheading}
          </p>
          {schedulingUrl && (
            <a
              href={schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2.5 border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors text-sm"
            >
              {schedulingCta}
            </a>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white border border-gray-200 rounded-2xl p-8 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                {labels.nombre}
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={form.nombre}
                onChange={handleChange}
                placeholder={placeholders.nombre}
                className={inputClass("nombre")}
              />
              {errors.nombre && (
                <p className="mt-1.5 text-sm text-rose-500">{errors.nombre}</p>
              )}
            </div>

            <div>
              <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2">
                {labels.apellido}
              </label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                value={form.apellido}
                onChange={handleChange}
                placeholder={placeholders.apellido}
                className={inputClass("apellido")}
              />
              {errors.apellido && (
                <p className="mt-1.5 text-sm text-rose-500">{errors.apellido}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-2">
              {labels.correo}
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              value={form.correo}
              onChange={handleChange}
              placeholder={placeholders.correo}
              className={inputClass("correo")}
            />
            {errors.correo && (
              <p className="mt-1.5 text-sm text-rose-500">{errors.correo}</p>
            )}
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
              {labels.telefono}
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={form.telefono}
              onChange={handleChange}
              placeholder={placeholders.telefono}
              className={inputClass("telefono")}
            />
            {errors.telefono && (
              <p className="mt-1.5 text-sm text-rose-500">{errors.telefono}</p>
            )}
          </div>

          <div>
            <label htmlFor="industria" className="block text-sm font-medium text-gray-700 mb-2">
              {labels.industria}
            </label>
            <input
              id="industria"
              name="industria"
              type="text"
              value={form.industria}
              onChange={handleChange}
              placeholder={placeholders.industria}
              className={inputClass("industria")}
            />
            {errors.industria && (
              <p className="mt-1.5 text-sm text-rose-500">{errors.industria}</p>
            )}
          </div>

          <div>
            <label htmlFor="comentarios" className="block text-sm font-medium text-gray-700 mb-2">
              {labels.comentarios}
            </label>
            <textarea
              id="comentarios"
              name="comentarios"
              rows={4}
              value={form.comentarios}
              onChange={handleChange}
              placeholder={placeholders.comentarios}
              className={`${inputClass("comentarios")} resize-none`}
            />
            {errors.comentarios && (
              <p className="mt-1.5 text-sm text-rose-500">{errors.comentarios}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? formConfig.sendingButton : formConfig.submitButton}
          </button>

          {status === "success" && (
            <p className="text-center text-green-600 font-medium">
              {formConfig.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-rose-500 font-medium">
              {serverError || formConfig.errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
