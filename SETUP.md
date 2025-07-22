# Дизайн-система Next.js проекта

## ✅ Что настроено:

### 🚀 Технологический стек

- **Next.js 15** с App Router
- **TypeScript**
- **TailwindCSS 4**
- **shadcn/ui** компоненты
- **Framer Motion** анимации
- **Node.js 20.19.4** (совместимая версия)

### 🎨 Цветовая палитра

```css
--primary: #00CEAF        /* Бирюзовый */
--primary-foreground: #ffffff

--accent: #FFDF80         /* Жёлтый */
--accent-foreground: #000000
```

### 📝 Типографика

- **Arimo** - заголовки (64px, 24px)
- **Heebo** - основной текст (20px)

### 🛠️ Готовые компоненты

- `AnimatedButton` - кнопка с Framer Motion анимацией
- shadcn/ui кнопки с кастомными цветами
- Цветовые блоки для демонстрации
- Типографические образцы

### 📦 Готовые классы

```css
/* Цвета */
bg-primary text-primary-foreground
bg-accent text-accent-foreground

/* Шрифты */
font-arimo    /* заголовки */
font-heebo    /* основной текст */

/* shadcn/ui работает автоматически */
```

## 🚀 Запуск

```bash
npm run dev
```

Откройте http://localhost:3000 для просмотра.

## 📁 Структура

```
next_qa/
├── app/
│   ├── globals.css      ← цвета и шрифты
│   ├── layout.tsx       ← Google Fonts
│   └── page.tsx         ← демо страница
├── components/
│   ├── ui/              ← shadcn/ui компоненты
│   └── animated-button.tsx ← кастомные компоненты
└── lib/
    └── utils.ts         ← shadcn/ui утилиты
```
