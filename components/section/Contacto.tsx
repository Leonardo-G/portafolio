import React, { ChangeEvent, FC, useContext, useEffect, useState } from 'react'

import { useInView } from 'react-intersection-observer';

import { TituloSection } from '../UI/TituloSection'
import { UIContext } from '../../context/UI/UIContext';

import styles from "../../styles/section/Contacto.module.css";
import { validForm, sendEmail } from '../../utils/sendEmail';
import { Spinner } from '../UI/Spinner';

export const Contacto: FC = () => {

    const { changeCampoNav } = useContext(UIContext);
    const [inputsValues, setInputsValues] = useState({
        nombre: "",
        mensaje: "",
        correo: ""
    })
    const [msgError, setMsgError] = useState("");
    const [loader, setLoader] = useState(false);
    const [isSend, setIsSend] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if ( inView ) {
            changeCampoNav( "contacto" )
        }
        
        //eslint-disable-next-line
    }, [inView])

    const handleChangeValues = ( e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setInputsValues({
            ...inputsValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSendEmail = async () => {
        const isValid = validForm( inputsValues );
        if ( isValid ) return setMsgError( isValid );
        
        setLoader( true );

        const isSendEmail = await sendEmail( inputsValues );
        console.log(isSendEmail)
        if ( isSendEmail !== "OK" ) {
            setLoader( false );
            setMsgError( isSendEmail );
            return ;
        } 
        
        setLoader( false );
        setMsgError( "" );
        setIsSend( true );
    }

    return (
        <section ref={ ref } className={ styles.contacto } id="contacto">
            
            <div className={ styles.contacto__campos }>
                <TituloSection title='Contacto'/>
            </div>

            <div className={ styles.contacto__campos }>
                <input 
                    className={ styles['contacto__campos--input'] }
                    name="nombre" 
                    type="text" 
                    placeholder='Nombre...'
                    onChange={ handleChangeValues }    
                />
                <input 
                    className={ styles['contacto__campos--input'] } 
                    type="text" 
                    placeholder='Correo...'
                    name="correo" 
                    onChange={ handleChangeValues } 
                />
                <textarea 
                    className={ styles['contacto__campos--textarea'] } 
                    placeholder='Mensaje...'
                    name="mensaje"
                    onChange={ handleChangeValues }
                />
                {
                    msgError !== "" &&
                    <p className={ styles.contacto__error }>{ msgError }</p>
                }
                {
                    isSend && 
                    <p className={ styles.contacto_succes }> Enviado!.👍🏼 </p>
                }
                <button 
                    onClick={ handleSendEmail }
                    className={ styles.contacto__button }
                >
                    {
                        loader 
                        ?   <Spinner />
                        :   "Enviar"
                    }
                </button>
                
            </div>
        </section>
    )
}
