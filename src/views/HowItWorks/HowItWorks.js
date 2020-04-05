import React from 'react';
import { withRouter } from 'react-router-dom';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
  
  const useStyles = makeStyles(theme => ({
    root: {
      boxShadow: 'none',
      paddingLeft: '19px'
    },
    title:{
        fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
        fontSize: '17px',
        color: '#555555',
        fontWeight: '700',
        fontStyle: 'italic'
    },
    titleRight:{
        fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
        fontSize: '17px',
        color: '#555555',
        fontWeight: '700'
    },
    descriptionRight:{
        fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
        fontSize: '12px',
        color: '#555555',
        textDecoration: 'none'
    },
    titleLeft:{
        fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
        fontSize: '17px',
        color: '#FFF',
        fontWeight: '700'
    },
    descriptionLeft:{
        fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
        fontSize: '12px',
        color: '#FFF',
        textDecoration: 'none'
    }
  
  }));
  
 
const HowItWorks = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          spacing={4}
        >
          <Grid
            item
            lg={6}
            xs={12}
          >
            <div className={classes.content}>
            <div className={classes.title}>Abriu sua conta na B3 Entretenimento, mas ainda não sabe por onde começar? Nós te ajudamos! </div>
            <Timeline lineColor={'#3F51B5'}>
                <TimelineItem
                    key="001"
                    dateText="1º Passo"
                    variant="h6"
                    dateInnerStyle={{ background: '#3F51B5', color: '#FFF', fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif' }}
                >
                    <div className={classes.titleRight}>Abra sua conta na B3 Entretenimento.</div>
                    <div className={classes.descriptionRight}>Fácil, online e gratuito!</div>
                    
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="2º Passo"
                    variant="h6"
                    dateInnerStyle={{ background: '#ddd', color: '#555555', fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif' }}
                    bodyContainerStyle={{
                    background: '#3F51B5',
                    padding: '20px',
                    borderRadius: '8px',
                    color: '#FFF',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <div className={classes.titleLeft}>Acesse sua conta.</div>
                    <div className={classes.descriptionLeft}>
                        Acesse www.b3entretenimento.com e clique em "Entrar" (lado direito da tela). Depois, utilize os dados de acesso (e-mail e senha).
                    </div>
                </TimelineItem>
                <TimelineItem
                    key="003"
                    dateText="3º Passo"
                    variant="h6"
                    dateInnerStyle={{ background: '#3F51B5', color: '#FFF', fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        color: '#555555',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                >
                    <div className={classes.titleRight}>Acesse o Pit (Home Broker).</div>
                    <div className={classes.descriptionRight}>Através dele, você monta sua carteira com 5 ações da sua preferência de forma simples e on-line.</div>
                    
                </TimelineItem>
                <TimelineItem
                    key="004"
                    dateText="4º Passo"
                    variant="h6"
                    dateInnerStyle={{ background: '#ddd', color: '#555555', fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif' }}
                    bodyContainerStyle={{
                    background: '#3F51B5',
                    padding: '20px',
                    borderRadius: '8px',
                    color: '#FFF',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <div className={classes.titleLeft}>Faça análise do mercado.</div>
                    <div className={classes.descriptionLeft}>
                    Analise os ativos das empresas que irá compor sua carteira semanal.
                    </div>
                </TimelineItem>
                <TimelineItem
                    key="005"
                    dateText="5º Passo"
                    variant="h6"
                    dateInnerStyle={{ background: '#3F51B5', color: '#FFF', fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        color: '#555555',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                >
                    <div className={classes.titleRight}>Efetue a transferência de recursos.</div>
                    <div className={classes.descriptionRight}>O envio de recursos é feito via TED da sua conta bancária para a conta da B3 Entretenimento.</div>
                    
                </TimelineItem>
                <TimelineItem
                    key="006"
                    dateText="6º Passo"
                    variant="h6"
                    dateInnerStyle={{ background: '#ddd', color: '#555555', fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif' }}
                    bodyContainerStyle={{
                    background: '#3F51B5',
                    padding: '20px',
                    borderRadius: '8px',
                    color: '#555555',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <div className={classes.titleLeft}>Ranking do maior influenciador de investimentos.</div>
                    <div className={classes.descriptionLeft}>5 pontos para cada ativo acertado.</div>
                </TimelineItem>
                <TimelineItem
                    key="007"
                    dateText="Visão Geral"
                    variant="h6"
                    dateInnerStyle={{ background: '#3F51B5', color: '#FFF', fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif' }}
                    bodyContainerStyle={{
                        background: '#ddd',
                        padding: '20px',
                        borderRadius: '8px',
                        color: '#555555',
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                >
                    <div className={classes.descriptionRight}>
                       <ul>
                           <li>O Entretenimento ocorre toda semana</li>
                           <li>Inicia na segunda e termina na sexta</li>
                           <li>A carteira com maior rendimento é premiado com 90% da arrecadação</li>
                           <li>Pagamento é feito em D+2 através de TED para a conta bancária</li>
                           <li>Domingo é o último dia para montar a carteira</li>
                           <li>Segunda-feira estará disponível para download a lista com todos os participantes e suas carteiras</li>
                       </ul>
                    </div>
                    
                </TimelineItem>
                </Timeline>

            </div>
          </Grid>
        </Grid>
      </div>
    );
  };
  
  export default withRouter(HowItWorks);

   