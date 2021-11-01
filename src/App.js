import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCamera, faChartBar, faCog, faCrown, faCube, faDollarSign, faEnvelope,  faFont,  faHandPointUp,  faHeart,  faMoon, faMusic, faPager, faPlayCircle, faShareAltSquare, faShoppingCart, faSignOutAlt, faSmile, faVideo, faVolumeDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  const menuItems = [
    {color: 'red', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faPager, text: 'My page'},
    {color: 'blue', bgColor: 'rgba(44, 130, 201, 0.2)', icon: faCrown, text: 'Monetize'},
    {color: 'green', bgColor: 'rgba(42, 187, 155, 0.2)', icon: faChartBar, text: 'Analytics'},
    {color: 'orange', bgColor: 'rgba(233, 212, 96, 0.2)', icon: faDollarSign, text: 'Earnings'},
    {color: 'purple', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faSmile, text: 'Referrals'},
    {color: 'red', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faCog, text: 'Setting'}
  ];

  const features = [
    {color: 'purple', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faHandPointUp, text: 'Custom Link'},
    {color: 'green', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faEnvelope, text: 'Mailing List'},
    {color: 'blue', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faShareAltSquare, text: 'Link Your Socials'},
    {color: 'burlywood', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faFont, text: 'Text'},
    {color: 'purple', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faMusic, text: 'Music'},
    {color: 'red', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faPlayCircle, text: 'Video Preview'},
    {color: 'green', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faShoppingCart, text: 'Product'}
  ];
  const features2 = [
    {color: 'red', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faVideo, text: 'Livestreams'},
    {color: 'green', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faVolumeDown, text: 'Shoutout'},
    {color: 'purple', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faCube, text: 'Exclusive content'},
    {color: 'red', bgColor: 'rgba(175, 64, 87, 0.2)', icon: faHeart, text: 'Tipping'}
  ];

  const renderMenuItems = () => {
    return menuItems.map((t) => (
        <div className="menu-item" style={{backgroundColor: t.bgColor ,display:'flex'}}>
        <div className="menu-item-icon" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <FontAwesomeIcon icon={t.icon} style={{color: t.color}}/>
        </div>
        <div className="menu-item-text" style={{color: t.color}}>
          {t.text}
        </div>
      </div>)
    )
  }
  const renderOptions = () => {
      return (
        <div className="Options">
          <div style={{width: '100%', textAlign: 'center', color: 'blue', position: 'relative', margin: '10px 0'}}>
            <FontAwesomeIcon style={{fontSize: '50px'}} icon={faAddressBook} />
          </div>
          <div className="upper-opt">
           {renderMenuItems()}
          </div>
          <div className="lower-opt">
            <div style={{color:'grey',fontSize:'30px'}}><FontAwesomeIcon icon={faMoon} /></div>
            <span style={{fontSize:'20px', color:'grey'}}><FontAwesomeIcon icon={faSignOutAlt} />Logout</span>
          </div>
        </div>)
  }
  const renderServices = () => {
    return (<div className="services">
    <div className="block links">
      <div style={{width: '100%'}}>
        <h6>Add Block</h6>
      </div>
      <div className='add-block-items' style={{display:'flex',gap:'20px',height:'auto'}}>
        {features.map((t) => (
          <div className="menu-item" >
          <div className="menu-item-icon" style={{backgroundColor: t.bgColor, width: '60px', padding: '8px'}}>
              <FontAwesomeIcon icon={t.icon} style={{color: t.color}}/>
          </div>
          <div className="menu-item-text">
            {t.text}
          </div>
        </div>
        ))}
      </div>
    </div>
    <div className="block">

    <div style={{width: '100%'}}>
        <h6>Monetize Blocks</h6>
      </div>
      <div className='monetize-block-items'>
        {features2.map((t) => (
          <div className="menu-item" style={{width: '80px'}}>
          <div className="menu-item-icon" style={{backgroundColor: t.bgColor, padding: '8px'}}>
              <FontAwesomeIcon icon={t.icon} style={{color: t.color}}/>
          </div>
          <div className="menu-item-text">
            {t.text}
          </div>
        </div>
        ))}
      </div>  
    </div>
    <div className="header">
      <div className="heading">
        Page Header
      </div>
      <hr style={{width:'95%',marginLeft:'auto', marginRight:'auto'}}/>
      <div className="content">
          <div className="font-icon"><FontAwesomeIcon icon={faAddressBook} /></div>
          <div><h5>Add Your Bio</h5>
          <p>Profile pic, Name, Age and Bio</p></div>

      </div>
      
    </div>
    <div className="mailing-list">
    <div className="heading">
        Mailing List
      </div>
      <hr style={{width:'95%',marginLeft:'auto', marginRight:'auto'}}/>
      <div className="content">
        <div className="font-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
          <div><h5>Join mailing list</h5>
          <p>This will help me continue doing what I do</p></div>
      </div>
    </div>
</div>)
  }
  return (
    <div className="wrapper"> 
      <div className="container">
        <div className="topbar" style={{color:'grey',fontSize:'20px', display:'flex',gap:'5px'}}>
          <div className="nav-item" >
            <div className="nav-item-icon" >
                <FontAwesomeIcon icon={faAddressBook} />
            </div>
            <div className="nav-item-text">
              Links
            </div>
          </div>
          <div style={{marginLeft:'30px'}} className="nav-item" >
            <div className="nav-item-icon">
                <FontAwesomeIcon icon={faEnvelope} />  
            </div>
            <div className="nav-item-text">
              Design
            </div>
          </div>
        </div>
      {renderOptions()}
      {renderServices()}
        <div className="display">
            <img src="mob.png"></img> 
        </div>
    </div>  
    </div>
  );
}

export default App;
