export class Transactions{
    constructor(
        public transactionId:number,
        public fromAccount:string,
        public toAccount:string,
        public transactionAmount:number,
        public transactionDate:string
    ){}
}