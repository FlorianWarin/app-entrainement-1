import Error from "next/error";

// 1. On définit ce qu'on veut ajouter comme données dynamiques (notre P)
type OverrideProps = {
    message: string,
};

// 2. On crée notre classe en passant PingProps dans le slot <P>
// La classe aura accès à : PingProps & ErrorProps
export default class OverrideErrorManager extends Error<OverrideProps> {
    
    // Une méthode pour effectuer le ping
    public performLog(): void {
        const { message } = this.props; // Merci le générique P !
        
        console.log(`Initialisation du ping vers : ${message}`);
    }

    public test(): void {
        this.render()
    }

    //#####################Ce que m'a donné Gemini (marche) 

    // componentDidMount() {
    //     this.performLog();
    // }

    // public performLog(): void {
    //     console.log("--- LOG SYSTEM ---");
    //     console.log(`Message: ${this.props.message}`);
    //     console.log(`Code: ${this.props.statusCode}`);
    // }

    // render() {
    //     return super.render(); // Affiche la page Next.js standard
    // }
}