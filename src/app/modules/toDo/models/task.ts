export interface iTask {
    key: string,
    completed: boolean,
    createdAt: number,
    title: string
}

export class Task implements iTask{
    private currentTime = new Date();
    key: string;
    completed: boolean = false;
    createdAt: number;
    title: string;

    constructor(title: string){
        this.title = title;
        this.createdAt = this.currentTime.getTime();
        this.key = this.createKay();
    }

    private createKay() :string{
        return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    }
}