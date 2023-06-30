import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
/*import { BlobServiceClient } from "@azure/storage-blob";*/
import { BlobServiceClient } from "azure-storage";

const AddUser = () => {
    const [user, setUser] = useState({ name: '', email: '', avatarUrl: '' });
    const [avatar, setAvatar] = useState('');

    const blobServiceClient = new BlobServiceClient("DefaultEndpointsProtocol=https;AccountName=techchallengestore;AccountKey=XXzmzS4UzjJCNuqIwRiQ6eqqsQ0umKNUYAaiuCi92F36eIfYEB09mIFamJBc4R2aW6y7wa6pXkft+AStG5UNvw==;EndpointSuffix=core.windows.net");
    const containerClient = blobServiceClient.getContainerClient("userimages");


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
                console.log('Usuario adicionado com sucesso!');
            } else {
                console.error('Erro ao adicionar o usuario.');
            }
        } catch (error) {
            console.error('Erro ao fazer a requisicao:', error);
        }

        setUser({ name: '', email: '', avatarUrl: '' });
    }

    const handleAvatarChange = async (event) => {
        const file = event.target.files[0];
        const blobName = file.name;

        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        try {
            await blockBlobClient.uploadBrowserData(file);
            console.log("Imagem enviada com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar a imagem:", error);
        }

        setAvatar(file)
        setUser({ ...user, avatarUrl: blobName })
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Nome</Label>
                <Input
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
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={handleAvatarChange}
                />
            </FormGroup>

            <Button variant="primary" type="submit">
                Adicionar Usuario
            </Button>
        </Form>
    );

}

export default AddUser;
