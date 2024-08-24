export interface IEmail {
    from: string;
    //destinatario 
    recipient: string;
    subject: string;
    body: string;
    data?: [{
        index: string,
        value: string
    }];
    office: string;
    attachments?: [{
        filename: string,
        path: string,

    }]
    date?: string
}

export interface IEmailConfig {
    SMTPServer: string;
    port: number;
    host?: string;
    user?: string;
    path?: string;
    password?: string;
    defaultEmail?: string;
    defaultName?: string;
    ignoreTLS?: boolean;
    secure?: boolean;
    requireTLS?: boolean;
}

export interface ICompany {//institucion 📉
    id?: number; // ID
    name?: string; // nombre de la empresa
    type?: string; // Tipo de empresa
    industry?: string; // industria?
    employees?: number; // cant trabajadores
    website?: string; // sitio web de la empresa
    founded?: Date; // fecha de fundacion de la empresa
    description?: string; // Description
    logo?: string; // Logo URL
    socialMedia?: {// All social media
        x?: string; //twitter
        linkedin?: string;
        facebook?: string;
        // si tiene mas redes , agregamos nomas 🧏‍♂️ 🧯
    };
    primaryContact?: {
        name?: string;
        email?: string;
        phone?: string;
    };
    address?: {
        street?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
    };

}
