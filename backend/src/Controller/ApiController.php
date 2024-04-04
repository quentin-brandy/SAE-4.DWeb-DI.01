<?php

namespace App\Controller;
use App\Repository\CategoryRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\MovieRepository;
use App\Entity\Category;
use App\Repository\FilmALaUneRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\Movie;
use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use App\Entity\MovieHistory;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\MovieHistoryRepository;
class ApiController extends AbstractController
{
    #[Route('/api', name: 'app_api')]
    public function index(): Response
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }
    
    
    #[Route('/api/movies', name: 'app_api_movies')]
    public function readMovies(MovieRepository $movieRepository, SerializerInterface $serializer , Request $request , UserRepository $userRepository): JsonResponse
    {
      $token = $request->cookies->get('jwt_token');

      // Vérifier que le cookie existe
      if (!$token) {
        {
          $movies = $movieRepository->findAll();
          $moviesHistory = [];
          foreach ($movies as $movie) {
              $movieData = $serializer->normalize($movie, null, ['groups' => 'json_movies']);
              $movieData['Seen'] = false; // Set seenByUser to null
              $moviesHistory[] = $movieData;
          }
          $response = new JsonResponse( $moviesHistory );
          return $response;
      }
      }
else{
        $tokenParts = explode(".", $token);  
        $tokenPayload = base64_decode($tokenParts[1]);
        $jwtPayload = json_decode($tokenPayload);
        $useremail = $jwtPayload->username;
        $user = $userRepository->findOneBy(['email' => $useremail]);
        $filmHistory = $user ? $user->getMovieHistories()->toArray() : [];
  
  
        $movies = $movieRepository->findAll();
  
        $moviesHistory = [];
        foreach ($movies as $movie) {
            // Vérifier si le film se trouve dans l'historique des films de l'utilisateur
            $seenByUser = false;
            foreach ($filmHistory as $history) {
                if ($history->getMovie() === $movie) {
                    $seenByUser = true;
                    break;
                }
                else{
                  $seenByUser = false;
                }
            }
  
          $movieData = $serializer->normalize($movie, null, ['groups' => 'json_movies']);
          $movieData['Seen'] = $seenByUser;
          $moviesHistory[] = $movieData;
        }
  
          $response = new JsonResponse( $moviesHistory );
          return $response;
}
    }
    #[Route('/api/film_a_la_une', name: 'app_api_film_a_la_une')]
    public function readALaUne(FilmALaUneRepository $filmalauneRepository, SerializerInterface $serializer): JsonResponse
    {
        // Récupérer tous les films depuis le repository
        $filmalaunes = $filmalauneRepository->findAll();

        // Normaliser les données et les convertir en JSON
        $data = $serializer->normalize($filmalaunes, null, ['groups' => 'json_film_a_la_une']);

        // Retourner les données sous forme de réponse JSON
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/movie/{id}', name: 'app_api_movie')]
    public function readMovie(Movie $mov, SerializerInterface $serializer ): Response
    {
      $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
      $response = new JsonResponse( $data );
      return $response;
    }
    
    #[Route('/api/searchmovies', name: 'app_api_searchmovies')]
    public function SearchMovies(MovieRepository $movieRepository, SerializerInterface $serializer , Request $request , UserRepository $userRepository): JsonResponse
    {
      $token = $request->cookies->get('jwt_token');

      // Vérifier que le cookie existe
      if (!$token) {
        {
          $movies = $movieRepository->findAll();
          $moviesHistory = [];
          foreach ($movies as $movie) {
              $movieData = $serializer->normalize($movie, null, ['groups' => 'json_searchmovie']);
              $movieData['Seen'] = false; // Set seenByUser to null
              $moviesHistory[] = $movieData;
          }
          $response = new JsonResponse( $moviesHistory );
          return $response;
      }
      }
else{
        $tokenParts = explode(".", $token);  
        $tokenPayload = base64_decode($tokenParts[1]);
        $jwtPayload = json_decode($tokenPayload);
        $useremail = $jwtPayload->username;
        $user = $userRepository->findOneBy(['email' => $useremail]);
        $filmHistory = $user ? $user->getMovieHistories()->toArray() : [];
  
  
        $movies = $movieRepository->findAll();
  
        $moviesHistory = [];
        foreach ($movies as $movie) {
            // Vérifier si le film se trouve dans l'historique des films de l'utilisateur
            $seenByUser = false;
            foreach ($filmHistory as $history) {
                if ($history->getMovie() === $movie) {
                    $seenByUser = true;
                    break;
                }
                else{
                  $seenByUser = false;
                }
            }
  
          $movieData = $serializer->normalize($movie, null, ['groups' => 'json_searchmovie']);
          $movieData['Seen'] = $seenByUser;
          $moviesHistory[] = $movieData;
        }
  
          $response = new JsonResponse( $moviesHistory );
          return $response;
}
    }


    #[Route('/api/searchbymovie', name: 'app_api_search_movie', methods: ['GET'])]
public function searchMoviesByTitle(Request $request, MovieRepository $movieRepository, SerializerInterface $serializer, UserRepository $userRepository): JsonResponse
{
    $searchTerm = $request->query->get('query');
    if (!$searchTerm) {
        $movies = $movieRepository->findAll();
    } else {
        $movies = $movieRepository->findBySearchTerm($searchTerm);
    }

    $token = $request->cookies->get('jwt_token');
    $moviesHistory = [];

    // Vérifier que le cookie existe
    if ($token) {
        $tokenParts = explode(".", $token);
        $tokenPayload = base64_decode($tokenParts[1]);
        $jwtPayload = json_decode($tokenPayload);
        $useremail = $jwtPayload->username;
        $user = $userRepository->findOneBy(['email' => $useremail]);
        $filmHistory = $user ? $user->getMovieHistories()->toArray() : [];

        foreach ($movies as $movie) {
            // Vérifier si le film se trouve dans l'historique des films de l'utilisateur
            $seenByUser = false;
            foreach ($filmHistory as $history) {
                if ($history->getMovie() === $movie) {
                    $seenByUser = true;
                    break;
                } else {
                    $seenByUser = false;
                }
            }

            $movieData = $serializer->normalize($movie, null, ['groups' => 'json_searchmovie']);
            $movieData['Seen'] = $seenByUser;
            $moviesHistory[] = $movieData;
        }
    } else {
        // Si aucun cookie JWT n'est présent, on ne fournit pas d'informations sur les films vus par l'utilisateur
        foreach ($movies as $movie) {
            $movieData = $serializer->normalize($movie, null, ['groups' => 'json_searchmovie']);
            $movieData['Seen'] = false; // Set seenByUser to false
            $moviesHistory[] = $movieData;
        }
    }

    $response = new JsonResponse($moviesHistory);
    return $response;
}




    #[Route('/api/category', name: 'app_api_category')]
    public function readCategory(CategoryRepository $cat, SerializerInterface $serializer ): Response
    {
        $categories = $cat->findAll();

      $data = $serializer->normalize($categories, null, ['groups' => 'json_category']);
      $response = new JsonResponse( $data );
      return $response;
    }






    #[Route('/api/category/{name}', name: 'app_api_category_id')]
public function readCategoryname(Category $category, SerializerInterface $serializer, MovieRepository $movieRepository, Request $request, UserRepository $userRepository): JsonResponse
{
    $token = $request->cookies->get('jwt_token');

    // Vérifier que le cookie existe
    if (!$token) {
        $movies = $category->getMovies();
        $moviesHistory = [];
        foreach ($movies as $movie) {
            $movieData = $serializer->normalize($movie, null, ['groups' => 'json_movies']);
            $movieData['Seen'] = false; // Set seenByUser to null
            $moviesHistory[] = $movieData;
        }
        $response = new JsonResponse($moviesHistory);
        return $response;
    } else {
        $tokenParts = explode(".", $token);
        $tokenPayload = base64_decode($tokenParts[1]);
        $jwtPayload = json_decode($tokenPayload);
        $useremail = $jwtPayload->username;
        $user = $userRepository->findOneBy(['email' => $useremail]);
        $filmHistory = $user ? $user->getMovieHistories()->toArray() : [];

        $movies = $category->getMovies();
        $moviesHistory = [];
        foreach ($movies as $movie) {
            // Vérifier si le film se trouve dans l'historique des films de l'utilisateur
            $seenByUser = false;
            foreach ($filmHistory as $history) {
                if ($history->getMovie() === $movie) {
                    $seenByUser = true;
                    break;
                } else {
                    $seenByUser = false;
                }
            }

            $movieData = $serializer->normalize($movie, null, ['groups' => 'json_movies']);
            $movieData['Seen'] = $seenByUser;
            $moviesHistory[] = $movieData;
        }

        $response = new JsonResponse($moviesHistory);
        return $response;
    }
}



    #[Route('/api/showmovies', name: 'app_api_showmovies')]
    public function ShowMovie(MovieRepository $movieRepository, SerializerInterface $serializer ): Response
    {
        $movies = $movieRepository->findAll();

      $data = $serializer->normalize($movies, null, ['groups' => 'json_showmovie']);
      $response = new JsonResponse( $data );
      return $response;
    }
    
    #[Route('/api/movies/{name}', name: 'app_api_movie_name')]
    public function readMoviename(Movie $mov, SerializerInterface $serializer ): Response
    {
      $data = $serializer->normalize($mov, null, ['groups' => 'json_movie_name']);
      $response = new JsonResponse( $data );
      return $response;
    }

    #[Route('/api/categories/{id}', name: 'app_api_categories_name')]
    public function readCategories(Category $category, SerializerInterface $serializer , $id): Response
    {
      $movies = $category->getMovies();
      $data = $serializer->normalize($movies, null, ['groups' => 'json_categories']);
      $response = new JsonResponse( $data );
      return $response;
    }


    #[Route('/api/user/{email}', name: 'app_api_user_login' , methods: ['POST']) ]
    public function readUsermdp(string $email, UserRepository $userRepository , Request $request, SerializerInterface $serializer, UserPasswordHasherInterface $passwordHasher , JWTTokenManagerInterface $jwtManager): Response
    {
      
      $user = $userRepository->findOneBy(['email' => $email]);
      if (!$user) {
          return new JsonResponse(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
      }
     
        $requestData = json_decode($request->getContent(), true);
        $providedPassword = $requestData['password']; 

        if (!$passwordHasher->isPasswordValid($user, $providedPassword)) {
          return new JsonResponse(['error' => 'Invalid password'], Response::HTTP_UNAUTHORIZED);
      }
    $token = $jwtManager->create($user);

    $cookie = new Cookie('jwt_token', $token, strtotime('+1 day'), '/', null, false, false);

    // Crée une réponse vide avec le cookie attaché
    $response = new Response();
    $response->headers->setCookie($cookie);

        return $response;
    }


    #[Route('/api/changemail', name: 'app_api_user_changeemail', methods: ['POST'])]
public function UserMail(UserRepository $userRepository, Request $request, SerializerInterface $serializer, UserPasswordHasherInterface $passwordHasher, JWTTokenManagerInterface $jwtManager, EntityManagerInterface $entityManager): Response
{

    $token = $request->cookies->get('jwt_token');

    // Vérifier que le cookie existe
    if (!$token) {
        return new JsonResponse(['error' => 'JWT cookie not found'], Response::HTTP_UNAUTHORIZED);
    }

    $tokenParts = explode(".", $token);
    $tokenPayload = base64_decode($tokenParts[1]);
    $jwtPayload = json_decode($tokenPayload);
    $useremail = $jwtPayload->username;

    $user = $userRepository->findOneBy(['email' => $useremail]);

    if (!$user) {
        return new JsonResponse(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
    }

    $requestData = json_decode($request->getContent(), true);
    $providedPassword = $requestData['password'];

    if (!$passwordHasher->isPasswordValid($user, $providedPassword)) {
        return new JsonResponse(['error' => 'Invalid password'], Response::HTTP_UNAUTHORIZED);
    }

    $newEmail = $requestData['email'];
    $user->setEmail($newEmail);

    
    $entityManager->flush();

   
    $user = $userRepository->findOneBy(['email' => $newEmail]);

    
    $token = $jwtManager->create($user);
    $cookie = new Cookie('jwt_token', $token, strtotime('+1 day'), '/', null, false, false);

    // Crée une réponse vide avec le cookie attaché
    $response = new Response();
    $response->headers->setCookie($cookie);

    return $response;
}


#[Route('/api/changepassword', name: 'app_api_user_changepassword', methods: ['POST'])]
public function UserPassword(UserRepository $userRepository, Request $request, SerializerInterface $serializer, UserPasswordHasherInterface $passwordHasher, JWTTokenManagerInterface $jwtManager, EntityManagerInterface $entityManager): Response
{

    $token = $request->cookies->get('jwt_token');

  
    if (!$token) {
        return new JsonResponse(['error' => 'JWT cookie not found'], Response::HTTP_UNAUTHORIZED);
    }

    $tokenParts = explode(".", $token);
    $tokenPayload = base64_decode($tokenParts[1]);
    $jwtPayload = json_decode($tokenPayload);
    $useremail = $jwtPayload->username;

    $user = $userRepository->findOneBy(['email' => $useremail]);

    if (!$user) {
        return new JsonResponse(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
    }

    $requestData = json_decode($request->getContent(), true);
    $providedPassword = $requestData['oldpassword'];

    if (!$passwordHasher->isPasswordValid($user, $providedPassword)) {
        return new JsonResponse(['error' => 'Invalid password'], Response::HTTP_UNAUTHORIZED);
    }

    $newPassword = $passwordHasher->hashPassword($user ,$requestData['password']);
    $user->setPassword($newPassword);

    
    $entityManager->flush();

      $response = new JsonResponse( "authentification succed" );
      return $response;
}

    #[Route('/api/user/logout', name: 'app_api_user_logout' , methods: ['GET']) ]
    public function UserLogout(): Response
    {
  

    $cookie = new Cookie('jwt_token', "", 0, '/', null, false, false);

    
    $response = new Response();
    $response->headers->setCookie($cookie);

        return $response;
    }


 
    #[Route('/api/user', name: 'app_api_user_verify')]
    public function Useraccount(UserRepository $user , SerializerInterface $serializer ,  Request $request ): JsonResponse
    {

      $token = $request->cookies->get('jwt_token');

    
      if (!$token) {
          return new JsonResponse(['error' => 'JWT cookie not found'], Response::HTTP_UNAUTHORIZED);
      }
  
      $tokenParts = explode(".", $token);  
      $tokenPayload = base64_decode($tokenParts[1]);
      $jwtPayload = json_decode($tokenPayload);
      $useremail = $jwtPayload->username;

      $response = new JsonResponse( $useremail );
      return $response;
    }

    #[Route('/api/history', name: 'app_api_user_history' ,  methods: ['POST'])]
    public function UpdateUserHistory(UserRepository $userRepository, MovieRepository $movieRepository, Request $request , EntityManagerInterface $entityManager ): Response
{
  $token = $request->cookies->get('jwt_token');

  if (!$token) {
      return new JsonResponse(['error' => 'JWT cookie not found'], Response::HTTP_UNAUTHORIZED);
  }

  $tokenParts = explode(".", $token);  
  $tokenPayload = base64_decode($tokenParts[1]);
  $jwtPayload = json_decode($tokenPayload);
  $useremail = $jwtPayload->username;
  $user = $userRepository->findOneBy(['email' => $useremail]);
  $filmName = json_decode($request->getContent(), true);
  $film = $movieRepository->findOneBy(['name' => $filmName]);

  if (!$film) {
      return new JsonResponse(['error' => 'Film not found'], Response::HTTP_NOT_FOUND);
  }


  $existingFilmHistory = $user->getMovieHistories()->filter(function($history) use ($film) {
      return $history->getMovie() === $film;
  });

  if ($existingFilmHistory->count() > 0) {
      return new JsonResponse(['message' => 'Film déjà présent dans l\'historique'], Response::HTTP_OK);
  }

  $filmHistory = new MovieHistory();
  $filmHistory->setUser($user);
  $filmHistory->setMovie($film);

  $entityManager->persist($filmHistory);
  $entityManager->flush();

  return new JsonResponse(['message' => 'Film est ajouté à l\'historique'], Response::HTTP_CREATED);
}



    #[Route('/api/user/delhistory', name: 'app_api_user_test')]
    public function DellHisotry(UserRepository $userRepository, MovieHistoryRepository $filmHistoryRepository ,  EntityManagerInterface $entityManager , Request $request ): Response
    {
      $userEmail = $request->query->get('query');

      // Récupérer l'utilisateur à partir de l'e-mail
      $user = $userRepository->findOneBy(['email' => $userEmail]);
  
      if (!$user) {
          return new JsonResponse(['error' => 'User not found'], Response::HTTP_NOT_FOUND);
      }
  
      // Récupérer l'historique des films de cet utilisateur
      $filmHistoryEntries = $filmHistoryRepository->findBy(['user' => $user]);
  
      // Supprimer toutes les entrées de l'historique des films de cet utilisateur
      foreach ($filmHistoryEntries as $entry) {
          $entityManager->remove($entry);
      }
      $entityManager->flush();
  
      return new JsonResponse(['message' => 'Film history supprimé'], Response::HTTP_OK);
    }
}
