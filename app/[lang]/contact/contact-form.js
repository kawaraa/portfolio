"use client";
import { useState } from "react";
import { send } from "../../../components/shared-content";
import { btnCls, cardBgCls } from "../../../components/tailwindcss-class";
const inputFieldCls = "relative mt-16";
const underline = `outline-none border-b-[1px] border-stone-400 dark:border-gray-400 focus:border-dbg dark:focus:border-bg`;
const inputCls = `peer block bg-transparent w-full p-1 ${underline}`;
const inputLabelCls =
  "absolute top-1 left-1 right-1 z-1 peer-focus:-top-6 peer-valid:-top-6 text-lg duration-300";

export default function ContactForm({ lang, apiUrl }) {
  const [sent, setSent] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      name: e.target.name.value,
      email: e.target.email.value,
      organization: e.target.organization.value,
      subject: e.target.subject.value,
      budget: e.target.budget?.value || 0,
      deadline: e.target.deadline?.value || 0,
      message: e.target.message.value,
    });

    fetch(apiUrl, { method: "POST", body }).catch(() => null);
    setTimeout(() => document.querySelector("a").click(), 6000);
    document.getElementById("main-container").scrollTo({ top: 0, left: 0, behavior: "smooth" });

    setSent(true);
  };

  if (sent) {
    return <p className="mt-[30vh] text-xl text-green-600 text-center">{content.response[lang]}</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={`${cardBgCls} max-w-lg mx-auto mt-20 px-5 py-8`}>
      <h2 className="text-3xl mb-3 text-center">{content.h2[lang]}</h2>

      {content.inputs.map((input, i) => (
        <div className={inputFieldCls} key={i}>
          <input {...input.props} className={inputCls} />
          <label dir="auto" htmlFor={input.props.id} className={inputLabelCls}>
            {input.label[lang]}
          </label>
        </div>
      ))}

      <div className={inputFieldCls}>
        <label htmlFor="subject" className="block mb-2">
          {content.subjects.label[lang]}
        </label>
        <select name="subject" id="subject" className={`block w-full p-1 bg-transparent ${underline}`}>
          {content.subjects.options.map((option, i) => (
            <option value={option.en} key={i}>
              {option[lang]}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="form-range">
          <label htmlFor="budget">Budget</label>
          <div className="range">
            <input type="range" name="budget" min="0" max="10000" value="500" id="budget" />
            <span id="budget-result-holder">€500</span>
          </div>
        </div>
        <div className="form-range">
          <label htmlFor="deadline">Deadline</label>
          <div className="range">
            <input type="range" name="deadline" min="0" max="365" value="5" id="deadline" />
            <span id="deadline-result-holder">5 Days</span>
          </div>
        </div> */}
      <div className={inputFieldCls}>
        <textarea name="message" id="message" required className={`${inputCls} resize-none h-32`}></textarea>
        <label htmlFor="message" className={inputLabelCls}>
          {content.message[lang]}
        </label>
      </div>

      <button type="submit" className={btnCls + " !flex w-32 mt-5 mx-auto"}>
        {send[lang]}
      </button>
    </form>
  );
}

const content = {
  h2: { en: "Let's talk", ar: "لنتحدث معا" },
  response: {
    en: "Thanks for contacting us, We will reply within 24 hours.",
    ar: "شكرا لإتصالك بنا، سوف نقوم بالرد خلال 24 ساعة.",
  },
  inputs: [
    { label: { en: "Name", ar: "الاسم" }, props: { type: "text", name: "name", id: "name", required: true } },
    {
      label: { en: "Email Address", ar: "البريد الإلكتروني" },
      props: { type: "email", name: "email", id: "email", required: true },
    },
    {
      label: { en: "Company / Organization", ar: "الشركة / المنظمة" },
      props: { type: "text", name: "organization", id: "organization", required: true },
    },
  ],
  subjects: {
    label: { en: "I need to", ar: "أنا بحاجة إلى" },
    options: [
      { en: "Build a Website", ar: "إنشاء موقع" },
      { en: "Update a Website", ar: "تحديث موقع" },
      { en: "Rebuild a Website", ar: "إعادة بناء موقع" },
      { en: "Build a Online Store", ar: "إنشاء متجر إلكتروني" },
      { en: "Update a Online Store", ar: "تحديث متجر إلكتروني" },
      { en: "Rebuild a Online Store", ar: "إعادة بناء متجر إلكتروني" },
      { en: "SEO Improvement", ar: "تحسين أداء محرك البحث" },
      { en: "Build Web App", ar: "بناء تطبيق الويب" },
      { en: "Build an IOS App", ar: "بناء تطبيق ايفون" },
      { en: "Update an IOS App", ar: "تحديث تطبيق ايفون" },
      { en: "Build an Android App", ar: "بناء تطبيق أندرويد" },
      { en: "Update an Android App", ar: "تحديث تطبيق أندرويد" },
      { en: "Build a Windows App", ar: "بناء تطبيق ويندوز" },
      { en: "Update a Windows App", ar: "تحديث تطبيق ويندوز" },
      { en: "Build a MacOS App", ar: "بناء تطبيق أبل" },
      { en: "Update a MacOS App", ar: "تحديث تطبيق أبل" },
      // { en: "Design UI/UX", ar: "تصميم واجهة المستخدم" },
      { en: "Build a Restful API", ar: "بناء واجهة برمجة أو سيرفر" },
      { en: "Build a Service", ar: "بناء خدمة" },
      { en: "Software Testing", ar: "فحص برنامج" },
      { en: "E-Commerce solution", ar: "حل لتجارة الإلكترونية" },
      { en: "Create a Database", ar: "إنشاء قاعدة بيانات" },
      { en: "Build an Automated Service", ar: "بناء وظيفة آلية" },
      { en: "Integrate a new service", ar: "دمج خدمة جديدة" },
      { en: "Connect a Sales Channel", ar: "ربط قناة المبيعات" },
      { en: "Analyze Data", ar: "تحليل البيانات" },
      { en: "Integrate with Social Media", ar: "دمج مع وسائل التواصل الاجتماعي" },
      { en: "Custom Development", ar: "تطوير برمجي مخصصة" },
      { en: "Developer on-Retainer", ar: "تجنيب المطور" },
      { en: "Long-term Service", ar: "خدمة طويلة الأمد" },
      { en: "Client Training", ar: "" }, //
      { en: "Partner", ar: "شريك" },
      { en: "Volunteer", ar: "متطوع" },
      { en: "Other Enquire", ar: "استفسار اخرى" },
    ],
  },
  message: { en: "Your Message", ar: "رسالتك" },
};
