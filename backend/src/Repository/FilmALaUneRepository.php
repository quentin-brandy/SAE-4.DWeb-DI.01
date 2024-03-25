<?php

namespace App\Repository;

use App\Entity\FilmALaUne;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<FilmALaUne>
 *
 * @method FilmALaUne|null find($id, $lockMode = null, $lockVersion = null)
 * @method FilmALaUne|null findOneBy(array $criteria, array $orderBy = null)
 * @method FilmALaUne[]    findAll()
 * @method FilmALaUne[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FilmALaUneRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FilmALaUne::class);
    }



    //    /**
    //     * @return FilmALaUne[] Returns an array of FilmALaUne objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('f')
    //            ->andWhere('f.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('f.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?FilmALaUne
    //    {
    //        return $this->createQueryBuilder('f')
    //            ->andWhere('f.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
