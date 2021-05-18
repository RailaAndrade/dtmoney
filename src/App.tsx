import { useState } from 'react';
import styled from 'styled-components'
import { Dashboard } from './components/Dashboard';
import {Header} from './components/Header'
import Modal from 'react-modal'
import { GlobalStyle } from './styles/globals'
import { NewTransactionModal } from './NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

export function App() {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen]= useState(false);
  function handleOpenNewTransactionModal(){
    
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)

  }

  Modal.setAppElement('#root')
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}></Header>
      <Dashboard/>

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
     

      
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

