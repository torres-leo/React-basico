import React from "react";
import {
    Input,
    Label,
    GrupoInput,
    Error,
    IconoValidacion,
} from "./../Elementos/Formulario";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ComponenteInput = ({
    tipo,
    label,
    placeholder,
    name,
    leyendaError,
    expresionRegular,
    estado,
    cambiarEstado,
    funcion,
}) => {
    const onChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value });
    };

    const validacion = () => {
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: "true" });
            } else {
                cambiarEstado({ ...estado, valido: "false" });
            }
        }
        if (funcion) {
            funcion();
        }
    };
    return (
        <div>
            <Label htmlfor={name} valido={estado.valido}>
                {" "}
                {label}{" "}
            </Label>
            <GrupoInput>
                <Input
                    id={name}
                    type={tipo}
                    placeholder={placeholder}
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    OnBlur={validacion}
                    valido={estado.valido}></Input>
                <IconoValidacion
                    icon={estado.valido === "true" ? faCheckCircle : faTimesCircle}
                    valido={estado.valido}></IconoValidacion>
            </GrupoInput>

            <Error valido={estado.valido}>{leyendaError}</Error>
        </div>
    );
};

export default ComponenteInput;
