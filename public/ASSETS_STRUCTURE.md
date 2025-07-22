# 📁 Структура статических ресурсов

## 🎨 Организация файлов в `public/`

```
public/
├── images/                 ← Основные изображения
│   ├── hero/              ← Картинки для главной секции
│   │   ├── hero-bg.webp   ← Фоновое изображение
│   │   ├── hero-image.webp ← Основная картинка
│   │   └── hero-pattern.webp ← Декоративные элементы
│   │
│   ├── about/             ← Картинки для секции "О нас"
│   │   ├── team-photo.webp
│   │   ├── office.webp
│   │   └── awards.webp
│   │
│   ├── services/          ← Картинки для секции услуг
│   │   ├── service-1.webp
│   │   ├── service-2.webp
│   │   └── process-diagram.webp
│   │
│   ├── contact/           ← Картинки для контактов
│   │   └── map.webp
│   │
│   └── common/            ← Общие изображения
│       ├── backgrounds/
│       ├── patterns/
│       └── textures/
│
├── icons/                 ← SVG иконки
│   ├── ui/               ← Иконки интерфейса
│   │   ├── arrow-right.svg
│   │   ├── check.svg
│   │   ├── close.svg
│   │   └── menu.svg
│   │
│   ├── social/           ← Социальные сети
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   ├── twitter.svg
│   │   └── linkedin.svg
│   │
│   ├── services/         ← Иконки услуг
│   │   ├── web-dev.svg
│   │   ├── mobile-dev.svg
│   │   └── design.svg
│   │
│   └── features/         ← Иконки особенностей
│       ├── fast.svg
│       ├── secure.svg
│       └── support.svg
│
├── logos/                ← Логотипы
│   ├── logo.svg          ← Основной логотип
│   ├── logo-white.svg    ← Белая версия
│   ├── logo-dark.svg     ← Тёмная версия
│   └── favicon.ico       ← Фавикон
│
└── documents/            ← Документы
    ├── brochure.pdf
    └── presentation.pdf
```

## 🛠️ Правила именования

### Изображения (.webp)

- `hero-background.webp` - фоновые изображения
- `service-card-1.webp` - картинки для карточек
- `team-john-doe.webp` - фото команды
- `office-exterior.webp` - фото офиса

### Иконки (.svg)

- `icon-arrow-right.svg` - UI иконки
- `social-facebook.svg` - социальные сети
- `feature-security.svg` - иконки особенностей

### Логотипы

- `logo.svg` - основной
- `logo-white.svg` - для тёмного фона
- `logo-monochrome.svg` - одноцветная версия

## 📝 Использование в компонентах

### Изображения

```tsx
import Image from "next/image"

// Картинка для hero секции
<Image
  src="/images/hero/hero-background.webp"
  alt="Hero background"
  width={1920}
  height={1080}
  priority
/>

// Фото команды
<Image
  src="/images/about/team-photo.webp"
  alt="Our team"
  width={800}
  height={600}
/>
```

### SVG иконки

```tsx
// Как компонент
import ArrowIcon from "/icons/ui/arrow-right.svg"
<ArrowIcon className="w-6 h-6" />

// Как изображение
<Image
  src="/icons/social/facebook.svg"
  alt="Facebook"
  width={24}
  height={24}
/>

// Инлайн в JSX (для маленьких иконок)
<svg className="w-4 h-4">
  <use href="/icons/ui/check.svg#icon" />
</svg>
```

### Логотипы

```tsx
// В навигации
<Image
  src="/logos/logo.svg"
  alt="Company logo"
  width={120}
  height={40}
/>

// Адаптивный логотип
<Image
  src="/logos/logo-white.svg" // для тёмной темы
  alt="Logo"
  width={120}
  height={40}
  className="dark:hidden"
/>
```

## ⚡ Оптимизация

### WebP изображения

- Размеры: 1920x1080 (hero), 800x600 (контент), 400x300 (карточки)
- Качество: 80-85% для фото, 90-95% для графики
- Responsive: создавать несколько размеров для разных экранов

### SVG иконки

- Оптимизировать через SVGO
- Удалять ненужные атрибуты
- Группировать похожие иконки в спрайты

### Ленивая загрузка

```tsx
// Для изображений вне viewport
<Image
  src="/images/about/office.webp"
  alt="Office"
  loading="lazy"
  width={600}
  height={400}
/>
```

## 🔗 Компоненты для ресурсов

### Создание переиспользуемых компонентов

```tsx
// components/ui/app-image.tsx
interface AppImageProps {
  section: "hero" | "about" | "services" | "contact";
  name: string;
  alt: string;
  width: number;
  height: number;
}

export function AppImage({ section, name, ...props }: AppImageProps) {
  return <Image src={`/images/${section}/${name}.webp`} {...props} />;
}

// Использование
<AppImage
  section="hero"
  name="background"
  alt="Hero background"
  width={1920}
  height={1080}
/>;
```
