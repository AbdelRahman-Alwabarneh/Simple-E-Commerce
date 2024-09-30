// pages/about.js
import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-5xl px-8 py-12 bg-white rounded-lg shadow-lg text-gray-800">
        <h1 className="text-5xl font-extrabold text-center mb-6">عن متجرنا</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          نحن متجر فريد يهدف إلى توفير أفضل المنتجات بأعلى جودة. نعتز بخدمة
          عملائنا ونسعى لتلبية احتياجاتهم.
        </p>

        <div className="mt-12">
          <h2 className="text-4xl font-bold text-center mb-4">رؤيتنا</h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            تقديم تجربة تسوق متميزة تتيح للعملاء الوصول إلى منتجاتهم المفضلة
            بسهولة وراحة.
          </p>

          <h2 className="text-4xl font-bold text-center mb-4">مهمتنا</h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            نهدف إلى تزويد عملائنا بأفضل المنتجات مع الالتزام بتقديم خدمة عملاء
            رائعة وتجربة تسوق سلسة.
          </p>

          <h2 className="text-4xl font-bold text-center mb-4">قيمنا</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            نؤمن بالنزاهة، الجودة، والابتكار في كل ما نقوم به.
          </p>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">اتصل بنا</h2>
          <p className="text-lg text-gray-700 mb-4">
            نحب سماع آرائكم واستفساراتكم. لا تترددوا في{" "}
            <a href="/contact" className="text-blue-600 underline">
              الاتصال بنا
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
