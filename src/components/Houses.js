import bandipur from 'assets/images/bandipur.jpg';
import corbett from 'assets/images/corbett.jpg';
import gir from 'assets/images/gir.png';
import kanha from 'assets/images/kanha.png';
import kaziranga from 'assets/images/kaziranga.png';
import nallamala from 'assets/images/nallamala.png';
import namdapha from 'assets/images/namdapha.jpg';
import nilgiri from 'assets/images/nilgiri.png';
import pichavaram from 'assets/images/pichavaram.jpeg';
import saranda from 'assets/images/saranda.png';
import sunderbans from 'assets/images/sunderbans.jpg';
import wayanad from 'assets/images/wayanad.png';
import ScrollFade from './container/ScrollFade';
import { sec, ds, wa } from 'constant/data';
import { Link } from 'react-router-dom';

const LogoCard = ({ name, logo }) => {
  return (
    <div className='col-6 col-md-3 col-lg-2 p-4'>
      <ScrollFade>
        <a href={'https://'+name+'.iitmbsc.org'} target='_blank'>
          <img src={logo} width='100%' alt={name} />
        </a>
      </ScrollFade>
    </div>
  )
}

const Houses = () => {
  return (
    <div className='row justify-content-center'>
      <LogoCard name='bandipur' logo={bandipur} />
      <LogoCard name='corbett' logo={corbett} />
      <LogoCard name='gir' logo={gir} />
      <LogoCard name='kanha' logo={kanha} />
      <LogoCard name='kaziranga' logo={kaziranga} />
      <LogoCard name='nallamala' logo={nallamala} />
      <LogoCard name='namdapha' logo={namdapha} />
      <LogoCard name='nilgiri' logo={nilgiri} />
      <LogoCard name='pichavaram' logo={pichavaram} />
      <LogoCard name='saranda' logo={saranda} />
      <LogoCard name='sunderbans' logo={sunderbans} />
      <LogoCard name='wayanad' logo={wayanad} />
    </div>
  )
}

export default Houses;