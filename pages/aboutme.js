import Head from "next/head";
import HeaderComponent from "../components/custom/sections/headercomponent";
import styles from "../styles/Home.module.css";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
export default function Home() {
  return (
    <div>
      <Head>
        <title>About Us | Geomats International</title>
        <meta
          name="Geomats International"
          content="Geomats International, Metal, Industry, Metal Industry "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <HeaderComponent />
      </div>
      <div className={styles.box}>
        <div className={styles.tet}>
           <h2>About Us </h2>
        </div>
      </div>
      <Row className="m-t-40">
            <Col md="9" className="wrap-feature-box">
              <Card>
                <CardBody>
                  <h4 className="ten-1">About Us</h4>
                  <p className="m-t-20">
                  We are capable of providing a vast range of materials like stainless steel, 
                  Carbon Steel & Alloy Steel Pipe Fittings from stock, to suit your needs.

                  Our management style has been the key to our success as we delegates responsibility
                  to the specific need of every customers and we have made every customer a member of our family.
                  </p>
                  <p className="m-t-20" style={{color:'blue'}}>
                  As we being bulk Exporter, we cater to the diverse needs of the manufacture,
                  whose business involves all types of metals and instrumentation industries.
                  </p>
                  <p className="m-t-20">
                  Keeping efficient and friendly customer service as the top concern, provides ultimate flexibility in fulfilling each & 
                  every customer requirement irrespective of the size of order. Most of our clients are doing business with us since years,
                  which indicates higher levels of customer satisfaction.
                  We always welcome any queries or suggesions from our clients to improve the services and hence to serve them better.
                  </p>
                  <h4 className="font-medium">Our Values</h4>
                  <p className="m-t-20" >
                  Our Clients are our most valuable assets and for that we use our skilled people and
                  latest technology and equipments to fulfill their needs.
                  </p>
                  <p className="m-t-20" >
                  Keeping efficient and friendly customer service as the top concern, provides ultimate flexibility in fulfilling each &
                  every customer requirement irrespective of the size of order. Most of our clients are doing business with us since years,
                  which indicates higher levels of customer satisfaction.We always welcome any queries or suggesions from our clients to 
                  improve the services and hence to serve them better.
                  </p>
                  <h4 className="font-medium">Why Us</h4>
                  <p className="m-t-20" >
                  We are a renowned name in this domain engaged in providing various types of SS, CS & AS Products; 
                  we have gained immense client`s appreciation, Owing to our excellent product quality and transparent dealings.
                  </p>
                  <p className="m-t-20" style={{color:'blue'}}>
                  Specialties that make us a profitable business partner for our clients are:
                  </p>
                  <p className="m-t-20" >
                  Cost-effective rates • Customized solution • Customized packaging • Customer focused approach • Easy payment modes •
                  Good Financial Position & TQM • Superior quality products • Timely delivery schedule • Timely delivery of products •
                  Experience and specialty in work.
                  </p>
                  <h4 className="font-medium">Our Vision</h4>
                  <p className="m-t-20" >
                  We help customers develop their energy resources; bringing world class capability and delivering it locally.
                  We promote commercial arrangements that are aligned to our customers’ needs, allowing us to deliver more value 
                  to the customer while increasing the returns from our most precious asset – our people.
                  </p>
                  <h4 className="font-medium">Our Mission</h4>
                  <p className="m-t-20" >
                  Provide technically sound solutions and create additional value in mutual interest with our customers resulting 
                  in being a preferred Stockists & Suppliers within the Stockists & Suppliers industry.
                  </p>
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
