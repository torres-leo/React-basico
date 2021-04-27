import React, { useState } from "react";
// import style from "styled-components";
import {
    Formulario,
    Label,
    ContTerminos,
    ContBotonCentrado,
    Boton,
    MensajeExito,
    MensajeError,
} from "./Elementos/Formulario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./Componentes/Input";

const App = () => {
    const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
    const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
    const [password, cambiarPassword] = useState({ campo: "", valido: null });
    const [password2, cambiarPassword2] = useState({ campo: "", valido: null });
    const [correo, cambiarCorreo] = useState({ campo: "", valido: null });
    const [telefono, cambiarTelefono] = useState({ campo: "", valido: null });
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    };

    const validarPassword2 = () => {
        if (password.campo.length > 0) {
            if (password.campo !== password2.campo) {
                cambiarPassword2((estadoAnterior) => {
                    return { ...estadoAnterior, valido: "false" };
                });
            } else {
                cambiarPassword2((estadoAnterior) => {
                    return { ...estadoAnterior, valido: "true" };
                });
            }
        }
    };

    const onChangeTerminos = (e) => {
        cambiarTerminos(e.target.checked);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (
            usuario.valido === "true" &&
            nombre.valido === "true" &&
            password.valido === "true" &&
            password2.valido === "true" &&
            correo.valido === "true" &&
            telefono.valido === "true" &&
            terminos
        ) {
            cambiarFormularioValido(true);
            cambiarUsuario({ campo: "", valido: "" });
            cambiarNombre({ campo: "", valido: null });
            cambiarPassword({ campo: "", valido: null });
            cambiarPassword2({ campo: "", valido: "null" });
            cambiarCorreo({ campo: "", valido: null });
            cambiarTelefono({ campo: "", valido: null });
        } else {
            cambiarFormularioValido(false);
        }
    };

    return (
        <main>
            <Formulario action="" onSubmit={onSubmit}>
                <Input
                    estado={usuario}
                    cambiarEstado={cambiarUsuario}
                    tipo="texto"
                    label="Usuario"
                    placeholder="Nombre de usuario"
                    name="usuario"
                    leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener números, letras y guión bajo(_)"
                    expresionRegular={expresiones.usuario}></Input>

                <Input
                    estado={nombre}
                    cambiarEstado={cambiarNombre}
                    tipo="text"
                    label="Nombre"
                    placeholder="Escribe tu nombre"
                    name="nombre"
                    leyendaError="El nombre solo puede contener letras y espacions"
                    expresionRegular={expresiones.nombre}></Input>

                <Input
                    estado={password}
                    cambiarEstado={cambiarPassword}
                    tipo="password"
                    label="Contraseña"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    leyendaError="La contraseña tiene que ser de 4 a 12 dígitos"
                    expresionRegular={expresiones.password}></Input>

                <Input
                    estado={password2}
                    cambiarEstado={cambiarPassword2}
                    tipo="password"
                    label="Confirma tu contraseña"
                    placeholder="Ingresa tu contraseña nuevamente"
                    name="password2"
                    leyendaError="Ambas contraseñas deben ser iguales"
                    funcion={validarPassword2}></Input>

                <Input
                    estado={correo}
                    cambiarEstado={cambiarCorreo}
                    tipo="email"
                    label="Correo Eléctronico"
                    placeholder="correo@correo.com"
                    name="correo"
                    leyendaError="El correo solo puede contener letras, números, puntos, guiones y guión bajo"
                    expresionRegular={expresiones.correo}></Input>

                <Input
                    estado={telefono}
                    cambiarEstado={cambiarTelefono}
                    tipo="text"
                    label="Teléfono"
                    placeholder="Escribe tu número de teléfono"
                    name="telefono"
                    leyendaError="El telefono solo puede contener numeros y el maximo son 14 dígitos"
                    expresionRegular={expresiones.telefono}></Input>

                {/* --------------- mensaje de terminos ----------------- */}
                <ContTerminos>
                    <Label>
                        <input
                            type="checkbox"
                            name="terminos"
                            id="terminos"
                            checked={terminos}
                            onChange={onChangeTerminos}></input>
                        Acepto los Términos y condiciones
                    </Label>
                </ContTerminos>

                {/* ------------ Error en formulario -------------- */}
                {formularioValido === false && (
                    <MensajeError>
                        <p>
                            <FontAwesomeIcon
                                icon={faExclamationTriangle}></FontAwesomeIcon>
                            <b>Error:</b> Por favor rellena el formulario correctamente
                        </p>
                    </MensajeError>
                )}

                {/* ----------------- Boton Enviar ------------- */}
                <ContBotonCentrado>
                    <Boton type="submit">Enviar</Boton>
                    {formularioValido === true && (
                        <MensajeExito>¡Formulario enviado exitosamente!</MensajeExito>
                    )}
                </ContBotonCentrado>
            </Formulario>
        </main>
    );
};

export default App;
