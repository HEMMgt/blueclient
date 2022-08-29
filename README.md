# Blue Medical Cliente
Creado: Hugo Morán
## Descripción
Realizar un cliente para el consumo de los WebServices realizados en el API REST denominado bluemedical

## Funconamiento API

Pequeño video muestra el diseño y las vistas del cliente poco más de 1 minuto
[Ver Video](https://drive.google.com/file/d/1vJJMDtJXL03Yo-Crtp1m6JIQAKvbo5vr/view?usp=sharing) 

## Instalación

El proyecto debe ser descargado o clonado en el presente respositorio [Github](https://github.com/HEMMgt/blueclient.git).

Agregando dentro de su git local remotamente.

```sh
git remote add origin https://github.com/HEMMgt/blueclient.git
git branch -M main
git pull -u origin main
```

Debe tener instalado nodejs y npm ejecutar el siguiente comando.

```sh
npm install
```



Inicializar los servicios.

```sh
npm run dev
```
Abrir su navegador
```sh
http://127.0.0.1:5173/
```
## Plugins

Adicional a las dependencias ya definidas.

| Plugin | Razon |
| ------ | ------ |
| axios | Conexion httprequest para conexion API |
| react-router-dom | Manejo de rutas|
| tailwind | Manejo de estilos en proyecto|


## License

MIT