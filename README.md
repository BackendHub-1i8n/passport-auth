# Curso de Backend con Node.js: Autenticación con Passport.js y JWT

- La idea del proyecto es [Blog de Usuarios con Autenticación](./src/IDEA.md)

- las dependencias de proyecto son:

| Dependencia            | Versión |
| ---------------------- | ------- |
| cors                   | ^2.8.5  |
| dotenv                 | ^16.3.1 |
| eslint                 | ^8.43.0 |
| eslint-config-prettier | ^8.8.0  |
| eslint-plugin-prettier | ^4.2.1  |
| express                | ^4.18.2 |
| joi                    | ^17.9.2 |
| jsonwebtoken           | ^9.0.1  |
| knex                   | ^2.5.1  |
| morgan                 | ^1.10.0 |
| mysql                  | ^2.18.1 |
| mysql2                 | ^3.6.0  |
| nodemon                | ^2.0.22 |
| prettier               | ^2.8.8  |
| sequelize              | ^6.32.1 |

# Autenticacion vs autorizacion:

## Autenticacion:

-

## Autorixacion:

- hace referencia a como gestionar cietas rutas (endpoints) de una aplicacion

## ¿Qué es un JWT?

- `JWT`, significa `Json Web Token`, define un formato compacto y autonomo para transmitir de forma segura la informacion, se utiliza en autenticacion y autorizacion en aplicaciones web y servicios.
- el JWT esta compuetos por 3 partes

  1. **Encabezado (Header)**: El encabezado identifica el tipo de token y el algoritmo de firma utilizado para firmar el token. Suele verse algo como esto:

  ```json
  {
    "alg": "HS256",
    "typ": "JWT"
  }
  ```

  - "alg": Es el algoritmo de firma utilizado (por ejemplo, "HS256" para HMAC SHA-256).
  - "typ": Es el tipo de token, que es JWT en este caso.

  2. **Cuerpo (Payload)**: El cuerpo del JWT contiene los datos que se desean transmitir. Puede incluir información como el nombre de usuario, roles, permisos u otra información relacionada con la autenticación y la autorización. Un ejemplo de cuerpo podría ser:

  ```json
  {
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true
  }
  ```

  - "sub": Es el sujeto del token, que generalmente es un identificador único del usuario.
  - "name": El nombre del usuario.
  - "admin": Un indicador que indica si el usuario es un administrador.

  3. **Firma (Signature)**: La firma se crea combinando el encabezado y el cuerpo del JWT con una clave secreta (en el caso de tokens firmados) utilizando el algoritmo especificado en el encabezado. La firma se utiliza para verificar la integridad del token y garantizar que no se haya modificado durante la transmisión.

  La firma se agrega como una tercera parte del token, separada por un punto ("."). Por ejemplo:

  ```
  xxxxx.yyyyy.zzzzz
  ```

  - "xxxxx": Encabezado codificado en Base64.
  - "yyyyy": Cuerpo codificado en Base64.
  - "zzzzz": Firma generada con la clave secreta.

- Los JWT son utilizados en aplicaciones web para autenticar a los usuarios después de iniciar sesión y para transmitir información de manera segura entre el cliente y el servidor. Son particularmente útiles en sistemas de autenticación de una sola vez (Single Sign-On, SSO) y en la autenticación de servicios web (API). Debido a su formato compacto y autónomo, los JWT son fáciles de transmitir y utilizar en diversas plataformas y tecnologías.
