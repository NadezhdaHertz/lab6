/**
 * Скрипт предназначен для плавного появления элементов на странице
 * по мере того, как они попадают в область видимости. Он использует
 * API IntersectionObserver для отслеживания элементов с классом 'hidden'
 * и добавляет этим элементам класс 'show', который активирует CSS‑анимацию.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Настройка наблюдателя IntersectionObserver:
  // threshold: 0.1 означает, что элемент считается видимым,
  // когда 10% его высоты попадает в зону просмотра.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Если элемент виден (entry.isIntersecting === true),
        // добавляем ему класс 'show'. CSS‑стили обеспечат плавный переход.
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  // Находим все элементы, скрытые изначально,
  // и передаём их наблюдателю.
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
});
