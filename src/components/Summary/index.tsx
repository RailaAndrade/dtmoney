import { Container } from "./styles";
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";


export function Summary() {
    const {transactions} = useTransactions();
    /*const totalDeposits = transactions.reduce((acc,transaction)=>{
        if(transaction.type==='deposit'){
            return acc+transaction.amount
        }
        return acc;
    },0)
    */


    const summary= transactions.reduce((acc,transaction)=>{

        if (transaction.type ==='deposit'){
            acc.deposits+=transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraws +=transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;



    },{
        deposits:0,
        withdraws:0,
        total:0


    })
    return(
        
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src ={IncomeImg} alt="Entradas"></img>
                </header>
                <strong>
                    R$ {summary.deposits}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src ={OutcomeImg} alt="Entradas"></img>
                </header>
                <strong>
                    R$ {summary.withdraws}
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src ={TotalImg} alt="Entradas"></img>
                </header>
                <strong>
                    R$ {summary.total}
                </strong>
            </div>


        </Container>
    )
}