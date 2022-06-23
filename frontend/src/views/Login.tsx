import FormLoginAndRegister from "../components/FormLoginAndRegister/FormLoginAndRegister"
import NavBar from "../components/NavBar/NavBar";

const LoginView: React.FC = () => {
    return (
        <div>
            <NavBar />
            <FormLoginAndRegister />
        </div>
    )
}

export default LoginView;