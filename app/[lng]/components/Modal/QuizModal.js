"use client";
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

const data = [
  {
    type: 1,
    title: "Кто вы?",
    descriptions: "Выберите подходящее описание для себя",
    data: [
      {
        type: "button",
        title: "Владелец бизнеса",
        active: false,
        value: "Владелец бизнеса",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Руководитель",
        active: false,
        value: "Руководитель",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Специалист",
        active: false,
        value: "Специалист",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Маркетолог",
        active: false,
        value: "Маркетолог",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "input",
        title: "Ввести вручную",
        active: false,
        value: "",
        icon: "/public/",
      },
    ],
  },
  {
    type: 1,
    title: "Желаемый результат",
    descriptions: "Какой результат вы хотите получить?",
    data: [
      {
        type: "button",
        title: "Поток клиентов",
        active: false,
        value: "Поток клиентов",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Повышение видимости",
        active: false,
        value: "Повышение видимости",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Укрепление бренда ",
        active: false,
        value: "Укрепление бренда",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Увеличение лояльности",
        active: false,
        value: "Увеличение лояльности",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Реклама новой услуги или продукта",
        active: false,
        value: "Увеличение лояльности",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "input",
        title: "Ввести вручную",
        active: false,
        value: "",
        icon: "/public/",
      },
    ],
  },
  {
    type: 2,
    title: "Источники клиентов",
    descriptions:
      "Определите, откуда клиенты чаще всего узнают о вашей компании",
    data: [
      {
        type: "button",
        title: "Рекомендации других клиентов",
        active: false,
        value: "Рекомендации других клиентов",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Направления специалистов",
        active: false,
        value: "Направления специалистов",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Социальные сети",
        active: false,
        value: "Социальные сети",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Сайт",
        active: false,
        value: "Сайт",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Сервисы-агрегаторы",
        active: false,
        value: "Сервисы-агрегаторы",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Наружная реклама",
        active: false,
        value: "Наружная реклама",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
      {
        type: "input",
        title: "Ввести вручную",
        active: false,
        value: "",
        icon: "/public/",
      },
    ],
  },
  {
    type: 1,
    title: "Калькулятор",
    descriptions:
      "Подсчитайте количество приведенных клиентов за рекламную кампанию:",
    data: [
      {
        type: "button",
        title: "Контекстная реклама",
        active: false,
        value: "Контекстная реклама",
        descriptions: "Реклама вашего сайта в Google, Yandex",
        icon: "/public/",
      },
      {
        type: "button",
        title: "Таргетированная реклама",
        active: false,
        value: "Таргетированная реклама",
        descriptions:
          "Учредитель, соучредитель или генеральный директор компании",
        icon: "/public/",
      },
    ],
  },
  {
    type: 2,
    title: "Контекстная реклама",
    data: [
      {
        type: "ratio",
        title: "Рекламный бюджет",
        saleSymbol: "$",
        from: 200,
        to: 2000,
        value: 200,
        active: false,
        descriptions:
          "Сумма, выделенная на канал или кампанию за отчетный период",
      },
      {
        type: "ratio",
        title: "Цена за клик",
        saleSymbol: "$",
        from: 0.05,
        to: 1.0,
        value: 0.05,
        active: false,
        descriptions:
          "Количество кликов по рекламе, показатель интереса к рекламному материалу",
      },
      {
        type: "ratio",
        title: "Конверсия в лиды",
        saleSymbol: "%",
        from: 3,
        to: 20,
        value: 3,
        active: false,
        descriptions:
          "Доля кликов, которые стали лидами",
      },
      {
        type: "ratio",
        title: "Конверсия в встречи",
        saleSymbol: "%",
        from: 3,
        to: 20,
        value: 3,
        active: false,
        descriptions:
          "Ожидаемый процент встреч на основе приведенных лидов",
      },
      {
        type: "ratio",
        title: "Конверсия в клиента",
        saleSymbol: "$",
        from: 3,
        to: 20,
        value: 3,
        active: false,
        descriptions:
          "Процент встреч, приводящих к заключению сделки с клиентом",
      },
    ],
  },
  {
    type: 2,
    title: "Таргетированная реклама",
    data: [
      {
        type: "ratio",
        title: "Рекламный бюджет",
        saleSymbol: "$",
        from: 200,
        to: 2000,
        value: 200,
        active: false,
        descriptions:
          "Сумма, выделенная на канал или кампанию за отчетный период",
      },
      {
        type: "ratio",
        title: "Цена за лид",
        saleSymbol: "$",
        from: 0.8,
        to: 4.0,
        value: 0.8,
        active: false,
        descriptions:
          "Стоимость приведенного лида",
      },
      {
        type: "ratio",
        title: "Конверсия в встречи",
        saleSymbol: "%",
        from: 3,
        to: 20,
        value: 3,
        active: false,
        descriptions:
          "Ожидаемый процент встреч на основе приведенных лидов",
      },
      {
        type: "ratio",
        title: "Конверсия в клиента",
        saleSymbol: "$",
        from: 3,
        to: 20,
        value: 3,
        active: false,
        descriptions:
          "Процент встреч, приводящих к заключению сделки с клиентом",
      },
    ],
  },
];

export default function QuizModal({ setQuizModal }) {
    const [steps, setSteps] = useState(0);
    const containerRef = useRef(null);
  
    // Функция для перехода к следующему шагу
    const nextStep = () => {
      gsap.to(containerRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setSteps((prev) => (prev + 1) % data.length); // Переход на следующий шаг
          gsap.fromTo(
            containerRef.current,
            { x: "100%", opacity: 0 },
            { x: "0%", opacity: 1, duration: 0.5 }
          );
        },
      });
    };
  
    // Анимация для начального состояния при открытии модалки
    useEffect(() => {
      gsap.from(containerRef.current, { opacity: 0, y: 20, duration: 0.5 });
    }, []);
  
    return createPortal(
      <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white p-4 overflow-y-scroll no-scrollbar">
        <div className="bg-[#F8F8F8] w-full h-full rounded-[100px] flex items-center justify-center p-16 relative">
          <div ref={containerRef} className="w-full text-center">
            {/* Заголовок и описание шага */}
            <h2 className="text-2xl font-bold mb-4">{data[steps].title}</h2>
            <p className="text-lg mb-8">{data[steps].descriptions}</p>
  
            {/* Карточки с вариантами ответа */}
            <div className="grid grid-cols-2 gap-4">
              {data[steps].data.map((item, index) => (
                <div
                  key={index}
                  onClick={nextStep} // Переход к следующему шагу при клике
                  className="bg-white p-4 rounded-lg cursor-pointer shadow-md flex items-center justify-center"
                >
                  <span className="text-lg font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  }