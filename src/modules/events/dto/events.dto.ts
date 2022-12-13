interface EventsDTO {
    id?: string;
    consumption: number;
    flowmeter_id: string;
    created_at?: Date;

}

interface QueryParamDTO {
    startDate: string;
    endDate: string;
    flowmeter_id: string;
}

export { EventsDTO, QueryParamDTO }