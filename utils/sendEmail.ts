interface IForm {
    nombre: string;
    correo: string;
    mensaje: string;
}

export const validForm = ( form: IForm ): string | null => {
    const regExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

    if ( form.nombre.length < 2 ) return "El nombre es requerido";

    if ( !regExp.test( form.correo ) ) return "Tiene que ser un correo válido";
    
    if ( form.mensaje.length < 2 ) return "El mensaje es requerido";

    return null
}

export const sendEmail = async ( form: IForm ): Promise<string> => {

    try {
        const data = {
            service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_USER_ID,
            template_params: {
                'nombre': form.nombre,
                "correo": form.correo,
                "mensaje": form.mensaje
            }
        };
        
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        if ( !response.ok ) {
            throw new Error("Error al enviar, intentelo de nuevo más tarde");
        }

        return "OK";

    } catch (error) {
        return error as string;
    }
}