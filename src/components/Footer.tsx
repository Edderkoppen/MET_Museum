import "../styles/footer.scss"

export default function App() {
  return (
    
    <footer className="bg text-center">
        
        <div className="container p-4 pb-0">
            <section className="">
            <form className="align" action="">
                <div className="">
                <div className="col-auto">
                    <p className="pt-2">
                    <strong className="color">Inscrivez-vous a notre newsletter</strong>
                    </p>
                </div>
                <div className="center">
                    <div className="form-outline mb-4">
                        <input type="email" id="form5Example27" className="form-control" placeholder="Email"/>
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-secondary custom-footer">
                    Envoyer
                    </button>
                </div>
                </div>
            </form>
            </section>
        </div>

        <div className="text-center p-3" >
            © 2020 Copyright:
            <a className="text-white deco" href="https://mdbootstrap.com/"> Met.com</a>
        </div>
    </footer>
  );
}