import "../compoments.scss/Footer.scss"

export default function App() {
  return (
    <footer className="bg text-center">
        <div className="container p-4 pb-0">
            <section className="">
            <form action="">
                <div className="row d-flex justify-content-center">
                <div className="col-auto">
                    <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                    </p>
                </div>
                <div className="col-md-5 col-12">
                    <div className="form-outline mb-4">
                        <input type="email" id="form5Example27" className="form-control" placeholder="Email"/>
                    </div>
                </div>
                <div className="col-auto">
                    <button type="submit" className="color btn btn-primary mb-4">
                    Envoyer
                    </button>
                </div>
                </div>
            </form>
            </section>
        </div>

        <div className="text-center p-3" >
            © 2020 Copyright:
            <a className="text-dark deco" href="https://mdbootstrap.com/"> Met.com</a>
        </div>
    </footer>
  );
}