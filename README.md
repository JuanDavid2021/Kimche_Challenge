# Desafío para Software Engineers

Nombre postulante:           Juan David Rodriguez Lopez

Link a la app en producción: https://kimche-challenge-eight.vercel.app/

## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![1](https://user-images.githubusercontent.com/87767241/169153882-21f7df4b-b5ef-4546-91a2-4a4695dee68b.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.


## Cómo mejorar la carga de una base de datos Mysql

1.Determinar la estructura de la base de datos y mejorar las consultas:

-Si se usa select hay que evitar el uso de "*" y se debe indicar los campos indispensables de lo que se necesita.

-Evitar el uso de Group By, order By y having.

-Utilizar el comando explain para saber como se está realizando la consulta y saber el rendimiento / velocidad para saber donde se pueden corregir las fallas.

-Revisar que los tipos de datos sean los correctos en el diseño de la base de datos, por ejemplo si se va a guardar un número de identificación es más conveniente usar char que varchar ya que este último podría tardar más tiempo en la lectura del dato.

-Evitar campos null ya que requieren más espacio de almacenamiento.

-Se se tiene claridad de los resultados a obtener, limitar la consulta (usando LIMIT).

-Crear un índice para las consultas, con esto se aumenta la velocidad y se optimizan recursos en memoria.

-Si hay tablas muy grandes se pueden dividir en tablas más pequeñas, especialmente si hay datos de consultas que no son tan recurrentes en las consultas.

3.Verificar las variables del sistema de cache, asignando el tamaño adecuado para que se puedan almacenar las consultas de manera eficiente ya que si se tienen tamaños muy grandes se puede ver reflejado en una carga de datos más lenta.


4. Elegir un motor de almacenamiento adecuado: si es una aplicación interactiva donde los estudiantes todos los días están haciendo sus actividades sugeriría InnoDB pero si es más informativa donde se usa para consultar información principalmente, optaría por MyISAM.


5. Verificar el servidor y aumentar la memoria, también se pueden utilizar varios discos, los cuales se pueden leer en paralelo y aumentar la velocidad de lectura de los datos.


