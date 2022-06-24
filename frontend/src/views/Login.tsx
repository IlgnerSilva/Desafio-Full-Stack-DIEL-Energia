import FormLoginAndRegister from "../components/FormLoginAndRegister/FormLoginAndRegister"
import NavBar from "../components/NavBar/NavBar";

const LoginView: React.FC = () => {
    return (
        <>
            <NavBar />
            <FormLoginAndRegister />
        </>
    )
}

export default LoginView;