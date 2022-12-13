interface AddressDTO {
    cep: number;
    bairro: string;
    rua: string;
    numero: number;
    created_at?: Date;
    update_at?: Date;
    id?: string;

}

export { AddressDTO }
