import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import ToastAlert from './ToastAlert'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState({ name: '', email: '', AvatarUrl: '' });
    const [showToast, setShowToast] = useState({ icon: '', title: '', message: '', isOpen: false });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                setShowToast({ ...showToast, icon: 'success', title: 'Sucesso!', message: 'Usuario cadastrado com sucesso!', isOpen: true});
            } else {
                setShowToast({ ...showToast, icon: 'danger', title: 'Falha!', message: 'Falha ao cadastrar usuario!', isOpen: true });
            }
        } catch (error) {
            setShowToast({ ...showToast, icon: 'danger', title: 'Erro!', message: 'Erro ao fazer a requisicao!', isOpen: true });
        } finally {
            setUser({ name: '', email: '', avatarUrl: '' });
        }
    }

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setUser({ ...user, AvatarUrl: reader.result })
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <ToastAlert icon={showToast.icon} title={showToast.title} message={showToast.message} isOpen={showToast.isOpen} />
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Nome</Label>
                    <Input
                        required
                        type="text"
                        name="name"
                        placeholder="Digite o nome..."
                        value={user.name}
                        onChange={(event) => setUser({ ...user, name: event.target.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        required
                        type="text"
                        name="email"
                        placeholder="Digite o email..."
                        value={user.email}
                        onChange={(event) => setUser({ ...user, email: event.target.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Avatar</Label>
                    <Input
                        required
                        type="file"
                        name="avatar"
                        accept="image/*"
                        onChange={handleAvatarChange}
                    />
                </FormGroup>

                <Button color="primary" type="submit">
                    Adicionar Usuario
                </Button>
            </Form>
        </div>
    );

}

export default AddUser;
