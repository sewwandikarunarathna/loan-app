export class Loanrequest {
    id : string;
    userId : {
        id?: string;
        name?: string;
    };
    loanId : {
        type?: string;
        amount?: number;
        interest?: string;
        duration?: string;
    };
    status?: boolean;
   
    
}

