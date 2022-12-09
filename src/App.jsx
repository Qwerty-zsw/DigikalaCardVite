import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Card from './component/Card/Card';

const App = ()=> {
  return (

    <div className='d-flex'>
      <div className='ps-1'>
        <div style={{width:'182px', height:'auto'}}>
        <Card mainPrice='3,567,000' Offer='21' CurrPrice='3,000,000' CardImg='https://dkstatics-public.digikala.com/digikala-products/0330006cf4679f2642a5615d8a8a1f59f16db54b_1649592362.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'/>
        </div>
      </div>
      
      <div className='ps-1'>
        <div style={{width:'182px', height:'auto'}}>
        <Card mainPrice='3,567,000' Offer='21' CurrPrice='3,000,000' CardImg='https://dkstatics-public.digikala.com/digikala-products/0330006cf4679f2642a5615d8a8a1f59f16db54b_1649592362.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'/>
        </div>
      </div>

      <div className='ps-1'>
        <div style={{width:'182px', height:'auto'}}>
        <Card mainPrice='3,567,000' Offer='21' CurrPrice='3,000,000' CardImg='https://dkstatics-public.digikala.com/digikala-products/0330006cf4679f2642a5615d8a8a1f59f16db54b_1649592362.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80'/>
        </div>
      </div>

      
    </div>
  );
};

export default App;