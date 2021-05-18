import logoImg from '../../assets/logo.svg'
import {Summary} from '../Summary'
import{ TransactionTable} from '../TransactionsTable'
import { Container } from './styles'


export function Dashboard () {
    return (
      <Container>
          <Summary/>
          <TransactionTable></TransactionTable>


      </Container>
    )
    
}