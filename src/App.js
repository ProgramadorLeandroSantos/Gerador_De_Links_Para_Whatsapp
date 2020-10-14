import React, { useState } from 'react';
import './global.css';
import {Header, Title, Main, Input, Span, Button, TextButton, BTNContainer} from './styles';
import { ToastContainer, toast } from 'react-toastify';
export default function App() {

  const [ link, setLink ] = useState('');
  const [ inputNumber, setInputNumber ] = useState('');
  const [ inputMsg, setInputMsg ] = useState('');
  const [ btnText, setBtnText ] = useState('Gerar');

  //getNumber
  function getNumber(){
    var number = document.getElementById('number-input').value;
    setInputNumber(number)
  };

  //getMsg
  function getMsg(){
    var msg = document.getElementById('msg-input').value;
    setInputMsg(msg)
  };

  // creating a link
  function createLink(){
    if(inputMsg && inputNumber !== ''){
      setBtnText('Abrir Link');
      setLink(`https://api.whatsapp.com/send?phone=${inputNumber}&text=${inputMsg}`);
      toast.success('Link gerado com sucesso');
    }
    else{
      toast.warn('Você precisa preencher os campos');
    }
  };

  //clear data
  function clearData(){
    document.getElementById('number-input').value = '';
    document.getElementById('msg-input').value = '';
    setBtnText('Gerar');
    setInputMsg('');
    setInputNumber('');
  };

  //openning the link
  function openLink(){
     if(link !== '' || undefined){
        window.open(link);
        clearData();
     }
  };

  // Button to genarete the link
  function buttonGenerate(){
    createLink();
  };

  return (
    <>
      <ToastContainer/>
      <Header>
         <Title>Gerador de Links Para Whatsapp</Title>
      </Header>
      
      <Main>
         <Span>Número</Span>
         <Input 
            type="text" 
            placeholder="Apenas números" 
            id="number-input"
            onChange={()=>{getNumber()}}
          />
         <Span>Mensagem</Span>
         <Input 
            type="text" 
            placeholder="Digite uma mensagem"
            id = "msg-input"
            onChange={()=>{getMsg()}}
          />
          <BTNContainer>
            <Button
              type = "submit"
              onClick = {()=>{btnText === "Abrir Link" ? openLink() : buttonGenerate()}}
            >
                <TextButton>{btnText}</TextButton>
            </Button>
          </BTNContainer>
      </Main>
    </>
  );
};
