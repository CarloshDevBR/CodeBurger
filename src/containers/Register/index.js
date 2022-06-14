import { Button } from '../../components'

import { Container, Img, BoxItens, Label, Input, Error, SignInLink } from './styles'

import burger from '../../assets/burgerRegister.svg'

import { toast } from 'react-toastify';

import { Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string()
            .required('Digite o seu nome'),
  email: yup.string()
            .email('Digite um email válido')
            .required('O email é obrigatório'),
  password: yup.string()
            .required('A senha é obrigatória')
            .min(6, 'A senha deve ter no mínimo 6 dígitos'),
  confirmPassword: yup.string()
                   .required('Confirme a sua senha')
                   .oneOf([yup.ref('password')], 'A senha é diferente')
})

export const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => { 
        toast.success('Registrado com sucesso!', {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        console.log(data);
    }

    return (
        <Container>
            <Img src={burger} alt="burger" />

            <BoxItens>
                <h1>Register</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label error={errors.name?.message} >Name</Label>
                    <Input type="text" {...register("name")} error={errors.name?.message} />
                    <Error>{errors.name?.message}</Error>

                    <Label error={errors.email?.message} >Email</Label>
                    <Input type="email" {...register("email")} error={errors.email?.message} />
                    <Error>{errors.email?.message}</Error>

                    <Label error={errors.password?.message} >Password</Label>
                    <Input type="password" {...register("password")} error={errors.password?.message} />
                    <Error>{errors.password?.message}</Error>

                    <Label error={errors.confirmPassword?.message} >Confirm Password</Label>
                    <Input type="password" {...register("confirmPassword")} error={errors.confirmPassword?.message} />
                    <Error>{errors.confirmPassword?.message}</Error>

                    <Button type="submit" style={{ marginTop: 40, marginBottom: 20 }} >Sign Up</Button>
                </form>
                
                <SignInLink>
                    Já possui conta? <Link to="/login">Sign In</Link>
                </SignInLink>
            </BoxItens>
        </Container>
    )
}