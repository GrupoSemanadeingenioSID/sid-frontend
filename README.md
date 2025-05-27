<h1 align="center">SID WEBSITE</h1>

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Badge](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Vamos a empezar

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local.

### 1. Clona el repositorio

```bash
git clone https://github.com/GrupoSemanadeingenioSID/sid-frontend.git
```

### 2. Entra a la carpeta del proyecto o abre la carpeta con Visual Studio Code

```bash
cd sid-frontend
```

### 3. Instala las dependencias

```bash
npm install
```

### 4. Ejecuta el proyecto en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: [http://localhost:3000](http://localhost:3000)

## Configurar commit template (estándar de commits)

Para asegurar un formato consistente en los mensajes de commit, ejecuta este comando dentro del proyecto:

```bash
git config commit.template "./.gitmessage.txt"
```

Luego cuando ya tengas los cambios añadidos usar:

```bash
git commit
```

Git abrirá el editor que tengas por defecto (como VS Code o Vim) con el template listo.

Escribe tu commit en la línea superior, por ejemplo:
```bash
CREATE: componenente para los cursos
```
Presiona Esc para asegurarte de estar en el modo de comandos de Vim.

Escribe :wq y presiona Enter para guardar los cambios y salir del editor.

Si deseas salir sin guardar, usa :q! y presiona Enter.

## Informacion de estilos
### Paleta de colores
![image](https://github.com/user-attachments/assets/ca8c8c43-52ab-4457-8d71-78e369861fe3)
![image](https://github.com/user-attachments/assets/877b131a-6de2-48ea-895d-2cd3510a7eb9)


### Tipografías
### Nunito  
Consultar tipografía en Google Fonts: [Nunito](https://fonts.google.com/specimen/Nunito)
  
### Lilita One  
Consultar tipografía en Google Fonts: [Lilita One](https://fonts.google.com/specimen/Lilita+One?query=lilit)

### Diseño responsivo

El proyecto utiliza las utilidades de Tailwind CSS para lograr un diseño completamente responsivo. Las principales breakpoints usadas son:

- **Celular:**  
  `min-width: 380px` (por defecto, sin clases de breakpoint)  
  Ejemplo: `className="p-4"`

- **Tablet:**  
  `md` (`min-width: 768px`)  
  Ejemplo: `className="md:p-8"`

- **Escritorio:**  
  `lg` (`min-width: 1024px`)  
  Ejemplo: `className="lg:p-12"`

- **Pantallas grandes:**  
  `xl` (`min-width: 1280px`)  
  `2xl` (`min-width: 1536px`)  
  Ejemplo: `className="2xl:px-40"`

## 🚀 Iconos con Lucide

Este proyecto utiliza [Lucide](https://lucide.dev/) como librería de iconos en React. Lucide es una colección moderna y ligera de iconos SVG open source.

### Instalación

La libreria ya esta instalada en la rama principal, si trabajas en una rama distinta debes actualizar tu rama y ejecutar el comando: 

```bash
npm install
```

### Cómo usarlo en la aplicación

```tsx
import { Timer } from 'lucide-react';

function App() {
  return (
    <div>
      <h1>Ejemplo de Iconos con Lucide</h1>
      <Timer className="w-4 h-4 text-lapiz-lazuli mr-1 lg:w-5 lg:h-5" />
    </div>
  );
}
```
