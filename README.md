
![Logo](https://myurbanscoot.com/wp-content/uploads/2023/05/cropped-logoH-01-768x169.png)


# 💻 Prueba técnica MyUrbanScoot

En esta prueba, debía levantar un proyecto con el CLI de Medusa.js (npx create-medusa-app@latest --with-nextjs-starter), para hacer un eCommerce. 




## 🛠 Tecnologías

- TypeScript
- Next.JS (React)
- Medusa.JS (Node)
- PostgreSQL

## 🚀 Levantar el proyecto

Para levantar tanto el front, como el back, hay que realizar los siguientes comandos:


Lo primero, clonarnos el repositorio. 

```bash
  git clone https://github.com/Iny4facelol/myurbanscoot.git
```


Lo segundo, el backend. Entramos en la carpeta, y utilizamos npm install, para instalar las dependencias necesarias del proyecto, que se encuentran en el package.json. Después npm run dev que es el script de medusa: "medusa develop".

```bash
  cd my-medusa-store-1
  npm install
  npm run dev
```

Por último, el front. Como en el back, necesitamos las dependencias. Posteriormente, volvemos a escribir npm run dev, que ejecutará el script de next.js: "next dev --turbopack -p 8000"

```bash
  cd ..
  cd my-medusa-store-1-storefront
  npm install
  npm run dev
```

> [!IMPORTANT]
Posteriormente, al levantar el backend en el puerto localhost:9000, pedirá un acceso de administrador. Las credenciales son: 

- User: admin@medusa-test.com 
- Password: 123456

## 🧑 Autor

### Alejandro Méndez Góngora. 





## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.alexmendez.tech)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alejandro-mendez-gongora/)
[![youtube](https://img.shields.io/badge/youtube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=YYKAyAK-GWs&ab_channel=alexmendeztech)


