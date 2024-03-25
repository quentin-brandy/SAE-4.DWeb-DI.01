<?php

namespace App\Controller;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\MovieRepository;
use App\Entity\Category;
use App\Repository\FilmALaUneRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\Movie;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

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
    
    #[Route('/api/searchmovies', name: 'app_api_movies')]
    public function readSearchMovie(MovieRepository $movieRepository, SerializerInterface $serializer ): Response
    {
        $movies = $movieRepository->findAll();

      $data = $serializer->normalize($movies, null, ['groups' => 'json_searchmovie']);
      $response = new JsonResponse( $data );
      return $response;
    }

    #[Route('/api/category/{id}', name: 'app_api_category')]
    public function readCategory(Category $mov, SerializerInterface $serializer ): Response
    {
      $data = $serializer->normalize($mov, null, ['groups' => 'json_category']);
      $response = new JsonResponse( $data );
      return $response;
    }

    #[Route('/api/searchbymovie', name: 'app_api_search_movie', methods: ['GET'])]
    public function searchMoviesByTitle(Request $request, MovieRepository $movieRepository, SerializerInterface $serializer): JsonResponse
    {
       $searchTerm = $request->query->get('query');
      
        if (!$searchTerm) {
            return new JsonResponse(['error' => 'A search term is required'], Response::HTTP_BAD_REQUEST);
        }


        $movies = $movieRepository->findBySearchTerm($searchTerm);


        $data = $serializer->normalize($movies, null, ['groups' => 'json_searchmovie']);

        $response = new JsonResponse( $data );
        return $response;
    }

}
