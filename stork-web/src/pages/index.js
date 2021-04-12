import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import {
    Container,
    Jumbotron,
    Button,
    Navbar, Nav, NavItem, NavLink,
    Card, CardHeader, CardBody,
    Row,
    Col,
    FormGroup, Input
} from 'reactstrap';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Container>
                <Jumbotron>
                    <h1 className="display-3">Meus Pedidos</h1>
                    <hr className="my-2"/>
                </Jumbotron>
                <Navbar>
                    <Nav>
                        <NavItem className="">
                            <NavLink href="#">Todos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Aguardando</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Aprovado</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Entregue</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <NavLink href="">
                                <Button outline color="secondary">Novo</Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>

                <Card>
                    <CardHeader>Nome do Produto</CardHeader>
                    <CardBody>
                        <Row xs="2">
                            <Col>
                                <Row>
                                    <Col>
                                        <label>Valor:</label>
                                        <span>R$123</span>
                                    </Col>
                                    <Col>
                                        <label>Data de entrega:</label>
                                        <span>11/04/21</span>
                                    </Col>
                                </Row>
                                <label>Produto</label>
                                <FormGroup>
                                    <Input type="textarea"  name="text"/>
                                </FormGroup>
                                <label>Descrição</label>
                                <FormGroup>
                                    <Input type="textarea" name="text"/>
                                </FormGroup>
                            </Col>
                            <Col>
                                <img src=""/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
