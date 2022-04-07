import Head from "next/head";
import HeaderComponent from "../components/custom/sections/headercomponent";
import styles from "../styles/Home.module.css";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Link from 'next/link';
export default function contactus() {
    return (
        <div>
            <Head>
                <title>Contact Us | Geomats International</title>
                <meta
                    name="Geomats International"
                    content="Geomats International, Metal, Industry, Metal Industry "
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <HeaderComponent />
            </div>
            <div className={styles.boxn}>
                <div className={styles.tet}>
                    <h2>Contact Us </h2>
                </div>
            </div>
            <Row className="m-t-40">
                <Col md="9" className="wrap-feature-box">
                    <Card>
                        <CardBody>
                            <Container>
                                <Row>
                                    <Col lg="3" md="6" className="m-b-30">
                                        <h5 className="m-b-20">Address</h5>
                                        <p>Geomats International <br />
                                            Shop No. 1 Ground Flr,<br />
                                            23, 3rd Khetwadi Lane,<br />
                                            Kotwala Bldg,<br /> MUMBAI - 400 004</p>
                                    </Col>
                                    <Col lg="3" md="6" className="m-b-30">
                                        <h5 className="m-b-20">Phone</h5>
                                        <p>
                                            Office : +91 8097674213
                                        </p>
                                    </Col>
                                    <Col lg="3" md="6" className="m-b-30">
                                        <h5 className="m-b-20">Email</h5>
                                        <p>
                                            Office:
                                            <Link href="#">
                                                <a className="link"> sales@geomatsinternational.com</a>
                                            </Link>
                                            <br />
                                            {/* Site :
                                            <Link href="https://www.wrappixel.com">
                                                <a className="link">wrappixel.com</a>
                                            </Link> */}
                                        </p>
                                    </Col>
                                    <Col lg="3" md="6">
                                        <h5 className="m-b-20">Social</h5>
                                        <div className="round-social light">
                                            <Link href="#">
                                                <a className="link">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a className="link">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a className="link">
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a className="link">
                                                    <i className="fa fa-youtube-play"></i>
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a className="link">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" className="wrap-feature4-box">
                    <Card>
                        <CardBody>
                            <h5 className="font-medium"> </h5>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>

    );
}
