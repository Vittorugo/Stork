import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import CardPedido from '../components/CardPedido'
import {
    Container,
    Jumbotron,
    Button,
    Navbar, Nav, NavItem, NavLink
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
                <CardPedido />
            </Container>
        </div>
    )
}
