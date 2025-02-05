

const Footer = () => {
    return (
        <div className="bg-neutral">
            <footer className="footer sm:footer-horizontal container mx-auto text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">Email: info@comfortstep.com</a>
                    <a className="link link-hover">Helpline: +8809234567890 </a>
                    <a className="link link-hover">Trade Number: TRAD/DSCC/051175/2025</a>
                    <a className="link link-hover">Thank You for Visiting Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Useful Links</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Condition</a>
                    <a className="link link-hover">Refund Policy</a>
                    <a className="link link-hover">Exchange Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Follow</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Youtube</a>
                    <a className="link link-hover">Tiktok</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;