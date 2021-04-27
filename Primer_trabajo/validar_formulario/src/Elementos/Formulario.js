import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
    borde: "#0075ff",
    error: "#bb2929",
    exito: "#1ed12d",
};

const Formulario = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 1rem;
    min-height: 4rem;
    cursor: pointer;

    ${(props) =>
        props.valido === "false" &&
        css`
            color: ${colores.error};
        `}
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 0.3rem;
    height: 4.5rem;
    font-size: 1.6rem;
    line-height: 4.5rem;
    padding: 0 4rem 0 1rem;
    transition: 0.3s ease all;
    border: 0.3rem solid transparent;

    &:focus {
        border: 0.3rem solid ${colores.borde};
        outline: none;
        box-shadow: 0.3rem 0 3rem rgba(163, 163, 163, 0.4);
    }

    ${(props) =>
        props.valido === "true" &&
        css`
            border: 3px solid transparent;
        `}

    ${(props) =>
        props.valido === "false" &&
        css`
            border: 3px solid ${colores.error} !important;
        `}
`;

const Error = styled.p`
    font-size: 1.2rem;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;

    ${(props) =>
        props.valido === "true" &&
        css`
            display: none;
        `}

    ${(props) =>
        props.valido === "false" &&
        css`
            display: block;
        `}
`;

//Darle estilo al componente que se está importando de otro paquete(FontAwesome)

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 1rem; //Desplazandolo hacía la derecha
    bottom: 1.4rem; //Desplazando de abajo hacía arriba
    z-index: 100; //Para que quede por arriba del input
    font-size: 1.6rem;
    opacity: 0;

    ${(props) =>
        props.valido === "false" &&
        css`
            opacity: 1;
            color: ${colores.error};
        `}

    ${(props) =>
        props.valido === "true" &&
        css`
            opacity: 1;
            color: ${colores.exito};
        `}
`;

const ContTerminos = styled.div`
    grid-column: span 2; //Le estamos diciendo que se expanda 2 columnas

    input {
        margin-right: 1rem;
    }

    @media (max-width: 900px) {
        grid-column: span 1;
    }
`;

const ContBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;

    @media (max-width: 900px) {
        grid-column: span 1;
    }
`;

const Boton = styled.button`
    height: 4.7rem;
    line-height: 4.5rem;
    width: 30%;
    background: #000;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.1s ease all;
    text-transform: uppercase;

    &:hover {
        box-shadow: 3px 0 3rem rgba(163, 163, 163, 0.1);
    }
`;

const MensajeExito = styled.p`
    font-size: 1.4rem;
    color: ${colores.exito};
`;

const MensajeError = styled.div`
    height: 4.5rem;
    line-height: 4.5rem;
    background: ${colores.error};
    padding: 0 15px;
    border-radius: 0.3rem;
    grid-column: span 2;

    p {
        margin: 0;
        font-size: 1.4rem;
    }

    b {
        margin-left: 1rem;
    }
`;

export {
    Formulario,
    Label,
    GrupoInput,
    Input,
    Error,
    IconoValidacion,
    ContTerminos,
    ContBotonCentrado,
    Boton,
    MensajeExito,
    MensajeError,
};
