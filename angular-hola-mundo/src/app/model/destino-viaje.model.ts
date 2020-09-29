export class DestinoViaje{

    private slected: boolean;
    public servicios: string[];
    id: any;
    constructor(public nombre: string, public imageUrl: string, public votes: number = 0){
        this.servicios = ['pileta', 'desallunos'];
    }
    isSelected(): boolean {
        return this.slected;
    }

    setSelected(selected: boolean): void {
        this.slected = selected;
    }
    voteUp(): void {
        this.votes++;
    }
    voteDown(): void {
        this.votes--;
    }
}
