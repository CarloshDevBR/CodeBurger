import { Button } from '../../components'

import { Container, Img, BoxItens, Label, Input, Error, SignInLink } from './styles'

import { useUser } from '../../hooks/UserContext'

import logo from '../../assets/logo.svg'
import burger from '../../assets/burgerLogin.svg'

import { toast } from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string()
            .email('Digite um email válido')
            .required('O email é obrigatório'),
  password: yup.string()
            .required('A senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 dígitos'),
})

export const Login = () => {
    const { putUserData } = useUser()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => { 
        toast.success('Deu bom!', {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        putUserData(data)

        setTimeout(() => {
            navigate('/')
        }, 1500)   
    }

    return (
        <Container>
            <Img src={burger} alt="burger" />

            <BoxItens>
                <img src={logo} alt="burger" />

                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    
                    <Label error={errors.email?.message} >Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <Error>{errors.email?.message}</Error>

                    <Label error={errors.password?.message} >Password</Label>
                    <Input type="password" {...register("password")} error={errors.password?.message} />
                    <Error>{errors.password?.message}</Error>

                    <Button type="submit" style={{ marginTop: 40, marginBottom: 20 }} >Sign In</Button>
                </form>
                
                <SignInLink>
                    Não possui conta? <Link to="/register">Sign Up</Link>
                </SignInLink>
            </BoxItens>
        </Container>
    )

}