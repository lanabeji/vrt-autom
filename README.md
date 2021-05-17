### Cypress + ResembleJS

Para ejecutar el código es necesario seguir los siguientes pasos:
1. Tener instalado Cypress, para instalarlo se puede usar el comando: _npm install -g cypress_
2. Abrir cypress, por medio del comando: _cypress open_
3. Seleccionar este folder por medio de la interfaz de cypress
4. Después de seleccionar el folder se le mostrará un archivo llamado: color_palette.spec.js
5. Debe oprimir este archivo para que comience la ejecución de la prueba, se abrirá un navegador que irá mostrando los eventos que se generan.

En este repositorio se hacen 3 pruebas para comparar las imágenes generadas:
1. Pasar de una paleta de color limpia, a generar una nueva.
2. Generar una paleta de color y luego generar otra aleatoriamente.
3. Generar una paleta de color y luego limpiarla.
Las pruebas toman screenshots luego de oprimir algún botón y los guarda en la carpeta screenshots.

Después, para hacer las pruebas de regresión visual, es necesario ejecutar el comando: _node index.js_. Esto va a comparar las imágenes de las pruebas y va a generar un reporte HTML mostrando ambas imágenes, la comparación y el porcentaje de diferencia entre estas.