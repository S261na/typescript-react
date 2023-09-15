import React, { useState, useEffect, useCallback } from "react";

function Example() {
  // useEffect - это хук, поэтому его можно вызывать только на верхнем уровне компонента или в кастомных хуках. Мы не можем вызывать его внутри цикла и условий.

  // Best practice useEffect - можно выполнять только одну задачу с использованием useEffect. Для нескольких задач можно использовать несколько useEffect для одного и того же компонента. Назначение useEffect на короткие и одноцелевые функции предотвращает нежелательную повторную визуализацию и позволяет сохранить код чистым и читабельным.

  //   useCallback - это хук Реакта, который позволяет кэшировать определние функции между повторными рендерингами. При первоначальном рендере useCallback возвращает переданную нами функцию. А при последующих рендерах она либо вернет уже сохраненную функцию из последнего рендера (если зависимости не изменились), либо вернет функцию, которую мы передали во время этого рендера.

  const [count, setCount] = useState(0);
  //   function getRes() {
  //     return 2 * 2;
  //   }

  const getRes = useCallback(() => {
    return 2 * 2;
  }, []);

  useEffect(() => {
    setCount((count) => count + 1);
  }, [getRes]);

  //   useEffect(() => {
  //     let timeout = setTimeout(() => closeModal(), 3000);
  //     return () => clearTimeout(timeout);
  //   });

  return (
    <div>
      <p>value {count}</p>
    </div>
  );
}

export default Example;
