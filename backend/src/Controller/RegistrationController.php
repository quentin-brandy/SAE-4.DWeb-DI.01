<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register', methods: ['POST'])]
    public function register(Request $request, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager): Response
    {
        // Récupérer les données POST envoyées
        $requestData = json_decode($request->getContent(), true);

        // Vérifier si les données nécessaires sont présentes
        if (!isset($requestData['email'], $requestData['password'])) {
            return new Response('Email or password error', Response::HTTP_BAD_REQUEST);
        }

        // Créer un nouvel utilisateur avec les données reçues
        $user = new User();
        $user->setEmail($requestData['email']);

        // Hasher le mot de passe avant de l'assigner à l'utilisateur
        $hashedPassword = $passwordHasher->hashPassword($user, $requestData['password']);
        $user->setPassword($hashedPassword);

        // Enregistrer le nouvel utilisateur dans la base de données
        $entityManager->persist($user);
        $entityManager->flush();

        // Renvoyer une réponse indiquant que l'utilisateur a été créé avec succès
        return new Response('User created successfully', Response::HTTP_CREATED);
    }
}
