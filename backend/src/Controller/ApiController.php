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
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTManager;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Csrf\TokenStorage\TokenStorageInterface;
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
    public function readMovies(MovieRepository $movieRepository, SerializerInterface $serializer): JsonResponse
    {
        // Récupérer tous les films depuis le repository
        $movies = $movieRepository->findAll();
        // Normaliser les données et les convertir en JSON
        $data = $serializer->normalize($movies, null, ['groups' => 'json_movies']);

        // Retourner les données sous forme de réponse JSON
        $response = new JsonResponse( $data );
        return $response;
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
    public function SearchMovie(MovieRepository $movieRepository, SerializerInterface $serializer ): Response
    {
        $movies = $movieRepository->findAll();

      $data = $serializer->normalize($movies, null, ['groups' => 'json_searchmovie']);
      $response = new JsonResponse( $data );
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
    public function readCategoryname(Category $mov, SerializerInterface $serializer ): Response
    {
      $data = $serializer->normalize($mov, null, ['groups' => 'json_category_id']);
      $response = new JsonResponse( $data );
      return $response;
    }

    #[Route('/api/searchbymovie', name: 'app_api_search_movie', methods: ['GET'])]
    public function searchMoviesByTitle(Request $request, MovieRepository $movieRepository, SerializerInterface $serializer): JsonResponse
    {
       $searchTerm = $request->query->get('query');
        if (!$searchTerm) {
            $movies = $movieRepository->findAll();
        }
        $movies = $movieRepository->findBySearchTerm($searchTerm);

        $data = $serializer->normalize($movies, null, ['groups' => 'json_searchmovie']);
        $response = new JsonResponse( $data );
        return $response;
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


    #[Route('/api/user/{email}', name: 'app_api_user' , methods: ['POST']) ]
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

    $data = [
        'token' => $token,
        'user' => $serializer->normalize($user, null, ['groups' => 'json_user']),
    ];
            $response = new JsonResponse($data);
        return $response;
    }


    
    #[Route('/api/user', name: 'app_api_user_verify')]
    public function readUser(UserRepository $user , SerializerInterface $serializer ,  Request $request ): JsonResponse
    {
      $token = $request->headers->get('Authorization');
      $token = substr($token, 7);
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
      $token = $request->headers->get('Authorization');
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

      $filmHistory = new MovieHistory();
      $filmHistory->setUser($user);
      $filmHistory->setMovie($film);
  
      $entityManager->persist($filmHistory);
      $entityManager->flush();
  
      return new JsonResponse(['message' => 'Film est ajouté'], Response::HTTP_CREATED);
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
