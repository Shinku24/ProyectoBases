import React from 'react';
import { Grid,Button, Icon,Form,Image, Label } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import BottomMenu from '../components/BottomMenuBar';
import ImgServTag from './../images/enServicioTag.png';
import UpMenu from '../components/SMenuBar';
import ImgLogo from './../images/logoYellow.png';
import MainMapa from '../components/CMainMap';
import taximetro from './../images/taximetroICON.png';

const style = {
  margin: '0.5em',
  paddingLeft: 0,
  listStyle: 'none',
  backgroundColor: '#FFCC00'
};

const styleButton = {
  color: '#FFFFFF',
  backgroundColor: '#FFCC00'
};

class Mapp extends React.Component {

  render() {
    
    return (
      <div className='main-containerBlack'>
        <div className='main-container'>
        <UpMenu />

        <Grid centered columns={2} relaxed='very' style={style}>
          <Grid.Row>

          <Grid.Column floated='left'>
                        <Image src={ImgLogo} />
                    </Grid.Column>

          <Grid.Column floated='right'>
                        <Image src={ImgServTag} />
                    </Grid.Column>

            </Grid.Row>

      <Grid.Column stretched floated='right'>
        <Grid.Row>
           <Label style={{fontSize: '35px',  color: '#FFFFFF', backgroundColor: '#FFCC00'} } content='Destino' > 
           </Label>
         </Grid.Row>

        <Grid.Row>
        <Button compact style={styleButton} onClick={this.handleClickDispo}>
                            <Image src={taximetro} />                            
                        </Button>
            </Grid.Row>
        
      </Grid.Column>

      <Grid.Column floated='right'>

        <MainMapa/>

      </Grid.Column>

      </Grid>
      </div>
      <BottomMenu />
      </div>
    );
  }
}

export default Mapp