 import "../compoments.scss/Article.scss"

 export default function Article(){
  return (
    <main className="main-block">
      <div className=" image">
        <div>
          <img className=" size" src="https://www.metmuseum.org/-/media/images/visit/plan-your-visit/individual-locations/fifth-avenue/fifthave_1520x1520.jpg?as=1&mh=1520&mw=1520&sc_lang=en&hash=58D8A06FCA4D575DC8B811E9DBDA4129" alt="Card image cap"/>
        </div>
        <div className="">
          <h5 className="">Card title</h5>
          <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="">Go somewhere</a>
        </div>
      </div>
      <div className="image">
        <div>
          <img className=" size" src="https://www.metmuseum.org/-/media/images/visit/plan-your-visit/individual-locations/fifth-avenue/fifthave_1520x1520.jpg?as=1&mh=1520&mw=1520&sc_lang=en&hash=58D8A06FCA4D575DC8B811E9DBDA4129" alt="Card image cap"/>
        </div>
        <div className="">
          <h5 className="">Card title</h5>
          <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="">Go somewhere</a>
        </div>
      </div>
    </main>
  );
};