# Proyecto-Cilsa-Tienda-Online-


# 📚 Documentación del Proyecto - Tienda Online Mundo Color

## 👥 Integrantes 

- Rocio Diogenes
- Milagros Curuchet
- Leila Galiano
- Franco Ramirez


## 📁 Estructura del Proyecto

```bash
/libreria-online
│
├── index.html
├── Libreria.html
├── Cotillon.html
├── contacto.html
│
├── /css
│   ├── Inicio.css
│   ├── categoria1.css
│   ├── categoria2.css
│   └── contacto.css
│
├── /Imagenes
│   ├── imagen1.jpg
│   ├── imagen2.jpg
│   ├── imagen3.jpg
│   └── banner.jpg
│
└── /js
    └── Index.js
```
 ## 📖 Introducción


Nuestro proyecto consiste en el desarrollo de una página web responsiva sobre una tienda online llamada Mundo Color, orientada a la venta de artículos de librería y cotillón.

El objetivo es permitir que los usuarios puedan navegar por distintas categorías, visualizar productos y comunicarse con la tienda desde cualquier dispositivo.



## 🎯 Objetivos del Proyecto

- Crear un sitio web adaptable a celulares, tablets y computadoras.
- Utilizar Bootstrap para facilitar el diseño responsivo.
- Organizar productos por categorías.
- Implementar formularios y modales.
- Aplicar control de versiones con Git.

## 🛠 Tecnologías Utilizadas


HTML

Se utilizó para crear la estructura de las páginas.

CSS

Se utilizó para personalizar estilos y mejorar el diseño visual.

Bootstrap

Bootstrap permitió desarrollar un diseño responsivo utilizando componentes ya preparados.

Git

Git se utilizó para guardar cambios y trabajar en equipo.


## 👥 Metodología de Trabajo


Para la organización y desarrollo del proyecto se utilizó Git junto con GitHub como sistema de control de versiones.

Se creó un repositorio compartido donde el trabajo fue dividido en distintas ramas, permitiendo guardar versiones del proyecto, registrar cambios mediante commits y facilitar el desarrollo colaborativo entre los integrantes del equipo.

Cada desarrollador trabajó sobre una rama específica según la funcionalidad asignada, evitando conflictos durante el desarrollo.

Una vez finalizadas las tareas, los cambios fueron integrados a la rama principal main mediante procesos de merge.


## 🌿 Estructura de Ramas

Rama principal
main

Contiene la versión final integrada del proyecto.

Ramas secundarias

- inicio
- categoria1
- categoria2
- contacto

Cada integrante trabajó en su rama correspondiente y posteriormente los cambios fueron integrados mediante merge.

## 🏠 Estructura del Sitio

El proyecto cuenta con 4 páginas principales:

### 1. Página principal – Inicio.html

Contiene la estructura principal del sitio web:
Barra de navegación.

Contiene:

 - Nombre de la tienda
 - Enlaces a las distintas secciones
- Carrusel principal
- Incluye 2 banners. 

Sección de categorías

Se divide en:


- Librería
- Cotillón

Cada categoría dirige a su respectiva página.

Carrusel de productos destacados

Muestra productos seleccionados mediante cards con imágenes y con botón de agregar al carrito y modal donde muestra la descripción del producto.
Pie de página
Contiene descripción del copyright, información general y datos de contacto.


### 2. Categorías de Productos - categoria1.html y categoria2.html

Muestra la mercadería más organizada.

categoria1.html 

Cuenta con un banner correspondiente a la seccion de libreria 
En el cuerpo de la página se visualizan los productos mediante cards de bootstrap que contiene la imagen del producto y botones de “ver producto” donde se abre un modal con la información detallada del producto. 
También hay un segundo botón de “Agregar al carrito” actualmente no funcional utilizado únicamente con fines demostrativos.

categoria2.html

Página correspondiente a productos de cotillón.
Mantiene la misma estructura y funcionamiento que categoria1.html.


### 4. Página de Contacto – contacto.html

Incluye un formulario para consultas.
Contiene un formulario de pedidos y contacto.

Características:
Campos con validaciones.
Control de datos obligatorios
Validación de formato de ingreso
El objetivo es mejorar la interacción del usuario y evitar envíos incorrectos.

## 📱 Diseño Responsive

El proyecto fue desarrollado utilizando Bootstrap 5 y media queries en CSS para garantizar compatibilidad con:
- Computadoras
- Tablets
- Dispositivos móviles
- Bootstrap utiliza un sistema de grillas con filas y columnas.

Ejemplo:
<div class="row">
<div class="col-md-4"></div>
</div>
Esto hace que el contenido se acomode correctamente en diferentes dispositivos.

Funcionalidades Implementadas
✔ Navbar responsiva. 
✔ Carrusel de imágenes. 
✔ Cards de productos. 
✔ Modal de detalles.
✔ Formulario de contacto.
 ✔ Diseño adaptable. 
✔ Efectos hover en tarjetas.


## Problemas encontrados


Durante el desarrollo encontramos algunos problemas:

- Adaptar imágenes a distintos tamaños.

- Organizar correctamente las secciones.

- Hacer que el diseño se vea bien en celular.

- Estos problemas se resolvieron utilizando Bootstrap y CSS.

## Conclusión

Este proyecto permitió aplicar conocimientos de desarrollo frontend, diseño responsive y trabajo colaborativo mediante Git y GitHub.

Además, se implementaron componentes interactivos utilizando Bootstrap y JavaScript, logrando una tienda online visualmente organizada y funcional.
