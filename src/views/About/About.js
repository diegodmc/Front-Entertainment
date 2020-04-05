import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {
  Grid,
  IconButton
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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

const About = props => {

  
 
 
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
            <div className={classes.title}>Conte conosco, para alavancar sua carteira de investimentos!</div>
            <Timeline lineColor={'#3F51B5'}>
            
            
                <TimelineItem
                    key="001"
                    dateText="QUEM SOMOS"
                    variant="h6"
                    dateInnerStyle={{ background: '#3F51B5', color: '#FFF', fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif' }}
                >
                    <div className={classes.descriptionRight}>Seja bem vindo a B3 Entretenimento. Somos uma startup que nasceu com a vontade de proporcionar um novo modelo de negócio para especulação de 
ativo de empresas. É uma empresa com um novo conceito no mercado, que proporciona o surgimento de influenciadores sem nenhum patrocinio de corretoras.
</div>
                    
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="MISSÃO"
                    variant="h6"
                    dateInnerStyle={{ background: '#3F51B5', color: '#FFF', fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif' }}
                    
                >
                    <div className={classes.descriptionRight}>
                    Proporcionar confiabilidade em negocios de especulações, oferecendo uma forma real de alavancar sua carteira de investimentos, pois 
nosso compromisso não é com nenhuma corretora e sim com o cliente, garantindo a transparência e imparcialidade no resultado.
                    </div>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="VISÃO"
                    variant="h6"
                    dateInnerStyle={{ background: '#3F51B5', color: '#FFF', fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif' }}
                    
                >
                    <div className={classes.descriptionRight}>
                    Ser referência em negocios de especulações, alcançando a fidelização e a satisfação de nossos clientes, 
tendo em vista a excelência nos serviços prestados, como resultado, conquistar a lucratividade desejada.

                    </div>
                </TimelineItem>
                <TimelineItem
                    key="002"
                    dateText="VALORES"
                    variant="h6"
                    dateInnerStyle={{ background: '#3F51B5', color: '#FFF', fontFamily: 'Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif' }}
                    
                >
                    <div className={classes.descriptionRight}>
                    Transparência, imparcialidade, inovação, credibilidade e segurança nos serviços prestados.
                    </div>
                </TimelineItem>
              </Timeline>
              
            </div>
          </Grid>
        </Grid>
      </div>
    );
  };

export default withRouter(About);
